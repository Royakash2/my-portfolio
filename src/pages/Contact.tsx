
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";


const Contact = () => {
  

 

  return (
    <section className="px-6 md:px-12 py-16 container mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Get In Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-12 items-center w-full">
        {/* contact info */}
        <ContactInfo />

        {/*  contact form */}
       <ContactForm/>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
