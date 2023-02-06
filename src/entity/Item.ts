import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { List } from "./List"

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    list_id!: number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    checked!: boolean

    @ManyToOne(() => List, (list) => list.items)
    @JoinColumn({name: 'list_id'})
    list!: List
}