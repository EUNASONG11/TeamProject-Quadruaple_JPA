import{r as p,u as d,j as e,T as x,I as a,B as o,d as h}from"./index-BE7VYVOv.js";/* empty css                    */import{F as s}from"./index-b09DTqhM.js";import{C as l}from"./index-DE9_EnvG.js";import"./Portal-B27f54IH.js";import"./collapse-BbEVqHco.js";import"./zoom-CfBlLY5N.js";import"./Keyframes-DuZXdA1R.js";import"./index-1QgSoTkJ.js";import"./index-BFrQ11KA.js";import"./index-IFp1_UId.js";import"./useId-CgD2_zXU.js";import"./useZIndex-Bue6RuKI.js";import"./useLocale-De-VlUhZ.js";import"./ExclamationCircleFilled-CPpPIG-H.js";import"./Checkbox-RFX96_Lv.js";const S=()=>{const[i,u]=p.useState(""),c=d(),m=async()=>{const t={b_no:[i.replace(/-/g,"")]};try{console.log("🔍 요청 데이터:",t);const r=await h.post("https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=undefined",t,{headers:{"Content-Type":"application/json",Accept:"application/json"}});console.log("✅ 응답 데이터:",r.data)}catch(r){console.log("✅ fetchBusinessStatus error:",r)}};return console.log(void 0),e.jsxs("div",{children:[e.jsx(x,{title:"회원가입",icon:"back",onClick:()=>c(-1)}),e.jsx("div",{className:"my-6",children:e.jsxs(s,{layout:"vertical",className:"px-4 ",children:[e.jsxs(s.Item,{label:"사업자 등록번호",className:"custom-form-item !text-xs",rules:[{required:!0,message:"Please input!"}],children:[e.jsx(a,{placeholder:"사업자 번호를 입력하세요",value:i,onChange:t=>u(t.target.value),className:"py-[14px] px-3"}),e.jsx(o,{type:"primary",onClick:m,className:"text-base font-medium inline-block px-6 !h-auto",children:"조회"})]}),e.jsx(s.Item,{label:"이름",name:"Input",className:"custom-form-input",rules:[{required:!0,message:"Please input!",whitespace:!0}],children:e.jsx(a,{placeholder:"이름을 입력하세요",className:"py-[14px] px-3"})}),e.jsx(s.Item,{label:"전화번호",name:"phone",className:"custom-form-input",rules:[{pattern:/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,message:"올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)"}],children:e.jsx(a,{placeholder:"휴대폰 번호를 입력하세요",className:"py-[14px] px-3"})}),e.jsx(s.Item,{label:"이메일",name:"Input",className:"custom-form-input",rules:[{required:!0,message:"이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해주세요."},{required:!0,message:"이메일은 필수 입력 항목입니다."}],children:e.jsx(a,{placeholder:"이메일을 입력하세요",className:"py-[14px] px-3"})}),e.jsx(s.Item,{label:"비밀번호",name:"Input",className:"custom-form-input",rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],children:e.jsx(a.Password,{placeholder:"비밀번호를 입력하세요",className:"py-[14px] px-3"})}),e.jsx(s.Item,{label:"비밀번호 확인",name:"Input",className:"custom-form-input",dependencies:["password"],rules:[{required:!0,message:"비밀번호를 다시 확인해 주세요"},({getFieldValue:t})=>({validator(r,n){return!n||t("pw")===n?Promise.resolve():Promise.reject(new Error("비밀번호가 일치하지 않습니다. 다시 입력해주세요."))}})],children:e.jsx(a.Password,{placeholder:"비밀번호 다시 입력하세요",className:"py-[14px] px-3"})}),e.jsx(l,{className:"bg-slate-100 w-full font-medium text-lg  py-5 px-3 rounded-lg my-4 text-slate-700  ",children:"전체 동의합니다."}),e.jsxs(l.Group,{className:"flex flex-col gap-2 w-full",children:[e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(l,{value:"required-2",className:"underline",children:"[필수] 서비스 이용약관"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-2",children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(l,{value:"required-3",className:"underline",children:"[필수] 개인정보 수집 및 이용 동의"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-3",children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(l,{value:"required-4",className:"underline",children:"[필수] 위치서비스 이용 동의"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-4",children:"보기"})]}),e.jsx(l,{value:"option-1",children:"[선택] 이벤트 및 할인 혜택 안내 동의"})]}),e.jsx(s.Item,{children:e.jsx(o,{type:"primary",htmlType:"submit",block:!0,className:"text-base py-3 !h-auto mt-4 mb-12",children:"다음"})})]})})]})};export{S as default};
