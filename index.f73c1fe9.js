class e{constructor(e){this.name=e.name,this.title=e.title,this.champ_resource=e.partype,this.id=e.id,this.description=e.blurb}setImg(e){this.img=e}}var t=[];document.querySelector("button").addEventListener("click",()=>{document.querySelector("#button").style.display="none",document.querySelector("#infoP").style.visibility="visible",document.querySelector("#wiki").style.visibility="visible",i()});const i=async()=>{await fetch("https://ddragon.leagueoflegends.com/cdn/14.18.1/data/es_ES/champion.json").then(function(e){return e.json()}).then(function(i){for(let n in i.data){let s=new e(i.data[n]);s.setImg(function(e){switch(e){case"Ahri":return`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e}_27.jpg`;case"Pyke":return`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e}_44.jpg`;default:return`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e}_0.jpg`}}(s.id)),t.push(s)}}),console.log(t),await n()},n=async()=>{let e=document.getElementById("wiki");for(var i=0;i<t.length;i++)e.innerHTML+=`<div class="champSelect">
                                    <div class="description">
                                    <img class="imgChamp" src="${t[i].img}"><br>
                                    <p>${t[i].description}</p>
                                    </div>
                                    <div class="nombre">
                                    ${t[i].name}<br>
                                    "${t[i].title}"<br>
                                    </div>
                                    <div class="resource">
                                        ${t[i].champ_resource}
                                    </div>
                                </div>`};
//# sourceMappingURL=index.f73c1fe9.js.map
