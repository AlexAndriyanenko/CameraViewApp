(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/ring.d7654c97.png"},31:function(e,a,t){e.exports=t(49)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(9),o=t.n(i),r=(t(36),t(11)),s=(t(37),t(7)),l=t(20),u=t.n(l),d={video:{width:{min:375,ideal:768,max:1440},height:{min:665,ideal:635,max:975},facingMode:{exact:"environment"}}},m=t(15),f=t(14),v=t(8),h=t(16),p=t(12),g=t.n(p),b=(t(38),function(){return c.a.createElement("img",{className:"image-overlay",src:g.a,alt:""})}),j=t(26),w=t(21),E=t(22),O=t(23),y=t(29),x=t(24),C=t(13),N=t(30),k=(t(44),function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(y.a)(this,Object(x.a)(a).call(this,e))).canvas=null,t.image=null,t.downloadBtn=null,t.takeCanvasSnapshot=function(){var e=t.canvas.getContext("2d"),a=t.props.video.video.videoWidth,n=t.props.video.video.videoHeight;window.video=t.props.video.video,window.ctx=e,t.canvas.width=a,t.canvas.height=n;var c=t.canvas.width/2-50,i=t.canvas.height/2-50;e.clearRect(0,0,t.canvas.width,t.canvas.height),e.drawImage(t.props.video.video,0,0,t.canvas.width,t.canvas.height),e.drawImage(t.image,c,i,100,100)},t.handleCaptureImage=function(){t.props.video&&(t.takeCanvasSnapshot(),t.setState((function(e){return Object(s.a)({},e,{base64:t.canvas.toDataURL()})})))},t.handleCaptureImage=t.handleCaptureImage.bind(Object(C.a)(t)),t.state={base64:""},t}return Object(N.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(f.a,null,c.a.createElement(v.a,{className:"d-flex justify-content-center mb-3"},c.a.createElement("canvas",{id:"canvas",ref:function(a){return e.canvas=a}}," Your browser doesn't support canvas. ")),c.a.createElement("img",{ref:function(a){return e.image=a},src:g.a,alt:"",style:{display:"none"}}),c.a.createElement("a",{ref:function(a){return e.downloadBtn=a},href:this.state.base64,download:!0,style:{display:"none"}}),c.a.createElement(v.a,{className:"d-flex justify-content-center mb-2"},c.a.createElement(m.a,{onClick:this.handleCaptureImage},"Capture")))}}]),a}(c.a.Component)),M=(t(45),function(e){var a=e.isMobile,t=Object(n.useState)(!1),i=Object(r.a)(t,2),o=i[0],l=i[1],p=Object(n.useState)(!1),g=Object(r.a)(p,2),E=g[0],O=g[1],y=Object(n.useRef)(null),x=Object(n.useRef)(null);return c.a.createElement(f.a,{className:"camera-container",fluid:"md"},c.a.createElement(v.a,{className:"justify-content-md-center mb-5"},c.a.createElement(h.a,{className:"d-flex justify-content-center image-overlay-container"},c.a.createElement(u.a,{ref:y,className:"video-container",audio:!1,videoConstraints:function(){var e=d;return e=a?Object(s.a)({},e,{video:Object(s.a)({},e.video,{facingMode:E?"user":{exact:"environment"}}),facingMode:E?"user":{exact:"environment"}}):Object(s.a)({},e,{video:Object(s.a)({},e.video,{facingMode:"user"}),facingMode:"user"})}(),onUserMedia:function(){l(!0)}}),c.a.createElement(b,null))),c.a.createElement(v.a,{className:"justify-content-md-center mb-3"},c.a.createElement(h.a,{className:"d-flex justify-content-center"},c.a.createElement(k,Object.assign({ref:x},o&&{video:y.current})))),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(h.a,{className:"d-flex justify-content-center"},a&&c.a.createElement(m.a,{onClick:function(){O((function(e){return!e}))},varian:"light"},c.a.createElement(w.a,{icon:j.faExchangeAlt})))))}),I=(t(46),t(28)),S=(t(47),t(48),function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){(window.innerWidth||window.offsetWidth)<768&&i(!0)}),[t]),c.a.createElement("div",{className:"app-container"},c.a.createElement(M,{isMobile:t}),c.a.createElement(I.a,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8e6d8b19.chunk.js.map