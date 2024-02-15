import{r as e,_ as i,a as c,j as t}from"./index-BSk9LkmL.js";const l=e.lazy(()=>i(()=>import("./RawgTopRatedGames-V6mgr_Vb.js"),__vite__mapDeps([0,1,2,3,4]))),n=()=>{const[a,r]=e.useState([]);e.useEffect(()=>{o()},[]);const o=async()=>{try{const s=await c.getGamesList;r(s.data.results)}catch(s){console.error("Error fetching top rated games:",s)}};return t.jsx("div",{className:"grid grid-cols-4",children:t.jsx("div",{className:"col-span-4 bg-primary text-text",children:t.jsx(l,{gamesList:a})})})};export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RawgTopRatedGames-V6mgr_Vb.js","assets/index-BSk9LkmL.js","assets/index-Tt60U99H.css","assets/index-5by81CeN.js","assets/index-1JdWcVvI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
