import{u as Q,C as p,G as T}from"./Checkbox-D1MFB7y6.js";import{r,Q as X,a8 as D,a9 as F,aa as J,ab as h}from"./index-B-t7JaaM.js";var L=function(t,u){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&u.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)u.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(o[s[a]]=t[s[a]]);return o};const U=r.forwardRef((t,u)=>{const{defaultValue:o,children:s,options:a=[],prefixCls:S,className:V,rootClassName:N,style:P,onChange:f}=t,l=L(t,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:_,direction:E}=r.useContext(X),[i,v]=r.useState(l.value||o||[]),[k,g]=r.useState([]);r.useEffect(()=>{"value"in l&&v(l.value||[])},[l.value]);const m=r.useMemo(()=>a.map(e=>typeof e=="string"||typeof e=="number"?{label:e,value:e}:e),[a]),w=e=>{g(n=>n.filter(c=>c!==e))},j=e=>{g(n=>[].concat(h(n),[e]))},I=e=>{const n=i.indexOf(e.value),c=h(i);n===-1?c.push(e.value):c.splice(n,1),"value"in l||v(c),f==null||f(c.filter(x=>k.includes(x)).sort((x,H)=>{const K=m.findIndex(b=>b.value===x),M=m.findIndex(b=>b.value===H);return K-M}))},d=_("checkbox",S),C=`${d}-group`,y=D(d),[G,$,A]=Q(d,y),q=F(l,["value","disabled"]),B=a.length?m.map(e=>r.createElement(p,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:l.disabled,value:e.value,checked:i.includes(e.value),onChange:e.onChange,className:`${C}-item`,style:e.style,title:e.title,id:e.id,required:e.required},e.label)):s,R={toggleOption:I,value:i,disabled:l.disabled,name:l.name,registerValue:j,cancelValue:w},z=J(C,{[`${C}-rtl`]:E==="rtl"},V,N,A,y,$);return G(r.createElement("div",Object.assign({className:z,style:P},q,{ref:u}),r.createElement(T.Provider,{value:R},B)))}),O=p;O.Group=U;O.__ANT_CHECKBOX=!0;export{O as C};
