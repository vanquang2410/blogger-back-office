import { Column, Entity, PrimaryGeneratedColumn ,UpdateDateColumn,CreateDateColumn} from "typeorm";

@Entity({name:'blogs'})
export class Blogs{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    account_id!:number; 

    @Column()
    title:string

    @Column()
    blog_link:string

    @Column()
    display_name:string

    @Column()
    domain:string

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    created_at!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updated_at!: Date;
}