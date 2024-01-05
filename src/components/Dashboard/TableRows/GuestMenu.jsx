import MenuItem from './MenuItem'
import { MdManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={MdManageHistory} label='My Bookings' address='my-bookings' />
    </>
  )
}

export default AdminMenu