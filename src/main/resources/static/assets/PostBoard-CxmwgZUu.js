import{g as B,c as P,u as E,r as a,j as e,I as u,B as R,H as h}from"./index-DZF_lMwV.js";import{S as U}from"./ScheduleDay-l5D822z2.js";import{j as g}from"./jwt-C3mglyXF.js";import{F as o}from"./index-CtHLdL8P.js";import{U as k}from"./index-BU215R5q.js";import"./match-DOxPiXvs.js";import"./index-C8yBNrXo.js";import"./index-BDHbZjIV.js";import"./index-DWVMhexM.js";import"./index-CqiZLVFA.js";import"./index-BMyrdrr4.js";import"./index-B2_Wd0k0.js";import"./tripAtom-Bk31_AZq.js";import"./MarkerClusterer-EbPm5vli.js";import"./index-DZ82jsPs.js";import"./index-Cbswu_Hk.js";import"./index-D-wHe6FV.js";import"./Portal-hI7XGsNB.js";import"./useId-DRiPHj_v.js";import"./isMobile-DjGTsQxe.js";import"./motion-DnGLBzQj.js";import"./roundedArrow-7xBDnTzZ.js";import"./zoom-CNuMB0di.js";import"./collapse-BbEVqHco.js";import"./useBreakpoint-Dmvi043U.js";import"./index-BG6u9KEd.js";import"./useLocale-B0IsDvs_.js";import"./fade-CSzS8umC.js";import"./CheckOutlined-B95BnGwp.js";const je=()=>{var x;B("accessToken");const[j]=P(),p=parseInt(j.get("tripId")),c=E(),y=()=>{c(-1)},b=()=>{c("/scheduleboard")},[q,C]=a.useState(""),[O,z]=a.useState("여행기 제목"),[A,M]=a.useState(""),[w,v]=a.useState({}),[n,m]=a.useState([]),[S,d]=a.useState(!1),N=async()=>{try{const t=await g.get(`/api/trip?trip_id=${p}`);console.log("여행확인하기",t.data);const l=t.data.data;v(l)}catch(t){console.log(t)}};a.useEffect(()=>{N()},[]);const[I]=o.useForm(),T=({fileList:t})=>m(t),D=async t=>{const{title:l,file:r,content:F}=t,L={tripId:p,title:l,content:F},i=new FormData;m(r.fileList),i.append("req",new Blob([JSON.stringify(L)],{type:"application/json"})),console.log(t),console.log(n),r&&r.fileList&&r.fileList.length>0&&r.fileList.forEach(s=>{i.append("tripReviewPic",s.originFileObj)});const f=i.get("p");f&&f.text().then(s=>console.log("p의 내용:",s)),console.log("보낸 데이터",[...i]);try{const s=await g.post("/api/trip-review",i);s.data.code==="200 성공"&&(h.success("여행기 등록에 성공했습니다"),b()),console.log(s.data)}catch(s){s.response.status===400&&(h.error("아직 완료되지 않은 여행입니다."),y()),console.error(s)}};return e.jsx("div",{children:e.jsx("div",{className:"mt-[60px] py-[40px] flex flex-col gap-[40px]",children:e.jsx("div",{className:"flex flex-col  px-[32px]",children:e.jsxs(o,{form:I,onFinish:D,layout:"vertical",className:"flex flex-col gap-[48px]",children:[e.jsx(o.Item,{name:"file",rules:[{required:!0,message:"여행기를 위한 사진을 올려주세요."}],children:e.jsx(k,{id:"file",listType:"picture-card",beforeUpload:()=>!1,fileList:n,onChange:T,accept:"image/*",multiple:!0,children:n.length<5&&"+ Upload"})}),e.jsx(o.Item,{name:"title",className:`border-b ${S?"border-primary":"border-slate-200"}`,children:e.jsx(u,{variant:"borderless",className:` px-[10px] py-[10px]\r
                text-slate-400 text-[36px] font-semibold\r
              placeholder:text-slate-400\r
                 `,onFocus:()=>d(!0),onBlur:()=>d(!1),placeholder:"여행기 제목"})}),e.jsx(o.Item,{name:"content",children:e.jsx(u.TextArea,{rows:4,placeholder:"이번 여행은 어떠셨나요? 여행에 대한 감상과 여행에서 경험한 꿀팁들을 남겨 다른 회원님들과 공유해보세요 !",variant:"borderless",maxLength:500,autoSize:{minRows:3,maxRows:5},style:{height:300,resize:"none"},className:"placeholder: text-[24px] placeholder: text-slate-400"})}),e.jsx("div",{className:"flex flex-col gap-[50px]",children:(x=w.days)==null?void 0:x.map((t,l)=>e.jsx(U,{data:t,showMap:!1,readOnly:!0}))}),e.jsx(o.Item,{className:"w-full",children:e.jsx(R,{type:"primary",htmlType:"submit",className:`w-full h-[80px] \r
                    text-slate-50 text-[24px] font-semibold`,children:"완료"})})]})})})})};export{je as default};
