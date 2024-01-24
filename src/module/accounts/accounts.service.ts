import { Injectable } from "@nestjs/common";
import { AccountsRepository } from "./accounts.repository";
import { Like } from "typeorm";


@Injectable()
export class AccountsService{
    constructor(
        private readonly accountsRepository:AccountsRepository
    ){}


    async getAccounts():Promise<any>{
       return await this.accountsRepository.findAndCountAccounts();
    }
    createFilterQuery(filter: object) {
        const filterObject = {};
        Object.keys(filter).map((key) => {
          filterObject[key] = Like(`%${filter[key]}%`);
        });
        return filterObject;
      }
}