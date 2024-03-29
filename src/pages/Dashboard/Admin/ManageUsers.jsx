import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { getAllUsers } from "../../../api/bookings"
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow"

const ManageUsers = () => {

  const { data: users=[], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await getAllUsers()
  })
  // console.log(users)

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <Helmet>
        <title>Dashboard | Manage Users</title>
      </Helmet>
      <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* User data table row */}
                  {users && users.map(user => <UserDataRow key={user._id} user={user} refetch={refetch}></UserDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ManageUsers
