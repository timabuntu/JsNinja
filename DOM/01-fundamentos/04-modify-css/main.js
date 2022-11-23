const title = document.querySelector("h1");
console.log("🚀 ~ title", title);

//! O setAttribute sobrescreve o css anterior
// title.setAttribute("style", "margin: 50px");

//! O style obtém | adiciona | modifica o estilo de um elemento
console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.floodColor = "pink";
title.style.fontSize = "50px";
title.style.margin = "";
