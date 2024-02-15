import{r as o,j as e,F as b,c as p}from"./index-4Vuzrcjr.js";const k="/assets/anjal-profile-pic-ad9VuTCk.jpg",f="/assets/adam-profile-pic-r8GUBFa_.png",y="/assets/mihai-profile-pic-OWgsWZ9k.png",j="/assets/chris-profile-pic-CTtwZ-2n.png",v=()=>{const d=[{name:"Anjal Sali",imgSrc:k,linkedInLink:"https://www.linkedin.com/in/anjalsali/",gitHubLink:"https://github.com/anjalsali"},{name:"Adam Riley",imgSrc:f,linkedInLink:"https://www.linkedin.com/in/adampriley/",gitHubLink:"https://github.com/adampriley1"},{name:"Mihai Pirvu",imgSrc:y,linkedInLink:"https://www.linkedin.com/in/mihaidev/",gitHubLink:"https://github.com/pmAdriaan"},{name:"Chris Di Luca",imgSrc:j,linkedInLink:"https://www.linkedin.com/in/chris-di-luca-b519662a9/",gitHubLink:"https://github.com/Revan369"}],i={email:"",subject:"",message:""},[a,l]=o.useState(i),[c,n]=o.useState(!1),r=t=>{const{id:s,value:x}=t.target;l(u=>({...u,[s]:x}))},m=()=>{l(i)},g=t=>{t.preventDefault(),console.log(a),n(!0)},h=()=>{n(!1),m()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto px-4 py-8 text-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-text",children:"Our Team"}),e.jsx("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"At Zone of Games, we believe the heart of our success lies within the collective spirit, talent, and dedication of our team. Our diverse group of professionals brings together a rich tapestry of expertise, backgrounds, and perspectives, united by a common passion for excellence."})]}),e.jsx("div",{className:"flex flex-wrap justify-center grid  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4",children:d.map((t,s)=>e.jsx("div",{className:"relative overflow-hidden max-w-xs rounded-lg shadow-lg group m-5",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{className:"rounded-lg transition-transform group-hover:scale-125 duration-300",src:t.imgSrc,alt:"profile picture"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black/50 to-transparent",children:[e.jsx("div",{className:"text-3xl font-bold text-white mb-5",children:t.name}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:t.gitHubLink,target:"_blank",rel:"noopener noreferrer",className:"text-white  hover:scale-150 transition duration-300 ease-in-out text-lg",children:e.jsx(b,{alt:"GitHub",size:24})}),e.jsx("a",{href:t.linkedInLink,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:scale-150 transition duration-300 ease-in-out text-lg",children:e.jsx(p,{alt:"LinkedIn",size:24})})]})]})]})},s))})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[e.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-text",children:"Contact Us"}),e.jsx("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"Got a technical issue? Want to send feedback about a beta feature? Need details about our Project? Let us know."}),e.jsxs("form",{onSubmit:g,className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:r,className:"shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Enter your Email address",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:a.subject,onChange:r,className:"block p-3 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Let us know how we can help you",required:!0})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Your message"}),e.jsx("textarea",{id:"message",value:a.message,onChange:r,rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a comment...",required:!0})]}),e.jsx("button",{type:"submit",className:"py-3 px-5 text-sm font-bold text-center bg-black text-white hover:bg-navItemColor dark:text-black dark:bg-white rounded-xl dark:hover:bg-navItemColor dark:hover:text-white",children:"Send Message"})]})]}),c&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center",children:e.jsxs("div",{className:"bg-white p-5 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Thank you for contacting us!"}),e.jsx("p",{children:"We will get back to you shortly."}),e.jsx("button",{onClick:h,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300",children:"Close"})]})})]})]})};export{v as default};
