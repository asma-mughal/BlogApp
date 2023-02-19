import { MongoClient } from 'mongodb';

async function handler(req, res){
  if(req.method === 'POST'){
    const { email, name, message} = req.body;
    if(!email.includes('@') ||
    !name || 
    !name.trim()==='' ||
    !message ||
    !message.trim() === ''|| 
    !email){
     res.status(422).json({
        message: 'Invalid input.'
     })
     return ;
    }
    const newMessage = {
        email,
        message, 
        name
    }
     let client ;
     const connectString= `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.lrbdrug.mongodb.net/?${process.env.mongodb_database}=true&w=majority`;
     try{
     client = await MongoClient.connect(connectString)
     }catch(error){
        console.log(error)
        res.status(500).json({message : 'Could not Connect to Database'})
     }
    
     try{
        const db = await client.db()
        const result = db.collection('messages').insertOne(newMessage)
        newMessage.id = result.insertedId; //automtaiclly generate id
        res.status({message : "Successfully stored Message!", message : newMessage})
     }catch(error){
        res.status(500).json({message : 'Could not store message'})
        console.log(error)
     }
    
    
  }
}
export default handler;