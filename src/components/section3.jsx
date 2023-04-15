
import { Modal } from "flowbite"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    name: 'lilli dress',
    href: '#',
    imageSrc: "newarrival.webp",
    imageAlt: "dress",
    price: '₹2999',
    color: 'white',
  },


  {
    id: 2,
    name: 'T-shirt',
    href: '#',
    imageSrc: "men2.avif",
    imageAlt: "t-shirt",
    price: '₹499',
    color: 'Faded-peach',
  },

  {
    id: 3,
    name: 'zebra print',
    href: '#',
    imageSrc: "men5.webp",
    imageAlt: "t-shirt",
    price: '₹499',
    color: 'black_white',
  },
  {
    id: 4,
    name: 'wine dress',
    href: '#',
    imageSrc: "women13.avif",
    imageAlt: "t-shirt",
    price: '₹999',
    color: 'wine',
  },
  // More products...
]

export default function Newarrivals() {
  return (

  <>
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">NEW ARRIVALS</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              





              <>
            
                
<Link to="/lilli">
<img  className="image"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                
                 
/>
</Link>

</>





                


              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



<video class="w-full" controls>
  <source src="production ID_3917742.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>


</>
  )
}
