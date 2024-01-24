import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";


@Entity({name:'blog_spots'})
export class BlogSpots{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    blog_id:number

    @Column()
    post_id:number

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    created_at!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updated_at!: Date;
}