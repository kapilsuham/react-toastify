"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[8332],{8862:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(5893),i=n(1151);const o={id:"prevent-duplicate",title:"Prevent duplicate",sidebar_label:"Prevent duplicate"},s=void 0,r={id:"prevent-duplicate",title:"Prevent duplicate",description:"There are two ways to prevent duplicates toast. Use the one that fits your use case \ud83d\udc4c.",source:"@site/docs/prevent-duplicate.md",sourceDirName:".",slug:"/prevent-duplicate",permalink:"/react-toastify/prevent-duplicate",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/prevent-duplicate.md",tags:[],version:"current",frontMatter:{id:"prevent-duplicate",title:"Prevent duplicate",sidebar_label:"Prevent duplicate"},sidebar:"someSidebar",previous:{title:"Use a custom id",permalink:"/react-toastify/use-a-custom-id"},next:{title:"Delay notification appearance",permalink:"/react-toastify/delay-toast-appearance"}},c={},d=[{value:"Simply provide a toast id",id:"simply-provide-a-toast-id",level:2},{value:"Check if a toast is already displayed",id:"check-if-a-toast-is-already-displayed",level:2}];function l(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"There are two ways to prevent duplicates toast. Use the one that fits your use case \ud83d\udc4c."}),"\n",(0,a.jsx)(e.h2,{id:"simply-provide-a-toast-id",children:"Simply provide a toast id"}),"\n",(0,a.jsx)(e.p,{children:"Providing a custom toast id is certainly the most straightforward way to prevent duplicate."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import React from 'react';\nimport { toast } from 'react-toastify';\n\nconst customId = \"custom-id-yes\";\n\nfunction Example(){\n  const notify = () => {\n    toast(\"I cannot be duplicated!\", {\n      toastId: customId\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={notify}>Notify</button>\n    </div>\n  )\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"check-if-a-toast-is-already-displayed",children:"Check if a toast is already displayed"}),"\n",(0,a.jsxs)(e.p,{children:["Maybe there is some situations where you cannot provide a custom toast id, in that case, you can check if a toast is already displayed by calling ",(0,a.jsx)(e.code,{children:"toast.isActive(id)"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import React from 'react';\nimport { toast } from 'react-toastify';\n\nfunction Example(){\n  const toastId = React.useRef(null);\n  \n  const notify = () => {\n    if(! toast.isActive(toastId.current)) {\n      toastId.current = toast(\"I cannot be duplicated!\");\n    }\n  }\n\n  return (\n    <div>\n      <button onClick={notify}>Notify</button>\n    </div>\n  )\n}\n"})})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);