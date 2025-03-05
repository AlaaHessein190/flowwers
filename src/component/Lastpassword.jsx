import { Formik, Form, Field } from 'formik';

const Lastpassword = () => {
    function validateEmail(value) {
        let error;
        if (!value) {
          error = '';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
  return (
    <div className='flex flex-col justify-center items-center py-10 px-4 md:px-10' >
    <h2 className='text-3xl md:text-4xl font-bold pb-20 pt-10'>My Account</h2>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
        {({ errors, touched }) => (
        <Form className='flex flex-col w-full max-w-lg md:w-[600px] md:h-[350px] border border-black  p-6 md:p-10'>
          <div className='pb-10' >
          <p className='text-sm text-gray-800 pb-4'>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <label className="text-1xl font-bold">Email Address:</label><br/>
            <Field name="email" validate={validateEmail}  placeholder="  Email" className="input w-full py-2 border"  />
            {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          
         
          <button type="submit" className='w-full py-2 border rounded-full hover:bg-[#6A6E49] hover:text-white'>Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Lastpassword