import { PostsStatusEnum } from "src/common/enum/posts.enum";
import { Column, Entity, PrimaryGeneratedColumn ,UpdateDateColumn,CreateDateColumn} from "typeorm";


@Entity({name:'posts'})
export class Posts{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    title!:string

    @Column()
    html!:string
    
    @Column({type: 'enum',enum:PostsStatusEnum})
    status!:string

    @Column()
    post_link!:string

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    created_at!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updated_at!: Date;

}