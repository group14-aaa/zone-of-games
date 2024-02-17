import{r as a,j as e,L as t}from"./index-rn5uDv-x.js";import{t as o}from"./twitchApi-0kZE963n.js";function i(){const[r,c]=a.useState([]);a.useEffect(()=>{l()},[]);const l=async()=>{try{const s=await o.getTwitchTopGames;c(s.data.data)}catch(s){console.error("Error fetching top games list from Twitch:",s)}};return e.jsxs("div",{className:"p-5",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-400 mb-4 mt-6 text-center",children:"Top Games Streaming on Twitch"}),e.jsx("div",{className:"flex flex-wrap -mx-4",children:r.map(s=>e.jsx("div",{className:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4",children:e.jsxs("div",{className:"bg-secondary p-4 rounded-md h-full",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-400 mb-2 overflow-ellipsis h-16",children:s.name}),e.jsx(t,{to:`/streams/${s.id}`,children:e.jsx("img",{src:s.box_art_url.replace("{width}","300").replace("{height}","400"),alt:s.name,className:"w-full h-48 object-cover rounded-md mb-2"})})]})},s.id))})]})}const m=()=>e.jsxs("div",{className:"grid grid-cols-4",children:[e.jsxs("div",{className:"bg-secondary text-text h-full hidden md:block",children:[e.jsx(t,{to:"/streams/",children:e.jsx("div",{className:"p-5 hover:bg-accent hover:text-white ",children:e.jsx("h2",{className:"text-2xl font-bold",children:"Top Games Streaming"})})}),e.jsx(t,{to:"/streams/most-viewed",children:e.jsx("div",{className:"p-5 hover:bg-accent hover:text-white ",children:e.jsx("h2",{className:"text-2xl font-bold",children:"Top 100 Streams"})})}),e.jsx(t,{to:"/games/top",children:e.jsx("div",{className:"p-5 hover:bg-accent hover:text-white",children:e.jsx("h2",{className:"text-2xl font-bold ",children:"Top Rated Games"})})})]}),e.jsx("div",{className:"col-span-4 md:col-span-3 bg-primary text-text",children:e.jsx(i,{})})]});export{m as default};
