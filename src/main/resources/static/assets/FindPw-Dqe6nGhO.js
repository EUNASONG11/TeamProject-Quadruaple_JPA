import{r as l,u as d,e as x,j as s,T as u,I as f,B as h}from"./index-DZF_lMwV.js";import"./jwt-C3mglyXF.js";import{F as a}from"./index-CtHLdL8P.js";import{S as g}from"./index-Bv825Ok0.js";import"./motion-DnGLBzQj.js";import"./collapse-BbEVqHco.js";import"./zoom-CNuMB0di.js";import"./Portal-hI7XGsNB.js";import"./useBreakpoint-Dmvi043U.js";import"./index-BG6u9KEd.js";import"./index-Cbswu_Hk.js";import"./index-D-wHe6FV.js";import"./useId-DRiPHj_v.js";import"./isMobile-DjGTsQxe.js";import"./roundedArrow-7xBDnTzZ.js";import"./useLocale-B0IsDvs_.js";const j=()=>{const[r]=a.useForm(),o=d(),[n,i]=l.useState(!1),m=l.useCallback(async e=>{const c={email:e.email};try{const t=await x.post("/api/user/password",c);console.log(t.data),t.data&&(i(!1),o("/signin"))}catch(t){console.log("임시 비번 이메일",t),i(!1)}},[]),p=e=>{i(!0),console.log(e),m(e)};return s.jsxs("div",{children:[s.jsx(u,{title:"임시 비밀번호 발송",onClick:()=>{o("/signin")},icon:"back"}),s.jsxs("div",{className:`mt-[100px] flex flex-col justify-center items-start w-full\r
      px-8 gap-[20px]`,children:[s.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"이메일 인증 확인"}),s.jsx("div",{className:"w-full",children:s.jsx(g,{spinning:n,tip:"이메일을 발송중입니다.",children:s.jsxs(a,{form:r,onFinish:p,requiredMark:!1,className:"w-full",style:{position:"relative"},children:[s.jsx(a.Item,{name:"email",label:"이메일",labelCol:{span:24},rules:[{type:"email",message:"이메일 형식을 입력해주세요."},{required:!0,message:"이메일을 입력해주세요."}],className:"w-full",children:s.jsx(f,{placeholder:"이메일을 입력해주세요.",style:{height:"60px",width:"100%"}})}),s.jsx(a.Item,{children:s.jsx(h,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"임시 비밀번호 발송"})})]})})})]})]})},R=l.memo(j);export{R as default};
