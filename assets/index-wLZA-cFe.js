import{r as e,_ as i,a as c,j as t}from"./index-8uqjUf3R.js";const l=e.lazy(()=>i(()=>import("./RawgTopRatedGames-_sv-ePEa.js"),__vite__mapDeps([0,1,2]))),n=()=>{const[a,r]=e.useState([]);e.useEffect(()=>{o()},[]);const o=async()=>{try{const s=await c.getGamesList;r(s.data.results)}catch(s){console.error("Error fetching top rated games:",s)}};return t.jsx("div",{className:"grid grid-cols-4",children:t.jsx("div",{className:"col-span-4 bg-primary text-text",children:t.jsx(l,{gamesList:a})})})};export{n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RawgTopRatedGames-_sv-ePEa.js","assets/index-8uqjUf3R.js","assets/index-PSgxgiHY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
