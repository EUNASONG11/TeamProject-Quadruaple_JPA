import{K as p,r,aG as P,ae as _,aa as se,_ as b,aY as _e,aI as He,z as g,aZ as Ze,aU as qe,S as Je,a_ as et}from"./index-B-t7JaaM.js";import{i as tt}from"./Portal-CwazXomh.js";const nt=new p("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),rt=new p("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),at=new p("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),it=new p("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),st=new p("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new p("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new p("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new p("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ut={"slide-up":{inKeyframes:nt,outKeyframes:rt},"slide-down":{inKeyframes:at,outKeyframes:it},"slide-left":{inKeyframes:st,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},Ct=(e,s)=>{const{antCls:l}=e,i=`${l}-${s}`,{inKeyframes:f,outKeyframes:a}=ut[s];return[tt(i,f,a,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function dt(e,s){var l=e.prefixCls,i=e.invalidate,f=e.item,a=e.renderItem,u=e.responsive,S=e.responsiveDisabled,m=e.registerSize,C=e.itemKey,I=e.className,B=e.style,H=e.children,Z=e.display,c=e.order,$=e.component,U=$===void 0?"div":$,K=P(e,ct),v=u&&!Z;function X(R){m(C,R)}r.useEffect(function(){return function(){X(null)}},[]);var q=a&&f!==x?a(f,{index:c}):H,N;i||(N={opacity:v?0:1,height:v?0:x,overflowY:v?"hidden":x,order:u?c:x,pointerEvents:v?"none":x,position:v?"absolute":x});var Y={};v&&(Y["aria-hidden"]=!0);var E=r.createElement(U,_({className:se(!i&&l,I),style:b(b({},N),B)},Y,K,{ref:s}),q);return u&&(E=r.createElement(_e,{onResize:function(J){var A=J.offsetWidth;X(A)},disabled:S},E)),E}var W=r.forwardRef(dt);W.displayName="Item";function mt(e){if(typeof MessageChannel>"u")He(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function vt(){var e=r.useRef(null),s=function(i){e.current||(e.current=[],mt(function(){qe.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(i)};return s}function M(e,s){var l=r.useState(s),i=g(l,2),f=i[0],a=i[1],u=Ze(function(S){e(function(){a(S)})});return[f,u]}var j=Je.createContext(null),yt=["component"],gt=["className"],St=["className"],Rt=function(s,l){var i=r.useContext(j);if(!i){var f=s.component,a=f===void 0?"div":f,u=P(s,yt);return r.createElement(a,_({},u,{ref:l}))}var S=i.className,m=P(i,gt),C=s.className,I=P(s,St);return r.createElement(j.Provider,{value:null},r.createElement(W,_({ref:l,className:se(S,C)},m,I)))},Ce=r.forwardRef(Rt);Ce.displayName="RawItem";var pt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Ie="responsive",Ne="invalidate";function Et(e){return"+ ".concat(e.length," ...")}function ht(e,s){var l=e.prefixCls,i=l===void 0?"rc-overflow":l,f=e.data,a=f===void 0?[]:f,u=e.renderItem,S=e.renderRawItem,m=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,B=e.ssr,H=e.style,Z=e.className,c=e.maxCount,$=e.renderRest,U=e.renderRawRest,K=e.suffix,v=e.component,X=v===void 0?"div":v,q=e.itemComponent,N=e.onVisibleChange,Y=P(e,pt),E=B==="full",R=vt(),J=M(R,null),A=g(J,2),F=A[0],Oe=A[1],h=F||0,xe=M(R,new Map),oe=g(xe,2),fe=oe[0],be=oe[1],Ke=M(R,0),le=g(Ke,2),De=le[0],ze=le[1],Me=M(R,0),ue=g(Me,2),L=ue[0],Pe=ue[1],We=M(R,0),ce=g(We,2),T=ce[0],$e=ce[1],Ue=r.useState(null),de=g(Ue,2),ee=de[0],me=de[1],Xe=r.useState(null),ve=g(Xe,2),V=ve[0],Ye=ve[1],O=r.useMemo(function(){return V===null&&E?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Ae=r.useState(!1),ye=g(Ae,2),Fe=ye[0],Le=ye[1],te="".concat(i,"-item"),ge=Math.max(De,L),ne=c===Ie,y=a.length&&ne,Se=c===Ne,Te=y||typeof c=="number"&&a.length>c,w=r.useMemo(function(){var t=a;return y?F===null&&E?t=a:t=a.slice(0,Math.min(a.length,h/I)):typeof c=="number"&&(t=a.slice(0,c)),t},[a,I,F,c,y]),re=r.useMemo(function(){return y?a.slice(O+1):a.slice(w.length)},[a,w,y,O]),k=r.useCallback(function(t,n){var o;return typeof m=="function"?m(t):(o=m&&(t==null?void 0:t[m]))!==null&&o!==void 0?o:n},[m]),Ve=r.useCallback(u||function(t){return t},[u]);function G(t,n,o){V===t&&(n===void 0||n===ee)||(Ye(t),o||(Le(t<a.length-1),N==null||N(t)),n!==void 0&&me(n))}function ke(t,n){Oe(n.clientWidth)}function Re(t,n){be(function(o){var d=new Map(o);return n===null?d.delete(t):d.set(t,n),d})}function Ge(t,n){Pe(n),ze(L)}function je(t,n){$e(n)}function ae(t){return fe.get(k(w[t],t))}et(function(){if(h&&typeof ge=="number"&&w){var t=T,n=w.length,o=n-1;if(!n){G(0,null);return}for(var d=0;d<n;d+=1){var z=ae(d);if(E&&(z=z||0),z===void 0){G(d-1,void 0,!0);break}if(t+=z,o===0&&t<=h||d===o-1&&t+ae(o)<=h){G(o,null);break}else if(t+ge>h){G(d-1,t-z-T+L);break}}K&&ae(0)+T>h&&me(null)}},[h,fe,L,T,k,w]);var pe=Fe&&!!re.length,Ee={};ee!==null&&y&&(Ee={position:"absolute",left:ee,top:0});var D={prefixCls:te,responsive:y,component:q,invalidate:Se},Qe=S?function(t,n){var o=k(t,n);return r.createElement(j.Provider,{key:o,value:b(b({},D),{},{order:n,item:t,itemKey:o,registerSize:Re,display:n<=O})},S(t,n))}:function(t,n){var o=k(t,n);return r.createElement(W,_({},D,{order:n,key:o,item:t,renderItem:Ve,itemKey:o,registerSize:Re,display:n<=O}))},he={order:pe?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Ge,display:pe},ie=$||Et,Be=U?r.createElement(j.Provider,{value:b(b({},D),he)},U(re)):r.createElement(W,_({},D,he),typeof ie=="function"?ie(re):ie),we=r.createElement(X,_({className:se(!Se&&i,Z),style:H,ref:s},Y),w.map(Qe),Te?Be:null,K&&r.createElement(W,_({},D,{responsive:ne,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:je,display:!0,style:Ee}),K));return ne?r.createElement(_e,{onResize:ke,disabled:!y},we):we}var Q=r.forwardRef(ht);Q.displayName="Overflow";Q.Item=Ce;Q.RESPONSIVE=Ie;Q.INVALIDATE=Ne;export{Q as F,at as a,rt as b,it as c,Ct as i,nt as s};
