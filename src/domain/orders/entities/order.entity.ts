import { RegistryDates } from "common/embedded/registry-dates.embedded"
import { OrderStatus } from "../enums/order-status.enum"
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "domain/users/entities/user.entity"
import { Payment } from "domain/payments/payment.entity"

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
}
