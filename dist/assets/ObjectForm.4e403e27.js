import{m as U,v as R}from"./VueOpenapiForm.bb9a2c94.js";import{f as c}from"./fold.454484b6.js";import{b as O,d as N,r as d,o as a,h as m,F as f,k as D,n as g,c as s,w as i,e as n}from"./index.bb828607.js";import"./SchemaModel.30054647.js";const w=N({name:"ObjectForm",mixins:[U,c,R],props:{properties:{type:Object,default:()=>({})},fieldName:{type:String,default:""},errors:{type:Object,default:()=>({})},title:{type:String,default:""},modelValue:{type:Object,default:()=>({})},required:{type:Array,default:()=>[]},level:{type:Number,default:1}},computed:{propertiesRequired(){return this.isSelfRequired||Object.keys(this.modelData).length>0}},methods:{isRequired(e){return!!this.required.find(u=>u===e)}}});function F(e,b,u,S,C,M){const v=d("object-form-wrapper"),p=d("v-field"),h=d("key-value-pairs"),V=d("array-input"),$=d("simple-input");return a(),m("div",{class:g(["mb-15",{"is-hidden":e.isSelfFolded}])},[(a(!0),m(f,null,D(Object.keys(e.properties),(l,t)=>(a(),m(f,null,[e.properties[l].type==="object"?(a(),s(p,{key:l+"-object",modelValue:e.modelData[l],"onUpdate:modelValue":r=>e.modelData[l]=r,name:`${e.fieldName}/${l}`,rules:e.ruleObject(e.propertiesRequired&&e.isRequired(l)),label:`${e.properties[l].title}`,as:""},{default:i(({field:r,handleChange:o})=>[n(v,{"model-value":r.value,"field-name":`${e.fieldName}/${l}`,"expand-form":e.level<2,"is-last-child":t===Object.keys(e.properties).length-1,level:e.level+1,type:e.properties[l].type,"is-self-required":e.propertiesRequired&&e.isRequired(l),schema:e.properties[l],errors:e.errors,"reference-model":e.referenceModel[l]||{},showRootTab:!1,"onUpdate:modelValue":o},null,8,["model-value","field-name","expand-form","is-last-child","level","type","is-self-required","schema","errors","reference-model","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):e.properties[l].type==="key-value-pairs"?(a(),s(p,{key:l+"-key-value-pairs",modelValue:e.modelData[l],"onUpdate:modelValue":r=>e.modelData[l]=r,name:`${e.fieldName}/${l}`,rules:e.ruleObject(e.propertiesRequired&&e.isRequired(l)),label:`${e.properties[l].title}`,as:""},{default:i(({field:r,handleChange:o})=>[n(h,{"model-value":r.value,"field-name":`${e.fieldName}/${l}`,"is-last-child":t===Object.keys(e.properties).length-1,type:e.properties[l].type,schema:e.properties[l],errors:e.errors,"reference-model":e.referenceModel[l]||{},"onUpdate:modelValue":o},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):e.properties[l].type==="array"?(a(),s(p,{key:l+"-array",modelValue:e.modelData[l],"onUpdate:modelValue":r=>e.modelData[l]=r,name:`${e.fieldName}/${l}`,rules:e.ruleArray(e.propertiesRequired&&e.isRequired(l)),label:`${e.properties[l].title}`,as:""},{default:i(({field:r,handleChange:o})=>[n(V,{"model-value":r.value,"field-name":`${e.fieldName}/${l}`,"is-last-child":t===Object.keys(e.properties).length-1,type:e.properties[l].type,schema:e.properties[l],errors:e.errors,"reference-model":e.referenceModel[l]||[],"onUpdate:modelValue":o},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):(a(),s(p,{key:l,modelValue:e.modelData[l],"onUpdate:modelValue":r=>e.modelData[l]=r,rules:e.ruleString(e.propertiesRequired&&e.isRequired(l)),name:`${e.fieldName}/${l}`,label:`${e.properties[l].title}`,as:""},{default:i(({field:r,handleChange:o,errors:q,meta:j})=>[(a(),s($,{key:l,"model-value":r.value,type:e.properties[l].type,schema:e.properties[l],"validation-ob":{errors:q,...j},"reference-model":e.referenceModel[l]||"","onUpdate:modelValue":o},null,8,["model-value","type","schema","validation-ob","reference-model","onUpdate:modelValue"]))]),_:2},1032,["modelValue","onUpdate:modelValue","rules","name","label"]))],64))),256))],2)}var L=O(w,[["render",F]]);export{L as default};
