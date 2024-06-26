import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "domain/products/entities/product.entity";

@Entity('order-item')
export class OrderItem {
  @PrimaryColumn()
  orderId: number

  @PrimaryColumn()
  productId: number

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order

  @ManyToOne(() => Product, (product) => product.items)
  product: Product

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;
}