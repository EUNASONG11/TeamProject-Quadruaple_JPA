import{u as m,j as e,l,B as c}from"./index-B-t7JaaM.js";import{j as d}from"./jwt-Bl-NaAJk.js";import{T as x}from"./TitleHeader-CbY5H8BK.js";import{F as t}from"./index-B37T6huF.js";import"./index-CIW6QNLh.js";import"./index-BQ6e9REa.js";import"./index-Box-1SdA.js";import"./Portal-CwazXomh.js";import"./responsiveObserver-D7qaU1km.js";import"./zoom-BYTBG-Mc.js";import"./index-Bxet7VyO.js";import"./index-B2p7BWkp.js";import"./index-C2GtDL4h.js";import"./useId-Dwe9TA6R.js";import"./useLocale-B2jXTKV4.js";const Z=()=>{const r=m(),[o]=t.useForm(),i=s=>{console.log(s),p(s)},p=async s=>{const n={pw:s.pw,newPw:s.newPw};try{const a=await d.patch("/api/user/password",n);console.log("비밀번호 변경",a.data),a.data.code==="200 성공"&&r("/signin")}catch(a){console.log("비밀번호 변경",a)}};return e.jsxs("div",{children:[e.jsx(x,{title:"비밀번호 변경",onClick:()=>{r(-1)},icon:"back"}),e.jsxs("div",{className:"mt-[100px] flex flex-col justify-center items-start w-full px-8 gap-[20px]",children:[e.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"비밀번호 변경"}),e.jsx("div",{className:"w-full",children:e.jsxs(t,{form:o,requiredMark:!1,onFinish:i,className:"w-full flex flex-col gap-[20px]",children:[e.jsx(t.Item,{name:"pw",label:"비밀번호",labelCol:{span:24},rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(l.Password,{placeholder:"현재 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(t.Item,{name:"newPw",label:"새 비밀번호",labelCol:{span:24},rules:[{required:!0,message:"새로운 비밀번호를 입력해주세요."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(l.Password,{placeholder:"새로운 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(t.Item,{children:e.jsx(c,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"비밀번호 변경"})})]})})]})]})};export{Z as default};
