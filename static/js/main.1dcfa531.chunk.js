(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/ring.13fff1e5.png"},21:function(e,t,n){e.exports=n(38)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),i=(n(26),n(9)),l=(n(27),{video:{width:{min:375,ideal:768,max:1440},height:{min:665,ideal:635,max:975}}}),s=n(11),u=n(10),m=n(7),f=n(8),d=n(15),E=n.n(d),h=(n(28),function(){return c.a.createElement("img",{className:"image-overlay",src:E.a,alt:""})}),v=n(19),p=n(16),b=n(17),j=n.n(b),g=(n(34),function(e){var t=e.videoConstraints,n=e.handleVideoCapture,r=Object(a.useRef)(null),o=Object(a.useCallback)((function(){var e=r.current.getScreenshot();n(e)}),[r]);return c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"mb-3"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(j.a,{className:"video-container",audio:!1,ref:r,screenshotFormat:"image/jpeg",videoConstraints:t}))),c.a.createElement(m.a,null,c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(s.a,{onClick:o},"Capture photo"))))}),w=(n(35),function(e){var t=e.isMobile,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],d=r[1],E=Object(a.useState)(!1),b=Object(i.a)(E,2),j=b[0],w=b[1],N=Object(a.useRef)(null);return c.a.createElement(u.a,{className:"camera-container",fluid:"md"},c.a.createElement(m.a,{className:"justify-content-md-center mb-3"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},c.a.createElement(g,{handleVideoCapture:function(e){d(e),N.current.click()},videoConstraints:function(){var e=l;return e.video.facingMode=t?j?"user":{exact:"environment"}:"user",e.video}()}))),c.a.createElement("a",{className:"download-btn",href:o,download:"screenshot_".concat(Date.now(),".jpeg"),ref:N}," "),c.a.createElement(m.a,{className:"justify-content-md-center"},c.a.createElement(f.a,{className:"d-flex justify-content-center"},t&&c.a.createElement("div",{onClick:function(){w((function(e){return!e}))}},c.a.createElement(s.a,{varian:"light"},c.a.createElement(p.a,{icon:v.faExchangeAlt}))))),c.a.createElement(h,null))}),N=(n(36),n(20)),x=(n(37),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(window.innerWidth||window.offsetWidth)<768&&r(!0)}),[n]),c.a.createElement("div",{className:"app-container"},c.a.createElement(w,{isMobile:n}),c.a.createElement(N.a,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1dcfa531.chunk.js.map