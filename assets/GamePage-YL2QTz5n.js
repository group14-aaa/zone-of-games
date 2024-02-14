import{G as h,r as i,j as e,d as k,u as F,e as H,f as V,a as A,g as j,h as D,i as P,k as T,l as _,m as z}from"./index-J3oiFqY2.js";import{R as v}from"./twitch-VUtzDuPP.js";import{F as E}from"./index-JVkE-vci.js";import{t as w}from"./twitchApi-TiT1b2kd.js";function L(r){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M307.723 39.623c-25.627-.292-48.63 17.365-54.246 43.44-6.418 29.8 12.39 58.93 42.19 65.347 29.798 6.417 58.927-12.39 65.345-42.19 6.417-29.798-12.39-58.928-42.188-65.345-3.725-.802-7.44-1.21-11.1-1.252zm-37.543 117.88L237.123 311h47.055l30.97-143.81c-7.584.836-15.418.507-23.27-1.184-7.854-1.69-15.13-4.617-21.698-8.502zM198.486 329l-10 30h135.028l-10-30H198.486zM73 377v30h30v-30H73zm93.486 0l-10 30h199.028l-10-30H166.486zM409 377v30h30v-30h-30zM57 425v62h398v-62H57z"},child:[]}]})(r)}function B(r){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6"},child:[]}]})(r)}function C(r){return h({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.176 24h3.674c3.376 0 6.15-2.774 6.15-6.15V6.15C24 2.775 21.226 0 17.85 0H14.1c-.074 0-.15.074-.15.15v23.7c-.001.076.075.15.226.15zm4.574-13.199c1.351 0 2.399 1.125 2.399 2.398 0 1.352-1.125 2.4-2.399 2.4-1.35 0-2.4-1.049-2.4-2.4-.075-1.349 1.05-2.398 2.4-2.398zM11.4 0H6.15C2.775 0 0 2.775 0 6.15v11.7C0 21.226 2.775 24 6.15 24h5.25c.074 0 .15-.074.15-.149V.15c.001-.076-.075-.15-.15-.15zM9.676 22.051H6.15c-2.326 0-4.201-1.875-4.201-4.201V6.15c0-2.326 1.875-4.201 4.201-4.201H9.6l.076 20.102zM3.75 7.199c0 1.275.975 2.25 2.25 2.25s2.25-.975 2.25-2.25c0-1.273-.975-2.25-2.25-2.25s-2.25.977-2.25 2.25z"},child:[]}]})(r)}function R(r){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"},child:[]}]})(r)}const U=({gameName:r})=>{const[t,x]=i.useState([]),[o,d]=i.useState([]),[n,u]=i.useState(null);i.useEffect(()=>{console.log(r),f(r)},[r]),i.useEffect(()=>{t&&p(t)},[t]);const f=async a=>{try{const c=await w.getTwitchGameId(a);console.log(c.data.data[0].id),x(c.data.data[0].id)}catch(c){console.error("Error fetching twitch streams:",c)}},p=async a=>{try{const c=await w.getTwitchStreamsByGameId(a);console.log(c.data.data),d(c.data.data)}catch(c){console.error("Error fetching twitch streams:",c)}},m=a=>{u(a)};return e.jsxs("div",{className:"text-text",children:[e.jsxs("h2",{className:"text-3xl font-bold text-gray-400 mb-4 mt-6 text-center",children:["Most viewed Live Streams on Twitch - ",r]}),e.jsx("div",{className:"flex flex-wrap justify-center",children:o.map(a=>e.jsxs("div",{className:"w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-secondary rounded overflow-hidden shadow-lg m-5 group hover:scale-105 transition-all duration-300 ease cursor-pointer",children:[n&&n.id===a.id?e.jsx("div",{className:"player-wrapper",children:e.jsx(v,{className:"react-player",url:`https://www.twitch.tv/${a.user_name}`,width:"100%",height:"100%",controls:!0,playing:!0})}):e.jsxs("div",{className:"thumbnail-container relative w-full h-40 cursor-pointer",children:[a.thumbnail_url?e.jsx("img",{src:a.thumbnail_url.replace("{width}","640").replace("{height}","360"),alt:`Thumbnail for ${a.user_name}`,width:"100%",height:"100%",onClick:()=>m(a),className:"w-full h-full object-cover rounded-md mb-2 scale-95"}):e.jsx("div",{className:"placeholder w-full h-full bg-gray-300 m-3 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"No Thumbnail"})}),e.jsx("div",{className:"play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",onClick:()=>m(a),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"#fff",children:e.jsx("path",{d:"M8 5v14l11-7z"})})})]}),e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("div",{className:"font-bold text-base mb-2",children:e.jsx("h3",{className:"text-text text-lg font-semibold",children:a.user_name})}),e.jsxs("p",{className:"text-text",children:["Viewers: ",a.viewer_count]})]})]},a.id))})]})},X="https://www.googleapis.com/youtube/v3",Z=k.create({baseURL:X}),q=async r=>{try{const t=await Z.get("/search",{params:{part:"snippet",q:r+" trailer",key:"AIzaSyDZkcBhipYcq2wPF6uqocU396uB0aXztGA",type:"video"}});if(t.data.items.length>0)return"https://www.youtube.com/watch?v="+t.data.items[0].id.videoId;throw new Error("No trailer found for the game")}catch(t){throw new Error("Failed to fetch game trailer: "+t.message)}},O={getGameTrailer:q},Q=()=>{const{gId:r}=F(),[t,x]=i.useState(null),[o,d]=i.useState(null),[n,u]=i.useState(!1),[f,p]=i.useState(!1),[m,a]=i.useState(null),c={youtube:{playerVars:{showinfo:0,modestbranding:1}}};i.useEffect(()=>{(async()=>{try{const l=await A.getGameData(r);l.data?(x(l.data),b(l.data.name)):N(l)}catch{y()}})()},[r]);const b=async s=>{try{const l=await O.getGameTrailer(s);a(l)}catch(l){console.error("Error fetching game trailer:",l)}},N=s=>{d("Invalid response structure from the API"),console.error("Invalid response structure from the API",s)},y=()=>{d("Failed to fetch game data"),console.error("Failed to fetch game data")},S=()=>{p(!0)},G=()=>{u(!n)},g=(s,l)=>e.jsx("p",{className:"text-lg",children:e.jsx("a",{className:"text-info hover:underline mt-2 hover:text-accent",href:l,target:"_blank",rel:"noopener noreferrer",children:s})}),I=s=>{const l={year:"numeric",month:"short",day:"numeric"};return new Date(s).toLocaleDateString(void 0,l)},M=s=>{switch(s){case"Apple Macintosh":return e.jsx(R,{});case"Xbox":return e.jsx(j,{});case"Android":return e.jsx(z,{});case"Linux":return e.jsx(_,{});case"PlayStation":return e.jsx(T,{});case"PC":return e.jsx(P,{});case"macOS":return e.jsx(D,{});case"Nintendo Switch":return e.jsx(C,{});case"Nintendo":return e.jsx(B,{});case"Xbox Series X":return e.jsx(L,{});case"Xbox One":return e.jsx(j,{});default:return e.jsx("span",{children:s})}};return o?e.jsx("div",{className:"p-5 text-text",children:e.jsxs("p",{className:"text-xl",children:["Error: ",o]})}):t?e.jsxs("div",{className:"relative text-text p-5",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden shadow-lg",children:[e.jsx("div",{className:"absolute bottom-0 p-5 h-full w-full"}),e.jsx("img",{className:"w-full object-cover rounded-md shadow-lg",style:{maskImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0))"},src:t.background_image,alt:t.name})]}),e.jsxs("div",{className:"relative flex flex-col items-center mt-20 mb-20",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-5xl cursor-pointer hover:scale-125 transition duration-500 ease-in-out font-bold mb-6",children:t.name}),e.jsxs("p",{className:"text-lg",children:["Released date: ",I(t.released)]}),e.jsxs("p",{className:"text-xl font-bold flex items-center justify-center gap-1 mt-2",children:[e.jsx(H,{alt:"The number of ratings"})," ",t.rating," / ",t.rating_top]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row w-full mt-20 mb-20",children:[e.jsxs("div",{className:"md:w-1/2 md:pr-8 mb-16",children:[e.jsx("div",{className:"border border-accent rounded-md overflow-hidden mt-4 mb-5",children:e.jsx("img",{className:"w-full hover:scale-110 duration-300 transition ease-in-out object-cover rounded-md",src:t.background_image,alt:t.name})}),e.jsx("div",{className:"border border-accent rounded-md overflow-hidden",children:e.jsx(v,{url:m,width:"100%",height:"500px",controls:!0,onPlay:S,config:c,style:{opacity:f?1:.5,transition:"opacity 0.5s"}})})]}),e.jsxs("div",{className:"md:w-1/2 md:pl-8",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Game Description"}),e.jsx("p",{className:`text-lg leading-relaxed ${n?"whitespace-pre-line":"line-clamp-3"}`,children:t.description_raw}),e.jsx("button",{className:"text-blue-500 hover:underline mt-2",onClick:G,children:n?"Show Less":"Show More"})]}),e.jsx("div",{className:"flex justify-between mb-6",children:e.jsxs("div",{children:[e.jsxs("h3",{className:"text-2xl font-bold mb-1 flex gap-2 items-center",children:[e.jsx(E,{alt:"MetaCritic Rating"})," Metacritic Score: ",t.metacritic]}),g("Metacritic URL",t.metacritic)]})}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-1 flex gap-2 items-center ",children:[" ",e.jsx(V,{}),"Additional Links"]}),g("Game Website",t.website),g("Reddit",t.reddit_url)]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Developers"}),e.jsx("div",{className:"flex flex-wrap",children:t.developers.map(s=>e.jsx("p",{className:"text-lg mr-4",children:s.name},s.id))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Genres"}),e.jsx("div",{className:"flex flex-wrap",children:t.genres.map(s=>e.jsxs("div",{className:"flex items-center mt-2 mr-4",children:[e.jsx("img",{src:s.image_background,alt:s.name,className:"w-6 h-6 object-cover rounded-lg mr-2"}),e.jsx("p",{className:"text-lg",children:s.name})]},s.id))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Tags"}),e.jsx("div",{className:"flex flex-wrap",children:t.tags.map(s=>e.jsx("p",{className:"text-lg mr-4",children:s.name},s.id))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Platforms"}),e.jsx("div",{className:"flex flex-wrap",children:t.parent_platforms.map((s,l)=>e.jsx("p",{className:"text-lg mr-4 hover:scale-150 duration-300 ease-in-out",children:M(s.platform.name)},l))})]})]})]}),e.jsx(U,{gameName:t.name})]})]}):e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx("div",{role:"status",children:e.jsx("span",{className:"text-text",children:"Loading...."})})})};export{Q as default};
