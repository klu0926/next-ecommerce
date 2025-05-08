import NotFoundPage from "@/app/not-found"
import { products } from "@/app/product-data"

export default function ProductDetail({params} : {params : {id: string}}){
  const product = products.find(p => p.id === params.id)

  if (!product){
    return <NotFoundPage></NotFoundPage>
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        {/* using a normal 'img' tag instead of next.js 'Image' because we don't know the size of the image we wish to display here */}
        <img className="w-full h-auto rounded-lg shadow-md h-auto max-w-xl" src={'/' + product.imageUrl} alt="product image" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product!.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product!.price}</p>
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{product!.description}</p>
      </div>
    </div>
  )
}