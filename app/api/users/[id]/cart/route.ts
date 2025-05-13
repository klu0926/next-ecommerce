import { NextRequest } from "next/server";
import { products } from "@/app/product-data";


type ShoppingCart = Record<string, string[]>

// ts Record is a simpler way to define an object with key
// instead of 
// type ShoppingCart = {
//   [key: string]: string[]
// }

// [key: string] means I don't know the name of the key, but it's a string
 
const carts : ShoppingCart = {
  '1': ['123', '234'],
  '2': ['345', '456'],
  '3': ['234']
}

type Params = {
  id: string;
}

export async function GET(request: NextRequest, {params}: {params : Params}){
  const userId = params.id
  const productIds = carts[userId]

  if (productIds === undefined){
    return new Response(JSON.stringify([]), {
      status: 200, 
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  const cartProducts = productIds.map(id => products.find(p => p.id === id))

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}


type CartBody = {
  productId : string
}

export async function POST(request: NextRequest, {params}: {params: Params}) {
  const userId = params.id
  const body: CartBody = await request.json()
  const productId = body.productId

  // if userId exist, concat product id
  // if not create an new array with product id
  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId]
  const cartProducts = carts[userId].map(id => products.find(p => p.id === id))

  return new Response(JSON.stringify(cartProducts), {
    status: 201, 
    headers: {
      "Content-Type": "application/json"
    }
  })
}


export async function DELETE(request : NextRequest, {params} : {params: Params}){
  const userId = params.id
  const body: CartBody = await request.json()
  const productId = body.productId

  // Remove productId 
   carts[userId] = carts[userId] ? carts[userId].filter(pId => pId !== productId) : [] 
  
   // Get products
  const cartProducts = carts[userId].map(id => products.find(p => p.id === id))
  
  return new Response(JSON.stringify(cartProducts), {
    status: 202, // 202 accepted
    headers: {
      "Content-Type": "application/json"
    }
  })
}