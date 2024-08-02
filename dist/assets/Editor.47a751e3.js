import{d as H,a as n,_ as i,D as d,s as l,H as E,o as r,h as M,c as s,u as m,j as p,n as _,E as w}from"./index.f821c4c4.js";const P=H({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"},validation:{default:()=>({uri:""})}},emits:["update:modelValue"],setup(T,{emit:V}){const t=T,B=V,C=n(()=>i(()=>import("./EditorTabs.d8d56d09.js"),["assets/EditorTabs.d8d56d09.js","assets/index.f821c4c4.js","assets/index.d6734c14.css"])),L=n(()=>i(()=>import("./Preloader.4924b5fd.js"),["assets/Preloader.4924b5fd.js","assets/index.f821c4c4.js","assets/index.d6734c14.css"])),O=n(()=>i(()=>import("./Banner.b7a3fcbd.js"),["assets/Banner.b7a3fcbd.js","assets/index.f821c4c4.js","assets/index.d6734c14.css"])),v=n({loader:()=>i(()=>import("./MonacoEditor.2e8f6e24.js").then(function(e){return e.M}),["assets/MonacoEditor.2e8f6e24.js","assets/MonacoEditor.feb26aa2.css","assets/index.f821c4c4.js","assets/index.d6734c14.css"]),loadingComponent:L,delay:200,errorComponent:O,timeout:1e5}),o=d("edit"),a=d(""),u=d(""),c=l(()=>{const e=a.value.split(`
`).length;return t.showMinimap&&e>25}),f=l(()=>t.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs")),b=e=>{typeof e=="string"&&(a.value=e)},k=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText(()=>{B("update:modelValue",a.value)})},g=l(()=>typeof t.editorHeight=="number"?`vh-${t.editorHeight}`:""),h=l(()=>typeof t.editorHeight=="string"?{height:t.editorHeight}:{});return E(()=>t.modelValue,e=>{a.value!==e&&(a.value=e)},{immediate:!0}),E(()=>t.originalValue,e=>{u.value!==e&&(u.value=e)},{immediate:!0}),(e,y)=>(r(),M("div",null,[e.readOnly?p("",!0):(r(),s(m(C),{key:0,onTabchange:y[0]||(y[0]=D=>o.value=D),"active-tab":o.value},null,8,["active-tab"])),o.value==="edit"?(r(),s(m(v),{onEditorDidMount:k,key:"edit",class:_(["is-clipped",g.value]),style:w(h.value),value:a.value,onChange:b,language:e.language,options:{minimap:{enabled:c.value},theme:f.value,readOnly:e.readOnly,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},validation:e.validation,"data-testid":"monaco-editor-edit-section"},null,8,["class","style","value","language","options","validation"])):p("",!0),o.value==="preview"?(r(),s(m(v),{key:"preview",class:_(["is-clipped",g.value]),style:w(h.value),value:a.value,language:e.language,options:{minimap:{enabled:c.value},theme:f.value,readOnly:!0,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},original:u.value,"diff-editor":!0,validation:e.validation,"data-testid":"monaco-editor-preview-section"},null,8,["class","style","value","language","options","original","validation"])):p("",!0)]))}});export{P as default};
