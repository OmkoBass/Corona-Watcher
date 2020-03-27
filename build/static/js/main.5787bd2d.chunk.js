(this["webpackJsonpwatch-corona"]=this["webpackJsonpwatch-corona"]||[]).push([[0],{187:function(e,a,t){},189:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(61),c=t.n(l),o=t(11),s=t(62),u=t.n(s);var m=function(){return r.a.createElement("nav",{className:"text-center bg-dark text-white"},r.a.createElement("h3",null,"Corona Watcher"))},i=t(7),d=t(24),f=t.n(d),h=t(17);var E=function(e){console.log(e);var a=Math.round(e.latest.confirmed/e.latest.deaths).toFixed(2),t=e.date.slice(0,10),n=e.date.slice(11,19);return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"corona-date bg-dark text-white"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"This was last updated:"),r.a.createElement("h3",null,t," ",n))),r.a.createElement("div",{className:"corona-numbers"},r.a.createElement(h.a,{className:"latest bg-warning"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Confirmed Cases:"),r.a.createElement("h2",null,r.a.createElement(f.a,{start:0,end:e.latest.confirmed,duration:5})))),r.a.createElement(h.a,{className:"recovered bg-success"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Recovered:"),r.a.createElement("h2",null,r.a.createElement(f.a,{start:0,end:e.latest.recovered,duration:5})))),r.a.createElement(h.a,{className:"death bg-danger"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Total Deaths:"),r.a.createElement("h2",null,r.a.createElement(f.a,{start:0,end:e.latest.deaths,duration:5})))),r.a.createElement(h.a,{className:"bg-secondary"},r.a.createElement(i.a,null,r.a.createElement("h3",null,"Mortality rate: ",a,"%")))))};var v=function(){return r.a.createElement("div",{className:"covid"},r.a.createElement("h3",null,"COVID-19"),r.a.createElement(i.a,null,r.a.createElement("h5",null,"Coronavirus disease 2019 (COVID-19) (also known as Wuhan Novel Coronavirus) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), a virus closely related to the SARS virus. The disease first emerged in Wuhan, China and is the cause of the 2019\u201320 coronavirus outbreak. Those affected are likely to develop a fever and dry cough. Fatigue and shortness of breath are also common indicators. Sputum production, headache, muscle pain, and sore throat are less common symptoms."),r.a.createElement("p",null,"(This information is pulled from covid-19 sources (link down below). I am not responsible if the info is not exactly right or it falls behind."),r.a.createElement("h3",null,"Wash your hands!"),r.a.createElement("hr",null)))},b=t(67),p=t(64);var g=function(e){var a=[];for(var t in e.datesConfirmed)a.push([t,e.datesConfirmed[t]]);a.sort((function(e,a){return e[1]-a[1]}));var n={labels:a.map((function(e){return e[0]})),datasets:[{label:"Sick",backgroundColor:"#cccccc",borderColor:"#bfbfbf",data:a.map((function(e){return e[1]}))},{label:"Dead",backgroundColor:"#ff6666",borderColor:"#ff4d4d",data:e.datesDead},{label:"Recovered",backgroundColor:"#85e085",borderColor:"#70db70",data:e.datesRecovered}]};return r.a.createElement("div",null,r.a.createElement("h2",null,e.name[0]),r.a.createElement("h4",null,e.name[1]),r.a.createElement(p.a,{data:n,options:{responsive:!0}}),r.a.createElement("div",{className:"less-info",onClick:function(){e.goBack()}},r.a.createElement("h4",null,"Less info")))},C=t(68);var k=function(e){var a=Object(n.useState)(!0),t=Object(o.a)(a,2),l=t[0],c=t[1];function s(){c(!l)}return r.a.createElement("div",{className:"stats"},r.a.createElement(i.a,null,r.a.createElement(C.a,null,l?r.a.createElement("div",null,r.a.createElement("h2",null,e.name[0]),r.a.createElement("h4",null,e.name[1]),r.a.createElement("h5",null,e.confirmed),r.a.createElement("h5",{className:"death text-danger"},e.dead),r.a.createElement("h5",{className:"recovered text-success"},e.recovered),r.a.createElement("div",{className:"country-info",onClick:s},r.a.createElement("p",null,"Click me for more info!"))):r.a.createElement(g,{name:e.name,datesConfirmed:e.datesConfirmed,datesDead:Object.values(e.datesDead),datesRecovered:Object.values(e.datesRecovered),goBack:s})),r.a.createElement("hr",null)))},y=t(35);var O=function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),m=u[0],d=u[1],f=function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];return e.map((function(e,a){return t.reduce((function(e,t){return[].concat(Object(b.a)(e),[t[a]])}),[e])}))}(e.confirmed.map((function(e){return[e.country,e.province]})),e.confirmed.map((function(e){return e.latest})),e.deaths.map((function(e){return e.latest})),e.recovered.map((function(e){return e.latest})),e.confirmed.map((function(e){return e.history})),e.deaths.map((function(e){return e.history})),e.recovered.map((function(e){return e.history}))),h=-1,E=f.map((function(e){return h++,r.a.createElement(k,{key:h,name:e[0],confirmed:e[1],dead:e[2],recovered:e[3],datesConfirmed:e[4],datesDead:e[5],datesRecovered:e[6]})}));Object(n.useEffect)((function(){Promise.all(E).then((function(){c(E),d(E)}))}),[]);var v=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"stats-control"},r.a.createElement(y.a.Label,null,"Search countires:"),r.a.createElement(y.a.Control,{ref:v,onChange:function(){var e=m.filter((function(e){return e.props.name[0].includes(v.current.value)}));c(e)},placeholder:"Search countries..."}))),l)};var N=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"https://github.com/ExpDev07/coronavirus-tracker-api"),r.a.createElement("p",null,"OmkoBass Github"))},j=t(66);var S=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(j.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))};t(187),t(188);var w=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],d=s[1];return Object(n.useEffect)((function(){u.a.get("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){l(e),d(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),i?r.a.createElement(E,{latest:t.data.latest,date:t.data.confirmed.last_updated}):r.a.createElement(S,null),r.a.createElement(v,null),i?r.a.createElement(O,{confirmed:t.data.confirmed.locations,deaths:t.data.deaths.locations,recovered:t.data.recovered.locations}):r.a.createElement(S,null),r.a.createElement(N,null))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))},69:function(e,a,t){e.exports=t(189)}},[[69,1,2]]]);
//# sourceMappingURL=main.5787bd2d.chunk.js.map