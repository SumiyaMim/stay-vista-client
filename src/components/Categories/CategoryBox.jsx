import { useNavigate, useSearchParams } from "react-router-dom"
import qs from 'query-string'

const CategoryBox = ({ label, icon:Icon, selected }) => {

   const [params, setParams]=  useSearchParams()
   const navigate = useNavigate()
   const handleClick = () => {
    let currentQuery = {}
    if(params){
        currentQuery = qs.parse(params.toString())
        const updateQuery = {...currentQuery, category: label}
        const url = qs.stringifyUrl({
            url: "/",
            query: updateQuery
        })
        navigate(url)
    }
   }
   params.get('category')

  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 cursor-pointer transition ${selected? 'border-b-2 border-black text-black' : 'border-b-2 border-white text-neutral-500'}`}>
      <Icon size={20}/>
      <div className="text-xs font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox
