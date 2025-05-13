import { connectTODb } from '../db'

export async function GET(){
  // fetch from Mongo Atlas
  const { db } = await connectTODb();
  const products = await db.collection('products').find({}).toArray();

  return new Response(JSON.stringify(products), {
    status: 200, 
    headers: {
      'Content-Type' : 'application/json'
    }
  })
}
