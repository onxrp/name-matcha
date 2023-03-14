(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{44472:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return s(28836)}])},28836:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var l=s(85893),n=s(48863),a=s(11151);s(25675);var r=s(67294),i=s(30036),o=s(35441),c=s(19570),m=s(11710),d=s(43137);let u=e=>{let{text:t}=e,[s,n]=(0,r.useState)(!1);return(0,l.jsx)("button",{type:"button",className:"outline-none focus:ring-1 cursor-pointer",onClick:()=>{n(!0),navigator.clipboard.writeText(t),setTimeout(()=>{n(!1)},1e3)},disabled:s,children:s?(0,l.jsx)(i.Z,{weight:"bold",size:18}):(0,l.jsx)(o.Z,{size:18,weight:"bold"})})},x=()=>{let[e,t]=(0,r.useState)("idle"),[s,n]=(0,r.useState)(null),[a,i]=(0,r.useState)(null),[o,x]=(0,r.useState)(d.u.ibcDomains),h=(0,r.useCallback)(e=>{e.preventDefault();let s=new FormData(e.currentTarget),l=s.get("name").toString().trim();if(!l){t("error"),i("Name is required");return}t("loading"),d.Z.resolve(l,o).then(e=>{t("success"),i(null),n(e)}).catch(e=>{t("error"),i(e.type)})},[o]);return(0,l.jsxs)("section",{className:"w-full sm:w-4/5 md:w-1/3 mt-4 sm:mt-16 mx-auto",children:[(0,l.jsxs)("form",{onSubmit:h,children:[(0,l.jsx)("h1",{className:"font-bold text-2xl",children:"Name Resolution"}),(0,l.jsxs)("div",{className:"mt-8",children:[(0,l.jsx)("label",{htmlFor:"name-service",className:"block text-sm font-medium text-slate-200",children:"Name Service"}),(0,l.jsxs)("select",{id:"name-service",name:"name-service",className:"mt-2 px-3 py-2 border shadow-sm caret-white bg-[#111111] text-white border-slate-400 placeholder-slate-400 outline-none block w-full rounded-md sm:text-sm focus:ring-1",onChange:e=>{x(e.target.value)},children:[(0,l.jsx)("option",{value:d.u.ibcDomains,children:"IBC Domains"}),(0,l.jsx)("option",{value:d.u.icns,children:"ICNS"}),(0,l.jsx)("option",{value:d.u.stargazeNames,children:"Stargaze Names"})]})]}),(0,l.jsxs)("div",{className:"flex items-end justify-center mt-4",children:[(0,l.jsxs)("div",{className:"flex-grow",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-200",children:"Resolve"}),(0,l.jsx)("input",{id:"name",type:"text",name:"name",autoComplete:"off",placeholder:"Enter name to resolve",className:"mt-2 px-3 py-2 border shadow-sm caret-white bg-[#111111] text-white border-slate-400 placeholder-slate-400 outline-none block w-full rounded-md sm:text-sm focus:ring-1"})]}),(0,l.jsx)("button",{type:"submit",className:"bg-indigo-500 p-2 border border-indigo-500 rounded ml-2 outline-none focus:ring-1",children:(0,l.jsx)(c.Z,{weight:"bold",size:20})})]}),"idle"===e?(0,l.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"For example - leapwallet.osmo"}):null]}),"idle"===e?null:(0,l.jsxs)("div",{className:"w-full min-h-[5rem] mt-8",children:["loading"===e?(0,l.jsx)("div",{className:"flex items-center justify-center",children:(0,l.jsx)(m.Z,{className:"animate-spin",size:24,weight:"bold"})}):null,"success"===e&&null!==s?(0,l.jsxs)("div",{className:"text-sm text-slate-200",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("p",{children:"Result"}),(0,l.jsx)(u,{text:s})]}),(0,l.jsx)("p",{className:"mt-2 p-2 bg-slate-700 rounded-lg font-mono text-sm",children:s})]}):null,"error"===e?(0,l.jsxs)("p",{className:"text-red-400 text-sm -mt-4",children:[(0,l.jsx)("strong",{children:"Error:"})," ",(0,l.jsx)("code",{children:a})]}):null]})]})},h=()=>{let[e,t]=(0,r.useState)("idle"),[s,n]=(0,r.useState)(null),[a,i]=(0,r.useState)(null),[o,x]=(0,r.useState)(d.u.ibcDomains),h=(0,r.useCallback)(e=>{e.preventDefault();let s=new FormData(e.currentTarget),l=s.get("address").toString().trim();if(!l){t("error"),i("Address is required");return}t("loading"),d.Z.lookup(l,o).then(e=>{t("success"),i(null),n(e)}).catch(e=>{t("error"),i(e.type)})},[o]);return(0,l.jsxs)("section",{className:"w-full sm:w-4/5 md:w-1/3 mt-4 sm:mt-16 mx-auto",children:[(0,l.jsxs)("form",{onSubmit:h,children:[(0,l.jsx)("h1",{className:"font-bold text-2xl",children:"Name Lookup"}),(0,l.jsxs)("div",{className:"mt-8",children:[(0,l.jsx)("label",{htmlFor:"name-service",className:"block text-sm font-medium text-slate-200",children:"Name Service"}),(0,l.jsxs)("select",{id:"name-service",name:"name-service",className:"mt-2 px-3 py-2 border shadow-sm caret-white bg-[#111111] text-white border-slate-400 placeholder-slate-400 outline-none block w-full rounded-md sm:text-sm focus:ring-1",onChange:e=>{x(e.target.value)},children:[(0,l.jsx)("option",{value:d.u.ibcDomains,children:"IBC Domains"}),(0,l.jsx)("option",{value:d.u.icns,children:"ICNS"}),(0,l.jsx)("option",{value:d.u.stargazeNames,children:"Stargaze Names"})]})]}),(0,l.jsxs)("div",{className:"flex items-end justify-center mt-4",children:[(0,l.jsxs)("div",{className:"flex-grow",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-200",children:"Lookup"}),(0,l.jsx)("input",{id:"address",type:"text",name:"address",autoComplete:"off",placeholder:"Enter address here",className:"mt-2 px-3 py-2 border shadow-sm caret-white bg-[#111111] text-white border-slate-400 placeholder-slate-400 outline-none block w-full rounded-md sm:text-sm focus:ring-1"})]}),(0,l.jsx)("button",{type:"submit",className:"bg-indigo-500 p-2 border border-indigo-500 rounded ml-2 outline-none focus:ring-1",children:(0,l.jsx)(c.Z,{weight:"bold",size:20})})]}),"idle"===e?(0,l.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"For example - osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9"}):null]}),"idle"===e?null:(0,l.jsxs)("div",{className:"w-full min-h-[5rem] mt-8",children:["loading"===e?(0,l.jsx)("div",{className:"flex items-center justify-center",children:(0,l.jsx)(m.Z,{className:"animate-spin",size:24,weight:"bold"})}):null,"success"===e&&null!==s?(0,l.jsxs)("div",{className:"text-sm text-slate-200",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("p",{children:"Result"}),(0,l.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(s)},children:(0,l.jsx)(u,{text:s})})]}),(0,l.jsx)("p",{className:"mt-2 p-2 bg-slate-700 rounded-lg font-mono text-sm",children:s})]}):null,"error"===e?(0,l.jsxs)("p",{className:"text-red-400 text-sm -mt-4",children:[(0,l.jsx)("strong",{children:"Error:"})," ",(0,l.jsx)("code",{children:a})]}):null]})]})},p=()=>(0,l.jsx)("main",{className:"w-full h-[70%] py-8",style:{background:"linear-gradient(90deg, #111111 21px, transparent 1%) center, linear-gradient(#111111 21px, transparent 1%) center, #a766ccc4",backgroundSize:"22px 22px"},children:(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row justify-start sm:justify-center gap-4",children:[(0,l.jsx)(x,{}),(0,l.jsx)(h,{})]})});function j(e){return(0,l.jsx)(p,{})}var f=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(j,{...e})}):j(e)},pageOpts:{filePath:"pages/demo.mdx",route:"/demo",headings:[],title:"Demo"},pageNextRoute:"/demo"})},46091:function(){},13995:function(){},68044:function(){},84095:function(){},83284:function(){}},function(e){e.O(0,[714,464,944,804,863,606,774,888,179],function(){return e(e.s=44472)}),_N_E=e.O()}]);