import React from 'react'
import image from '/src/assets/arab1.jpg'
import image2 from '/src/assets/arab2.jpg'
import image3 from '/src/assets/saudia.jpg'
import image4 from '/src/assets/dubai.webp'
import image5 from '/src/assets/qatar.jpg'
import image6 from '/src/assets/kuwait.jpg'
import image7 from '/src/assets/gulf.jpg'



const App = () => {
  return (
    <>
    <header className="text-white body-font bg-blue-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">KhaLeej</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-black hover:text-blue-500 cursor-pointer">Home</a>
      <a className="mr-5 text-black hover:text-blue-500 cursor-pointer">About</a>
      <a className="mr-5 text-black hover:text-blue-500 cursor-pointer">Blogs</a>
      <a className="mr-5 text-black hover:text-blue-500 cursor-pointer">Contact</a>
    </nav>
    <button className="inline-flex items-center  bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-white text-black rounded text-base mt-4 md:mt-0 cursor-pointer">
      Sign Up
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Discover
            </h2>
            <p className="leading-relaxed">
              Learn about the Gulf’s history, culture, and traditions that shape the modern lifestyle of the region.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Experience
            </h2>
            <p className="leading-relaxed">
              Explore authentic Gulf food, fashion, and events that highlight the balance of heritage and innovation.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={5} r={3} />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Connect
            </h2>
            <p className="leading-relaxed">
              Engage with local stories, community insights, and inspiring people from across the Gulf.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Grow
            </h2>
            <p className="leading-relaxed">
              Stay updated with opportunities, trends, and ideas that move the Gulf forward.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Inspire
            </h2>
            <p className="leading-relaxed">
              Our mission is to share meaningful content that connects the Gulf with the world
            </p>
          </div>
        </div>
      </div>
      <img
        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
        src={image7}
        alt="step"
      />
    </div>
  </div>
</section>


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-blue-500 text-xs font-medium tracking-widest">
          Lifestyle & Trends
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          Rooftop hangouts are the new vibe friends,
        </h2>
        <p className="leading-relaxed mb-8">
          Games, and good times all in one place. In the Gulf, it’s about mixing our warm hospitality with modern touches, like brunch spots, cool fashion, and unique cafés. It’s not just about style, it’s about enjoying life, sharing laughs, and keeping culture alive while adding a fresh twist.
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a className="text-indigo-500 inline-flex items-center hover:text-blue-500 cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 hover:text-red-500 cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm hover:text-red-500 cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            6
          </span>
        </div>
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={image2}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              Ahmed Al Mansoori
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              UI DEVELOPER
            </span>
          </span>
        </a>
      </div>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-blue-500 text-xs font-medium tracking-widest">
          Gulf Lifestyle & Culture
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          From traditional coffee gatherings to modern seaside cafés,
        </h2>
        <p className="leading-relaxed mb-8">
        Gulf life blends heritage with new inspirations. Majlis culture, oud fragrances, and modest yet stylish fashion sit alongside beach walks, luxury brunches, and cultural festivals. It’s a mix of timeless traditions and today’s global trends.
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a className="text-indigo-500 inline-flex items-center hover:text-blue-500 cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 hover:text-red-500 cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm hover:text-red-500 cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            6
          </span>
        </div>
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              Muhammad Khalid
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              DESIGNER
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            Gulf Tourism 
          </span>
          <span className="mt-1 text-gray-500 text-sm">19 Sep 2025</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            Exploring Desert Adventures
          </h2>
          <p className="leading-relaxed">
            From thrilling desert safaris to camel rides under golden sunsets, the Gulf offers unforgettable adventures. Modern cities meet endless dunes, giving travelers both tradition and excitement.
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-4 hover:text-blue-500 cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
          Beaches & Islands
          </span>
          <span className="mt-1 text-gray-500 text-sm">20 Sep 2025</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            Beauty of the Gulf 
          </h2>
          <p className="leading-relaxed">
          The Gulf is famous for its crystal-clear waters and soft sandy beaches. From Dubai’s Palm Jumeirah to Qatar’s hidden islands, visitors enjoy relaxation, water sports, and stunning views.
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-4 hover:text-blue-500 cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
               Culture & Landmarks
          </span>
          <span className="text-sm text-gray-500">21 Sep 2025</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            Places of the Gulf
          </h2>
          <p className="leading-relaxed">
          Explore the rich history and culture of the Gulf. Visit grand mosques, heritage villages, colorful souks, and modern landmarks like Burj Khalifa and the Museum of Islamic Art.
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-4 hover:text-blue-500 cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

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

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block w-8 h-8 text-gray-400 mb-8"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
      </svg>
      <h1 className="text-gray-900 font-medium title-font tracking-wider">
        About Us
      </h1>
      <p className="leading-relaxed text-lg">
        At Gulf Innovations, we focus on creating modern solutions that connect tradition with the future. From design and technology to lifestyle and culture, our goal is to deliver experiences that are authentic, innovative, and sustainable.

We believe in quality, creativity, and building trust with our partners and clients across the region. By blending global expertise with Gulf heritage, we help shape projects that inspire communities and move industries forward.
      </p>
      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6" />
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
        MUHAMMAD BIN ZAYED
      </h2>
      <p className="text-gray-500">Senior Product Manager</p>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Have questions or want to learn more about the Gulf? Reach out to us! We are here to help.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 cursor-pointer rounded text-lg">
            Submit
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-blue-500">smit231@gmail.com</a>
          <p className="leading-normal my-5">
            Saylani Mass IT Institue
            <br />
            Universty Town, Peshawar
          </p>
          <span className="inline-flex">
            <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-blue-500 cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-blue-500 cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-blue-500 cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">KhaLeej</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Gulf Air · Travel Banjo · Ride with Lyft · Occupy Spaces · Retro Living · Adaptogen Wellness · Indego Bikes · Convert with Us
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">About Us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Our History</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Leadership</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Careers</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Services
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Projects</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Investments</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Solutions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Partners</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Explore
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Tourism</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Culture and Heritage</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Events</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Travel Guide</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Support
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">News and Media</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">FAQs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-blue-500 cursor-pointer">Contact Us</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-blue-300 ">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black text-sm text-center sm:text-left">
        © 2025 KhaLeej —
        <a
          href="https://twitter.com/khaLeejblogs"
          rel="noopener noreferrer"
          className="text-black ml-1"
          target="_blank"
        >
          @khaleejblogs
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


    </>
  )
}


export default App
