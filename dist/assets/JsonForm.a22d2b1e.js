import{b as n,d as i,a as d,_ as s,r as m,o as t,h as u,c as p}from"./index.f821c4c4.js";import{m as c}from"./VueOpenapiForm.5c175d11.js";import"./SchemaModel.606a4b05.js";const h=i({name:"YamlForm",components:{Editor:d(()=>s(()=>import("./Editor.47a751e3.js"),["assets/Editor.47a751e3.js","assets/index.f821c4c4.js","assets/index.d6734c14.css"]))},mixins:[c],inject:["providedData"],props:{modelValue:{type:null,default:()=>({})}},emits:["code::model-data-updated"],computed:{originalValueString(){return JSON.stringify(this.referenceModel,null,2)},theme(){return this.providedData.theme||"light"},editorModel:{get(){return JSON.stringify(this.modelValue,null,2)},set(o){let e=null;try{e=JSON.parse(o)}catch{e=this.modelData}this.modelData=e,this.$emit("code::model-data-updated",e)}}}}),_={class:"ml-30"};function f(o,e,a,g,v,V){const r=m("editor");return t(),u("div",_,[(t(),p(r,{key:o.theme,modelValue:o.editorModel,"onUpdate:modelValue":e[0]||(e[0]=l=>o.editorModel=l),"original-value":o.originalValueString,language:"json","editor-height":70},null,8,["modelValue","original-value"]))])}var $=n(h,[["render",f]]);export{$ as default};
