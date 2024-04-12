import { RegistryDates } from "common/embedded/registry-dates.embedded"
import { OrderStatus } from "../enums/order-status.enum"
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "domain/users/entities/user.entity"

@Entity()
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
}
