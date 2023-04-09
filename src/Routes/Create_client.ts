import  express, { Router, response }  from "express";
import { Client } from "src/entities/Client";
const router=express.Router();
router.post('/api/Client', async (req,res)=>{
    const {
        FirstName,
        lastname,
        Email
    }=req.body

    const client=Client.create(
        {
            First_name:FirstName,
            Last_name:lastname,
            email:Email

        });
        await client.save();
        return res.json(client)
})
export {
    router as createData
}