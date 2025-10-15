
import React from "react";
import { Metadata } from "next";
import ContactInfo from "@/app/components/contact/contact-info";
import ContactForm from "@/app/components/contact/form";

export const metadata: Metadata = {
  title: "Contact Rajasiri Sinnarajah | Toronto Real Estate Agent",
  description: "Get in touch with Rajasiri Sinnarajah for all your real estate needs in the Greater Toronto Area. Schedule a consultation today.",
};

const page = () => {
  return (
    <main className="bg-white dark:bg-darkmode pt-32">
      {/* Contact Form Section - Above the fold */}
      <ContactForm />

      {/* Contact Info Section - Below the form */}
      <ContactInfo />
    </main>
  );
};

export default page;
