const RoomInfo = ({ room }) => {
    return (
      <div className='col-span-3 lg:col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div className="font-bold text-lg">Hosted by {room?.host?.name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={room?.host?.image}
            />
          </div>
          <div
            className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-normal
                text-neutral-500
                text-base
              '
          >
            <div>{room?.guests} guests</div>
            <div>{room?.bedrooms} rooms</div>
            <div>{room?.bathrooms} bathrooms</div>
          </div>
        </div>
  
        <hr />
        <div
          className='
          text-base md:text-sm lg:text-base font-normal text-neutral-500 text-justify'
        >
          {room?.description}
        </div>
        <hr />
      </div>
    )
  }
  
  export default RoomInfo