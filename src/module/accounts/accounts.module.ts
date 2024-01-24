import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from "src/entity/accounts.entity";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";
import { AccountsRepository } from "./accounts.repository";

@Module({
    imports:[
        TypeOrmModule.forFeature([Accounts]),
       
    ],
    controllers:[AccountsController],
    providers:[AccountsService,AccountsRepository],
    exports:[AccountsService,AccountsRepository]
})

export  class AccountsModule{};