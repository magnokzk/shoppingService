import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class ShareRequest {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    list_id!: number

    @Column()
    creator_id!: number

    @Column()
    token!: string

    @Column()
    is_valid!: boolean
}