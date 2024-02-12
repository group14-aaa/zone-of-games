import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import anjalProfile from "../assets/images/anjal-profile-pic.jpg";
function Contact() {
   const profileLinks = [
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
      },
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
      },
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
      },
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
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
                        <img className="rounded-lg transition-transform group-hover:scale-150 duration-200" src={profile.imgSrc} alt="profile picture" />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                           <div className="text-3xl font-bold text-white mb-5">{profile.name}</div>
                           <div className="flex space-x-4">
                              <a href="#" className="text-white text-lg">
                                 <FaLinkedin alt="LinkedIn" size={24} />
                              </a>
                              <a href="#" className="text-white text-lg">
                                 <FaGithub alt="GitHub" size={24} />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}

export default Contact;
