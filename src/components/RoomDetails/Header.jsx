import Heading from '../Shared/Heading'

const Header = ({ room }) => {
  return (
    <>
      <Heading title={room.title} subtitle={room.location} />
      <div className='w-full md:h-[65vh] overflow-hidden rounded-xl'>
        <img
          className='object-center w-full h-full'
          src={room.image}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header