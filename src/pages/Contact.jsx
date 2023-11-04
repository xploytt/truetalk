import React, { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import heroBg from "../assets/hero/secondary_hero_bg.jpg";
import "../styles/_contact.scss";
import BlueButton from "../components/BlueButton";

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    heading: "Our Address",
    text: "Northampton, UK",
  },
  {
    icon: FaEnvelope,
    heading: "Our Email",
    text: "contact@truetalkarena.com",
  },
];

function Contact(props) {
  const { updatePage } = useOutletContext();
  const [msgDetails, setMsgDetails] = useState({
    email: "",
    msg: "",
    fullName: "",
  });

  useEffect(() => {
    updatePage("Contact");
  });

  const updateMsgDetails = (e) => {
    const { name, value } = e.target;

    setMsgDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getInTouchStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundPosition: "center center",
  };

  return (
    <>
      <main>
        <section id="get-in-touch-section" style={getInTouchStyle}>
          <div id="get-in-touch-text">
            <h3>Get In Touch</h3>
            <p>
              If you are interested in working with us, please get in touch.
            </p>

            {contactDetails.map(({ icon: Icon, heading, text }) => (
              <div>
                <div className="flex items-center loc-and-email">
                  <Icon /> <h4>{heading}</h4>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div id="contact-form-wrapper" className="">
            <form>
              <label for="name" className="block font-[700]">
                Full name
                <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                placeholder='E.g: "John Doe"'
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                id="name"
                name="fullName"
                value={msgDetails.fullName}
                onChange={(e) => updateMsgDetails(e)}
                required
              />
              <label for="email" className="block font-[700]">
                Email <span className="text-[#ff4d30]">*</span>
              </label>

              <input
                type="email"
                placeholder="youremail@example.com"
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                id="email"
                name="email"
                value={msgDetails.email}
                onChange={(e) => updateMsgDetails(e)}
                required
              />
              <label for="message" className="block font-[700]">
                Tell us about it
                <span className="text-[#ff4d30]">*</span>
              </label>

              <textarea
                id="contact-message"
                rows="6"
                placeholder="Write Here.."
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                name="msg"
                value={msgDetails.msg}
                onChange={(e) => updateMsgDetails(e)}
                required
              ></textarea>

              <BlueButton
                text={"Send Message"}
                styles={`font-[500] block text-[1.25rem] mt-[20px] mb-[20px]`}
                callback={() => {
                  // this function should send messgaes to the backend
                }}
              />
            </form>
          </div>
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default Contact;
