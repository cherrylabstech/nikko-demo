(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{16:function(e,a,n){e.exports=n(26)},21:function(e,a,n){},22:function(e,a,n){},26:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),i=n(11),r=n.n(i),c=(n(21),n(2)),s=n(3),l=n(5),d=n(4),u=n(8),h=n.n(u),g=(n(22),n(6)),m=n(9),f=n(12),p=n.n(f),w=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(g.a)(e)),e}return Object(s.a)(n,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var n=o.a.memo((function(){return o.a.createElement(m.a,{className:"title-styles",steps:e.titles,loop:1/0})}),(function(e,a){return!0}));return o.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},o.a.createElement("div",{className:"row aligner",style:{height:"100%"}},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",null,o.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),o.a.createElement("br",null),o.a.createElement("h1",{className:"mb-0"},o.a.createElement(m.a,{steps:[a],wrapper:"p"})),o.a.createElement("div",{className:"title-container"},o.a.createElement(n,null)),o.a.createElement(p.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:o.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:o.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),n}(t.Component),y=(t.Component,n(7)),v=n(13),b=n.n(v),k=n(14),E=n.n(k),L=n(15),I=n.n(L),j=(t.Component,t.Component,function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},t}return Object(s.a)(n,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var n=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(n)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){h.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,n){alert(n)}})}},{key:"loadSharedData",value:function(){h.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,n){alert(n)}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(w,{sharedData:this.state.sharedData.basic_info}),o.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},o.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"}},o.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})),o.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"}},o.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-poland","data-inline":"false",id:window.$secondaryLanguageIconId}))))}}]),n}(t.Component)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(25);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(o.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");C?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(a,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.54376fd6.chunk.js.map