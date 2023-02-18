import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { List } from "./List"


@Entity()
export class SharedRelation {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    list_id!: number

    @Column()
    user_id!: number

    @OneToOne(() => List, (list) => list.shared_relation)
    @JoinColumn({name: 'list_id'})
    list!: List
}