import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { Item } from "./Item"
import { SharedRelation } from "./SharedRelation"
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

    @OneToOne(() => SharedRelation, (shared) => shared.list)
    @JoinColumn({name: 'id', referencedColumnName: 'list_id'})
    shared_relation!: SharedRelation
}