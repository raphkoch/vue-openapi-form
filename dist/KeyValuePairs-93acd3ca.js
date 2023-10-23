"use strict";var e=require("./entry-5c99ae81.js"),a=require("./tabs-dfa05f01.js"),l=require("./size-27a9a503.js"),t=require("vue"),r=t.defineComponent({name:"KeyValuePairs",components:{KeyValuePairItems:t.defineAsyncComponent((function(){return Promise.resolve().then((function(){return require("./KeyValuePairItems-822cf366.js")})).then((function(e){return e.default}))}))},mixins:[e.m,a.t,e.v,l.s],props:{schema:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},errors:{type:Object,default:function(){return{}}},isLastChild:{type:Boolean,default:!1}},data:function(){return{newData:null,updatePass:0,keyValueArray:null,referencekeyValueArray:null,newKey:"",newValue:null}},computed:{additionalProperties:function(){return this.schema.additionalProperties||{}}},watch:{keyValueArray:{immediate:!0,deep:!0,handler:function(e,a){if(null!=a){var l=JSON.stringify(e);this.modelData=this.reconstructObject(JSON.parse(l))}}},activeTab:function(){this.initKeyValueArray(),this.initReferenceKeyValueArray()},modelValue:{deep:!0,immediate:!0,handler:function(e,a){JSON.stringify(e)!==JSON.stringify(a)&&this.initKeyValueArray(),this.initReferenceKeyValueArray()}}},methods:{initKeyValueArray:function(){var e=this;this.keyValueArray=Object.keys(this.modelValue).map((function(a){return{key:a,value:e.modelValue[a]||null}}))},initReferenceKeyValueArray:function(){var e=this;this.referencekeyValueArray=Object.keys(this.referenceModel).map((function(a){return{key:a,value:e.referenceModel[a]||null}}))},updateKeyValueArray:function(e){this.keyValueArray=Object.keys(e).map((function(a){return{key:a,value:e[a]}}))},reconstructObject:function(a){var l={};return a.forEach((function(a){l=Object.assign({},e._({},l),e.c({},"".concat(a.key),a.value))})),l},addProp:function(a){var l=this;return e.a(e.b().mark((function t(){var r;return e.b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:r=e.sent,r.valid&&(l.keyValueArray.push({key:l.newKey,value:l.newValue}),l.newKey="",l.newValue=null,l.updatePass+=1);case 5:case"end":return e.stop()}}),t)})))()},deleteProp:function(e){this.keyValueArray.splice(e,1),this.updatePass+=1}}}),n={class:"nested-header mb-5"},o={class:"is-flex is-semi-normal"},i=t.createElementVNode("div",{class:"collaps-icon is-disabled"},[t.createElementVNode("i",{"aria-hidden":"true",class:"fa fa-minus"})],-1),d=["onClick"],u=[t.createElementVNode("span",{class:"icon"},[t.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])],-1)];r.render=function(a,l,r,c,s,m){var p=t.resolveComponent("component-errors"),f=t.resolveComponent("tabs"),y=t.resolveComponent("key-value-pair-items"),V=t.resolveComponent("simple-input"),v=t.resolveComponent("v-field"),h=t.resolveComponent("object-form-wrapper"),k=t.resolveComponent("key-value-pairs",!0),w=t.resolveComponent("array-input"),b=t.resolveComponent("v-form"),C=t.resolveComponent("yaml-form"),N=t.resolveComponent("json-form");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["ac-nested-elements key-value-pairs is-flex is-flex-direction-column gap-8",{"stop-line":a.isLastChild}])},[t.createElementVNode("div",n,[t.createElementVNode("h6",o,[i,t.createTextVNode(" "+t.toDisplayString(a.schema.title||"Array Item Description"),1),t.createVNode(p,{errors:a.calcFormErrors(a.errors,a.fieldName)},null,8,["errors"])]),t.createVNode(f,{modelValue:a.activeTab,"onUpdate:modelValue":l[0]||(l[0]=function(e){return a.activeTab=e})},null,8,["modelValue"])]),"form"===a.activeTab?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.keyValueArray,(function(e,l){return t.openBlock(),t.createElementBlock("div",{key:"".concat(l,"-").concat(a.schema.title,"-form")},[t.createVNode(y,{modelValue:a.keyValueArray[l],"onUpdate:modelValue":function(e){return a.keyValueArray[l]=e},"field-name":a.fieldName,"reference-model":a.referencekeyValueArray[l]||{},index:l,schema:a.schema,"additional-properties":a.additionalProperties,errors:a.errors,onDeleteKeyValue:a.deleteProp},null,8,["modelValue","onUpdate:modelValue","field-name","reference-model","index","schema","additional-properties","errors","onDeleteKeyValue"])])})),128)),(t.openBlock(),t.createBlock(b,{id:"".concat(a.schema.title.replace(/ /g,"-"),"-new-observer"),key:a.updatePass,as:"div",class:"key-value-save"},{default:t.withCtx((function(r){var n=r.validate,o=r.errors;return[t.createVNode(v,{id:"".concat(a.schema.title.replace(/ /g,"-"),"-key-provider"),modelValue:a.newKey,"onUpdate:modelValue":l[1]||(l[1]=function(e){return a.newKey=e}),rules:"required",name:"newKey",label:"".concat(a.schema.title," new key"),as:"div"},{default:t.withCtx((function(a){var l=a.field,r=a.handleChange,n=a.errors,o=a.meta;return[t.createVNode(V,{"model-value":l.value,schema:{title:"Key",type:"string",ui:{tag:"input",type:"text"}},type:"string","validation-ob":e._({errors:n},o),"reference-model":"","onUpdate:modelValue":r},null,8,["model-value","validation-ob","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","label"]),"object"===a.additionalProperties.type?(t.openBlock(),t.createBlock(v,{key:0,id:"".concat(a.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:a.newValue,"onUpdate:modelValue":l[2]||(l[2]=function(e){return a.newValue=e}),rules:"required",name:"newValue",label:"".concat(a.schema.title," new value"),as:""},{default:t.withCtx((function(e){var l=e.field,r=e.handleChange;return[t.createVNode(h,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,"is-self-required":!0,schema:a.additionalProperties,type:a.additionalProperties.type,errors:o,"reference-model":{},"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):"key-value-pairs"===a.additionalProperties.type?(t.openBlock(),t.createBlock(v,{key:1,id:"".concat(a.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:a.newValue,"onUpdate:modelValue":l[3]||(l[3]=function(e){return a.newValue=e}),rules:"required",name:"newValue",label:"".concat(a.schema.title," new value"),as:""},{default:t.withCtx((function(e){var l=e.field,r=e.handleChange;return[t.createVNode(k,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:a.additionalProperties,type:a.additionalProperties.type,errors:o,"reference-model":{},"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):"array"===a.additionalProperties.type?(t.openBlock(),t.createBlock(v,{key:2,id:"".concat(a.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:a.newValue,"onUpdate:modelValue":l[4]||(l[4]=function(e){return a.newValue=e}),rules:"required",name:"newValue",label:"".concat(a.schema.title," new value"),as:""},{default:t.withCtx((function(e){var l=e.field,r=e.handleChange;return[t.createVNode(w,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:a.additionalProperties,type:a.additionalProperties.type,errors:o,"reference-model":[],"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):(t.openBlock(),t.createBlock(v,{key:3,id:"".concat(a.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:a.newValue,"onUpdate:modelValue":l[5]||(l[5]=function(e){return a.newValue=e}),rules:"required",name:"newValue",label:"".concat(a.schema.title," new value"),as:""},{default:t.withCtx((function(l){var r=l.field,n=l.handleChange,o=l.errors,i=l.meta;return[t.createVNode(V,{"model-value":r.value,schema:a.additionalProperties,type:a.additionalProperties.type,"validation-ob":e._({errors:o},i),"reference-model":"","onUpdate:modelValue":n},null,8,["model-value","schema","type","validation-ob","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","label"])),t.createElementVNode("button",{class:"button ac-button is-medium is-square is-primary is-outlined",onClick:t.withModifiers((function(e){return a.addProp(n)}),["prevent"])},u,8,d)]})),_:1},8,["id"]))],64)):t.createCommentVNode("",!0),"yaml"===a.activeTab?(t.openBlock(),t.createBlock(C,{key:1,modelValue:a.modelData,"onUpdate:modelValue":l[6]||(l[6]=function(e){return a.modelData=e}),"reference-model":a.referenceModel||{},"onCode::modelDataUpdated":a.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):"json"===a.activeTab?(t.openBlock(),t.createBlock(N,{key:2,modelValue:a.modelData,"onUpdate:modelValue":l[7]||(l[7]=function(e){return a.modelData=e}),"reference-model":a.referenceModel||{},"onCode::modelDataUpdated":a.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):t.createCommentVNode("",!0)],2)},exports.default=r;