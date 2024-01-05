import MenuItem from '../MenuItem'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import { MdManageHistory } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add Room' address='add-room' />
      <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings' />
      <MenuItem icon={MdManageHistory} label='Manage Bookings' address='manage-bookings' />
    </>
  )
}

export default HostMenu