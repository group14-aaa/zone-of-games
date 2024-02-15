import{r as e,_ as i,a as c,j as t}from"./index-PBvQp5YC.js";const l=e.lazy(()=>i(()=>import("./RawgTopRatedGames-fQSp3WNU.js"),__vite__mapDeps([0,1,2,3,4]))),n=()=>{const[a,r]=e.useState([]);e.useEffect(()=>{o()},[]);const o=async()=>{try{const s=await c.getGamesList;r(s.data.results)}catch(s){console.error("Error fetching top rated games:",s)}};return t.jsx("div",{className:"grid grid-cols-4",children:t.jsx("div",{className:"col-span-4 bg-primary text-text",children:a?.length>0&&t.jsx(l,{gamesList:a})})})};export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RawgTopRatedGames-fQSp3WNU.js","assets/index-PBvQp5YC.js","assets/index-g-Dqd4Ms.css","assets/index-4vLOyGIX.js","assets/index-1ooSwNKq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
