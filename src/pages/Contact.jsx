import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import anjalProfile from "../assets/images/anjal-profile-pic.jpg";
import adamProfile from "../assets/images/adam-profile-pic.png";
import mihaiProfile from "../assets/images/mihai-profile-pic.png";
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
         name: "Anjal Sali",
         imgSrc: anjalProfile,
         linkedInLink: "https://www.linkedin.com/in/anjalsali/",
         gitHubLink: "https://github.com/anjalsali",
      },
   ];
   return (
      <>
         <div className="mx-auto px-4 py-8 text-center">
            <div className="text-center">
               <h2 className="text-5xl font-bold text-text">Our Team</h2>
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

         <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
               <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
               </p>
               <form action="#" className="space-y-8">
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
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
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                     Send message
                  </button>
               </form>
            </div>
         </section>
      </>
   );
}

export default Contact;
