"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[3055],{2995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(5893),a=n(1151);const i={id:"migration-v9",title:"Migrate to v9",sidebar_label:"Migrate to v9"},s=void 0,r={id:"migration-v9",title:"Migrate to v9",description:"What is new in v9",source:"@site/docs/migrate-to-v9.md",sourceDirName:".",slug:"/migration-v9",permalink:"/react-toastify/migration-v9",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/migrate-to-v9.md",tags:[],version:"current",frontMatter:{id:"migration-v9",title:"Migrate to v9",sidebar_label:"Migrate to v9"},sidebar:"someSidebar",previous:{title:"\ud83d\ude80 Migrate to v10",permalink:"/react-toastify/migration-v10"},next:{title:"Migrate to v8",permalink:"/react-toastify/migration-v8"}},d={},c=[{value:"What is new in v9",id:"what-is-new-in-v9",level:2},{value:"useNotificationCenter",id:"usenotificationcenter",level:3},{value:"Stacked toasts",id:"stacked-toasts",level:3},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"<code>toast.onChange</code>",id:"toastonchange",level:3},{value:"<code>toast.configure</code> removal",id:"toastconfigure-removal",level:3},{value:"Bug fixes",id:"bug-fixes",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-is-new-in-v9",children:"What is new in v9"}),"\n",(0,o.jsx)(t.p,{children:"Say hello to addons! What are addons? So, addons are like DLCs in video games but for react-toastify \ud83d\ude06. More seriously, you can think of it as utilities built around react-toastify. For example, custom theme, hooks, components etc..."}),"\n",(0,o.jsx)(t.h3,{id:"usenotificationcenter",children:"useNotificationCenter"}),"\n",(0,o.jsxs)(t.p,{children:["The first addon that I would like to introduce is the ",(0,o.jsx)(t.code,{children:"useNotificationCenter"})," headless hook! As the name suggests, it let you build your notification center on top of react-toastify. See for yourself \ud83d\udc47"]}),"\n",(0,o.jsx)("iframe",{src:"https://codesandbox.io/embed/notification-center-framer-vddoj5?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"notification-center-framer",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),"\n",(0,o.jsx)(t.p,{children:"Another example using MUI."}),"\n",(0,o.jsx)("iframe",{src:"https://codesandbox.io/embed/mui-notification-center-zvxod3?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"mui-notification-center",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Addons only impact your bundle size if you use them \ud83c\udf89!"})}),"\n",(0,o.jsxs)(t.p,{children:["Check the ",(0,o.jsx)(t.a,{href:"/react-toastify/addons/use-notification-center",children:"documentation"})," for more details."]}),"\n",(0,o.jsx)(t.h3,{id:"stacked-toasts",children:"Stacked toasts"}),"\n",(0,o.jsx)(t.p,{children:"This second addon will be released later. There are a bunch of details that I need to cover and I don't want to release something too buggy. Nevertheless, I'm really excited about it and I think it's worth showcasing anyway."}),"\n",(0,o.jsxs)(t.p,{children:["I call it ",(0,o.jsx)(t.code,{children:"StackedContainer"})," for now, it's an alternative to the ",(0,o.jsx)(t.code,{children:"ToastContainer"})," component."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5574267/160688000-1d01d949-d9e1-41f4-858c-f5c9a33b901d.gif",alt:"stacked-container"})}),"\n",(0,o.jsx)(t.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,o.jsxs)(t.p,{children:["There are 2 breaking changes. The API change for ",(0,o.jsx)(t.code,{children:"toast.onChange"})," and the removal of ",(0,o.jsx)(t.code,{children:"toast.configure"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"toastonchange",children:(0,o.jsx)(t.code,{children:"toast.onChange"})}),"\n",(0,o.jsxs)(t.p,{children:["The previous API was returning the ",(0,o.jsx)(t.code,{children:"numberOfToastDisplayed"})," and the ",(0,o.jsx)(t.code,{children:"containerId"}),". Honestly, this API seems to be incomplete."]}),"\n",(0,o.jsx)(t.p,{children:"For example, with the old API, if I wanted to do some logging this would be very difficult because I don't have enough data to log."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'toast.onChange((numberOfToastDisplayed, containerId) => {\n  logger.info("nothing useful to log, ...")\n})\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The new API offers more possibilities. The callback will receive a ",(0,o.jsx)(t.code,{children:"ToastItem"}),". The item provides a bunch of useful properties ",(0,o.jsx)(t.code,{children:"status"}),", ",(0,o.jsx)(t.code,{children:"content"}),", ",(0,o.jsx)(t.code,{children:"id"}),", ",(0,o.jsx)(t.code,{children:"data"}),", etc..."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'interface ToastItem<Data = {}> {\n    id: Id;\n    content: React.ReactNode;\n    theme?: Theme;\n    type?: TypeOptions;\n    isLoading?: boolean;\n    containerId?: Id;\n    data: Data;\n    icon?: React.ReactNode | false;\n    status: "added" | "removed" | "updated" \n}\n\nconst unsubscribe = toast.onChange((payload: ToastItem) => {\n  switch (payload.status) {\n    case "added":\n      // new toast added\n      break;\n    case "updated":\n      // toast updated\n      break;\n    case "removed":\n      // toast has been removed\n      break;\n  }\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"For example, if I want to log something every time there is a new error notification, with the new API it's trivial"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'toast.onChange(payload => {\n  if(payload.status === "added" && payload.type === toast.TYPE.ERROR) {\n    logger.error({\n      createdAt: Date.now(),\n      content: payload.content,\n      data: payload.data\n    })\n  }\n})\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"toastconfigure-removal",children:[(0,o.jsx)(t.code,{children:"toast.configure"})," removal"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"toast.configure"})," works fine for most cases but the current implementation has one main issue. It does not work with react context because it creates a new react tree.\nThat being said, having 2 APIs to do the same thing is a bad thing."]}),"\n",(0,o.jsx)(t.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/fkhadra/react-toastify/issues/725",children:"#725"})," the success toast on promise does not disappear when resolving too quickly"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/fkhadra/react-toastify/issues/711",children:"#711"})," updated toast sometimes has wrong styles"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/fkhadra/react-toastify/issues/700",children:"#700"})," generics are not used for toast.promise's result type if you use a custom render method"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);