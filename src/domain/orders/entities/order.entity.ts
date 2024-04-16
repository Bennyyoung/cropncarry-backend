import { RegistryDates } from "common/embedded/registry-dates.embedded"
import { OrderStatus } from "../enums/order-status.enum"
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "domain/users/entities/user.entity"
import { Payment } from "domain/payments/payment.entity"
import { OrderItem } from "./order-item.entity"

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT
  })
  status: OrderStatus

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User

  @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
  payment: Payment

  @OneToMany(() => OrderItem, item => item.order, { cascade: true })
  items: OrderItem[]
}
