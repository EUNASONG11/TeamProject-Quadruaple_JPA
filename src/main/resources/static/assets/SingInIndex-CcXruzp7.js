import{g as d,J as R,t as A,u as K,r as l,s as p,j as e,I as k,B as O,L as P,e as y,h as N,R as H,H as u,a6 as z}from"./index-DZF_lMwV.js";import{U as w}from"./api-RMrr9BxD.js";/* empty css                    */import{F as n}from"./index-CtHLdL8P.js";import{C as I}from"./index-C8wTgk4K.js";import"./motion-DnGLBzQj.js";import"./collapse-BbEVqHco.js";import"./zoom-CNuMB0di.js";import"./Portal-hI7XGsNB.js";import"./useBreakpoint-Dmvi043U.js";import"./index-BG6u9KEd.js";import"./index-Cbswu_Hk.js";import"./index-D-wHe6FV.js";import"./useId-DRiPHj_v.js";import"./isMobile-DjGTsQxe.js";import"./roundedArrow-7xBDnTzZ.js";import"./useLocale-B0IsDvs_.js";import"./Checkbox-ClYwGTmj.js";import"./useBubbleLock-DIlnYmJl.js";const J="/assets/logo_1-XpaFKeEm.png",M=window.location.origin,V=`${M}/signup/kakao`,X="http://112.222.157.157:5231",q=`${X}/oauth2/authorization/kakao?redirect_uri=${V}`,G=()=>{window.location.href=`${q}`},fe=()=>{const o=d("user"),E=o==null?void 0:o.email,[S]=n.useForm(),[,C]=R(A),c=K(),L=()=>{c("/")},T=()=>{c("/business")},[a,f]=l.useState("personal"),[i,$]=l.useState(o?o.isSaveLogin:!1),[m,x]=l.useState(o?o.isSaveEmail:!1),F=async t=>{var h,b,g,v,j;const D=a==="personal"?w.signInUser:w.signInBusiness;try{const s=await y.post(`${D}`,t),r=s.data;return r.code==="200 성공"&&(p("accessToken",s.data.accessToken),p("user",{userId:s.data.userId,email:t.email,isSaveLogin:i,isSaveEmail:m,ProviderType:N.LOCAL,role:r.role,strfDtos:r.strfDtos}),C({userId:r.userId,accessToken:r.accessToken,role:[...r.role],providerType:N.LOCAL,strfDtos:r.strfDtos})),r.role.includes(H.BUSI)===!0?T():L(),r}catch(s){return console.log("로그인 에러:",s),y.isAxiosError(s)&&(console.log((h=s.response)==null?void 0:h.status),((b=s.response)==null?void 0:b.status)===400&&u.error("계정을 찾을 수 없습니다"),((g=s.response)==null?void 0:g.status)===401&&u.error("잘못된 비밀번호입니다"),((v=s.response)==null?void 0:v.status)===403&&u.error("개인회원 계정입니다. 사업자 로그인을 부탁드립니다."),((j=s.response)==null?void 0:j.status)===405&&u.error(a==="personal"?"사업자 계정입니다. 개인회원 로그인을 부탁드립니다.":"개인회원 계정입니다. 사업자 로그인을 부탁드립니다.")),z("accessToken"),null}},U=t=>{F(t)},_=()=>{$(!i),i===!0&&x(!1),i===!1&&x(!0)},B=()=>{x(!m)};return l.useEffect(()=>{const t=d("user");p("user",{...t,isSaveLogin:!1})},[i]),l.useEffect(()=>{const t=d("user");p("user",{...t,isSaveEmail:!1,email:""})},[m]),l.useEffect(()=>{},[a]),e.jsxs("div",{className:"w-full h-screen flex flex-col items-center justify-center gap-4",children:[e.jsx("div",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:" w-[44.2vw] max-w-[300px] h-auto ",onClick:()=>{c("/")},children:e.jsx("img",{src:J,alt:"main_logo",className:"cursor-pointer"})})}),e.jsxs("div",{className:"w-full flex items-center justify-center gap-6",children:[e.jsx("div",{className:`text-base pb-2 ${a==="personal"?"text-primary":"text-slate-400"} 
          ${a==="personal"?"border-b-[2px] border-primary":"border-b-1 border-slate-200 hover:text-primary"}`,onClick:()=>f("personal"),children:"개인회원"}),e.jsx("div",{className:`text-base pb-2 ${a==="business"?"text-primary":"text-slate-400"}
          ${a==="business"?"border-b-[2px] border-primary":"border-b-1 border-slate-200 hover:text-primary"}`,onClick:()=>f("business"),children:"기업회원"})]}),e.jsx("div",{className:"w-full px-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"w-full",children:[e.jsxs(n,{form:S,name:"register",className:"custom-form",onFinish:t=>U(t),scrollToFirstError:!0,children:[e.jsx(n.Item,{name:"email",label:"이메일",labelCol:{span:24},initialValue:E||"",className:"custom-input-item",children:e.jsx(k,{placeholder:"이메일을 입력하세요",style:{height:"48px"}})}),e.jsx(n.Item,{name:"pw",label:"비밀번호",labelCol:{span:24},className:"custom-input-item",children:e.jsx(k.Password,{placeholder:"비밀번호를 입력하세요",style:{height:"48px"}})}),e.jsxs("div",{className:"w-full flex items-center justify-start",children:[e.jsx(I,{checked:i,onChange:_,className:"text-slate-500 text-xs select-none",children:"로그인 유지"}),e.jsx(I,{checked:m,onChange:B,className:"text-slate-500 text-xs select-none",children:"아이디 저장"})]}),e.jsx(n.Item,{className:"m-0",children:e.jsx(O,{type:"primary",htmlType:"submit",block:!0,className:"font-semibold text-base h-12 my-4",children:"로그인"})})]}),e.jsxs("div",{className:"w-full flex items-center justify-center gap-6",children:[e.jsx("button",{type:"button",className:"text-slate-500 text-xs sm:text-sm ",onClick:()=>c("/user/findpw"),children:"비밀번호 찾기"}),e.jsx("span",{className:"text-slate-200",children:"|"}),e.jsx(P,{to:"/signup/index",className:"text-slate-500 text-xs sm:text-sm ",children:"회원가입"})]})]}),e.jsxs("div",{className:`w-full ${a!=="business"?"visible":"invisible"}`,children:[e.jsx("p",{className:"text-slate-500 text-center text-sm relative my-4 before:absolute before:w-2/5 before:h-[1px] before:bg-slate-200 before:top-1/2 before:left-0 after:absolute after:w-2/5 after:h-[1px] after:bg-slate-200 after:top-1/2 after:right-0",children:"또는"}),e.jsxs("button",{type:"button",onClick:G,className:"w-full h-12 px-6 bg-[#FEE500] hover:bg-[#FEE500]/80 rounded-md flex items-center",children:[e.jsx("img",{src:"/images/kakaoIcon.svg",alt:"kakao"}),e.jsx("p",{className:"w-full text-center font-semibold text-base text-[#191600] ",children:"카카오 로그인"})]})]})]})})]})};export{fe as default};
