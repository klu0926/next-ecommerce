export default async function FetchTest(){

  const response = await fetch(`${process.env.PUBLIC_API_URL}/api/hello`) // fetch from our own backend
  const data = await response.json();
  const message= data.message

  return <h1>{message}</h1>
}