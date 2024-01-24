import { AccountsStatusEnum } from "src/common/enum/accounts.enum";
import { Entity ,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";



@Entity({name:'accounts'})
export class Accounts{
    @PrimaryGeneratedColumn({ type: 'int', generated: 'increment' })
    id!: number;


    @Column()
    email!:string;

    @Column()
    password!:string

    @Column()
    cookie!:string

    @Column()
    theme_name!:string

    @Column({type: 'enum', enum:AccountsStatusEnum,default:AccountsStatusEnum.ACTIVE})
    status!:string

    @Column({ name: 'created_at' })
    @CreateDateColumn()
    created_at!: Date;

    @Column({ name: 'updated_at' })
    @UpdateDateColumn()
    updated_at!: Date;
}