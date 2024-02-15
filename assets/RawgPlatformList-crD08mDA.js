import{r as a,a as x,j as e}from"./index-v90bSrct.js";import{C as f}from"./CollapsibleSection-melimcwi.js";const v=({onPlatformSelect:c,onGenreName:l})=>{const[i,d]=a.useState([]),[o,n]=a.useState(10),[r,m]=a.useState(0);a.useEffect(()=>{p()},[]);const p=async()=>{try{const t=await x.getPlatformList();d(t.data.results)}catch(t){console.error("Error fetching platform list:",t)}},u=()=>{n(o+5)},h=()=>{n(Math.max(o-5,5))};return e.jsx("div",{className:"bg-secondary p-5 rounded-md shadow-md",children:e.jsxs(f,{title:"Platforms",children:[i.slice(0,o).map((t,s)=>e.jsxs("div",{onClick:()=>{m(s),c(t.id),l(t.name)},className:`flex gap-2 items-center mb-2 mt-3 px-2 py-2 cursor-pointer hover:bg-accent hover:text-white group rounded-lg ${r===s?"bg-accent":""}`,children:[e.jsx("img",{src:t.image_background,alt:`Platform ${t.name} background`,className:`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${r===s?"scale-110":""}`}),e.jsx("h3",{className:`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${r===s?"font-bold text-white":""}`,children:t.name})]},s)),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx("button",{onClick:u,className:"bg-primary text-text px-4 py-2 rounded-md hover:bg-success hover:opacity-90 transition duration-150 ease-in-out",children:"Show More"}),o>5&&e.jsx("button",{onClick:h,className:"bg-primary text-text px-4 py-2 rounded-md hover:bg-error hover:opacity-90 transition duration-150 ease-in-out",children:"Show Less"})]})]})})};export{v as default};
