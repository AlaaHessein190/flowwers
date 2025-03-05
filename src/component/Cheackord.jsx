import { Formik, Form, Field } from 'formik';

const Cheackord = () => {
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Billing email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }

    function validateOrderId(value) {
        let error;
        if (!value) {
          error = 'Order ID is required';
        }
        return error;
      }

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg">
            <h1 className="text-3xl text-center mb-4">Check Order Status</h1>
            <p className="text-xs text-center mb-6">Enter order ID and email as in the order billing address.</p>
              <Formik
                  initialValues={{ orderId: '', email: '' }}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                  }}
                >
                    {({ errors, touched }) => (
                    <Form className='flex flex-col  p-6 md:p-10'>
                      <div className='pb-6'>
                        <label className="text-1xl font-bold">Order ID:</label><br/>
                        <Field name="orderId" validate={validateOrderId} placeholder="  Found in your orderconfirmation email" className="input w-full py-2 border"  />
                        {errors.orderId && touched.orderId && <div className="text-red-500">{errors.orderId}</div>}
                      </div>
                      <div className='pb-10'>
                        <label className="text-1xl font-bold">Billing Email Address:</label><br/>
                        <Field name="email" validate={validateEmail}  placeholder="  Email you used during checkout" className="input w-full py-2 border"  />
                        {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                      </div>
                      <button type="submit" className='w-full py-2 border rounded-full hover:bg-[#6A6E49] hover:text-white'>TRACK</button>
                    </Form>
                  )}
              </Formik>
        </div>
   </div>
  )
}

export default Cheackord;
