import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import anjalProfile from "../assets/images/anjal-profile-pic.jpg";
function Contact() {
   const profileLinks = [
      {
         name: "Anjal Sali",
         imgSrc: anjalProfile,
      },
   ];
   return (
      <>
         <div width={100} className="relative group overflow-hidden max-w-xs rounded-xl shadow-lg">
            {profileLinks.map((profile, index) => (
               <div key={index} className="relative">
                  <img className="rounded-t-lg transition-transform group-hover:scale-125 duration-200" src={profile.imgSrc} alt="profile picture" />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-gradient-to-t from-black/80 to-transparent">
                     <div className="text-3xl font-bold text-white mb-5">{profile.name}</div>
                     <div className="flex space-x-4">
                        <a href="#" className="text-white text-lg hover:scale-125 transition duration-300 ease-in-out">
                           <FaLinkedin alt="LinkedIn" size={30} />
                        </a>
                        <a href="#" className="text-white text-lg hover:scale-125 transition duration-300 ease-in-out">
                           <FaGithub alt="GitHub" size={30} />
                        </a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}

export default Contact;
