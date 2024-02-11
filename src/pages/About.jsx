import React from "react";

const About = () => {
   const techLinks = [
      { href: "https://www.w3.org/html/", title: "HTML - The Standard Markup Language for Documents", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      {
         href: "https://www.w3.org/Style/CSS/",
         title: "CSS - The Language for Describing the Presentation of Web Pages",
         imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
         href: "https://tailwindcss.com/",
         title: "Tailwind CSS - A utility-first CSS framework for rapidly building custom designs",
         imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      { href: "https://reactjs.org/", title: "React - A JavaScript library for building user interfaces", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
   ];

   return (
      <div className="max-w-4xl mx-auto px-4 py-8">
         <section className="mb-10">
            <h1 className="text-3xl font-bold text-center mb-4 text-text">About Zone of Games</h1>
            <p className="text-lg text-text">
               Welcome to <strong>Zone of Games</strong>, the ultimate platform for exploring and discovering video games across all platforms. We bring together a vast collection of games, alongside
               their live Twitch streams, to offer gamers a unique, interactive experience. Whether you're looking for the latest releases, or classic titles, Zone of Games is your one-stop
               destination.
            </p>
         </section>

         <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-text">Our Vision</h2>
            <p className="text-lg text-text">
               Our vision is to revolutionise the way gamers discover and engage with video games. By integrating game details with live streaming content, we provide a comprehensive and immersive
               experience that goes beyond traditional game stores. Zone of Games is not just about purchasing games; it's about becoming part of a vibrant community that shares your passion for
               gaming.
            </p>
         </section>

         <div className="container mx-auto px-4">
            <div className="text-center">
               <h2 className="text-4xl font-bold text-text">Our technologies</h2>
               <h4 className="mt-4 text-lg text-text">
                  Our products are built on top of modern frameworks. Having the coded and the designed versions for the same framework, your designers and developers will talk the same language.
               </h4>
            </div>
            <div className="flex justify-center flex-wrap mt-8">
               {techLinks.map((tech, index) => (
                  <div key={index} className="p-2 sm:w-1/4 md:w-1/6">
                     <a href={tech.href} target="_blank" rel="noopener noreferrer" title={tech.title}>
                        <img width={100} src={tech.imgSrc} alt={tech.title} className="h-20 mx-auto" />
                     </a>
                  </div>
               ))}
            </div>
         </div>

         <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-text">Features</h2>
            <ul className="list-disc pl-5 text-lg text-text">
               <li>Extensive Game Catalog: From blockbuster titles to indie releases, explore games from all genres and platforms.</li>
               <li>Live Twitch Streams: Watch live gameplay and streams directly within game pages to see the action as it happens.</li>
               <li>Detailed Game Information: Get access to game details, reviews, ratings, and more to help you make informed decisions.</li>
               <li>Community Engagement: Join discussions, share your gameplay experiences, and connect with other gamers within our community forums.</li>
               <li>Regular Updates: Stay up-to-date with the latest game releases and streaming content, ensuring you never miss out on new gaming adventures.</li>
            </ul>
         </section>
      </div>
   );
};

export default About;
