import { RegistryDates } from "common/embedded/registry-dates.embedded"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates
}
