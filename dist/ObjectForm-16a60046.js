import{m as e,v as r,_ as l}from"./entry-af65a194.js";import{f as a}from"./fold-ab363a66.js";import{defineComponent as t,resolveComponent as o,openBlock as n,createElementBlock as d,normalizeClass as i,Fragment as u,renderList as p,createBlock as s,withCtx as m,createVNode as c}from"vue";var f=t({name:"ObjectForm",mixins:[e,a,r],props:{properties:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},errors:{type:Object,default:function(){return{}}},title:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},required:{type:Array,default:function(){return[]}},level:{type:Number,default:1}},computed:{propertiesRequired:function(){return this.isSelfRequired||Object.keys(this.modelData).length>0}},methods:{isRequired:function(e){return!!this.required.find((function(r){return r===e}))}}});f.render=function(e,r,a,t,f,y){var v=o("object-form-wrapper"),h=o("v-field"),b=o("key-value-pairs"),V=o("array-input"),q=o("simple-input");return n(),d("div",{class:i(["mb-15",{"is-hidden":e.isSelfFolded}])},[(n(!0),d(u,null,p(Object.keys(e.properties),(function(r,a){return n(),d(u,null,["object"===e.properties[r].type?(n(),s(h,{key:r+"-object",modelValue:e.modelData[r],"onUpdate:modelValue":function(l){return e.modelData[r]=l},name:"".concat(e.fieldName,"/").concat(r),rules:e.ruleObject(e.propertiesRequired&&e.isRequired(r)),label:"".concat(e.properties[r].title),as:""},{default:m((function(l){var t=l.field,o=l.handleChange;return[c(v,{"model-value":t.value,"field-name":"".concat(e.fieldName,"/").concat(r),"expand-form":e.level<2,"is-last-child":a===Object.keys(e.properties).length-1,level:e.level+1,type:e.properties[r].type,"is-self-required":e.propertiesRequired&&e.isRequired(r),schema:e.properties[r],errors:e.errors,"reference-model":e.referenceModel[r]||{},"onUpdate:modelValue":o},null,8,["model-value","field-name","expand-form","is-last-child","level","type","is-self-required","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):"key-value-pairs"===e.properties[r].type?(n(),s(h,{key:r+"-key-value-pairs",modelValue:e.modelData[r],"onUpdate:modelValue":function(l){return e.modelData[r]=l},name:"".concat(e.fieldName,"/").concat(r),rules:e.ruleObject(e.propertiesRequired&&e.isRequired(r)),label:"".concat(e.properties[r].title),as:""},{default:m((function(l){var t=l.field,o=l.handleChange;return[c(b,{"model-value":t.value,"field-name":"".concat(e.fieldName,"/").concat(r),"is-last-child":a===Object.keys(e.properties).length-1,type:e.properties[r].type,schema:e.properties[r],errors:e.errors,"reference-model":e.referenceModel[r]||{},"onUpdate:modelValue":o},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):"array"===e.properties[r].type?(n(),s(h,{key:r+"-array",modelValue:e.modelData[r],"onUpdate:modelValue":function(l){return e.modelData[r]=l},name:"".concat(e.fieldName,"/").concat(r),rules:e.ruleArray(e.propertiesRequired&&e.isRequired(r)),label:"".concat(e.properties[r].title),as:""},{default:m((function(l){var t=l.field,o=l.handleChange;return[c(V,{"model-value":t.value,"field-name":"".concat(e.fieldName,"/").concat(r),"is-last-child":a===Object.keys(e.properties).length-1,type:e.properties[r].type,schema:e.properties[r],errors:e.errors,"reference-model":e.referenceModel[r]||[],"onUpdate:modelValue":o},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):(n(),s(h,{key:r,modelValue:e.modelData[r],"onUpdate:modelValue":function(l){return e.modelData[r]=l},rules:e.ruleString(e.propertiesRequired&&e.isRequired(r)),name:"".concat(e.fieldName,"/").concat(r),label:"".concat(e.properties[r].title),as:""},{default:m((function(a){var t=a.field,o=a.handleChange,d=a.errors,i=a.meta;return[(n(),s(q,{key:r,"model-value":t.value,type:e.properties[r].type,schema:e.properties[r],"validation-ob":l({errors:d},i),"reference-model":e.referenceModel[r]||"","onUpdate:modelValue":o},null,8,["model-value","type","schema","validation-ob","reference-model","onUpdate:modelValue"]))]})),_:2},1032,["modelValue","onUpdate:modelValue","rules","name","label"]))],64)})),256))],2)};export{f as default};