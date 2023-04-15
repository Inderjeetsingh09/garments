


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '₹999',
      newprice: '₹399',
      imageSrc: 'men7.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '₹1499',
      newprice: '₹899',
      imageSrc: 'women7.webp',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '₹999',
      newprice: '₹399',
      imageSrc: 'men8.avif',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '₹1999',
      newprice: '₹1299',
      imageSrc: 'women8.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '₹999',
      newprice: '₹399',
      imageSrc: 'men9.avif',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
      id: 6,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '₹2499',
      newprice: '₹1599',
      imageSrc: 'women9.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
      id: 7,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '₹1299',
      newprice: '₹499',
      imageSrc: 'men13.avif',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '₹1999',
      newprice: '₹1499',
      imageSrc: 'women10.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Discount() {
    return (
<>

<div >
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"></div>

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">DISCOUNT UPTO 60% OFF</h1>

      <div >
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img className="image2"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                   
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <><p ></p>
                
<span class="text-lg font-medium text-gray-900 line-through dark:text-white">{product.price}</span><span class="ml-3 text-lg font-medium">{product.newprice}</span>
</>
              </a>
            ))}
          </div>
        </div>
      </div>

</div>


</>
    )
  }
  