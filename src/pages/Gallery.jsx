import React from 'react'
import image3 from '/src/assets/saudia.jpg'
import image4 from '/src/assets/dubai.webp'
import image5 from '/src/assets/qatar.jpg'
import image6 from '/src/assets/kuwait.jpg'

function Gallery() {
  return (
    <div>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Gulf Beautiful Pics & Photography
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Capture the magic of the Gulf through stunning photography. From golden deserts to modern skylines, every picture tells a story. The turquoise beaches, shining mosques, and colorful souks create perfect moments for photographers. Whether it’s sunrise over the dunes or night lights in Dubai, the Gulf is a paradise for beautiful pictures.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image3}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Saudia Arabia
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Ancient Beauty
                </h2>
                <p className="leading-relaxed text-base">
                Golden rock formations and historic tombs tell stories from thousands of years ago.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image4}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Dubai
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Island Wonder
                </h2>
                <p className="leading-relaxed text-base">
                  A man-made island shaped like a palm, perfect for photos and luxury stays.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image5}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Qatar
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  The Pearl Qatar
                </h2>
                <p className="leading-relaxed text-base">
                  Luxury Living An artificial island with yachts, cafes, and stunning waterfront views.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image6}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Kuwait
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Modern Marvels
                </h2>
                <p className="leading-relaxed text-base">
                  A blend of tradition and innovation, showcasing stunning architecture and vibrant culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
  )
}

export default Gallery
