(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[9],{285:function(e,t,r){"use strict";r.r(t);var n,c,i,s,l=r(0),a=r(63),j=r(60),d=r(148),h=r(18),b=r(9),u=r(282),g=r(122),o=r(175),O=r(287),p=r(19),x=r(2),f=p.a.div(n||(n=Object(h.a)(["\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n"]))),m=p.a.h1(c||(c=Object(h.a)(["\n  margin: 20px 0;\n  text-align: center;\n"]))),v=p.a.img(i||(i=Object(h.a)(["\n  max-width:300px\n"]))),w=Object(a.a)((function(){var e=Object(j.a)(),t=e.ImageStore,r=e.UserStore,n=Object(l.useRef)(),c=Object(l.useRef)(),i=Object(b.d)((function(){return{width:null,setwidth:function(e){i.width=e},get widthStr(){return i.width?"/w/".concat(i.width):""},height:null,setheight:function(e){i.height=e},get heightStr(){return i.height?"/h/".concat(i.height):""},get getFullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+i.widthStr+i.heightStr}}})),s=(Object(l.useRef)(),u.a.Dragger),a={showUploadList:!1,beforeUpload:function(e){return console.log(e),t.setFile(e),t.setFilename(e.name),null===r.currentUser?(g.b.warning("\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20"),!1):/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>1048576?(g.b.error("\u56fe\u7247\u6700\u59271M"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f"),console.log(e)})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(g.b.error("\u53ea\u80fd\u4e0a\u4f20png/svg/jpg/gif\u683c\u5f0f\u7684\u56fe\u7247"),!1)}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{tip:"\u4e0a\u4f20\u4e2d...",spinning:t.isUploading,children:Object(x.jsx)("div",{children:Object(x.jsxs)(s,Object(d.a)(Object(d.a)({},a),{},{children:[Object(x.jsx)("p",{className:"ant-upload-drag-icon",children:Object(x.jsx)(O.a,{})}),Object(x.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"}),Object(x.jsx)("p",{className:"ant-upload-hint",children:"\u4ec5\u652f\u6301 .png/.svg/.jpg/.gif \u683c\u5f0f\u7684\u56fe\u7247,\u56fe\u7247\u6700\u59271M"})]}))})}),t.serverFile?Object(x.jsxs)(f,{children:[Object(x.jsx)(m,{children:"\u4e0a\u4f20\u7ed3\u679c"}),Object(x.jsxs)("dl",{children:[Object(x.jsx)("dt",{children:"\u5b8c\u6574\u8def\u5f84"}),Object(x.jsx)("dd",{children:Object(x.jsx)("a",{target:"_blank",href:t.serverFile.attributes.url.attributes.url,children:t.serverFile.attributes.url.attributes.url})}),Object(x.jsx)("dt",{children:"\u6587\u4ef6\u540d"}),Object(x.jsx)("dd",{children:t.filename}),Object(x.jsx)("dt",{children:"\u56fe\u7247\u9884\u89c8"}),Object(x.jsx)("dd",{children:Object(x.jsx)(v,{src:t.serverFile.attributes.url.attributes.url,alt:"\u56fe\u7247\u9884\u89c8"})}),Object(x.jsx)("dt",{children:"\u66f4\u591a\u5c3a\u5bf8"}),Object(x.jsxs)("dd",{children:[Object(x.jsx)("input",{ref:n,onChange:function(){i.setwidth(n.current.value)},type:"text",placeholder:"\u6700\u5927\u5bbd\u5ea6(\u53ef\u9009)"}),Object(x.jsx)("input",{ref:c,onChange:function(){i.setheight(c.current.value)},type:"text",placeholder:"\u6700\u5927\u9ad8\u5ea6(\u53ef\u9009)"})]}),Object(x.jsx)("dd",{children:Object(x.jsx)("a",{target:"_blank",href:i.getFullStr,children:i.getFullStr})})]})]}):null]})})),F=p.a.div(s||(s=Object(h.a)(["\n  background: lightsalmon;\n  padding: 10px;\n  margin: 30px 0;\n  color:#fff;\n  border-radius: 4pz;\n"]))),S=Object(a.a)((function(e){var t=e.children,r=Object(j.a)().UserStore;return Object(x.jsx)(x.Fragment,{children:r.currentUser?null:Object(x.jsx)(F,{children:t})})})),U=Object(a.a)((function(){Object(j.a)().UserStore;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{children:"\u8bf7\u5148\u767b\u5f55\u5728\u4e0a\u4f20"}),Object(x.jsx)(w,{})]})}));t.default=U}}]);
//# sourceMappingURL=9.3242caa8.chunk.js.map