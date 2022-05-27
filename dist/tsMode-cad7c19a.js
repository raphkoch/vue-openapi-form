"use strict";var e=require("./MonacoEditor-7dc16221.js");require("vue");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,n=(e,i,s)=>(((e,i,s)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s})(e,"symbol"!=typeof i?i+"":i,s),s),a={};((e,n,a,o)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let l of s(n))r.call(e,l)||!a&&"default"===l||t(e,l,{get:()=>n[l],enumerable:!(o=i(n,l))||o.enumerable})})(a,e.m);var o=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(a.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},l={};function c(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=c(r,t,i);return s}function d(e){return e?e.map((e=>e.text)).join(""):""}l["lib.d.ts"]=!0,l["lib.dom.d.ts"]=!0,l["lib.dom.iterable.d.ts"]=!0,l["lib.es2015.collection.d.ts"]=!0,l["lib.es2015.core.d.ts"]=!0,l["lib.es2015.d.ts"]=!0,l["lib.es2015.generator.d.ts"]=!0,l["lib.es2015.iterable.d.ts"]=!0,l["lib.es2015.promise.d.ts"]=!0,l["lib.es2015.proxy.d.ts"]=!0,l["lib.es2015.reflect.d.ts"]=!0,l["lib.es2015.symbol.d.ts"]=!0,l["lib.es2015.symbol.wellknown.d.ts"]=!0,l["lib.es2016.array.include.d.ts"]=!0,l["lib.es2016.d.ts"]=!0,l["lib.es2016.full.d.ts"]=!0,l["lib.es2017.d.ts"]=!0,l["lib.es2017.full.d.ts"]=!0,l["lib.es2017.intl.d.ts"]=!0,l["lib.es2017.object.d.ts"]=!0,l["lib.es2017.sharedmemory.d.ts"]=!0,l["lib.es2017.string.d.ts"]=!0,l["lib.es2017.typedarrays.d.ts"]=!0,l["lib.es2018.asyncgenerator.d.ts"]=!0,l["lib.es2018.asynciterable.d.ts"]=!0,l["lib.es2018.d.ts"]=!0,l["lib.es2018.full.d.ts"]=!0,l["lib.es2018.intl.d.ts"]=!0,l["lib.es2018.promise.d.ts"]=!0,l["lib.es2018.regexp.d.ts"]=!0,l["lib.es2019.array.d.ts"]=!0,l["lib.es2019.d.ts"]=!0,l["lib.es2019.full.d.ts"]=!0,l["lib.es2019.object.d.ts"]=!0,l["lib.es2019.string.d.ts"]=!0,l["lib.es2019.symbol.d.ts"]=!0,l["lib.es2020.bigint.d.ts"]=!0,l["lib.es2020.d.ts"]=!0,l["lib.es2020.full.d.ts"]=!0,l["lib.es2020.intl.d.ts"]=!0,l["lib.es2020.promise.d.ts"]=!0,l["lib.es2020.sharedmemory.d.ts"]=!0,l["lib.es2020.string.d.ts"]=!0,l["lib.es2020.symbol.wellknown.d.ts"]=!0,l["lib.es2021.d.ts"]=!0,l["lib.es2021.full.d.ts"]=!0,l["lib.es2021.intl.d.ts"]=!0,l["lib.es2021.promise.d.ts"]=!0,l["lib.es2021.string.d.ts"]=!0,l["lib.es2021.weakref.d.ts"]=!0,l["lib.es5.d.ts"]=!0,l["lib.es6.d.ts"]=!0,l["lib.esnext.d.ts"]=!0,l["lib.esnext.full.d.ts"]=!0,l["lib.esnext.intl.d.ts"]=!0,l["lib.esnext.promise.d.ts"]=!0,l["lib.esnext.string.d.ts"]=!0,l["lib.esnext.weakref.d.ts"]=!0,l["lib.scripthost.d.ts"]=!0,l["lib.webworker.d.ts"]=!0,l["lib.webworker.importscripts.d.ts"]=!0,l["lib.webworker.iterable.d.ts"]=!0;var u=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},g=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!l[e.path.slice(1)])}getOrCreateModel(t){const i=a.Uri.parse(t),s=a.editor.getModel(i);if(s)return s;if(this.isLibFile(i)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[i.path.slice(1)],"typescript",i);const r=e.t.getExtraLibs()[t];return r?a.editor.createModel(r.content,"typescript",i):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},p=class extends u{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():a.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{a.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(a.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(a.editor.onWillDisposeModel(n)),this._disposables.push(a.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of a.editor.getModels())n(e)}});const o=()=>{for(const e of a.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),a.editor.getModels().forEach((e=>r(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=await Promise.all(i);if(!o||e.isDisposed())return;const l=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=l.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?a.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||a.editor.setModelMarkers(e,this._selector,l.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:o,column:l}=e.getPositionAt(i+s),d=[];return t.reportsUnnecessary&&d.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&d.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:l,message:c(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:d}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:d,message:c(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},m=class extends u{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const r=e.getWordUntilPosition(t),n=new a.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=e.uri,l=e.getOffsetAt(t),c=await this._worker(o);if(e.isDisposed())return;const d=await c.getCompletionsAtPosition(o.toString(),l);if(!d||e.isDisposed())return;return{suggestions:d.entries.map((i=>{let s=n;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),r=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new a.Range(t.lineNumber,t.column,r.lineNumber,r.column)}const r=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&r.push(a.languages.CompletionItemTag.Deprecated),{uri:o,position:t,offset:l,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:m.convertKind(i.kind),tags:r}}))}}async resolveCompletionItem(e,t){const i=e,s=i.uri,r=i.position,n=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),n,i.label);return o?{uri:s,position:r,label:o.name,kind:m.convertKind(o.kind),detail:d(o.displayParts),documentation:{value:m.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case S.primitiveType:case S.keyword:return a.languages.CompletionItemKind.Keyword;case S.variable:case S.localVariable:return a.languages.CompletionItemKind.Variable;case S.memberVariable:case S.memberGetAccessor:case S.memberSetAccessor:return a.languages.CompletionItemKind.Field;case S.function:case S.memberFunction:case S.constructSignature:case S.callSignature:case S.indexSignature:return a.languages.CompletionItemKind.Function;case S.enum:return a.languages.CompletionItemKind.Enum;case S.module:return a.languages.CompletionItemKind.Module;case S.class:return a.languages.CompletionItemKind.Class;case S.interface:return a.languages.CompletionItemKind.Interface;case S.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=d(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${h(i)}`;return t}};function h(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var b=class extends u{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(r.toString(),n,{triggerReason:b._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:d(e.documentation)},t.label+=d(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=d(i.displayParts),a={label:n,documentation:{value:d(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=d(e.separatorDisplayParts))})),t.label+=d(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},f=class extends u{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=d(a.documentation),l=a.tags?a.tags.map((e=>h(e))).join("  \n\n"):"",c=d(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},_=class extends u{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getOccurrencesAtPosition(s.toString(),r);return o&&!e.isDisposed()?o.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text}))):void 0}},y=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getDefinitionAtPosition(s.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>a.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},w=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getReferencesAtPosition(r.toString(),n);if(!l||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(l.map((e=>a.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let e of l){const t=this._libFiles.getOrCreateModel(e.fileName);t&&c.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return c}},x=class extends u{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationBarItems(i.toString());if(!r||e.isDisposed())return;const n=(t,i,s)=>{let r={name:i.text,detail:"",kind:k[i.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(r.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)n(t,e,r.name);t.push(r)};let o=[];return r.forEach((e=>n(o,e))),o}},S=class{};n(S,"unknown",""),n(S,"keyword","keyword"),n(S,"script","script"),n(S,"module","module"),n(S,"class","class"),n(S,"interface","interface"),n(S,"type","type"),n(S,"enum","enum"),n(S,"variable","var"),n(S,"localVariable","local var"),n(S,"function","function"),n(S,"localFunction","local function"),n(S,"memberFunction","method"),n(S,"memberGetAccessor","getter"),n(S,"memberSetAccessor","setter"),n(S,"memberVariable","property"),n(S,"constructorImplementation","constructor"),n(S,"callSignature","call"),n(S,"indexSignature","index"),n(S,"constructSignature","construct"),n(S,"parameter","parameter"),n(S,"typeParameter","type parameter"),n(S,"primitiveType","primitive type"),n(S,"label","label"),n(S,"alias","alias"),n(S,"const","const"),n(S,"let","let"),n(S,"warning","warning");var k=Object.create(null);k[S.module]=a.languages.SymbolKind.Module,k[S.class]=a.languages.SymbolKind.Class,k[S.enum]=a.languages.SymbolKind.Enum,k[S.interface]=a.languages.SymbolKind.Interface,k[S.memberFunction]=a.languages.SymbolKind.Method,k[S.memberVariable]=a.languages.SymbolKind.Property,k[S.memberGetAccessor]=a.languages.SymbolKind.Property,k[S.memberSetAccessor]=a.languages.SymbolKind.Property,k[S.variable]=a.languages.SymbolKind.Variable,k[S.const]=a.languages.SymbolKind.Variable,k[S.localVariable]=a.languages.SymbolKind.Variable,k[S.variable]=a.languages.SymbolKind.Variable,k[S.function]=a.languages.SymbolKind.Function,k[S.localFunction]=a.languages.SymbolKind.Function;var v,C,A=class extends u{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},D=class extends A{async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,A._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},F=class extends A{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,A._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},I=class extends A{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=A._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},L=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}},T=class extends u{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return null;return{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?a.languages.InlayHintKind.Parameter:a.languages.InlayHintKind.Type}};function P(e,t){const i=new o(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),r=new g(s);return a.languages.registerCompletionItemProvider(t,new m(s)),a.languages.registerSignatureHelpProvider(t,new b(s)),a.languages.registerHoverProvider(t,new f(s)),a.languages.registerDocumentHighlightProvider(t,new _(s)),a.languages.registerDefinitionProvider(t,new y(r,s)),a.languages.registerReferenceProvider(t,new w(r,s)),a.languages.registerDocumentSymbolProvider(t,new x(s)),a.languages.registerDocumentRangeFormattingEditProvider(t,new D(s)),a.languages.registerOnTypeFormattingEditProvider(t,new F(s)),a.languages.registerCodeActionProvider(t,new I(s)),a.languages.registerRenameProvider(t,new L(r,s)),a.languages.registerInlayHintsProvider(t,new T(s)),new p(r,e,t,s),s}exports.Adapter=u,exports.CodeActionAdaptor=I,exports.DefinitionAdapter=y,exports.DiagnosticsAdapter=p,exports.FormatAdapter=D,exports.FormatHelper=A,exports.FormatOnTypeAdapter=F,exports.InlayHintsAdapter=T,exports.Kind=S,exports.LibFiles=g,exports.OccurrencesAdapter=_,exports.OutlineAdapter=x,exports.QuickInfoAdapter=f,exports.ReferenceAdapter=w,exports.RenameAdapter=L,exports.SignatureHelpAdapter=b,exports.SuggestAdapter=m,exports.WorkerManager=o,exports.flattenDiagnosticMessageText=c,exports.getJavaScriptWorker=function(){return new Promise(((e,t)=>{if(!v)return t("JavaScript not registered!");e(v)}))},exports.getTypeScriptWorker=function(){return new Promise(((e,t)=>{if(!C)return t("TypeScript not registered!");e(C)}))},exports.setupJavaScript=function(e){v=P(e,"javascript")},exports.setupTypeScript=function(e){C=P(e,"typescript")};