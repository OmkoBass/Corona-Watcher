(this["webpackJsonpwatch-corona"]=this["webpackJsonpwatch-corona"]||[]).push([[0],{186:function(e,a,t){},188:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(61),c=t.n(l);var o=function(){return r.a.createElement("nav",null,r.a.createElement("h3",null,"Corona Watcher"))},u=t(11),s=t(23),m=t.n(s),i=t(62);var d=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},E=t(10),h=t(24),f=t.n(h);var v=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){m.a.get("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){var a=e.data;i(a),l(!0)}))}),[]),r.a.createElement("div",null,t?r.a.createElement("div",{className:"corona"},r.a.createElement("div",{className:"corona-date"},r.a.createElement(E.a,null,r.a.createElement("h3",null,"This was last updated:"),r.a.createElement("h3",null,s.confirmed.last_updated))),r.a.createElement("div",{className:"corona-numbers"},r.a.createElement(E.a,null,r.a.createElement("ul",null,r.a.createElement("h3",null,"Confirmed Cases:"),r.a.createElement("li",null,r.a.createElement("h2",{className:"latest"},r.a.createElement(f.a,{end:s.latest.confirmed,duration:3.5}))),r.a.createElement("hr",null),r.a.createElement("h3",null,"Total Deaths:"),r.a.createElement("li",null,r.a.createElement("h2",{className:"death"},r.a.createElement(f.a,{end:s.latest.deaths,duration:3.5}))),r.a.createElement("hr",null),r.a.createElement("h3",null,"Recovered:"),r.a.createElement("li",null,r.a.createElement("h2",{className:"recovered"},r.a.createElement(f.a,{end:s.latest.recovered,duration:3.5}))),r.a.createElement("hr",null))))):r.a.createElement(d,null))};var b=function(){return r.a.createElement("div",{className:"covid"},r.a.createElement("h3",null,"COVID-19"),r.a.createElement(E.a,null,r.a.createElement("h5",null,"Coronavirus disease 2019 (COVID-19) (also known as Wuhan Novel Coronavirus) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), a virus closely related to the SARS virus. The disease first emerged in Wuhan, China and is the cause of the 2019\u201320 coronavirus outbreak. Those affected are likely to develop a fever and dry cough. Fatigue and shortness of breath are also common indicators. Sputum production, headache, muscle pain, and sore throat are less common symptoms."),r.a.createElement("h3",null,"Wash your hands!"),r.a.createElement("hr",null)))},p=t(66),y=t(67),k=t(64);var O=function(e){var a=e.countryInfo.country[0].history,t=e.countryInfo.country[1].history,n=e.countryInfo.country[2].history,l=[];for(var c in a)l.push([c,a[c]]);l.sort((function(e,a){return e[1]-a[1]}));var o={labels:l.map((function(e){return e[0]})),datasets:[{label:"Sick",backgroundColor:"#cccccc",borderColor:"#bfbfbf",data:l.map((function(e){return e[1]}))},{label:"Dead",backgroundColor:"#ff6666",borderColor:"#ff4d4d",data:Object.values(t)},{label:"Recovered",backgroundColor:"#85e085",borderColor:"#70db70",data:Object.values(n)}]};return r.a.createElement("div",null,r.a.createElement("h2",null,e.countryInfo.country[0].country),r.a.createElement(k.a,{data:o,options:{responsive:!0}}),r.a.createElement("div",{className:"less-info",onClick:function(){e.goBack()}},r.a.createElement("h4",null,"Less info")))};var C=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],c=t[1];function o(){c(!l)}return r.a.createElement("div",{className:"stats"},r.a.createElement(E.a,null,r.a.createElement(y.a,null,l?r.a.createElement(O,{countryInfo:e,goBack:o}):r.a.createElement("div",null,r.a.createElement("h2",null,e.country[0].country),r.a.createElement("h4",null,e.country[0].province),r.a.createElement("h5",null,e.country[0].latest),r.a.createElement("h5",{className:"death-no-animation"},e.country[1].latest),r.a.createElement("h5",{className:"recovered-no-animation"},e.country[2].latest),r.a.createElement("div",{className:"country-info",onClick:o},r.a.createElement("p",null,"Click me for more info!")))),r.a.createElement("hr",null)))},j=t(35);var g=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],i=o[1],h=Object(n.useState)(null),f=Object(u.a)(h,2),v=f[0],b=f[1];Object(n.useEffect)((function(){m.a.get("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){var a=function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];return e.map((function(e,a){return t.reduce((function(e,t){return[].concat(Object(p.a)(e),[t[a]])}),[e])}))}(e.data.confirmed.locations,e.data.deaths.locations,e.data.recovered.locations),t=-1,n=a.map((function(e){return t++,r.a.createElement(C,{country:e,key:t})}));b(n),i(n),l(!0)}))}),[]);var y=Object(n.useRef)(null);return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"stats-control"},r.a.createElement(j.a.Label,null,"Search countires:"),r.a.createElement(j.a.Control,{ref:y,onChange:function(){var e=v.filter((function(e){return e.props.country[0].country.includes(y.current.value)}));i(e)},placeholder:"Search countries..."}))),s):r.a.createElement(d,null))};var N=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"https://github.com/ExpDev07/coronavirus-tracker-api"),r.a.createElement("p",null,"OmkoBass Github"))};t(186),t(187);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(g,null),r.a.createElement(N,null))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))},68:function(e,a,t){e.exports=t(188)}},[[68,1,2]]]);
//# sourceMappingURL=main.d0c0589c.chunk.js.map