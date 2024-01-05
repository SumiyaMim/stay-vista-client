import { useLoaderData } from "react-router-dom"
import Container from "../../components/Shared/Container"
import { Helmet } from "react-helmet-async"
import Header from "../../components/RoomDetails/Header"
import RoomInfo from "../../components/RoomDetails/RoomInfo"
import RoomReservation from "../../components/RoomDetails/RoomReservation"

const RoomDetails = () => {

    const room = useLoaderData()

  return (
    <Container>
        <Helmet>
            <title>{room?.title}</title>
        </Helmet>
      <div>
        <div className="flex flex-col gap-6"><Header room={room}></Header></div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-y-5 md:gap-10 lg:gap-14 my-10">
          <RoomInfo room={room}></RoomInfo>
          <div className="col-span-4 lg:col-span-3 order-first md:order-last">
            <RoomReservation room={room}></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RoomDetails
