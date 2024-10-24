import React from "react";
import Image from "next/image";
import Phone from "../images/phone.png";
import Mail from "../images/mail.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10" id="contact">
      <div className="container mx-auto px-4 space-y-8">
        {/* Phone and Email Section */}
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-4">
            <li className="flex items-center">
              <Image src={Phone} alt="phone" width={24} height={24} />
              <p className="text-xl ml-2">+92-334-9766-531</p>
            </li>
            <li className="flex items-center">
              <Image src={Mail} alt="mail" width={24} height={24} />
              <p className="text-xl ml-2">namra.talha123@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h2 className="text-2xl font-semibold text-center">Let's Connect</h2>
          <p className="text-center mb-4">Send me a message and let's schedule a call</p>

          <form action="https://getform.io/f/bejjylja" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" className="border rounded px-4 py-2 w-full" required />
              <input type="text" name="lastName" placeholder="Last Name" className="border rounded px-4 py-2 w-full" required />
              <input type="email" name="email" placeholder="Email" className="border rounded px-4 py-2 w-full" required />
              <input type="tel" name="phone" placeholder="Phone" className="border rounded px-4 py-2 w-full" />
            </div>

            <textarea name="message" placeholder="Your Message" rows={4} className="border rounded px-4 py-2 w-full" required></textarea>

            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

