import 'reflect-metadata'
import { Controller, Get, Injectable, Post, Req, Res } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { AccountsRepository } from "./accounts.repository";
import { DataTableQuery } from "src/shared/decorators/datatable_query.decorator";
import { query,Request,Response } from "express";



@Controller('accounts')
export class AccountsController{
    constructor(
        private readonly accountsService:AccountsService,
        private readonly accountsRepository:AccountsRepository
    ){}
    @Get('/api')
    async getAccounts(
       @Res() res:Response,
    ){
        const data= await this.accountsService.getAccounts();
        return res.json({
            data:data
        })
    }
    

    @Post('/api')
    async addAccount(
        @Res() res:Response,
        @Req() req:any
    ){
        
    }

}