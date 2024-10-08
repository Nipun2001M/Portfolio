// import React from 'react'

// import ContactForm from "./ui/contactform";
// import Contactform from "./ui/contactform";
"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [name, setname] = useState("");
  const [sendermail, setSendermail] = useState("");
  const [message, setMessage] = useState("");


  const resetForm = () => {
    setname("");
    setSendermail("");
    setMessage("");
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Correct spelling of preventDefault
    console.log("called...................");
    // sendEmail()
    const serviceId = "service_s1ueo35";
    const templateId = "template_h2xszfo";
    const publicKey = "1NUHN64Fj4pDgpg_k";

    // Create a new object that contains dynamic template params
    const templateParams = {
      to_name: "Nipun",
      from_name: sendermail,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        
        console.log("Email sent successfully!", response);
        
        resetForm(); 
        
      })
      .catch((error) => {
        console.log("error occured...................");
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="flex flex-col items-center " id="contact">
      <div className="text-4xl mb-10">
        <h1>Contact Me</h1>
      </div>
      {/* <form  className='flex flex-col items-center justify-center'> */}
      {/* <form action="https://formsubmit.co/hhmmnnmm145@gmail.com" method="POST" className='flex flex-col items-center justify-center' > */}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={sendEmail}
      >
        <div className="flex flex-row ">
          <input
            name="name"
            value={name}
            required
            type="text"
            className="h-[3rem] w-[15rem]   text-center bg-blue"
            placeholder="Your Name"
            style={{
              background: "rgb(2,0,36)",
              backgroundColor:
                " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
            }}
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></input>
          <input
            name="email"
            value={sendermail}
            required
            type="email"
            className="h-[3rem] w-[15rem] text-center ml-2"
            style={{
              background: "rgb(2,0,36)",
              backgroundColor:
                " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
            }}
            onChange={(e) => {
              setSendermail(e.target.value);
            }}
            placeholder="Your Email"
          ></input>
        </div>
        <div>
          <input
            name="message"
            value={message}
            required
            type="text"
            className=" mt-10 mb-10 h-[6rem] w-[30.5rem] text-center ml-2"
            style={{
              background: "rgb(2,0,36)",
              backgroundColor:
                " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
            }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Message"
          ></input>
        </div>
        <div>
          <button
            // onClick={(e)=>{sendEmail(e)}}
            type="submit"
            className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

// export default function Contact() {
// async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "f73512b1-dabb-4f8f-b17e-ca35337f0939");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//     });
//     const result = await response.json();
//     if (result.success) {
//         console.log(result);
//     }
// }

// return (
// <>
//   <form onSubmit={handleSubmit}>
//     <input type="text" name="name"/>
//     <input type="email" name="email"/>
//     <textarea name="message"></textarea>
//     <button type="submit">Submit Form</button>
//   </form>
// </>
//   <ContactForm/>
// );
// }
