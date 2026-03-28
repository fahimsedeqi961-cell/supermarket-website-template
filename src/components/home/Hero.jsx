import HeroImage from "../../assets/HeroImage.jpg"
export default function Hero() {
  return (
    <>
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12 ">

          {/*Text contents */}
          <div className="order-2 md:order-1">

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">FRESH & AFFORDABLE
              <span className="text-green-600"><br />GROCERIES, DELIVERED</span><br />
              TO YOUR DOOR.
            </h1>

            <p
              className="text-lg md:text-xl  mb-8 text-gray-600 max-w-lg ">
              Halal certified produce and everyday essentials delivered straight to your doorstep within hours
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-green-600 shadow-lg text-white font-bold rounded-full cursor-pointer hover:bg-green-700 transition-all transform hover:scale-105">
                Shop Now
              </button>

              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-100 transition-all">
                View Weekly Deals
              </button>


            </div>
          </div>

          {/* Hero Image. */}

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-50 z-0"></div>
              <img
                src={HeroImage}
                alt="Fresh organic vegetables in a basket."
                className="relative z-10  w-full max-w-xl h-auto object-cover drop-shadow-2xl" />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}