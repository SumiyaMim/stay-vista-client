import Calender from "./Calender"
import Button from "../Button/Button"
import { formatDistance } from "date-fns"
import { useState } from "react"
import BookingModal from "../Modal/BookingModal"
import useAuth from "../../hooks/useAuth"

const RoomReservation = ({room}) => {

  const {user} = useAuth();
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  } 

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  })

  // total days * price
  const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
  // total price calculation
  const totalPrice = totalDays * room?.price

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name:user?.displayName, 
      email:user?.email, 
      image:user?.photoURL
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  })

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className=" flex items-center gap-1 p-4">
        <div className="text-xl font-bold">${room?.price}</div>
        <div className="text-neutral-600 text-sm">per night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value}/>
      </div>
      <hr />
      <div className="p-4">
        <Button disabled={room.host.email === user.email || room.booked} onClick={() => setIsOpen(true)} label={"Reserve"}/>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-bold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}/>
    </div>
  )
}

export default RoomReservation
