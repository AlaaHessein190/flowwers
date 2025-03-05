


import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';


const Myaccoun = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  
  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (value.length < 12) {
      error = 'Password must be at least 12 characters long';
    }
    return error;
  }
  return (
    <div className="container mx-auto  py-10">
    <div className="flex justify-center items-center pb-10">
      <h1 className="text-4xl">My Account</h1>
    </div>
    <div className='grid grid-cols-1 mdl:grid-cols-2  gap-10 '>
    <div>
      <h2 className='text-2xl font-bold py-4 text-center '>Login</h2>
      <Formik
       initialValues={{
        
         email: '',
         password:'',
         remember: false,
       }}
       onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
     >
       {({ errors, touched }) => (
         <Form className='flex flex-col w-full max-w-md mx-auto  border border-black gap-10 p-10'>
         
 
           <div>
             <label className="text-1xl font-bold">Email Address:</label><br/>
             <Field name="email" validate={validateEmail}  placeholder="  Email" className="input w-full py-2 border" />
             {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
           </div>
           <div>
             <label className="text-1xl font-bold">Password:</label><br/>
             <Field name="password" validate={validatePassword} placeholder="  password"className="input py-2 w-full border" />
             {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
           </div>



           <div className="flex ">
             <Field type="checkbox" name="remember" className="mr-2" />
             <label className="text-1xl font-bold">Remember me</label>
             
           </div>
           <button type="submit" className='w-full py-2 border rounded-full hover:bg-[#6A6E49] hover:text-white'>Submit</button>
           

            <Link to="/lastpassword" className='text-center text-gray-600 hover:text-black'>Lost your password?</Link>
         </Form>

       )}
     </Formik>
    </div>
      <div >
      <h2 className='text-2xl font-bold py-4 text-center '>Register</h2>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
          {({ errors, touched }) => (
          <Form className='flex flex-col w-full max-w-md mx-auto  border border-black  p-10'>
            <div className='pb-10' >
              <label className="text-1xl font-bold">Email Address:</label><br/>
              <Field name="email" validate={validateEmail}  placeholder="  Email" className="input w-full py-2 border"  />
              {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <p className='text-sm text-gray-800 pb-4'>A link to set a new password will be sent to your email address.</p>
            <p className='text-xs text-gray-800 pb-4'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to="/privcay" className='text-[#6A6E49] cursor-pointer'>Privacy policy.</Link> </p>
            <button type="submit" className='w-full py-2 border rounded-full hover:bg-[#6A6E49] hover:text-white'>Submit</button>
          </Form>
        )}
        </Formik>
      </div>
    </div> 
    </div>
  )
}

export default Myaccoun