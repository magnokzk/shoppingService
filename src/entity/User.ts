import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { List } from "./List"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    email!: string

    @Column({select: false})
    password!: string

    @OneToMany(() => List, (list) => list.user)
    @JoinColumn({name: 'creator_id'})
    lists!: List[]
}