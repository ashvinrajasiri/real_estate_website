"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    specialist: "",
    date: "",
    time: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const reset = () => {
    formData.firstname = "";
    formData.lastname = "";
    formData.email = "design & branding";
    formData.specialist = "";
    formData.date = "";
    formData.time = "";
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/srajasiri@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        specialist: formData.specialist,
        date: formData.date,
        time: formData.time
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        setLoader(false);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoader(false);
      });
  };

  return (
    <>
      <section className="dark:bg-darkmode lg:pb-24 pb-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-center">
            <div className="col-span-6" data-aos="fade-right">
              <h2 className="max-w-72 text-[40px] leading-[1.2] font-bold mb-9 text-midnight_text dark:text-white">Schedule a Consultation</h2>
              <p className="text-gray text-lg mb-6">Ready to find your dream home? Fill out the form below and I'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="first-name" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">First Name*</label>
                    <input
                      id='firstname'
                      type='text'
                      name='firstname'
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="last-name" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">Last Name*</label>
                    <input
                      id='lastname'
                      type='text'
                      name='lastname'
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                    />
                  </div>
                </div>
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="email" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">Email Address*</label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="Specialist" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">I'm Interested In*</label>
                    <select
                    name="specialist"
                      id="specialist"
                      value={formData.specialist}
                      onChange={handleChange} className="custom-select w-full text-17 px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0">
                      <option value="">Select an option</option>
                      <option value="Buying a Home">Buying a Home</option>
                      <option value="Selling a Property">Selling a Property</option>
                      <option value="Property Valuation">Property Valuation</option>
                      <option value="Investment Properties">Investment Properties</option>
                      <option value="First-Time Home Buyer">First-Time Home Buyer</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="date" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">Preferred Date</label>
                    <input
                       id='date'
                      type='date'
                      name='date'
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full text-17 px-4 rounded-lg  py-2.5 outline-none dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="time" className="pb-3 inline-block text-17 text-midnight_text dark:text-white">Preferred Time</label>
                    <input
                      id='time'
                      type='time'
                      name='time'
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border outline-none dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                    />
                  </div>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <button type="submit" className="bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700">
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-6 h-[600px]" data-aos="fade-left">
              <Image
                src="/images/contact-page/contact.jpg"
                alt="Contact"
                width={1300}
                height={0}
                quality={100}
                className="w-full h-full object-cover bg-no-repeat bg-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
