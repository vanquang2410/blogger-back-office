import { Injectable } from "@nestjs/common";
import { Accounts } from "src/entity/accounts.entity";
import { DataSource, FindOptionsWhere, Repository } from "typeorm";


@Injectable()
export class AccountsRepository extends Repository<Accounts>{

    constructor(private dataSource:DataSource){
        super(Accounts,dataSource.createEntityManager())
    }

    async findAndCountAccounts():Promise<any>{
        
        return await this.find()
    }
}