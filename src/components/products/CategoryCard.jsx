
export default function CategoryCard({ image, name, count }) {
  return (
    <>
      <div className="flex flex-col group items-center cursor-pointer">
        {/* icon container */}
        <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors duration-300">
          <img
            src={image}
            alt={name}
            className="w-18 h-18 rounded-full object-fill transform group-hover:scale-110 transition-transform duration-300 "
          />

        </div>
        {/* Category details  */}

        <div className="mt-4 text-center">
          <h3 className="text-lg text-gray-900 font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{count} Products</p>

        </div>


      </div>
    </>
  )
}