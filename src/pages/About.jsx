import React from "react";

const About = () => {
   const techLinks = [
      { href: "https://html.com/", title: "HTML - The Standard Markup Language for Documents", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      {
         href: "https://www.w3.org/Style/CSS/",
         title: "CSS - The Language for Describing the Presentation of Web Pages",
         imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", title: "JavaScript - MDN Web Docs", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { href: "https://reactjs.org/", title: "React - A JavaScript library for building user interfaces", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },

      {
         href: "https://tailwindcss.com/",
         title: "Tailwind CSS - A utility-first CSS framework for rapidly building custom designs",
         imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },

      { href: "https://git-scm.com/", title: "Git - Distributed Version Control System", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/200px-Git-logo.svg.png" },
      {
         href: "https://github.com/",
         title: "GitHub - Development Platform",
         imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/200px-Octicons-mark-github.svg.png",
      },
   ];

   const apiLinks = [
      { href: "https://rawg.io/", title: "RAWG API - Video Games Database", imgSrc: "https://rawg.io/assets/en/share-vk.png?v=4" },
      { href: "https://dev.twitch.tv/", title: "Twitch API - Developer Resources", imgSrc: "https://dev.twitch.tv/marketing-assets/images/TwitchDev.png" },
   ];

   return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
         <section className="mb-10">
            <h1 className="text-3xl font-bold  mb-4 text-text">Zone of Games</h1>
            <p className="text-lg text-text">
               Welcome to <strong>Zone of Games</strong>, the ultimate platform for exploring and discovering video games across all platforms. We bring together a vast collection of games, alongside
               their live Twitch streams, to offer gamers a unique, interactive experience. Whether you're looking for the latest releases, or classic titles, Zone of Games is your one-stop
               destination.
            </p>
         </section>

         <section className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-text">Our Vision</h2>
            <p className="text-lg text-text">
               Our vision is to revolutionise the way gamers discover and engage with video games. By integrating game details with live streaming content, we provide a comprehensive and immersive
               experience that goes beyond traditional game stores. Zone of Games is not just about purchasing games; it's about becoming part of a vibrant community that shares your passion for
               gaming.
            </p>
         </section>

         <div className="container mx-auto px-4 mb-10">
            <div className="text-center">
               <h2 className="text-3xl font-bold text-text">Technologies Used</h2>
            </div>
            <div className="flex justify-center flex-wrap mt-8 ">
               {techLinks.map((tech, index) => (
                  <div key={index} className="p-2 sm:w-1/4 md:w-1/6 hover:scale-125 transition duration-300 ease-in-out">
                     <a href={tech.href} target="_blank" rel="noopener noreferrer" title={tech.title}>
                        <img width={100} src={tech.imgSrc} alt={tech.title} className="h-20 mx-auto" />
                     </a>
                  </div>
               ))}
            </div>
         </div>

         <div className="container mx-auto px-4 mb-10">
            <div className="text-center">
               <h2 className="text-3xl font-bold text-text">APIs Used</h2>
            </div>
            <div className="flex justify-center flex-wrap mt-8 ">
               {apiLinks.map((tech, index) => (
                  <div key={index} className="p-2 sm:w-1/4 md:w-1/6 hover:scale-125 transition duration-300 ease-in-out">
                     <a href={tech.href} target="_blank" rel="noopener noreferrer" title={tech.title}>
                        <img width={100} src={tech.imgSrc} alt={tech.title} className="h-20 mx-auto" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default About;
