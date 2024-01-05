import { useSearchParams } from "react-router-dom"
import { categories } from "./CategoriesData"
import CategoryBox from "./CategoryBox"

const Categories = () => {

  const [params, setParams]=  useSearchParams()
  const category = params.get('category')
  // console.log(category)

  return (
    <div className="flex items-center justify-between py-5 overflow-x-auto">
      {categories.map(item => <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category === item.label}></CategoryBox>)}
    </div>
  )
}

export default Categories
