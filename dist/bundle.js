!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);var i={down:!1};let a=!1,s=null,l=null;function d(){a&&(l.remove(s),a=!1,document.getElementById("labelNamePopUp").style.display="none")}window.labelBndBox=function(){const e=document.getElementById("label-title").value;document.getElementById("labelNamePopUp").style.display="none";const t=new r.a.Text(e,{fontSize:10,fill:"yellow",left:s.left,top:s.top,width:s.width,height:s.height}),n=new r.a.Group([s,t],{left:s.left,top:s.top,width:s.width,height:s.height,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0.1)"});a=!0,l.remove(s),l.add(n)};let c=null;const u={};function h(){d(),c.discardActiveObject(),c.renderAll(),c.forEachObject(e=>{e.selectable=!1}),c.defaultCursor="crosshair",c.hoverCursor="crosshair",c.__eventListeners["mouse:down"]=[()=>{i.down=!0;const e=c.getPointer(c.e);u.origX=e.x,u.origY=e.y,u.rect=new r.a.Rect({left:u.origX,top:u.origY,width:e.x-u.origX,height:e.y-u.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)"}),c.add(u.rect)}]}function g(e,t){if(i.down){i.down=!1,u.rect.setCoords(),u.rect.selectable=!1,c.__eventListeners["mouse:down"]=[],c.defaultCursor="default",c.hoverCursor="move",c.forEachObject(e=>{e.selectable=!0});const n=c.getPointer(e.e);!function(e,t,n,o){s=n,l=o;const r=document.getElementById("labelNamePopUp");r.style.display="block";const i=document.getElementById("canvas-wrapper").getBoundingClientRect(),d=i.top,c=i.left;r.style.top=`${t+d}px`,r.style.left=`${e+c}px`,a=!0}(n.x,n.y,u.rect,t)}}function m(e){c=e,window.createNewBndBox=h,e.on("mouse:over",e=>{!function(e){e.target&&e.target._objects&&(e.target._objects[0].set("fill","rgba(255,0,0,0.2)"),c.renderAll())}(e)}),e.on("mouse:out",e=>{!function(e){e.target&&e.target._objects&&(e.target._objects[0].set("fill","rgba(255,0,0,0"),c.renderAll())}(e)}),e.on("mouse:move",e=>{!function(e){if(!i.down)return;const t=c.getPointer(e.e);u.origX>t.x&&u.rect.set({left:Math.abs(t.x)}),u.origY>t.y&&u.rect.set({top:Math.abs(t.y)}),u.rect.set({width:Math.abs(u.origX-t.x)}),u.rect.set({height:Math.abs(u.origY-t.y)}),c.renderAll()}(e)}),e.on("mouse:up",t=>{g(t,e)})}const f={uploaded:!1,name:null},p={};let w=null;function b(){f.uploaded=!0;const e=document.createElement("canvas");if(p.maximumCanvasHeight<this.height){const t=p.maximumCanvasHeight/this.height;if(e.height=p.maximumCanvasHeight,e.width=this.width*t,p.maximumCanvasWidth<e.width){const t=p.maximumCanvasWidth/this.width;e.width=p.maximumCanvasWidth,e.height*=t}e.getContext("2d").drawImage(this,0,0,e.width,e.height),w.setWidth(e.width),w.setHeight(e.height),w.setBackgroundColor({source:e.toDataURL()},()=>{w.renderAll()})}else if(p.maximumCanvasWidth<this.width){const t=p.maximumCanvasWidth/this.width;e.width=p.maximumCanvasWidth,e.height*=t,e.getContext("2d").drawImage(this,0,0,e.width,e.height),w.setWidth(e.width),w.setHeight(e.height),w.setBackgroundColor({source:e.toDataURL()},()=>{w.renderAll()})}else w.setWidth(this.width),w.setHeight(this.height),w.setBackgroundColor({source:this.src},()=>{w.renderAll()})}function v(e){const t=new Image;t.src=e.target.result,t.onload=b}window.readURL=function(e){if(e.files&&e.files[0]){p.maximumCanvasHeight=window.innerHeight-54,p.maximumCanvasWidth=window.innerWidth-110;const t=new FileReader;f.name=e.files[0].name,t.onload=v,t.readAsDataURL(e.files[0])}};const y=function(){const e=new r.a.Canvas("c",{selection:!1});return e.setBackgroundColor({source:"sample-img.jpg",repeat:"repeat"},()=>{e.renderAll()}),r.a.Object.prototype.transparentCorners=!1,m(e),e}();w=y}]);