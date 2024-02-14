import{r as e,_ as i,j as t}from"./index-hzREvqbv.js";import{r as c}from"./rawgApi-JX0N44-y.js";import"./axios-L6U4YIEh.js";const m=e.lazy(()=>i(()=>import("./RawgTopRatedGames-2S3wtIZ5.js"),__vite__mapDeps([0,1,2]))),d=()=>{const[a,r]=e.useState([]);e.useEffect(()=>{o()},[]);const o=async()=>{try{const s=await c.getGamesList;r(s.data.results)}catch(s){console.error("Error fetching top rated games:",s)}};return t.jsx("div",{className:"grid grid-cols-4",children:t.jsx("div",{className:"col-span-4 bg-primary text-text",children:t.jsx(m,{gamesList:a})})})};export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RawgTopRatedGames-2S3wtIZ5.js","assets/index-hzREvqbv.js","assets/index-USi8laUd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
