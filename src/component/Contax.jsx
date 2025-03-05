
import { Formik, Form, Field } from 'formik';
const Contax = () => {

    const validateUsername = (value) => {
        let error;
        if (!value) {
          error = 'Username is required';
        } else if (value.trim().length < 3) {
          error = 'Username must be at least 3 characters';
        }
        return error;
      };
      const validateEmail = (value) => {
        let error;
        if (!value) {
          error = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = 'Invalid email address';
        }
        return error;
      };
      const validatePhone = (value) => {
        let error;
        if (!value) {
          error = 'Phone is required';
        } else if (!/^\+?[0-9]{7,}$/i.test(value)) {
          // يسمح برقم يبدأ بـ + ويتكون من 7 أرقام على الأقل
          error = 'Invalid phone number';
        }
        return error;
      };

  const validateMessage = (value) => {
    let error;
    if (!value) {
      error = 'Message is required';
    } else if (value.trim().length < 10) {
      error = 'Message must be at least 10 characters';
    }
    return error;
  };
  return (
    <div className='py-10'>
        <div className="max-w-lg mx-auto text-center p-10">
            <h1 className="text-4xl p-10">Contact Us</h1>
            <p className='text-gray-500 text-sm pb-10'>Whether it’s an enquiry about a current order, our flower school or event our team of
                experts are here to help and will respond as soon as possible.</p>
                <div className="flex justify-between text-sm md:text-lg">
                    <p className='pb-10'>
                <span className="text-gray-500">Call:</span> 
                <span className="hover:underline cursor-pointer"> +44 (0) 207 739 1521</span>
                </p>
                <p className='pb-10'>
                <span className="text-gray-500">Email us:</span> 
                <span className="hover:underline cursor-pointer"> 
                info@fiore.com</span>
                </p>
                </div>

                <Formik
        initialValues={{ username: '', email: '', phone: '', message: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="max-w-lg mx-auto ">
            <div className="mb-4">
             
              <Field
                id="username"
                name="username"
                validate={validateUsername}
                placeholder="Enter your username"
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm mt-1">{errors.username}</div>
              )}
            </div>
            <div className="mb-4">
             
              <Field
                id="email"
                name="email"
                validate={validateEmail}
                placeholder="Enter your email"
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              
              <Field
                id="phone"
                name="phone"
                validate={validatePhone}
                placeholder="Enter your phone number"
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>
            <div className="mb-4">
             
              <Field
                as="textarea"
                id="message"
                name="message"
                validate={validateMessage}
                placeholder="Enter your message"
                className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                rows="4"
              />
              {errors.message && touched.message && (
                <div className="text-red-500 text-sm mt-1">{errors.message}</div>
              )}
            </div>
            <button type="submit" className="w-full py-2  border border-black text-black rounded-full hover:border-none hover:bg-[#6A6E49]">
              Submit
            </button>
          </Form>
           )}
      </Formik>
        </div>
    </div>
  )
}

export default Contax