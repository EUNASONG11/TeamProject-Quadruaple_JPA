import{ad as r,az as p,aA as E,r as i,aB as I}from"./index-DH-Wz4Mj.js";function O(o){if(o)return{closable:o.closable,closeIcon:o.closeIcon}}function g(o){const{closable:s,closeIcon:n}=o||{};return r.useMemo(()=>{if(!s&&(s===!1||n===!1||n===null))return!1;if(s===void 0&&n===void 0)return null;let e={closeIcon:typeof n!="boolean"&&n!==null?n:void 0};return s&&typeof s=="object"&&(e=Object.assign(Object.assign({},e),s)),e},[s,n])}function C(){const o={};for(var s=arguments.length,n=new Array(s),e=0;e<s;e++)n[e]=arguments[e];return n.forEach(t=>{t&&Object.keys(t).forEach(l=>{t[l]!==void 0&&(o[l]=t[l])})}),o}const v={};function k(o,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v;const e=g(o),t=g(s),l=typeof e!="boolean"?!!(e!=null&&e.disabled):!1,c=r.useMemo(()=>Object.assign({closeIcon:r.createElement(p,null)},n),[n]),u=r.useMemo(()=>e===!1?!1:e?C(c,t,e):t===!1?!1:t?C(c,t):c.closable?c:!1,[e,t,c]);return r.useMemo(()=>{if(u===!1)return[!1,null,l];const{closeIconRender:d}=c,{closeIcon:m}=u;let a=m;if(a!=null){d&&(a=d(m));const f=E(u,!0);Object.keys(f).length&&(a=r.isValidElement(a)?r.cloneElement(a,f):r.createElement("span",Object.assign({},f),a))}return[!0,a,l]},[u,c])}function b(){}const R=i.createContext({add:b,remove:b});function x(o){const s=i.useContext(R),n=i.useRef(null);return I(t=>{if(t){const l=o?t.querySelector(o):t;s.add(l),n.current=l}else s.remove(n.current)})}export{x as a,O as p,k as u};
