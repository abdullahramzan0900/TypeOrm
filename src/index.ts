import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
import  express  from "express";
import { createData } from "./Routes/Create_client";
import {deleteClient} from './Routes/Delete_client'
const app=express();


console.log('running our system.....!');    
const main=async ()=>{
    try{

        const connection =await createConnection({
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'abdullah',
            password:undefined,
            database:'aaa' ,
            entities:[Client],
            synchronize:true

             // name of the database
            
        })
        app.use(express.json())
        app.listen(8080,()=>{
            console.log("running on por 8080")
        })
        app.use(createData);
        app.use(deleteClient);
        
    }
    catch(error){
        console.log('connection failed')
    }
    }
    main();

// this is the main fucntion inorder to coneect with tyeorm

