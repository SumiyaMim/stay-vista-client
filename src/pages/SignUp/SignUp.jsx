import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { imageUpload } from '../../api/utils';
import useAuth from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {

  const { createUser, updateUserProfile, signInWithGoogle, loading, logOut } = useAuth();
  const navigate = useNavigate();

  // handle sign up
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password)
    const image = form.image.files[0];
    // console.log(image)

    try {
      // 1. upload image
      const imageData = await imageUpload(image)
      // console.log(imageData)

      // 2. create user
      const result = await createUser(email, password)

      // 3. update profile
      await updateUserProfile(name, imageData?.data?.display_url)

      // 4. save user data in database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)

      // 5. get token
      await getToken(result?.user?.email)
      toast.success('Create Account Successfully')
      logOut()
      navigate('/login');
    }
    catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // handle google sign up
  const handleGoogleSignUp = async () => {
    try {
      // 1. sign up with google
      const result = await signInWithGoogle()

      // 2. save user data in database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)

      // 3. get token
      await getToken(result?.user?.email)
      toast.success('Create Account Successfully')
      navigate('/');
    }
    catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen py-10'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='mb-3 text-3xl font-bold'>Register</h1>
          <p className='text-sm text-gray-400'>Welcome to StayVista</p>
        </div>
        <form 
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter your email here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className="animate-spin m-auto"/> : 'Continue'}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Register with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignUp} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
