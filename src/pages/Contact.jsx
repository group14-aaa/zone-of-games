import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import anjalProfile from "../assets/images/anjal-profile-pic.jpg";
import adamProfile from "../assets/images/adam-profile-pic.png";
import mihaiProfile from "../assets/images/mihai-profile-pic.png";
import chrisProfile from "../assets/images/chris-profile-pic.png";
function Contact() {
   const profileLinks = [
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
         linkedInLink: "https://www.linkedin.com/in/anjalsali/",
         gitHubLink: "https://github.com/anjalsali",
      },
      {
         name: "Adam Riley",
         imgSrc: adamProfile,
         linkedInLink: "https://www.linkedin.com/in/adampriley/",
         gitHubLink: "https://github.com/adampriley1",
      },
      {
         name: "Mihai Pirvu",
         imgSrc: mihaiProfile,
         linkedInLink: "https://www.linkedin.com/in/mihaidev/",
         gitHubLink: "https://github.com/pmAdriaan",
      },
      {
         name: "Chris Di Luca",
         imgSrc: chrisProfile,
         linkedInLink: "https://www.linkedin.com/",
         gitHubLink: "https://github.com/Revan369",
      },
   ];

   const initialState = {
      email: "",
      subject: "",
      message: "",
   };

   const [formData, setFormData] = useState(initialState);

   const [showThankYouModal, setShowThankYouModal] = useState(false);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [id]: value,
      }));
   };

   const resetForm = () => {
      setFormData(initialState);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setShowThankYouModal(true);
   };

   const handleCloseModal = () => {
      setShowThankYouModal(false);
      resetForm();
   };

   return (
      <>
         <div className="mx-auto px-4 py-8 text-center">
            <div className="text-center">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-text">Our Team</h2>
            </div>
            <div className="flex flex-wrap justify-center grid  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
               {profileLinks.map((profile, index) => (
                  <div key={index} className="relative overflow-hidden max-w-xs rounded-lg shadow-lg group m-5">
                     <div className="relative">
                        <img className="rounded-lg transition-transform group-hover:scale-125 duration-300" src={profile.imgSrc} alt="profile picture" />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                           <div className="text-3xl font-bold text-white mb-5">{profile.name}</div>
                           <div className="flex space-x-4">
                              <a href={profile.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-white  hover:scale-150 transition duration-300 ease-in-out text-lg">
                                 <FaGithub alt="GitHub" size={24} />
                              </a>
                              <a href={profile.linkedInLink} target="_blank" rel="noopener noreferrer" className="text-white hover:scale-150 transition duration-300 ease-in-out text-lg">
                                 <FaLinkedin alt="LinkedIn" size={24} />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-text">Contact Us</h2>
               <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
               </p>
               <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your Email address"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                     </label>
                     <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                     />
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message
                     </label>
                     <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                        required
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="py-3 px-5 text-sm font-bold text-center bg-black text-white hover:bg-navItemColor dark:text-black dark:bg-white rounded-xl dark:hover:bg-navItemColor dark:hover:text-white"
                  >
                     Send Message
                  </button>
               </form>
            </div>
            {showThankYouModal && (
               <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                     <h3 className="text-lg font-bold">Thank you for contacting us!</h3>
                     <p>We will get back to you shortly.</p>
                     <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                        Close
                     </button>
                  </div>
               </div>
            )}
         </section>
      </>
   );
}

export default Contact;
