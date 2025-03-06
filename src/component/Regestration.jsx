import * as Yup from "yup";
import { useState } from "react";
import { imaees } from "../assets";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { MdErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const Registration = ({ onClose }) => {
  const [firebaseError, setFirebaseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succMessg, setSuccMasseg] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(7, "Must be between 7 to 15 characters")
        .max(15, "Must be 15 characters or less"),
        
      email: Yup.string()
        .email("Invalid email address"),
        
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      repassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      
      const { name, email, password } = values;
      setLoading(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed up successfully
          updateProfile(auth.currentUser, { displayName: name });
          setSuccMasseg("Account Created Successfully!");
          resetForm();
          
          setTimeout(() => {
            onClose();
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          if (error.code.includes("auth/email-already-in-use")) {
            setFirebaseError("Email Already In Use, Try another one");
          } else {
            setFirebaseError("An error occurred. Please try again.");
          } 
        
        });
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-300 p-8 rounded shadow-lg relative text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          X
        </button>
        <img src={imaees} alt="" className="w-[150px] mx-auto pb-3" />
        <p className="text-sm pb-10">
          Join our newsletter for local food news, recipes, and more.
        </p>
        
        <form onSubmit={formik.handleSubmit}>
          {/* حقل الاسم */}
          <div className="relative w-[300px] mb-4 mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="on"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className="border-b w-full py-1 rounded-md focus:outline-none pr-10"
            />
            {formik.touched.name && formik.errors.name ? (
              <>
                <div className="absolute top-4 right-0 transform -translate-y-1/2 pr-2 text-red-500 pointer-events-none">
                  <MdErrorOutline />
                </div>
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
              </>
            ) : (
              formik.touched.name &&
              !formik.errors.name && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2 text-green-500 pointer-events-none">
                  <FaCheck />
                </div>
              )
            )}
          </div>

          {/* حقل البريد الإلكتروني */}
          <div className="relative w-[300px] mb-4 mx-auto">
            <input
              type="text"
              name="email" 
              placeholder="Enter Your Email"
              autoComplete="on"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="border-b w-full py-1 rounded-md focus:outline-none pr-10"
            />
            {formik.touched.email && formik.errors.email ? (
              <>
                <div className="absolute top-4 right-0 transform -translate-y-1/2 pr-2 text-red-500 pointer-events-none">
                  <MdErrorOutline />
                </div>
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              </>
            ) : (
              formik.touched.email &&
              !formik.errors.email && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2 text-green-500 pointer-events-none">
                  <FaCheck />
                </div>
              )
            )}
          </div>

          {/* حقل كلمة المرور */}
          <div className="relative w-[300px] mb-4 mx-auto">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              autoComplete="on"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="border-b w-full py-1 rounded-md focus:outline-none pr-10"
            />
            {formik.touched.password && formik.errors.password ? (
              <>
                <div className="absolute top-4 right-0 transform -translate-y-1/2 pr-2 text-red-500 pointer-events-none">
                  <MdErrorOutline />
                </div>
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              </>
            ) : (
              formik.touched.password &&
              !formik.errors.password && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2 text-green-500 pointer-events-none">
                  <FaCheck />
                </div>
              )
            )}
          </div>

          {/* حقل تأكيد كلمة المرور */}
          <div className="relative w-[300px] mb-4 mx-auto">
            <input
              type="password"
              name="repassword"
              placeholder="Confirm Your Password"
              autoComplete="on"
              onChange={formik.handleChange}
              value={formik.values.repassword}
              onBlur={formik.handleBlur}
              className="border-b w-full py-1 rounded-md focus:outline-none pr-10"
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <>
                <div className="absolute top-4 right-0 transform -translate-y-1/2 pr-2 text-red-500 pointer-events-none">
                  <MdErrorOutline />
                </div>
                <div className="text-red-500 text-xs mt-1">{formik.errors.repassword}</div>
              </>
            ) : (
              formik.touched.repassword &&
              !formik.errors.repassword && (
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2 text-green-500 pointer-events-none">
                  <FaCheck />
                </div>
              )
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 border rounded-full hover:bg-[#6A6E49] hover:text-white"
          >
            {loading ? "Processing..." : "SUBSCRIBE"}
          </button>
          {succMessg && <p className="text-green-600 mt-2">{succMessg}</p>}
          {firebaseError && <p className="text-red-600 mt-2">{firebaseError}</p>}
        </form>
        <p className="text-xs pt-3">
          * By completing this form you are signing up to receive Ferme emails and can
          <br />unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Registration;
