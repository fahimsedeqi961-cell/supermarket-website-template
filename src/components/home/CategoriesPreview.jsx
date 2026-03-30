import CategoryCard from "../products/CategoryCard"
import categoryData from "../../data/products.json"

export default function CategoriesPreview() {
  return (
    <>
      <section className="bg-white py-12 md:py-20">

        <div className="text-center">
          <h3 className="text-gray-800 mb-2">Categories</h3>
          <h2 className="text-2xl font-bold ">Featured <span className="text-green-600">Categories</span></h2>
        </div>

        <div className="flex gap-8 p-10 flex-wrap justify-center">
          {categoryData.categories.map(cat => (
            <CategoryCard
              key={cat.id}
              image={cat.image}
              name={cat.name}
              count={cat.count}
            />
          ))}

        </div>
      </section>
    </>
  )
}