import{m as e}from"./entry-99016fd3.js";import{defineComponent as t,defineAsyncComponent as o,resolveComponent as r,openBlock as i,createElementBlock as n,createBlock as l}from"vue";var a=t({name:"YamlForm",components:{Editor:o((function(){return import("./Editor-c9bef551.js")}))},mixins:[e],inject:["providedData"],props:{modelValue:{type:null,default:function(){return{}}}},emits:["code::model-data-updated"],computed:{originalValueString:function(){return JSON.stringify(this.referenceModel,null,2)},theme:function(){return this.providedData.theme||"light"},editorModel:{get:function(){return JSON.stringify(this.modelValue,null,2)},set:function(e){var t=null;try{t=JSON.parse(e)}catch(e){t=this.modelData}this.modelData=t,this.$emit("code::model-data-updated",t)}}}}),d={class:"ml-30"};a.render=function(e,t,o,a,u,m){var s=r("editor");return i(),n("div",d,[(i(),l(s,{key:e.theme,modelValue:e.editorModel,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.editorModel=t}),"original-value":e.originalValueString,language:"json","editor-height":80},null,8,["modelValue","original-value"]))])};export{a as default};