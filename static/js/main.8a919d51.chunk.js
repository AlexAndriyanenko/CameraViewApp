(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/ring.13fff1e5.png"},21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(6),r=a.n(o),i=(a(26),a(9)),l=(a(27),{video:{width:{min:375,ideal:768,max:1440},height:{min:665,ideal:635,max:975}}}),s=a(11),m=a(10),u=a(7),f=a(8),d=a(15),E=a.n(d),h=(a(28),function(){return c.a.createElement("img",{className:"image-overlay",src:E.a,alt:""})}),v=a(19),p=a(16),b=a(17),g=a.n(b),j=(a(34),function(e){var t=e.videoConstraints,a=e.handleVideoCapture,o=Object(n.useRef)(null),r=Object(n.useCallback)((function(){var e=o.current.getScreenshot();a(e)}),[o]);return console.log(t),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(g.a,{className:"video-container",audio:!1,ref:o,screenshotFormat:"image/jpeg",videoConstraints:t}))),c.a.createElement(u.a,null,c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(s.a,{onClick:r},"Capture photo"))))}),w=(a(35),function(e){var t=e.isMobile,a=Object(n.useState)(""),o=Object(i.a)(a,2),r=o[0],d=o[1],E=Object(n.useState)(!1),b=Object(i.a)(E,2),g=b[0],w=b[1],N=Object(n.useRef)(null);return c.a.createElement(m.a,{className:"camera-container",fluid:"md"},c.a.createElement(u.a,{className:"justify-content-md-center mb-3"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(j,{handleVideoCapture:function(e){d(e),N.current.click()},videoConstraints:function(){var e=l;return e.video.facingMode=t?g?"user":{exact:"environment"}:"user",e.video}()}))),c.a.createElement("a",{className:"download-btn",href:r,download:"screenshot_".concat(Date.now(),".jpeg"),ref:N}," "),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},t&&c.a.createElement("div",{onClick:function(){w(!g)}},c.a.createElement(s.a,{varian:"light"},c.a.createElement(p.a,{icon:v.faExchangeAlt}))))),c.a.createElement(h,null))}),N=(a(36),a(20)),x=(a(37),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){(window.innerWidth||window.offsetWidth)<768&&o(!0)}),[a]),c.a.createElement("div",{className:"app-container"},c.a.createElement(w,{isMobile:a}),c.a.createElement(N.a,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.8a919d51.chunk.js.map