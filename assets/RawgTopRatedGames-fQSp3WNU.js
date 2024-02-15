import{j as e,L as r,e as i,M as l}from"./index-PBvQp5YC.js";import{F as n}from"./index-4vLOyGIX.js";import{F as c}from"./index-1ooSwNKq.js";const m=({gamesList:a})=>e.jsxs("div",{className:"p-5",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-400 mb-4 mt-6 text-center",children:"Top Rated Games"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:e.jsx("div",{className:"flex flex-wrap w-full justify-center",children:a.sort((s,t)=>t.rating-s.rating).map((s,t)=>t<24&&e.jsxs("div",{className:"relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary rounded overflow-hidden shadow-lg m-4 group hover:scale-110 transition-all duration-300 ease cursor-pointer",children:[e.jsx(r,{to:`/games/${s.id}`,children:e.jsx("img",{className:"w-full h-40 object-cover",src:s.short_screenshots[0].image,alt:s.name})}),e.jsxs("div",{className:"absolute top-0 right-0 p-2 bg-gray-800 text-white rounded-bl",children:[e.jsx(n,{alt:"MetaCritic Rating"})," ",s.metacritic]}),e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("div",{className:"font-bold text-base mb-2",children:`${s.name}`}),e.jsxs("div",{className:"flex items-center gap-3 justify-center",children:[e.jsxs("p",{className:"text-gray-400 text-sm flex items-center",children:[e.jsx(i,{alt:"The number of ratings"})," ",s.rating," "]}),e.jsxs("p",{className:"text-gray-400 text-sm flex items-center",children:[e.jsx(l,{alt:"The number of reviews"})," ",s.reviews_count," "]}),e.jsxs("p",{className:"text-gray-400 text-sm flex items-center",children:[e.jsx(c,{alt:"Suggestions"})," ",s.suggestions_count]})]})]})]},s.id))})})]});export{m as default};