
// Using Next.js don't need to install dotenv to use provess.env varaibles
import { MongoClient,Db, ServerApiVersion } from 'mongodb';

// keep connection
let cachedClient: MongoClient | null = null
let cachedDb : Db | null = null

export async function connectTODb(){
  if (cachedClient && cachedDb){
    return {client: cachedClient, db: cachedDb}
  }

// username and password
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.iqkocd4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log('-------------')
console.log('url:', uri)

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

  await client.connect()

  // once connected, cached them
  cachedClient = client
  cachedDb = client.db('ecommerce-nextjs')

  return {client, db:client.db('ecommerce-nextjs')}
}

