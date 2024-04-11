function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CDzwjL1G.js","./CZnAS8i4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{h as N,r as O,at as U,aV as H,o as L,c as $,a as E,G as B,aW as V,m as S}from"./Cpt5G9Co.js";if(!P)var P={map:function(a,u){var p={};return u?a.map(function(h,g){return p.index=g,u.call(p,h)}):a.slice()},naturalOrder:function(a,u){return a<u?-1:a>u?1:0},sum:function(a,u){var p={};return a.reduce(u?function(h,g,m){return p.index=m,h+u.call(p,g)}:function(h,g){return h+g},0)},max:function(a,u){return Math.max.apply(null,u?P.map(a,u):a)}};var W=function(){var a=5,u=8-a,p=1e3;function h(o,t,n){return(o<<2*a)+(t<<a)+n}function g(o){var t=[],n=!1;function l(){t.sort(o),n=!0}return{push:function(r){t.push(r),n=!1},peek:function(r){return n||l(),r===void 0&&(r=t.length-1),t[r]},pop:function(){return n||l(),t.pop()},size:function(){return t.length},map:function(r){return t.map(r)},debug:function(){return n||l(),t}}}function m(o,t,n,l,r,e,f){var c=this;c.r1=o,c.r2=t,c.g1=n,c.g2=l,c.b1=r,c.b2=e,c.histo=f}function y(){this.vboxes=new g(function(o,t){return P.naturalOrder(o.vbox.count()*o.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function z(o,t){if(t.count()){var n=t.r2-t.r1+1,l=t.g2-t.g1+1,r=P.max([n,l,t.b2-t.b1+1]);if(t.count()==1)return[t.copy()];var e,f,c,s,v=0,d=[],b=[];if(r==n)for(e=t.r1;e<=t.r2;e++){for(s=0,f=t.g1;f<=t.g2;f++)for(c=t.b1;c<=t.b2;c++)s+=o[h(e,f,c)]||0;d[e]=v+=s}else if(r==l)for(e=t.g1;e<=t.g2;e++){for(s=0,f=t.r1;f<=t.r2;f++)for(c=t.b1;c<=t.b2;c++)s+=o[h(f,e,c)]||0;d[e]=v+=s}else for(e=t.b1;e<=t.b2;e++){for(s=0,f=t.r1;f<=t.r2;f++)for(c=t.g1;c<=t.g2;c++)s+=o[h(f,c,e)]||0;d[e]=v+=s}return d.forEach(function(_,w){b[w]=v-_}),function(_){var w,k,x,q,C,I=_+"1",M=_+"2",D=0;for(e=t[I];e<=t[M];e++)if(d[e]>v/2){for(x=t.copy(),q=t.copy(),C=(w=e-t[I])<=(k=t[M]-e)?Math.min(t[M]-1,~~(e+k/2)):Math.max(t[I],~~(e-1-w/2));!d[C];)C++;for(D=b[C];!D&&d[C-1];)D=b[--C];return x[M]=C,q[I]=x[M]+1,[x,q]}}(r==n?"r":r==l?"g":"b")}}return m.prototype={volume:function(o){var t=this;return t._volume&&!o||(t._volume=(t.r2-t.r1+1)*(t.g2-t.g1+1)*(t.b2-t.b1+1)),t._volume},count:function(o){var t=this,n=t.histo;if(!t._count_set||o){var l,r,e,f=0;for(l=t.r1;l<=t.r2;l++)for(r=t.g1;r<=t.g2;r++)for(e=t.b1;e<=t.b2;e++)f+=n[h(l,r,e)]||0;t._count=f,t._count_set=!0}return t._count},copy:function(){var o=this;return new m(o.r1,o.r2,o.g1,o.g2,o.b1,o.b2,o.histo)},avg:function(o){var t=this,n=t.histo;if(!t._avg||o){var l,r,e,f,c=0,s=1<<8-a,v=0,d=0,b=0;for(r=t.r1;r<=t.r2;r++)for(e=t.g1;e<=t.g2;e++)for(f=t.b1;f<=t.b2;f++)c+=l=n[h(r,e,f)]||0,v+=l*(r+.5)*s,d+=l*(e+.5)*s,b+=l*(f+.5)*s;t._avg=c?[~~(v/c),~~(d/c),~~(b/c)]:[~~(s*(t.r1+t.r2+1)/2),~~(s*(t.g1+t.g2+1)/2),~~(s*(t.b1+t.b2+1)/2)]}return t._avg},contains:function(o){var t=this,n=o[0]>>u;return gval=o[1]>>u,bval=o[2]>>u,n>=t.r1&&n<=t.r2&&gval>=t.g1&&gval<=t.g2&&bval>=t.b1&&bval<=t.b2}},y.prototype={push:function(o){this.vboxes.push({vbox:o,color:o.avg()})},palette:function(){return this.vboxes.map(function(o){return o.color})},size:function(){return this.vboxes.size()},map:function(o){for(var t=this.vboxes,n=0;n<t.size();n++)if(t.peek(n).vbox.contains(o))return t.peek(n).color;return this.nearest(o)},nearest:function(o){for(var t,n,l,r=this.vboxes,e=0;e<r.size();e++)((n=Math.sqrt(Math.pow(o[0]-r.peek(e).color[0],2)+Math.pow(o[1]-r.peek(e).color[1],2)+Math.pow(o[2]-r.peek(e).color[2],2)))<t||t===void 0)&&(t=n,l=r.peek(e).color);return l},forcebw:function(){var o=this.vboxes;o.sort(function(r,e){return P.naturalOrder(P.sum(r.color),P.sum(e.color))});var t=o[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(o[0].color=[0,0,0]);var n=o.length-1,l=o[n].color;l[0]>251&&l[1]>251&&l[2]>251&&(o[n].color=[255,255,255])}},{quantize:function(o,t){if(!o.length||t<2||t>256)return!1;var n=function(s){var v,d=new Array(1<<3*a);return s.forEach(function(b){v=h(b[0]>>u,b[1]>>u,b[2]>>u),d[v]=(d[v]||0)+1}),d}(o);n.forEach(function(){});var l=function(s,v){var d,b,_,w=1e6,k=0,x=1e6,q=0,C=1e6,I=0;return s.forEach(function(M){(d=M[0]>>u)<w?w=d:d>k&&(k=d),(b=M[1]>>u)<x?x=b:b>q&&(q=b),(_=M[2]>>u)<C?C=_:_>I&&(I=_)}),new m(w,k,x,q,C,I,v)}(o,n),r=new g(function(s,v){return P.naturalOrder(s.count(),v.count())});function e(s,v){for(var d,b=s.size(),_=0;_<p;){if(b>=v||_++>p)return;if((d=s.pop()).count()){var w=z(n,d),k=w[0],x=w[1];if(!k)return;s.push(k),x&&(s.push(x),b++)}else s.push(d),_++}}r.push(l),e(r,.75*t);for(var f=new g(function(s,v){return P.naturalOrder(s.count()*s.volume(),v.count()*v.volume())});r.size();)f.push(r.pop());e(f,t);for(var c=new y;f.size();)c.push(f.pop());return c}}}().quantize,T=function(a){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=a.naturalWidth,this.height=this.canvas.height=a.naturalHeight,this.context.drawImage(a,0,0,this.width,this.height)};T.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var A=function(){};A.prototype.getColor=function(a,u){return u===void 0&&(u=10),this.getPalette(a,5,u)[0]},A.prototype.getPalette=function(a,u,p){var h=function(z){var o=z.colorCount,t=z.quality;if(o!==void 0&&Number.isInteger(o)){if(o===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");o=Math.max(o,2),o=Math.min(o,20)}else o=10;return(t===void 0||!Number.isInteger(t)||t<1)&&(t=10),{colorCount:o,quality:t}}({colorCount:u,quality:p}),g=new T(a),m=function(z,o,t){for(var n,l,r,e,f,c=z,s=[],v=0;v<o;v+=t)l=c[0+(n=4*v)],r=c[n+1],e=c[n+2],((f=c[n+3])===void 0||f>=125)&&(l>250&&r>250&&e>250||s.push([l,r,e]));return s}(g.getImageData().data,g.width*g.height,h.quality),y=W(m,h.colorCount);return y?y.palette():null},A.prototype.getColorFromUrl=function(a,u,p){var h=this,g=document.createElement("img");g.addEventListener("load",function(){var m=h.getPalette(g,5,p);u(m[0],a)}),g.src=a},A.prototype.getImageData=function(a,u){var p=new XMLHttpRequest;p.open("GET",a,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var h=new Uint8Array(this.response);i=h.length;for(var g=new Array(i),m=0;m<h.length;m++)g[m]=String.fromCharCode(h[m]);var y=g.join(""),z=window.btoa(y);u("data:image/png;base64,"+z)}},p.send()},A.prototype.getColorAsync=function(a,u,p){var h=this;this.getImageData(a,function(g){var m=document.createElement("img");m.addEventListener("load",function(){var y=h.getPalette(m,5,p);u(y[0],this)}),m.src=g})};const j={class:"box"},G={class:"controls"},R={class:"lecteur"},F=["src","type"],X={class:"cover"},J={class:"box-1"},K={class:"box-2"},Q={class:"box-3"},Y=["src","alt"],tt=N({__name:"MusicfyPlayer",props:{config:{type:Object,required:!0}},setup(a){const u=a,p=O(),h=O({width:u.config.sizeWidth,height:u.config.sizeHeight}),g=O();return(async()=>{if(u.config.colorDetect){const y=new Image;y.crossOrigin="Anonymous",y.src=u.config.imageSrc,y.onload=()=>{const o=new A().getColor(y);g.value=o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:void 0}}})(),U(async()=>{const{mediaElementPlayer:y}=await H(()=>import("./CDzwjL1G.js"),__vite__mapDeps([0,1]),import.meta.url);y(p.value,{iconSprite:"",audioHeight:40,features:["playpause","current","duration","progress","volume","tracks","fullscreen"],alwaysShowControls:!0,timeAndDurationSeparator:"<span></span>",iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1})}),(y,z)=>(L(),$("div",{class:B(["musicfyplayer",{[`${a.config.colorClass}`]:a.config.colorClass}]),style:V({...S(h),backgroundColor:S(g)})},[E("div",j,[E("div",G,[E("div",R,[E("audio",{ref_key:"audio",ref:p,class:"music fc-media"},[E("source",{src:a.config.audioSrc,type:a.config.audioType},null,8,F)],512)])]),E("div",X,[E("div",J,[E("div",K,[E("div",Q,[E("img",{class:"image",src:a.config.imageSrc,alt:a.config.imageAlt},null,8,Y)])])])])])],6))}});export{tt as _};