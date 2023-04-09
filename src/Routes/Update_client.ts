import express from 'express'
const router=express.Router()
import { FindOneOptions, getManager } from 'typeorm';
import { Client } from '../entities/Client';
router.put('/api/updateclient/:clientId',async(req,res)=>{
    const { clientId } = req.params;
    const entityManager = getManager();
    const client = await entityManager.findOne(Client, {
        where: { id: parseInt(clientId) }
      } as FindOneOptions<Client>);
    if (!client) {
      return res.status(404).json({ message: `Client with id ${clientId} not found` });
    }
    client.First_name = req.body.firstName;
    client.Last_name = req.body.lastName;
    client.email = req.body.email;
    await entityManager.save(client);
    return res.status(200).json(client);
})