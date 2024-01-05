import { useEffect, useState } from "react"
import RoomCard from "./RoomCard"
import { useSearchParams } from "react-router-dom"
import Heading from "../Shared/Heading"
import Loader from "../Shared/Loader"
import { getAllRooms } from "../../api/rooms"

const Rooms = () => {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    const [params, setParams]=  useSearchParams()
    const category = params.get('category')

    useEffect(() => {
        setLoading(true)
        getAllRooms().then(data => {        
            if(category){
                const filtered = data.filter(room => room.category === category)
                setRooms(filtered)
                setLoading(false)
            }
            else {
                setRooms(data)
                setLoading(false)
            }
        })
    }, [category])

    if(loading) return <Loader/>

  return (
    <div className="pb-10 pt-12">
        {rooms && rooms.length > 0 ? 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)}
        </div>
        : 
        <div className="flex items-center justify-center min-h-[calc(100vh-370px)]">
            <Heading center={true} title="No rooms available in this category!" subtitle="Please select other categories"></Heading>
        </div>
        }
    </div>
  )
}

export default Rooms
