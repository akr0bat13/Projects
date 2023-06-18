import FormRaw from '../../components/FormRow'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { updateUser } from '../../features/users/userSlice'

const Profile = () => {

  const {user, isLoading} = useSelector( (store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || null,
    email: user?.email || null,
    lastName: user?.lastName || null,
    location: user?.location || null,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, lastName, email, location} = userData
    if (!name || !email || !lastName || !location) {
      toast.error('please fill all the fields')
      return
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (event) => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    setUserData({...userData, [name]: value})
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRaw type='text' name='name' value={userData.name} handleChange={handleChange} />
          <FormRaw type='text' name='lastName' labelText='last name' value={userData.lastName} handleChange={handleChange} />
          <FormRaw type='email' name='email' value={userData.email} handleChange={handleChange} />
          <FormRaw type='text' name='location' value={userData.location} handleChange={handleChange} />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile