export async function GET(){

  return new Response(JSON.stringify({
    message:'Hello from my Hello route API'
  }),{
    status: 200
  })
}


export async function POST(){
  return new Response(JSON.stringify({    
    message: 'Thank you for Posting on my hello route API'
  }),{
    status: 200
  })
}