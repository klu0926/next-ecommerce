import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

type Params = {
  id : string;
}

export async function GET(request : NextRequest, {params} : {params : Params}){
  const productId = params.id

  // connect to mongo db
  const {db} = await connectToDb()
  const product = await db.collection('products').findOne({id: productId})

  if (!product){
    return new Response('Product not found!',  {
      status: 404,
    })
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application.json"
    }
  })

}