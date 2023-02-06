import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { Item } from "./Item"
import { User } from "./User"

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    creator_id!: number

    @Column()
    title!: string

    @Column()
    description!: string

    @OneToMany(() => Item, (item) => item.list)
    @JoinColumn({name: 'item_id'})
    items!: Item[]

    @ManyToOne(() => User, (user) => user.lists)
    @JoinColumn({name: 'creator_id'})
    user!: User
}