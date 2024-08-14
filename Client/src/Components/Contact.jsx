import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    if (!form.name) {
      toast.error("Name is required.");
      isValid = false;
    } else if (form.name.length < 2) {
      toast.error("Name must be at least 2 characters long.");
      isValid = false;
    }

    if (!form.email) {
      toast.error("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Email address is invalid.");
      isValid = false;
    }

    if (!form.message) {
      toast.error("Message is required.");
      isValid = false;
    } else if (form.message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_70lagtt",
        "template_v9iz6sk",
        {
          from_name: form.name,
          to_name: "OG",
          from_email: form.email,
          to_email: "nikhillohra99@gmail.com",
          message: form.message,
        },
        "NBNHhhziFih_ke_PR"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. We will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section ref={ref} {...props} id="contact" className="contact-section">
      <div className="contact-form-container flex items-center justify-center py-4 px-2 my-4">
        <div className="text-start gcontact contact-content flex-wrap mt-20">
          <h1 className="text-3xl font-medium text-[#362f14] m-1 p-1">GET IN TOUCH!</h1>
          
          <div className="contact-form-wrapper justify-center items-center flex flex-col md:flex-row w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form flex flex-col p-4 space-y-4"
            >
              <label className="block ">
                <span className="text-slate-800 font-medium text-sm p-1">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your good name?"
                  className="w-full py-3 px-3 text-slate-900 rounded-lg border border-gray-300 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-slate-800 font-medium text-sm p-1">Email:</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email address?"
                  className="w-full py-3 px-3 text-slate-900 rounded-lg border border-gray-300 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-slate-800 font-medium text-sm p-1">Message:</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="w-full py-3 px-3 text-slate-900 rounded-lg border border-gray-300 outline-none"
                />
              </label>
              <div className="flex justify-start items-center mt-4">
                <button
                  className="btn py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-5 md:ml-6 ">
              <img
                width={240}
                height={100}
                className="contact-image mix-blend-multiply opacity-80"
                src="./contact3.webp"
                alt="Contact"
              />
            </div>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <h2 className="text-sm text-[#312c2c] font-normal text-center p-1 m-2">
            *We'll get back to you as soon as possible. Thank you for reaching out!
          </h2>
        </div>
      </div>
    </section>
  );
});

export default Contact;
