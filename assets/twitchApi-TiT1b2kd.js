import{d as a}from"./index-J3oiFqY2.js";const o="https://api.twitch.tv/helix",e=a.create({baseURL:o,headers:{"Client-ID":"zwureqxluex12z785rogl00vj1q4mg",Authorization:"Bearer pimfzer21tzenaf5ld033yxiv1rkkp"}}),s=e.get("/games/top"),i=t=>e.get("/streams",t),c=t=>e.get("/games?name="+encodeURIComponent(t)),m=t=>e.get("/streams?game_id="+encodeURIComponent(t)),r={getTwitchTopGames:s,getTwitchStreams:i,getTwitchGameId:c,getTwitchStreamsByGameId:m};export{r as t};
