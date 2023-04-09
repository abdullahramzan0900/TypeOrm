import express, { response } from 'express'
import {Client} from '../entities/Client'
const router=express.Router()

router.delete('/api/clientdel/:clientId',async (req,res)=>{
    const {clientId}=req.params;
    const resposne=await Client.delete(parseInt(clientId));
    return res.json(response);

})
export {router as deleteClient}

