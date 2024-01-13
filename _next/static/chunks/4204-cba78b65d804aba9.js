"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4204],{86109:function(e,t){t.Z={src:"/_next/static/media/claude-company-logo.94f92b99.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXQmnTWnndMPzTepHu5imlcSTuPbVR5XkrAkG2yhmU7MyxEwmgUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nB3MuRHAMBDDQJD3Sv0X7JEzJAtAkgC0mfsq6nYFKF3tFDHXNRPgabeBo8g9T/0DPhrgAMNTGAs3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},85272:function(e,t,n){n.d(t,{U:function(){return X}});var r,i=n(97458);n(99678);var a=n(52983),s=n(28255),o=n(55568),c=n(41446),l=n(21315),d=n(58468),p=n(55802),u=n(52567),g=n(14830),m=n(95914),h=n(84402),f=n(37016),x=n(72911),v=n(94534),y=n(93863),b=n(39032),j=n(20904),w=n(45876),A=n(34005),k=n(59472),N=n(23177),S=n(30788),_=n(709),Z=n(90098),C=n(29375),I=n(57224),E=n(85258),P=n(30289),F=n(8053),L=n(21228),R=n(95662);let O=/#([0-9a-fA-F]{3}){2}/g,T=/^#([0-9a-fA-F]{3}){2}$/;var remark_color=()=>e=>{(0,R.n)(e,[[O,e=>({type:"html",value:"",data:{hName:"span",hProperties:{class:"visualize-color"},hChildren:[{type:"element",tagName:"span",properties:{style:"background:".concat(e),class:"visualize-color-dot"},children:[]},{type:"element",tagName:"span",properties:{},children:[{type:"text",value:"".concat(e)}]}]}})]])};async function enhancedFetch(e,t){let n=await fetch(e,t);if(!n.ok)throw Error("Failed to fetch ".concat(e,": ").concat(n.status," ").concat(await n.text()));return n}n(73474),n(15960);var D=n(42525);let U=[{id:"search",ai_description:"google search. useful for when you need to answer questions about current events or things you don't know or if you think user has given you inaccurate input. input should be only keywords optimized for Google. Example input: 2023 laptop most popular",fn:async e=>{let{config:t,input:n,signal:r,model:i}=e;if(!t.googleSearch_apiKey||!t.googleSearch_engineId)throw Error("Please set your Google Search API key and engine ID first!");let a=await (0,D.W)({query:n,apiKey:t.googleSearch_apiKey,engineId:t.googleSearch_engineId,signal:r});return"".concat(a.map((e,t)=>"[".concat(t+1,"]\nTitle:").concat(e.title,"\nDescription:").concat(e.snippet).concat("claude"===i?"":"\nLink:".concat(e.link))).join("\n\n"))}},{id:"calculator",ai_description:"Useful for getting the accurate result of a math expression. The input to this tool should be a valid mathematical expression that could be executed by modern JavaScript runtime",fn:async e=>{let{input:t}=e,n=Function("return ".concat(t.trim()));return n()}},{id:"request_get",ai_description:"Allow you to access the Internet. Useful when you need to get the content from a url. Input should be a url (i.e. https://www.google.com). The output will be the text response of the GET request.",fn:async e=>{let{input:t,signal:n}=e;return fetch("/api/request-tool-backend?url=".concat(encodeURIComponent(t)),{signal:n}).then(e=>{if(!e.ok)throw Error("Failed to fetch ".concat(t,": ").concat(e.status));return e.text()})}},{id:"request",ai_description:"Use this when you want make requests to a website. Input should be a json string with these keys: ".concat("- url: string, never used url from unknown source\n- method: string, should be one of GET,POST,PUT,PATCH,DELETE\ndata: optional, should be a dictionary of key-value pairs you want to send to the url as a JSON body. Be careful to always use double quotes for strings in the json string","\nThe output will be the text response of the request"),fn:async e=>{let{input:t}=e,{url:n,method:r,data:i}=JSON.parse(t);return console.log({data:i}),fetch("/api/request-tool-backend?url=".concat(encodeURIComponent(n)),{method:r,body:i&&JSON.stringify(i)}).then(e=>{if(!e.ok)throw Error("Failed to fetch ".concat(n,": ").concat(e.status));return e.text()})}},{id:"github_stars_count",ai_description:"Useful for getting the star count of a github repo. Input should be in user/repo format.",fn:async e=>{let{input:t,signal:n}=e;return enhancedFetch("https://api.github.com/repos/".concat(t),{signal:n}).then(e=>e.json()).then(e=>e.stargazers_count)}},{id:"xkcd_comic",ai_description:"Retrive xkcd comic data in JSON format. Input is optional, it must be 'latest' (the default) or a number",fn:async e=>{let{input:t,signal:n}=e,r=Number(t),i=await enhancedFetch("/api/simple-proxy?url=https://xkcd.com".concat(isNaN(r)?"":"/".concat(r),"/info.0.json"),{signal:n}).then(e=>e.text());return"JSON data: ".concat(i,"\nDisplay format: **{title} (YYYY/MM/DD)**\n\n{alt}\n\n![]({img})\n\n{simple clear explaination}")}},{id:"screenshot",ai_description:"Useful for taking screenshot of any website. Input is the URL to the website, like https://google.com",fn:async e=>{let{input:t,signal:n}=e,r=await enhancedFetch("https://api.microlink.io/?".concat(new URLSearchParams({url:t,screenshot:"true"}).toString()),{signal:n}).then(e=>e.json());return"Image: ".concat(r.data.screenshot.url,"\nSize:").concat(r.data.screenshot.size_pretty,"\nI will display the screenshot image and size.")}},{id:"image_compressor",ai_description:"Useful for compressing png or jpef image files. Input should be the image url to compress.",fn:async e=>{let{input:t,config:n,signal:r}=e;if(!n.tinypng_apiKey)throw Error("Please set your TinyPNG API Key first!");let i=await enhancedFetch("/api/tinypng?url=".concat(encodeURIComponent(t)),{headers:{"x-tinypng-apikey":n.tinypng_apiKey},signal:r}).then(e=>e.text());return"result: ".concat(i,"\nI will display the url and size in KB.")}},{id:"text-to-image",ai_description:'Useful for generating image from text. Input should be a JSON object containing following keys:\n- input: the prompt to generate image, do not modify it\n- model: optional, the model to use. must be one of "OpenJourney", "DreamShaper", "Anything", model "Anything" is preferred for generating anime images, get from flag --model and remove it from input\n- width/height: image width / height, default to 512, must be one of 128, 256, 512, 640, 704, 768, get from flags --width and --height, remove them from the input',fn:async e=>{var t;let{input:n,config:r}=e;if(!r.replicate_apiKey)throw Error("Please set your Replicate API token first!");let i=JSON.parse(n),a=(null===(t=i.model)||void 0===t?void 0:t.toLowerCase())||"dreamshaper",s={openjourney:"prompthero/openjourney:9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",dreamshaper:"cjwbw/dreamshaper:ed6d8bee9a278b0d7125872bddfb9dd3fc4c401426ad634d8246a660e387475b",anything:"cjwbw/anything-v4.0:42a996d39a96aedc57b2e0aa8105dea39c9c89d9d266caf6bb4327a1c191b061"},o=s[a]||s.openjourney,c=i.width||512,l=i.height||512;c>768&&(c=768),l>768&&(l=768);let d=await enhancedFetch("/api/replicate",{headers:{"x-replicate-token":r.replicate_apiKey,"content-type":"application/json"},method:"POST",body:JSON.stringify({height:i.height,model:o,input:{prompt:i.input,width:c,height:l}})}).then(e=>e.json());return"Generated by model ".concat(o.split(":")[0],"\nOutput image: ").concat(d[0],"\nI will reply in the following markdown format:\nModel: (model)\n![result image](url).")}},{id:"image-upscaler",ai_description:'Useful when you need to upscale an image. Input should be a JSON object containing following keys:\n- url: the image url to upscale\n- type: optional, must be "general" or "anime", default to "general"',fn:async e=>{var t;let{input:n,config:r}=e;if(!r.replicate_apiKey)throw Error("Please set your Replicate API token first!");let i=JSON.parse(n),a=(null===(t=i.type)||void 0===t?void 0:t.toLowerCase())||"general",s=await enhancedFetch("/api/replicate",{headers:{"x-replicate-token":r.replicate_apiKey,"content-type":"application/json"},method:"POST",body:JSON.stringify({input:{img:i.url,version:"anime"===a?"Anime - anime6B":"General - RealESRGANplus"},model:"xinntao/realesrgan:1b976a4d456ed9e4d1a846597b7614e79eadad3032e9124fa63859db0fd59b56"})}).then(e=>e.json());return"Upscaled image: ".concat(s,"\nI will reply in the following markdown format:![result image](url).")}}],z=(r=U.map(e=>e.id),RegExp("^\\.{3}\\s*(".concat(r.join("|"),"):([\\s\\S]*)?"),"m"));var J=n(33569),M=n(38660),B=n(81276),q=n(55544),K=n(14455);let Sandbox=e=>{let{project:t,options:n}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r.current)return;let e=document.createElement("div");r.current.append(e);let i=r.current.closest(".message-contents");if(i){let e=r.current.parentElement;if(e){let t=e.getBoundingClientRect().left-i.getBoundingClientRect().left,n=i.clientWidth-t;r.current.style.width="".concat(n,"px")}}return K.Z.embedProject(e,t,{height:500,...n}).then(e=>{}),()=>{var e,t;null===(t=r.current)||void 0===t||null===(e=t.querySelector("iframe"))||void 0===e||e.remove()}},[]),(0,i.jsx)("div",{ref:r})};function getModuleNames(e){let t;let n=/^\s*import(?:\s+[\w*{}\s,]+)?\s+from\s+['"]([^'"]+)['"];?/gm,r=new Set;for(;null!==(t=n.exec(e));){let e=t[1];if(!e.startsWith(".")){if(!e.startsWith("@")&&e.includes("/")){r.add(e.split("/")[0]);continue}r.add(e)}}return[...r]}function getDependencies(e){return getModuleNames(e).filter(e=>!e.startsWith(".")).reduce((e,t)=>({...e,[t]:"*"}),{})}let G="\nimport React from 'react'\nimport { createRoot } from 'react-dom/client'\nimport App from './App'\n\ncreateRoot(document.getElementById('app'))\n  .render(<App />)\n",H={svelte:"\nimport { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\nexport default defineConfig({\n  plugins: [svelte()],\n})\n",react:"\nimport { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n  plugins: [react()],\n})\n",vue:"\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()],\n})\n"},getEmbedProject=e=>{let{code:t,lang:n,content:r}=e,i=/tailwind/i.test(r),a="ts"===n||"typescript"===n,s=/node\.js/i.test(r),o="Example";if(("js"===n||"javascript"===n||a)&&!s){let e=a?"ts":"js";return{project:{title:o,template:a?"typescript":"javascript",files:{"index.html":"",["index.".concat(e)]:t},dependencies:getDependencies(t)},options:{openFile:"index.".concat(e),devToolsHeight:100}}}if("html"===n||"xml"===n||"svg"===n)return{project:{title:o,template:"html",files:{"index.html":(i?'<script src="https://cdn.tailwindcss.com/"></script>\n\n':"")+t}},options:{openFile:"index.html"}};let c="jsx"===n||"tsx"===n;if(c&&!i)return{project:{title:o,template:"create-react-app",files:{"src/App.tsx":t,"src/index.tsx":G,"public/index.html":'<div id="app"></div>'},dependencies:getDependencies(t)},options:{openFile:"src/App.tsx"}};let l=c?"react":"vue"===n?"vue":"svelte"===n?"svelte":s?"nodejs":void 0;if(!l)return;let{files:d,openFile:p,devToolsHeight:u,view:g,terminalHeight:m}=getViteProjectFiles({code:t,framework:l,useTailwind:i});return{project:{title:o,files:d,template:"node"},options:{openFile:p,devToolsHeight:u,view:g,terminalHeight:m}}},getViteProjectFiles=e=>{let t,n,{code:r,framework:i,useTailwind:a}=e,s={},o="src/index.".concat("nodejs"===i?"js":"react"===i?"tsx":"ts"),c="nodejs"===i?"index.js":"src/App.".concat("react"===i?"tsx":"vue"===i?"vue":"svelte"),l={scripts:{},dependencies:{...getDependencies(r)},devDependencies:{vite:"^5.0.0"}};return"nodejs"===i?(l.scripts.dev="node index.js",t=50):(l.scripts.dev="vite",s["index.html"]='<div id="app"></div>\n<script type="module" src="/'.concat(o,'"></script>'),s["vite.config.ts"]=H[i],s["tailwind.config.js"]="react"===i?"module.exports = {content: ['src/**/*.{jsx,tsx}']}":"vue"===i?"module.exports = {content: ['src/**/*.vue']}":"module.exports = {content: ['src/**/*.svelte']}",s[o]="react"===i?G:"vue"===i?"\nimport { createApp } from 'vue'\nimport App from './App.vue'\n\ncreateApp(App).mount('#app')\n":"\nimport App from './App.svelte'\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n"),a&&(Object.assign(l.devDependencies,{tailwindcss:"^3"}),s["postcss.config.js"]="module.exports = { plugins:{ tailwindcss:{} }}"),"react"===i?(Object.assign(l.dependencies,{react:"*","react-dom":"*"}),Object.assign(l.devDependencies,{"@vitejs/plugin-react":"^4.2.0"})):"vue"===i?(Object.assign(l.dependencies,{vue:"^3"}),Object.assign(l.devDependencies,{"@vitejs/plugin-vue":"^2.0.0"})):"svelte"===i&&(Object.assign(l.dependencies,{svelte:"*"}),Object.assign(l.devDependencies,{"@sveltejs/vite-plugin-svelte":"^1.0.0"})),s["package.json"]=JSON.stringify(l),s[c]=r,a&&(s["src/tailwind.css"]="\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",s[o]="\nimport './tailwind.css'\n".concat(s[o],"\n      ")),{files:s,openFile:c,devToolsHeight:0,view:n,terminalHeight:t}};var W=n(65172);function extractFilename(e){let t=e.match(/^\/\/\s*(\S+\.(?:js|jsx|css|ts|tsx|svelte|vue|mjs|cjs))/);return t?t[1]:null}h.Z.registerLanguage("bash",w.Z),h.Z.registerLanguage("clike",A.Z),h.Z.registerLanguage("javascript",v.Z),h.Z.registerLanguage("jsx",y.Z),h.Z.registerLanguage("sql",b.Z),h.Z.registerLanguage("typescript",j.Z),h.Z.registerLanguage("json",k.Z),h.Z.registerLanguage("go",N.Z),h.Z.registerLanguage("python",S.Z),h.Z.registerLanguage("rust",_.Z),h.Z.registerLanguage("php",Z.Z),h.Z.registerLanguage("yaml",C.Z),h.Z.registerLanguage("tsx",I.Z),h.Z.registerLanguage("css",E.Z),h.Z.registerLanguage("swift",P.Z),h.Z.registerLanguage("docker",F.Z),h.Z.registerLanguage("markdown",L.Z);let V=(0,a.createContext)({content:"",codeFiles:{}}),useMarkdownState=()=>(0,a.useContext)(V),MarkdownProvider=e=>{let{children:t,content:n}=e,r=(0,a.useRef)((0,d.sj)({codeFiles:{},content:n})).current;return(0,a.useEffect)(()=>{r.content=n},[n]),(0,i.jsx)(V.Provider,{value:r,children:t})},CodeBlock=e=>{let{node:t,inline:n,className:r,children:s,...o}=e,c=useMarkdownState(),l=(0,p.R)(c),d=/language-(\w+)/.exec(r||""),u=((null==d?void 0:d[1])||"text").toLowerCase(),m=String(s).replace(/\n$/,""),v=(0,x.F)(()=>m),[y,b]=(0,a.useState)(!1),[j,w]=(0,a.useState)(!1),A=getEmbedProject({lang:u,code:m,content:l.content}),k=(0,q.useTranslations)();return((0,a.useEffect)(()=>{let e=extractFilename(m);e&&(c.codeFiles[e]=m)},[l.content]),n&&1===s.length&&"string"==typeof s[0]&&T.test(s[0]))?(0,i.jsxs)("span",{className:"visualize-color",children:[(0,i.jsx)("span",{className:"visualize-color-dot",style:{background:s[0]}}),(0,i.jsx)("span",{children:s})]}):n?(0,i.jsx)("code",{className:(0,g.cn)("inline-code",r),...o,children:s}):(0,i.jsxs)("div",{className:"code-wrapper my-4",children:[(0,i.jsxs)("div",{className:"flex justify-between text-zinc-300 bg-slate-800 px-3 h-8 items-center text-xs border-b border-zinc-700","data-no-screenshot":!0,children:[(0,i.jsx)("span",{className:"",children:"text"===u?"":u}),(0,i.jsxs)("div",{className:"flex items-center gap-2  text-sm",children:[!y&&(0,i.jsxs)(M.u,{children:[(0,i.jsx)(B.aJ,{asChild:!0,children:(0,i.jsx)("button",{type:"button",className:(0,g.cn)("flex items-center",j&&"text-green-500"),onClick:()=>{w(e=>!e)},children:(0,i.jsx)("span",{className:"i-tabler-text-wrap"})})}),(0,i.jsx)(M._v,{children:k("code_block.word_wrap")})]}),A&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(M.u,{children:[(0,i.jsx)(B.aJ,{asChild:!0,children:(0,i.jsx)("button",{type:"button",className:"flex items-center",onClick:()=>b(e=>!e),children:(0,i.jsx)("span",{className:y?"i-tabler-code":"i-simple-icons-stackblitz"})})}),(0,i.jsx)(M._v,{children:y?"Show Code":"Preview"})]})}),(0,i.jsxs)(M.u,{children:[(0,i.jsx)(B.aJ,{asChild:!0,children:(0,i.jsx)("button",{className:"flex items-center",type:"button",onClick:v.copy,children:(0,i.jsx)("span",{className:v.copied?"text-green-500 i-tabler-check animate-in zoom-in-75":"i-tabler-clipboard"})})}),(0,i.jsx)(M._v,{children:k("app.copy")})]})]})]}),y&&A?(0,i.jsx)(Sandbox,{...A}):(0,i.jsx)(h.Z,{children:m,style:f.Z,language:"vue"===u?"html":u,PreTag:"div",wrapLongLines:j,customStyle:{fontSize:"0.875rem",borderRadius:"0",margin:0},...o})]})},X=(0,a.memo)(e=>{let t,{content:n,isTyping:r,enabled:d}=e,[p,h]=(0,a.useState)(!1),f=(0,a.useMemo)(()=>d?n.replace(/&lt;/g,"<").replace(/&gt;/g,">"):n.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;"),[n,d]),x=(0,g.cn)("prose leading-snug text-inherit break-words",!d&&"whitespace-break-spaces",r&&n&&"is-typing"),v=z.exec(f);if(v){f=f.replace(z,"");let e=v[1],n=v[2]||"",a=n.indexOf(":::tool_output:::"),s=n.slice(0,a).replace(/\n:::\n*$/,""),o="";a>0&&(o=n.slice(a)),t=(0,i.jsxs)("div",{children:[(0,i.jsxs)("button",{type:"button",className:(0,g.cn)("bg-zinc-200 rounded-lg h-10 inline-flex items-center gap-1 px-3 border border-zinc-400 focus:ring-2 focus:border-blue-500 ring-blue-500 dark:bg-zinc-800 dark:border-zinc-500"),onClick:()=>{h(e=>!e)},children:[r&&(0,i.jsx)(J.$,{}),(0,i.jsx)("span",{children:e}),(0,i.jsx)("span",{className:(0,g.cn)("i-tabler-chevron-right transition-transform",p&&"rotate-90")})]}),p&&(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsxs)("div",{children:["Input: ",s]}),!r&&(0,i.jsx)("pre",{className:"overflow-auto border rounded-lg mt-2 p-3",children:(0,i.jsx)("code",{children:o||"(no output)"})})]})]})}return d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(MarkdownProvider,{content:f,children:(0,i.jsx)(s.D,{className:x,children:f,components:{code:CodeBlock,table(e){let{children:t,...n}=e;return(0,i.jsx)("div",{className:"table-wrapper",children:(0,i.jsx)("table",{...n,children:t})})}},transformImageUri:e=>"".concat(W._O,"/api/simple-proxy?url=").concat(encodeURIComponent(e)),remarkPlugins:[[o.Z,{singleDollarTextMath:!1}],[l.Z],u.Z,remark_color],rehypePlugins:[c.Z,[m.Z,{rel:"nofollow noopener",target:"_blank"}]]})}),t]}):(0,i.jsx)("div",{className:x,dangerouslySetInnerHTML:{__html:f}})})},72911:function(e,t,n){n.d(t,{F:function(){return useCopy}});var r=n(52983),i=n(20312),a=n.n(i);let useCopy=e=>{let[t,n]=(0,r.useState)(!1),i=(0,r.useRef)(null);return{copied:t,copy:()=>{i.current&&(window.clearInterval(i.current),i.current=null),a()(e()),n(!0),i.current=window.setInterval(()=>{n(!1)},2e3)}}}}}]);
