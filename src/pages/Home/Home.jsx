import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {

  return (
    <Container>
      <Helmet>
            <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </Container>
  )
}

export default Home
