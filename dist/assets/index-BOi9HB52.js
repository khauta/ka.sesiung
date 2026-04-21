(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=globalThis,ei=cr.ShadowRoot&&(cr.ShadyCSS===void 0||cr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ni=Symbol(),Do=new WeakMap;let ja=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==ni)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ei&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Do.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Do.set(e,t))}return t}toString(){return this.cssText}};const zu=r=>new ja(typeof r=="string"?r:r+"",void 0,ni),Pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((n,s,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ja(e,r,ni)},Hu=(r,t)=>{if(ei)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),s=cr.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,r.appendChild(n)}},ko=ei?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return zu(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ku,defineProperty:Gu,getOwnPropertyDescriptor:Wu,getOwnPropertyNames:Qu,getOwnPropertySymbols:Yu,getPrototypeOf:Xu}=Object,Wt=globalThis,No=Wt.trustedTypes,Ju=No?No.emptyScript:"",_s=Wt.reactiveElementPolyfillSupport,vn=(r,t)=>r,_r={toAttribute(r,t){switch(t){case Boolean:r=r?Ju:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ri=(r,t)=>!Ku(r,t),Oo={attribute:!0,type:String,converter:_r,reflect:!1,useDefault:!1,hasChanged:ri};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Wt.litPropertyMetadata??(Wt.litPropertyMetadata=new WeakMap);let Te=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Oo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&Gu(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:o}=Wu(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const h=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(t,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oo}static _$Ei(){if(this.hasOwnProperty(vn("elementProperties")))return;const t=Xu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vn("properties"))){const e=this.properties,n=[...Qu(e),...Yu(e)];for(const s of n)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)e.unshift(ko(s))}else t!==void 0&&e.push(ko(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var o;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:_r).toAttribute(e,n.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var o,a;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const h=n.getPropertyOptions(s),c=typeof h.converter=="function"?{fromAttribute:h.converter}:((o=h.converter)==null?void 0:o.fromAttribute)!==void 0?h.converter:_r;this._$Em=s;const f=c.fromAttribute(e,h.type);this[s]=f??((a=this._$Ej)==null?void 0:a.get(s))??f,this._$Em=null}}requestUpdate(t,e,n,s=!1,o){var a;if(t!==void 0){const h=this.constructor;if(s===!1&&(o=this[t]),n??(n=h.getPropertyOptions(t)),!((n.hasChanged??ri)(o,e)||n.useDefault&&n.reflect&&o===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(h._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:s,wrapped:o},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:h}=a,c=this[o];h!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[vn("elementProperties")]=new Map,Te[vn("finalized")]=new Map,_s==null||_s({ReactiveElement:Te}),(Wt.reactiveElementVersions??(Wt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=globalThis,$o=r=>r,yr=En.trustedTypes,Mo=yr?yr.createPolicy("lit-html",{createHTML:r=>r}):void 0,qa="$lit$",Ht=`lit$${Math.random().toFixed(9).slice(2)}$`,za="?"+Ht,Zu=`<${za}>`,ce=document,bn=()=>ce.createComment(""),Rn=r=>r===null||typeof r!="object"&&typeof r!="function",si=Array.isArray,th=r=>si(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ys=`[ 	
\f\r]`,fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lo=/-->/g,Fo=/>/g,se=RegExp(`>|${ys}(?:([^\\s"'>=/]+)(${ys}*=${ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Uo=/'/g,Bo=/"/g,Ha=/^(?:script|style|textarea|title)$/i,eh=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),z=eh(1),ke=Symbol.for("lit-noChange"),ot=Symbol.for("lit-nothing"),jo=new WeakMap,oe=ce.createTreeWalker(ce,129);function Ka(r,t){if(!si(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mo!==void 0?Mo.createHTML(t):t}const nh=(r,t)=>{const e=r.length-1,n=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=fn;for(let h=0;h<e;h++){const c=r[h];let f,_,A=-1,b=0;for(;b<c.length&&(a.lastIndex=b,_=a.exec(c),_!==null);)b=a.lastIndex,a===fn?_[1]==="!--"?a=Lo:_[1]!==void 0?a=Fo:_[2]!==void 0?(Ha.test(_[2])&&(s=RegExp("</"+_[2],"g")),a=se):_[3]!==void 0&&(a=se):a===se?_[0]===">"?(a=s??fn,A=-1):_[1]===void 0?A=-2:(A=a.lastIndex-_[2].length,f=_[1],a=_[3]===void 0?se:_[3]==='"'?Bo:Uo):a===Bo||a===Uo?a=se:a===Lo||a===Fo?a=fn:(a=se,s=void 0);const S=a===se&&r[h+1].startsWith("/>")?" ":"";o+=a===fn?c+Zu:A>=0?(n.push(f),c.slice(0,A)+qa+c.slice(A)+Ht+S):c+Ht+(A===-2?h:S)}return[Ka(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let Ds=class Ga{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let o=0,a=0;const h=t.length-1,c=this.parts,[f,_]=nh(t,e);if(this.el=Ga.createElement(f,n),oe.currentNode=this.el.content,e===2||e===3){const A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(s=oe.nextNode())!==null&&c.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const A of s.getAttributeNames())if(A.endsWith(qa)){const b=_[a++],S=s.getAttribute(A).split(Ht),x=/([.?@])?(.*)/.exec(b);c.push({type:1,index:o,name:x[2],strings:S,ctor:x[1]==="."?sh:x[1]==="?"?ih:x[1]==="@"?oh:kr}),s.removeAttribute(A)}else A.startsWith(Ht)&&(c.push({type:6,index:o}),s.removeAttribute(A));if(Ha.test(s.tagName)){const A=s.textContent.split(Ht),b=A.length-1;if(b>0){s.textContent=yr?yr.emptyScript:"";for(let S=0;S<b;S++)s.append(A[S],bn()),oe.nextNode(),c.push({type:2,index:++o});s.append(A[b],bn())}}}else if(s.nodeType===8)if(s.data===za)c.push({type:2,index:o});else{let A=-1;for(;(A=s.data.indexOf(Ht,A+1))!==-1;)c.push({type:7,index:o}),A+=Ht.length-1}o++}}static createElement(t,e){const n=ce.createElement("template");return n.innerHTML=t,n}};function Ne(r,t,e=r,n){var a,h;if(t===ke)return t;let s=n!==void 0?(a=e._$Co)==null?void 0:a[n]:e._$Cl;const o=Rn(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=s:e._$Cl=s),s!==void 0&&(t=Ne(r,s._$AS(r,t.values),s,n)),t}class rh{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??ce).importNode(e,!0);oe.currentNode=s;let o=oe.nextNode(),a=0,h=0,c=n[0];for(;c!==void 0;){if(a===c.index){let f;c.type===2?f=new Nn(o,o.nextSibling,this,t):c.type===1?f=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(f=new ah(o,this,t)),this._$AV.push(f),c=n[++h]}a!==(c==null?void 0:c.index)&&(o=oe.nextNode(),a++)}return oe.currentNode=ce,s}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Nn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=ot,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ne(this,t,e),Rn(t)?t===ot||t==null||t===""?(this._$AH!==ot&&this._$AR(),this._$AH=ot):t!==this._$AH&&t!==ke&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):th(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ot&&Rn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ce.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ds.createElement(Ka(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const a=new rh(s,this),h=a.u(this.options);a.p(e),this.T(h),this._$AH=a}}_$AC(t){let e=jo.get(t.strings);return e===void 0&&jo.set(t.strings,e=new Ds(t)),e}k(t){si(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const o of t)s===e.length?e.push(n=new Nn(this.O(bn()),this.O(bn()),this,this.options)):n=e[s],n._$AI(o),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){const s=$o(t).nextSibling;$o(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class kr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,o){this.type=1,this._$AH=ot,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ot}_$AI(t,e=this,n,s){const o=this.strings;let a=!1;if(o===void 0)t=Ne(this,t,e,0),a=!Rn(t)||t!==this._$AH&&t!==ke,a&&(this._$AH=t);else{const h=t;let c,f;for(t=o[0],c=0;c<o.length-1;c++)f=Ne(this,h[n+c],e,c),f===ke&&(f=this._$AH[c]),a||(a=!Rn(f)||f!==this._$AH[c]),f===ot?t=ot:t!==ot&&(t+=(f??"")+o[c+1]),this._$AH[c]=f}a&&!s&&this.j(t)}j(t){t===ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sh extends kr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ot?void 0:t}}class ih extends kr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ot)}}class oh extends kr{constructor(t,e,n,s,o){super(t,e,n,s,o),this.type=5}_$AI(t,e=this){if((t=Ne(this,t,e,0)??ot)===ke)return;const n=this._$AH,s=t===ot&&n!==ot||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==ot&&(n===ot||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ah{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ne(this,t)}}const vs=En.litHtmlPolyfillSupport;vs==null||vs(Ds,Nn),(En.litHtmlVersions??(En.litHtmlVersions=[])).push("3.3.2");const lh=(r,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=s=new Nn(t.insertBefore(bn(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=globalThis;class Tt extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=lh(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ke}}var Ba;Tt._$litElement$=!0,Tt.finalized=!0,(Ba=le.litElementHydrateSupport)==null||Ba.call(le,{LitElement:Tt});const Es=le.litElementPolyfillSupport;Es==null||Es({LitElement:Tt});(le.litElementVersions??(le.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uh={attribute:!0,type:String,converter:_r,reflect:!1,hasChanged:ri},hh=(r=uh,t,e)=>{const{kind:n,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),n==="accessor"){const{name:a}=e;return{set(h){const c=t.get.call(this);t.set.call(this,h),this.requestUpdate(a,c,r,!0,h)},init(h){return h!==void 0&&this.C(a,void 0,r,h),h}}}if(n==="setter"){const{name:a}=e;return function(h){const c=this[a];t.call(this,h),this.requestUpdate(a,c,r,!0,h)}}throw Error("Unsupported decorator location: "+n)};function ze(r){return(t,e)=>typeof e=="object"?hh(r,t,e):((n,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,n),a?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(r){return ze({...r,state:!0,attribute:!1})}class Re extends EventTarget{constructor(){super(),this.routes=[{pattern:/^app:\/\/hub/,view:"hub"},{pattern:/^app:\/\/tracker/,view:"tracker"},{pattern:/^app:\/\/vault/,view:"vault"},{pattern:/^app:\/\/login/,view:"login"},{pattern:/^app:\/\/otp/,view:"otp"},{pattern:/^app:\/\/signup/,view:"signup"},{pattern:/^\/hub/,view:"hub"},{pattern:/^\/tracker/,view:"tracker"},{pattern:/^\/vault/,view:"vault"},{pattern:/^\/login/,view:"login"},{pattern:/^\/otp/,view:"otp"},{pattern:/^\/signup/,view:"signup"},{pattern:/^\/$/,view:"login"}],window.addEventListener("popstate",()=>this.resolveRoute()),window.addEventListener("hashchange",()=>this.resolveRoute())}static get getInstance(){return Re.instance||(Re.instance=new Re),Re.instance}navigate(t){if(t.startsWith("app://")){const e=t.replace("app://","/");window.history.pushState({},"",e)}else window.history.pushState({},"",t);this.resolveRoute()}resolveRoute(){const t=window.location.pathname,e=this.routes.find(s=>s.pattern.test(t)),n=e?e.view:"login";this.dispatchEvent(new CustomEvent("route-changed",{detail:{view:n}}))}}const At=Re.getInstance,ws={},ir="ks_auth_token",or="ks_auth_user",Se="ks_pending_phone",qo=(ws==null?void 0:ws.VITE_OTP_SERVER_URL)??"http://localhost:3000";class ch extends EventTarget{constructor(){super(),this._token=null,this._user=null;const t=localStorage.getItem(ir),e=localStorage.getItem(or);t&&e&&!this._isExpired(t)?(this._token=t,this._user=JSON.parse(e)):(localStorage.removeItem(ir),localStorage.removeItem(or))}isAuthenticated(){return this._token!==null&&!this._isExpired(this._token)}getToken(){return this._token}getUser(){return this._user}async requestOtp(t){const e=await fetch(`${qo}/api/auth/request-otp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:t})});if(!e.ok){const n=await e.json().catch(()=>({}));throw new Error(n.error??`OTP request failed (${e.status})`)}}async verifyOtp(t,e){const n=await fetch(`${qo}/api/auth/verify-otp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:t,otp:e})}),s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.error??`OTP verification failed (${n.status})`);this._token=s.token,this._user=s.client,localStorage.setItem(ir,this._token),localStorage.setItem(or,JSON.stringify(this._user)),this._emit()}signOut(){localStorage.removeItem(ir),localStorage.removeItem(or),sessionStorage.removeItem(Se),this._token=null,this._user=null,this._emit()}_isExpired(t){try{const e=JSON.parse(atob(t.split(".")[1]));return Date.now()>=e.exp*1e3}catch{return!0}}_emit(){this.dispatchEvent(new CustomEvent("auth-changed",{detail:{user:this._user}}))}}const St=new ch;var zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},dh=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],h=r[e++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,h=a?r[s+1]:0,c=s+2<r.length,f=c?r[s+2]:0,_=o>>2,A=(o&3)<<4|h>>4;let b=(h&15)<<2|f>>6,S=f&63;c||(S=64,a||(b=64)),n.push(e[_],e[A],e[b],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Wa(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):dh(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],h=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const A=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||h==null||f==null||A==null)throw new fh;const b=o<<2|h>>4;if(n.push(b),f!==64){const S=h<<4&240|f>>2;if(n.push(S),A!==64){const x=f<<6&192|A;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ph=function(r){const t=Wa(r);return Qa.encodeByteArray(t,!0)},vr=function(r){return ph(r).replace(/\./g,"")},gh=function(r){try{return Qa.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>mh().__FIREBASE_DEFAULTS__,yh=()=>{if(typeof process>"u"||typeof zo>"u")return;const r=zo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vh=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&gh(r[1]);return t&&JSON.parse(t)},ii=()=>{try{return _h()||yh()||vh()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Eh=r=>{var t,e;return(e=(t=ii())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},wh=r=>{const t=Eh(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ya=()=>{var r;return(r=ii())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[vr(JSON.stringify(e)),vr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bh(){var r;const t=(r=ii())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rh(){return!bh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ph(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="FirebaseError";class He extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Ch,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Vh(o,n):"Error",h=`${this.serviceName}: ${a} (${s}).`;return new He(s,h,n)}}function Vh(r,t){return r.replace(xh,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const xh=/\{\$([^}]+)}/g;function ks(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(Ho(o)&&Ho(a)){if(!ks(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Ho(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(r){return r&&r._delegate?r._delegate:r}class Sn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Th;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nh(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ie){return this.instances.has(t)}getOptions(t=ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);n===h&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kh(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ie){return this.component?this.component.multipleInstances?t:ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kh(r){return r===ie?void 0:r}function Nh(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Dh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(U||(U={}));const $h={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Mh=U.INFO,Lh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Fh=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Lh[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Za{constructor(t){this.name=t,this._logLevel=Mh,this._logHandler=Fh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$h[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Uh=(r,t)=>t.some(e=>r instanceof e);let Ko,Go;function Bh(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jh(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tl=new WeakMap,Ns=new WeakMap,el=new WeakMap,Ts=new WeakMap,oi=new WeakMap;function qh(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(Qt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&tl.set(e,r)}).catch(()=>{}),oi.set(t,r),t}function zh(r){if(Ns.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});Ns.set(r,t)}let Os={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Ns.get(r);if(t==="objectStoreNames")return r.objectStoreNames||el.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Hh(r){Os=r(Os)}function Kh(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(As(this),t,...e);return el.set(n,t.sort?t.sort():[t]),Qt(n)}:jh().includes(r)?function(...t){return r.apply(As(this),t),Qt(tl.get(this))}:function(...t){return Qt(r.apply(As(this),t))}}function Gh(r){return typeof r=="function"?Kh(r):(r instanceof IDBTransaction&&zh(r),Uh(r,Bh())?new Proxy(r,Os):r)}function Qt(r){if(r instanceof IDBRequest)return qh(r);if(Ts.has(r))return Ts.get(r);const t=Gh(r);return t!==r&&(Ts.set(r,t),oi.set(t,r)),t}const As=r=>oi.get(r);function Wh(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),h=Qt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Qt(a.result),c.oldVersion,c.newVersion,Qt(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),h.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const Qh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],Is=new Map;function Wo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Is.get(t))return Is.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Yh.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Qh.includes(e)))return;const o=async function(a,...h){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return n&&(f=f.index(h.shift())),(await Promise.all([f[e](...h),s&&c.done]))[0]};return Is.set(t,o),o}Hh(r=>({...r,get:(t,e,n)=>Wo(t,e)||r.get(t,e,n),has:(t,e)=>!!Wo(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jh(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Jh(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $s="@firebase/app",Qo="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Za("@firebase/app"),Zh="@firebase/app-compat",tc="@firebase/analytics-compat",ec="@firebase/analytics",nc="@firebase/app-check-compat",rc="@firebase/app-check",sc="@firebase/auth",ic="@firebase/auth-compat",oc="@firebase/database",ac="@firebase/data-connect",lc="@firebase/database-compat",uc="@firebase/functions",hc="@firebase/functions-compat",cc="@firebase/installations",dc="@firebase/installations-compat",fc="@firebase/messaging",pc="@firebase/messaging-compat",gc="@firebase/performance",mc="@firebase/performance-compat",_c="@firebase/remote-config",yc="@firebase/remote-config-compat",vc="@firebase/storage",Ec="@firebase/storage-compat",wc="@firebase/firestore",Tc="@firebase/vertexai-preview",Ac="@firebase/firestore-compat",Ic="firebase",bc="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]",Rc={[$s]:"fire-core",[Zh]:"fire-core-compat",[ec]:"fire-analytics",[tc]:"fire-analytics-compat",[rc]:"fire-app-check",[nc]:"fire-app-check-compat",[sc]:"fire-auth",[ic]:"fire-auth-compat",[oc]:"fire-rtdb",[ac]:"fire-data-connect",[lc]:"fire-rtdb-compat",[uc]:"fire-fn",[hc]:"fire-fn-compat",[cc]:"fire-iid",[dc]:"fire-iid-compat",[fc]:"fire-fcm",[pc]:"fire-fcm-compat",[gc]:"fire-perf",[mc]:"fire-perf-compat",[_c]:"fire-rc",[yc]:"fire-rc-compat",[vc]:"fire-gcs",[Ec]:"fire-gcs-compat",[wc]:"fire-fst",[Ac]:"fire-fst-compat",[Tc]:"fire-vertex","fire-js":"fire-js",[Ic]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Sc=new Map,Ls=new Map;function Yo(r,t){try{r.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function wr(r){const t=r.name;if(Ls.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;Ls.set(t,r);for(const e of Er.values())Yo(e,r);for(const e of Sc.values())Yo(e,r);return!0}function Pc(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Xa("app","Firebase",Cc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=bc;function nl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ms,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=Ya()),!e)throw Yt.create("no-options");const o=Er.get(s);if(o){if(ks(e,o.options)&&ks(n,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new Oh(s);for(const c of Ls.values())a.addComponent(c);const h=new Vc(e,n,a);return Er.set(s,h),h}function Dc(r=Ms){const t=Er.get(r);if(!t&&r===Ms&&Ya())return nl();if(!t)throw Yt.create("no-app",{appName:r});return t}function Pe(r,t,e){var n;let s=(n=Rc[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&h.push("and"),a&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(h.join(" "));return}wr(new Sn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="firebase-heartbeat-database",Nc=1,Pn="firebase-heartbeat-store";let bs=null;function rl(){return bs||(bs=Wh(kc,Nc,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Pn)}catch(e){console.warn(e)}}}}).catch(r=>{throw Yt.create("idb-open",{originalErrorMessage:r.message})})),bs}async function Oc(r){try{const e=(await rl()).transaction(Pn),n=await e.objectStore(Pn).get(sl(r));return await e.done,n}catch(t){if(t instanceof He)Lt.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(e.message)}}}async function Xo(r,t){try{const n=(await rl()).transaction(Pn,"readwrite");await n.objectStore(Pn).put(t,sl(r)),await n.done}catch(e){if(e instanceof He)Lt.warn(e.message);else{const n=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}function sl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=1024,Mc=30*24*60*60*1e3;class Lc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Uc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Jo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const h=new Date(a.date).valueOf();return Date.now()-h<=Mc}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Lt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jo(),{heartbeatsToSend:n,unsentEntries:s}=Fc(this._heartbeatsCache.heartbeats),o=vr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lt.warn(e),""}}}function Jo(){return new Date().toISOString().substring(0,10)}function Fc(r,t=$c){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Zo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Zo(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Uc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sh()?Ph().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Oc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Zo(r){return vr(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r){wr(new Sn("platform-logger",t=>new Xh(t),"PRIVATE")),wr(new Sn("heartbeat",t=>new Lc(t),"PRIVATE")),Pe($s,Qo,r),Pe($s,Qo,"esm2017"),Pe("fire-js","")}Bc("");var jc="firebase",qc="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(jc,qc,"app");var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,il;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,v,T){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)y[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],v=E.g[2];var T=E.g[3],g=p+(T^m&(v^T))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+y[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+y[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+y[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+y[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+y[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+y[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+y[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+y[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+y[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+y[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+y[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+y[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^T&(m^v))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+y[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+y[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+y[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+y[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+y[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+y[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+y[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+y[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+y[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+y[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+y[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+y[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^T)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+y[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+y[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+y[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+y[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+y[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+y[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+y[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+y[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+y[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+y[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+y[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+y[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~T))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+y[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+y[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+y[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+y[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+y[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+y[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+y[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+y[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+y[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+y[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+y[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+T&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,y=this.B,v=this.h,T=0;T<p;){if(v==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<p;)if(y[v++]=E.charCodeAt(T++),v==this.blockSize){s(this,y),v=0;break}}else for(;T<p;)if(y[v++]=E[T++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)E[m++]=this.g[p]>>>y&255;return E};function o(E,p){var m=h;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function a(E,p){this.h=p;for(var m=[],y=!0,v=E.length-1;0<=v;v--){var T=E[v]|0;y&&T==p||(m[v]=T,y=!1)}this.g=m}var h={};function c(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(f(-E));for(var p=[],m=1,y=0;E>=m;y++)p[y]=E/m|0,m*=4294967296;return new a(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(_(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=A,v=0;v<E.length;v+=8){var T=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+T),p);8>T?(T=f(Math.pow(p,T)),y=y.j(T).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var A=c(0),b=c(1),S=c(16777216);r=a.prototype,r.m=function(){if(O(this))return-D(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(O(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),m=this,y="";;){var v=st(m,p).g;m=G(m,v.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=v,x(m))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function O(E){return E.h==-1}r.l=function(E){return E=G(this,E),O(E)?-1:x(E)?0:1};function D(E){for(var p=E.g.length,m=[],y=0;y<p;y++)m[y]=~E.g[y];return new a(m,~E.h).add(b)}r.abs=function(){return O(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0,v=0;v<=p;v++){var T=y+(this.i(v)&65535)+(E.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,T&=65535,g&=65535,m[v]=g<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function G(E,p){return E.add(D(p))}r.j=function(E){if(x(this)||x(E))return A;if(O(this))return O(E)?D(this).j(D(E)):D(D(this).j(E));if(O(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var T=this.i(y)>>>16,g=this.i(y)&65535,Ot=E.i(v)>>>16,Qe=E.i(v)&65535;m[2*y+2*v]+=g*Qe,W(m,2*y+2*v),m[2*y+2*v+1]+=T*Qe,W(m,2*y+2*v+1),m[2*y+2*v+1]+=g*Ot,W(m,2*y+2*v+1),m[2*y+2*v+2]+=T*Ot,W(m,2*y+2*v+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new a(m,0)};function W(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Q(E,p){this.g=E,this.h=p}function st(E,p){if(x(p))throw Error("division by zero");if(x(E))return new Q(A,A);if(O(E))return p=st(D(E),p),new Q(D(p.g),D(p.h));if(O(p))return p=st(E,D(p)),new Q(D(p.g),p.h);if(30<E.g.length){if(O(E)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var m=b,y=p;0>=y.l(E);)m=Nt(m),y=Nt(y);var v=at(m,1),T=at(y,1);for(y=at(y,2),m=at(m,2);!x(y);){var g=T.add(y);0>=g.l(E)&&(v=v.add(m),T=g),y=at(y,1),m=at(m,1)}return p=G(E,v.j(p)),new Q(v,p)}for(v=A;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=f(m),g=T.j(p);O(g)||0<g.l(E);)m-=y,T=f(m),g=T.j(p);x(T)&&(T=b),v=v.add(T),E=G(E,g)}return new Q(v,E)}r.A=function(E){return st(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&E.i(y);return new a(m,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|E.i(y);return new a(m,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^E.i(y);return new a(m,this.h^E.h)};function Nt(E){for(var p=E.g.length+1,m=[],y=0;y<p;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(m,E.h)}function at(E,p){var m=p>>5;p%=32;for(var y=E.g.length-m,v=[],T=0;T<y;T++)v[T]=0<p?E.i(T+m)>>>p|E.i(T+m+1)<<32-p:E.i(T+m);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,il=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,ue=a}).apply(typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{});var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ol,gn,al,dr,Fs,ll,ul,hl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function s(i,l){if(l)t:{var u=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var w=i[d];if(!(w in u))break t;u=u[w]}i=i[i.length-1],d=u[i],l=l(d),l!=d&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,d=!1,w={next:function(){if(!d&&u<i.length){var I=u++;return{value:l(I,i[I]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},h=this||self;function c(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function _(i,l,u){return i.call.apply(i.bind,arguments)}function A(i,l,u){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),i.apply(l,w)}}return function(){return i.apply(l,arguments)}}function b(i,l,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,b.apply(null,arguments)}function S(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function x(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(d,w,I){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return l.prototype[w].apply(d,P)}}function O(i){const l=i.length;if(0<l){const u=Array(l);for(let d=0;d<l;d++)u[d]=i[d];return u}return[]}function D(i,l){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(c(d)){const w=i.length||0,I=d.length||0;i.length=w+I;for(let P=0;P<I;P++)i[w+P]=d[P]}else i.push(d)}}class G{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function W(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=h.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Nt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function at(i,l,u){for(const d in i)l.call(u,i[d],d,i)}function E(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function p(i){const l={};for(const u in i)l[u]=i[u];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,l){let u,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(u in d)i[u]=d[u];for(let I=0;I<m.length;I++)u=m[I],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function v(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function T(i){h.setTimeout(()=>{throw i},0)}function g(){var i=Gr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Ot{constructor(){this.h=this.g=null}add(l,u){const d=Qe.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Qe=new G(()=>new uu,i=>i.reset());class uu{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,Xe=!1,Gr=new Ot,xi=()=>{const i=h.Promise.resolve(void 0);Ye=()=>{i.then(hu)}};var hu=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){T(u)}var l=Qe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Xe=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var cu=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};h.addEventListener("test",u,l),h.removeEventListener("test",u,l)}catch{}return i}();function Je(i,l){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Nt){t:{try{st(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:du[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Je.aa.h.call(this)}}x(Je,dt);var du={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),fu=0;function pu(i,l,u,d,w){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=w,this.key=++fu,this.da=this.fa=!1}function Bn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function jn(i){this.src=i,this.g={},this.h=0}jn.prototype.add=function(i,l,u,d,w){var I=i.toString();i=this.g[I],i||(i=this.g[I]=[],this.h++);var P=Qr(i,l,d,w);return-1<P?(l=i[P],u||(l.fa=!1)):(l=new pu(l,this.src,I,!!d,w),l.fa=u,i.push(l)),l};function Wr(i,l){var u=l.type;if(u in i.g){var d=i.g[u],w=Array.prototype.indexOf.call(d,l,void 0),I;(I=0<=w)&&Array.prototype.splice.call(d,w,1),I&&(Bn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Qr(i,l,u,d){for(var w=0;w<i.length;++w){var I=i[w];if(!I.da&&I.listener==l&&I.capture==!!u&&I.ha==d)return w}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),Xr={};function Di(i,l,u,d,w){if(Array.isArray(l)){for(var I=0;I<l.length;I++)Di(i,l[I],u,d,w);return null}return u=Oi(u),i&&i[Un]?i.K(l,u,f(d)?!!d.capture:!1,w):gu(i,l,u,!1,d,w)}function gu(i,l,u,d,w,I){if(!l)throw Error("Invalid event type");var P=f(w)?!!w.capture:!!w,H=Zr(i);if(H||(i[Yr]=H=new jn(i)),u=H.add(l,u,d,P,I),u.proxy)return u;if(d=mu(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)cu||(w=P),w===void 0&&(w=!1),i.addEventListener(l.toString(),d,w);else if(i.attachEvent)i.attachEvent(Ni(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function mu(){function i(u){return l.call(i.src,i.listener,u)}const l=_u;return i}function ki(i,l,u,d,w){if(Array.isArray(l))for(var I=0;I<l.length;I++)ki(i,l[I],u,d,w);else d=f(d)?!!d.capture:!!d,u=Oi(u),i&&i[Un]?(i=i.i,l=String(l).toString(),l in i.g&&(I=i.g[l],u=Qr(I,u,d,w),-1<u&&(Bn(I[u]),Array.prototype.splice.call(I,u,1),I.length==0&&(delete i.g[l],i.h--)))):i&&(i=Zr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Qr(l,u,d,w)),(u=-1<i?l[i]:null)&&Jr(u))}function Jr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Un])Wr(l.i,i);else{var u=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(u,d,i.capture):l.detachEvent?l.detachEvent(Ni(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=Zr(l))?(Wr(u,i),u.h==0&&(u.src=null,l[Yr]=null)):Bn(i)}}}function Ni(i){return i in Xr?Xr[i]:Xr[i]="on"+i}function _u(i,l){if(i.da)i=!0;else{l=new Je(l,this);var u=i.listener,d=i.ha||i.src;i.fa&&Jr(i),i=u.call(d,l)}return i}function Zr(i){return i=i[Yr],i instanceof jn?i:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(i){return typeof i=="function"?i:(i[ts]||(i[ts]=function(l){return i.handleEvent(l)}),i[ts])}function ft(){Bt.call(this),this.i=new jn(this),this.M=this,this.F=null}x(ft,Bt),ft.prototype[Un]=!0,ft.prototype.removeEventListener=function(i,l,u,d){ki(this,i,l,u,d)};function vt(i,l){var u,d=i.F;if(d)for(u=[];d;d=d.F)u.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new dt(l,i);else if(l instanceof dt)l.target=l.target||i;else{var w=l;l=new dt(d,i),y(l,w)}if(w=!0,u)for(var I=u.length-1;0<=I;I--){var P=l.g=u[I];w=qn(P,d,!0,l)&&w}if(P=l.g=i,w=qn(P,d,!0,l)&&w,w=qn(P,d,!1,l)&&w,u)for(I=0;I<u.length;I++)P=l.g=u[I],w=qn(P,d,!1,l)&&w}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],d=0;d<u.length;d++)Bn(u[d]);delete i.g[l],i.h--}}this.F=null},ft.prototype.K=function(i,l,u,d){return this.i.add(String(i),l,!1,u,d)},ft.prototype.L=function(i,l,u,d){return this.i.add(String(i),l,!0,u,d)};function qn(i,l,u,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,I=0;I<l.length;++I){var P=l[I];if(P&&!P.da&&P.capture==u){var H=P.listener,lt=P.ha||P.src;P.fa&&Wr(i.i,P),w=H.call(lt,d)!==!1&&w}}return w&&!d.defaultPrevented}function $i(i,l,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:h.setTimeout(i,l||0)}function Mi(i){i.g=$i(()=>{i.g=null,i.i&&(i.i=!1,Mi(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class yu extends Bt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(i){Bt.call(this),this.h=i,this.g={}}x(Ze,Bt);var Li=[];function Fi(i){at(i.g,function(l,u){this.g.hasOwnProperty(u)&&Jr(l)},i),i.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Fi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var es=h.JSON.stringify,vu=h.JSON.parse,Eu=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function ns(){}ns.prototype.h=null;function Ui(i){return i.h||(i.h=i.i())}function Bi(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rs(){dt.call(this,"d")}x(rs,dt);function ss(){dt.call(this,"c")}x(ss,dt);var te={},ji=null;function zn(){return ji=ji||new ft}te.La="serverreachability";function qi(i){dt.call(this,te.La,i)}x(qi,dt);function en(i){const l=zn();vt(l,new qi(l))}te.STAT_EVENT="statevent";function zi(i,l){dt.call(this,te.STAT_EVENT,i),this.stat=l}x(zi,dt);function Et(i){const l=zn();vt(l,new zi(l,i))}te.Ma="timingevent";function Hi(i,l){dt.call(this,te.Ma,i),this.size=l}x(Hi,dt);function nn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},l)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function wu(i,l,u,d,w,I){i.info(function(){if(i.g)if(I)for(var P="",H=I.split("&"),lt=0;lt<H.length;lt++){var j=H[lt].split("=");if(1<j.length){var pt=j[0];j=j[1];var gt=pt.split("_");P=2<=gt.length&&gt[1]=="type"?P+(pt+"="+j+"&"):P+(pt+"=redacted&")}}else P=null;else P=I;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+l+`
`+u+`
`+P})}function Tu(i,l,u,d,w,I,P){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+l+`
`+u+`
`+I+" "+P})}function ye(i,l,u,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Iu(i,u)+(d?" "+d:"")})}function Au(i,l){i.info(function(){return"TIMEOUT: "+l})}rn.prototype.info=function(){};function Iu(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var d=u[i];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var I=w[0];if(I!="noop"&&I!="stop"&&I!="close")for(var P=1;P<w.length;P++)w[P]=""}}}}return es(u)}catch{return l}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},is;function Kn(){}x(Kn,ns),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},is=new Kn;function jt(i,l,u,d){this.j=i,this.i=l,this.l=u,this.R=d||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var Wi={},os={};function as(i,l,u){i.L=1,i.v=Yn($t(l)),i.m=u,i.P=!0,Qi(i,null)}function Qi(i,l){i.F=Date.now(),Gn(i),i.A=$t(i.v);var u=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),uo(u.i,"t",d),i.C=0,u=i.j.J,i.h=new Gi,i.g=Po(i.j,u?l:null,!i.m),0<i.O&&(i.M=new yu(b(i.Y,i,i.g),i.O)),l=i.U,u=i.g,d=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Li[0]=w.toString()),w=Li);for(var I=0;I<w.length;I++){var P=Di(u,w[I],d||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),en(),wu(i.i,i.u,i.A,i.l,i.R,i.m)}jt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Mt(i)==3?l.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const gt=Mt(this.g);var l=this.g.Ba();const we=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||_o(this.g)))){this.J||gt!=4||l==7||(l==8||0>=we?en(3):en(2)),ls(this);var u=this.g.Z();this.X=u;e:if(Yi(this)){var d=_o(this.g);i="";var w=d.length,I=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ee(this),sn(this);var P="";break e}this.h.i=new h.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(I&&l==w-1)});d.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,Tu(this.i,this.u,this.A,this.l,this.R,gt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var H,lt=this.g;if((H=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(H)){var j=H;break e}}j=null}if(u=j)ye(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,u);else{this.o=!1,this.s=3,Et(12),ee(this),sn(this);break t}}if(this.P){u=!0;let Rt;for(;!this.J&&this.C<P.length;)if(Rt=bu(this,P),Rt==os){gt==4&&(this.s=4,Et(14),u=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Wi){this.s=4,Et(15),ye(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else ye(this.i,this.l,Rt,null),us(this,Rt);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||P.length!=0||this.h.h||(this.s=1,Et(16),u=!1),this.o=this.o&&u,!u)ye(this.i,this.l,P,"[Invalid Chunked Response]"),ee(this),sn(this);else if(0<P.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),gs(pt),pt.M=!0,Et(11))}}else ye(this.i,this.l,P,null),us(this,P);gt==4&&ee(this),this.o&&!this.J&&(gt==4?Io(this.j,this):(this.o=!1,Gn(this)))}else ju(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ee(this),sn(this)}}}catch{}finally{}};function Yi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function bu(i,l){var u=i.C,d=l.indexOf(`
`,u);return d==-1?os:(u=Number(l.substring(u,d)),isNaN(u)?Wi:(d+=1,d+u>l.length?os:(l=l.slice(d,d+u),i.C=d+u,l)))}jt.prototype.cancel=function(){this.J=!0,ee(this)};function Gn(i){i.S=Date.now()+i.I,Xi(i,i.I)}function Xi(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=nn(b(i.ba,i),l)}function ls(i){i.B&&(h.clearTimeout(i.B),i.B=null)}jt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Au(this.i,this.A),this.L!=2&&(en(),Et(17)),ee(this),this.s=2,sn(this)):Xi(this,this.S-i)};function sn(i){i.j.G==0||i.J||Io(i.j,i)}function ee(i){ls(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Fi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function us(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||hs(u.h,i))){if(!i.K&&hs(u.h,i)&&u.G==3){try{var d=u.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)nr(u),tr(u);else break t;ps(u),Et(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=nn(b(u.Za,u),6e3));if(1>=to(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else re(u,11)}else if((i.K||u.g==i)&&nr(u),!W(l))for(w=u.Da.g.parse(l),l=0;l<w.length;l++){let j=w[l];if(u.T=j[0],j=j[1],u.G==2)if(j[0]=="c"){u.K=j[1],u.ia=j[2];const pt=j[3];pt!=null&&(u.la=pt,u.j.info("VER="+u.la));const gt=j[4];gt!=null&&(u.Aa=gt,u.j.info("SVER="+u.Aa));const we=j[5];we!=null&&typeof we=="number"&&0<we&&(d=1.5*we,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Rt=i.g;if(Rt){const sr=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sr){var I=d.h;I.g||sr.indexOf("spdy")==-1&&sr.indexOf("quic")==-1&&sr.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(cs(I,I.h),I.h=null))}if(d.D){const ms=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ms&&(d.ya=ms,K(d.I,d.D,ms))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var P=i;if(d.qa=So(d,d.J?d.ia:null,d.W),P.K){eo(d.h,P);var H=P,lt=d.L;lt&&(H.I=lt),H.B&&(ls(H),Gn(H)),d.g=P}else To(d);0<u.i.length&&er(u)}else j[0]!="stop"&&j[0]!="close"||re(u,7);else u.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?re(u,7):fs(u):j[0]!="noop"&&u.l&&u.l.ta(j),u.v=0)}}en(4)}catch{}}var Ru=class{constructor(i,l){this.g=i,this.map=l}};function Ji(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function to(i){return i.h?1:i.g?i.g.size:0}function hs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function cs(i,l){i.g?i.g.add(l):i.h=l}function eo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ji.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function no(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return O(i.i)}function Su(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(c(i)){for(var l=[],u=i.length,d=0;d<u;d++)l.push(i[d]);return l}l=[],u=0;for(d in i)l[u++]=i[d];return l}function Pu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(c(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const d in i)l[u++]=d;return l}}}function ro(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(c(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Pu(i),d=Su(i),w=d.length,I=0;I<w;I++)l.call(void 0,d[I],u&&u[I],i)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var d=i[u].indexOf("="),w=null;if(0<=d){var I=i[u].substring(0,d);w=i[u].substring(d+1)}else I=i[u];l(I,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ne(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ne){this.h=i.h,Wn(this,i.j),this.o=i.o,this.g=i.g,Qn(this,i.s),this.l=i.l;var l=i.i,u=new ln;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),io(this,u),this.m=i.m}else i&&(l=String(i).match(so))?(this.h=!1,Wn(this,l[1]||"",!0),this.o=on(l[2]||""),this.g=on(l[3]||"",!0),Qn(this,l[4]),this.l=on(l[5]||"",!0),io(this,l[6]||"",!0),this.m=on(l[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}ne.prototype.toString=function(){var i=[],l=this.j;l&&i.push(an(l,oo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(an(l,oo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(an(u,u.charAt(0)=="/"?Du:xu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",an(u,Nu)),i.join("")};function $t(i){return new ne(i)}function Wn(i,l,u){i.j=u?on(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Qn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function io(i,l,u){l instanceof ln?(i.i=l,Ou(i.i,i.h)):(u||(l=an(l,ku)),i.i=new ln(l,i.h))}function K(i,l,u){i.i.set(l,u)}function Yn(i){return K(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function on(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function an(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Vu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Vu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var oo=/[#\/\?@]/g,xu=/[#\?:]/g,Du=/[#\?]/g,ku=/[#\?@]/g,Nu=/#/g;function ln(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Cu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=ln.prototype,r.add=function(i,l){qt(this),this.i=null,i=ve(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function ao(i,l){qt(i),l=ve(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function lo(i,l){return qt(i),l=ve(i,l),i.g.has(l)}r.forEach=function(i,l){qt(this),this.g.forEach(function(u,d){u.forEach(function(w){i.call(l,w,d,this)},this)},this)},r.na=function(){qt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let d=0;d<l.length;d++){const w=i[d];for(let I=0;I<w.length;I++)u.push(l[d])}return u},r.V=function(i){qt(this);let l=[];if(typeof i=="string")lo(this,i)&&(l=l.concat(this.g.get(ve(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},r.set=function(i,l){return qt(this),this.i=null,i=ve(this,i),lo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},r.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function uo(i,l,u){ao(i,l),0<u.length&&(i.i=null,i.g.set(ve(i,l),O(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var d=l[u];const I=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var w=I;P[d]!==""&&(w+="="+encodeURIComponent(String(P[d]))),i.push(w)}}return this.i=i.join("&")};function ve(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Ou(i,l){l&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(u,d){var w=d.toLowerCase();d!=w&&(ao(this,d),uo(this,w,u))},i)),i.j=l}function $u(i,l){const u=new rn;if(h.Image){const d=new Image;d.onload=S(zt,u,"TestLoadImage: loaded",!0,l,d),d.onerror=S(zt,u,"TestLoadImage: error",!1,l,d),d.onabort=S(zt,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=S(zt,u,"TestLoadImage: timeout",!1,l,d),h.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Mu(i,l){const u=new rn,d=new AbortController,w=setTimeout(()=>{d.abort(),zt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(I=>{clearTimeout(w),I.ok?zt(u,"TestPingServer: ok",!0,l):zt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),zt(u,"TestPingServer: error",!1,l)})}function zt(i,l,u,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(u)}catch{}}function Lu(){this.g=new Eu}function Fu(i,l,u){const d=u||"";try{ro(i,function(w,I){let P=w;f(w)&&(P=es(w)),l.push(d+I+"="+encodeURIComponent(P))})}catch(w){throw l.push(d+"type="+encodeURIComponent("_badmap")),w}}function Xn(i){this.l=i.Ub||null,this.j=i.eb||!1}x(Xn,ns),Xn.prototype.g=function(){return new Jn(this.l,this.j)},Xn.prototype.i=function(i){return function(){return i}}({});function Jn(i,l){ft.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Jn,ft),r=Jn.prototype,r.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,hn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||h).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ho(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ho(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?un(this):hn(this),this.readyState==3&&ho(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,un(this))},r.Qa=function(i){this.g&&(this.response=i,un(this))},r.ga=function(){this.g&&un(this)};function un(i){i.readyState=4,i.l=null,i.j=null,i.v=null,hn(i)}r.setRequestHeader=function(i,l){this.u.append(i,l)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function hn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function co(i){let l="";return at(i,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function ds(i,l,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=co(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):K(i,l,u))}function Y(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Y,ft);var Uu=/^https?$/i,Bu=["POST","PUT"];r=Y.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():is.g(),this.v=this.o?Ui(this.o):Ui(is),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(I){fo(this,I);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)u.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const I of d.keys())u.set(I,d.get(I));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(I=>I.toLowerCase()=="content-type"),w=h.FormData&&i instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Bu,l,void 0))||d||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,P]of u)this.g.setRequestHeader(I,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(I){fo(this,I)}};function fo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,po(i),Zn(i)}function po(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,vt(this,"complete"),vt(this,"abort"),Zn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?go(this):this.bb())},r.bb=function(){go(this)};function go(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Mt(i)!=4||i.Z()!=2)){if(i.u&&Mt(i)==4)$i(i.Ea,0,i);else if(vt(i,"readystatechange"),Mt(i)==4){i.h=!1;try{const P=i.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var d;if(d=P===0){var w=String(i.D).match(so)[1]||null;!w&&h.self&&h.self.location&&(w=h.self.location.protocol.slice(0,-1)),d=!Uu.test(w?w.toLowerCase():"")}u=d}if(u)vt(i,"complete"),vt(i,"success");else{i.m=6;try{var I=2<Mt(i)?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.Z()+"]",po(i)}}finally{Zn(i)}}}}function Zn(i,l){if(i.g){mo(i);const u=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||vt(i,"ready");try{u.onreadystatechange=d}catch{}}}function mo(i){i.I&&(h.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Mt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),vu(l)}};function _o(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ju(i){const l={};i=(i.g&&2<=Mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(W(i[d]))continue;var u=v(i[d]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const I=l[w]||[];l[w]=I,I.push(u)}E(l,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function yo(i){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cn("baseRetryDelayMs",5e3,i),this.cb=cn("retryDelaySeedMs",1e4,i),this.Wa=cn("forwardChannelMaxRetries",2,i),this.wa=cn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(i&&i.concurrentRequestLimit),this.Da=new Lu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=yo.prototype,r.la=8,r.G=1,r.connect=function(i,l,u,d){Et(0),this.W=i,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=So(this,null,this.W),er(this)};function fs(i){if(vo(i),i.G==3){var l=i.U++,u=$t(i.I);if(K(u,"SID",i.K),K(u,"RID",l),K(u,"TYPE","terminate"),dn(i,u),l=new jt(i,i.j,l),l.L=2,l.v=Yn($t(u)),u=!1,h.navigator&&h.navigator.sendBeacon)try{u=h.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&h.Image&&(new Image().src=l.v,u=!0),u||(l.g=Po(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Gn(l)}Ro(i)}function tr(i){i.g&&(gs(i),i.g.cancel(),i.g=null)}function vo(i){tr(i),i.u&&(h.clearTimeout(i.u),i.u=null),nr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&h.clearTimeout(i.s),i.s=null)}function er(i){if(!Zi(i.h)&&!i.s){i.s=!0;var l=i.Ga;Ye||xi(),Xe||(Ye(),Xe=!0),Gr.add(l,i),i.B=0}}function qu(i,l){return to(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=nn(b(i.Ga,i,l),bo(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new jt(this,this.j,i);let I=this.o;if(this.S&&(I?(I=p(I),y(I,this.S)):I=this.S),this.m!==null||this.O||(w.H=I,I=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=wo(this,w,l),u=$t(this.I),K(u,"RID",i),K(u,"CVER",22),this.D&&K(u,"X-HTTP-Session-Id",this.D),dn(this,u),I&&(this.O?l="headers="+encodeURIComponent(String(co(I)))+"&"+l:this.m&&ds(u,this.m,I)),cs(this.h,w),this.Ua&&K(u,"TYPE","init"),this.P?(K(u,"$req",l),K(u,"SID","null"),w.T=!0,as(w,u,null)):as(w,u,l),this.G=2}}else this.G==3&&(i?Eo(this,i):this.i.length==0||Zi(this.h)||Eo(this))};function Eo(i,l){var u;l?u=l.l:u=i.U++;const d=$t(i.I);K(d,"SID",i.K),K(d,"RID",u),K(d,"AID",i.T),dn(i,d),i.m&&i.o&&ds(d,i.m,i.o),u=new jt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=wo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),cs(i.h,u),as(u,d,l)}function dn(i,l){i.H&&at(i.H,function(u,d){K(l,d,u)}),i.l&&ro({},function(u,d){K(l,d,u)})}function wo(i,l,u){u=Math.min(i.i.length,u);var d=i.l?b(i.l.Na,i.l,i):null;t:{var w=i.i;let I=-1;for(;;){const P=["count="+u];I==-1?0<u?(I=w[0].g,P.push("ofs="+I)):I=0:P.push("ofs="+I);let H=!0;for(let lt=0;lt<u;lt++){let j=w[lt].g;const pt=w[lt].map;if(j-=I,0>j)I=Math.max(0,w[lt].g-100),H=!1;else try{Fu(pt,P,"req"+j+"_")}catch{d&&d(pt)}}if(H){d=P.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,d}function To(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Ye||xi(),Xe||(Ye(),Xe=!0),Gr.add(l,i),i.v=0}}function ps(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=nn(b(i.Fa,i),bo(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Ao(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=nn(b(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),tr(this),Ao(this))};function gs(i){i.A!=null&&(h.clearTimeout(i.A),i.A=null)}function Ao(i){i.g=new jt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=$t(i.qa);K(l,"RID","rpc"),K(l,"SID",i.K),K(l,"AID",i.T),K(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&K(l,"TO",i.ja),K(l,"TYPE","xmlhttp"),dn(i,l),i.m&&i.o&&ds(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Yn($t(l)),u.m=null,u.P=!0,Qi(u,i)}r.Za=function(){this.C!=null&&(this.C=null,tr(this),ps(this),Et(19))};function nr(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function Io(i,l){var u=null;if(i.g==l){nr(i),gs(i),i.g=null;var d=2}else if(hs(i.h,l))u=l.D,eo(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var w=i.B;d=zn(),vt(d,new Hi(d,u)),er(i)}else To(i);else if(w=l.s,w==3||w==0&&0<l.X||!(d==1&&qu(i,l)||d==2&&ps(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),w){case 1:re(i,5);break;case 4:re(i,10);break;case 3:re(i,6);break;default:re(i,2)}}}function bo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function re(i,l){if(i.j.info("Error code "+l),l==2){var u=b(i.fb,i),d=i.Xa;const w=!d;d=new ne(d||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Wn(d,"https"),Yn(d),w?$u(d.toString(),u):Mu(d.toString(),u)}else Et(2);i.G=0,i.l&&i.l.sa(l),Ro(i),vo(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ro(i){if(i.G=0,i.ka=[],i.l){const l=no(i.h);(l.length!=0||i.i.length!=0)&&(D(i.ka,l),D(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function So(i,l,u){var d=u instanceof ne?$t(u):new ne(u);if(d.g!="")l&&(d.g=l+"."+d.g),Qn(d,d.s);else{var w=h.location;d=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var I=new ne(null);d&&Wn(I,d),l&&(I.g=l),w&&Qn(I,w),u&&(I.l=u),d=I}return u=i.D,l=i.ya,u&&l&&K(d,u,l),K(d,"VER",i.la),dn(i,d),d}function Po(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Y(new Xn({eb:u})):new Y(i.pa),l.Ha(i.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Co(){}r=Co.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function rr(){}rr.prototype.g=function(i,l){return new bt(i,l)};function bt(i,l){ft.call(this),this.g=new yo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!W(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!W(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ee(this)}x(bt,ft),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){fs(this.g)},bt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=es(i),i=u);l.i.push(new Ru(l.Ya++,i)),l.G==3&&er(l)},bt.prototype.N=function(){this.g.l=null,delete this.j,fs(this.g),delete this.g,bt.aa.N.call(this)};function Vo(i){rs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}x(Vo,rs);function xo(){ss.call(this),this.status=1}x(xo,ss);function Ee(i){this.g=i}x(Ee,Co),Ee.prototype.ua=function(){vt(this.g,"a")},Ee.prototype.ta=function(i){vt(this.g,new Vo(i))},Ee.prototype.sa=function(i){vt(this.g,new xo)},Ee.prototype.ra=function(){vt(this.g,"b")},rr.prototype.createWebChannel=rr.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,hl=function(){return new rr},ul=function(){return zn()},ll=te,Fs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,dr=Hn,Ki.COMPLETE="complete",al=Ki,Bi.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,gn=Bi,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ol=Y}).apply(typeof ar<"u"?ar:typeof self<"u"?self:typeof window<"u"?window:{});const ea="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Za("@firebase/firestore");function pn(){return de.logLevel}function V(r,...t){if(de.logLevel<=U.DEBUG){const e=t.map(ai);de.debug(`Firestore (${Ke}): ${r}`,...e)}}function Ft(r,...t){if(de.logLevel<=U.ERROR){const e=t.map(ai);de.error(`Firestore (${Ke}): ${r}`,...e)}}function Oe(r,...t){if(de.logLevel<=U.WARN){const e=t.map(ai);de.warn(`Firestore (${Ke}): ${r}`,...e)}}function ai(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${Ke}) INTERNAL ASSERTION FAILED: `+r;throw Ft(t),new Error(t)}function J(r,t){r||M()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends He{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Hc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kc{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let o=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ce,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},h=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ce)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string"),new cl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new _t(t)}}class Gc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Gc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){J(this.o===void 0);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new Qc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Xc(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function $e(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new It(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new It(0,0))}static max(){return new $(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Cn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Cn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Cn{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Zc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Cn{construct(t,e,n){return new wt(t,e,n)}static isValidIdentifier(t){return Zc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else h==="`"?(a=!a,s++):h!=="."||a?(n+=h,s++):(o(),s++)}if(o(),a)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new wt(e)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(X.fromString(t))}static fromName(t){return new N(X.fromString(t).popFirst(5))}static empty(){return new N(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new X(t.slice()))}}function td(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=$.fromTimestamp(n===1e9?new It(e+1,0):new It(e,n));return new Xt(s,N.empty(),t)}function ed(r){return new Xt(r.readTime,r.key,-1)}class Xt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Xt($.min(),N.empty(),-1)}static max(){return new Xt($.max(),N.empty(),-1)}}function nd(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==rd)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let s=0,o=0,a=!1;t.forEach(h=>{++s,h.next(()=>{++o,a&&o===s&&e()},c=>n(c))}),a=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(s=>s?R.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,s)=>{const o=t.length,a=new Array(o);let h=0;for(let c=0;c<o;c++){const f=c;e(t[f]).next(_=>{a[f]=_,++h,h===o&&n(a)},_=>s(_))}})}static doWhile(t,e){return new R((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function id(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function On(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ui.oe=-1;function Nr(r){return r==null}function Us(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Or(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function od(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new lr(this.root,t,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new lr(this.root,t,this.comparator,!0)}}class lr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ut(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ra(this.data.getIterator())}getIteratorFrom(t){return new ra(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class ra{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.fields=t,t.sort(wt.comparator)}static empty(){return new Kt([])}unionWith(t){let e=new ht(wt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return $e(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new dl("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(r){if(J(!!r),typeof r=="string"){let t=0;const e=ad.exec(r);if(J(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fe(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ci(r){const t=r.mapValue.fields.__previous_value__;return hi(t)?ci(t):t}function Vn(r){const t=Jt(r.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,n,s,o,a,h,c,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=h,this.longPollingOptions=c,this.useFetchStreams=f}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={mapValue:{}};function pe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hi(r)?4:hd(r)?9007199254740991:ud(r)?10:11:M()}function Dt(r,t){if(r===t)return!0;const e=pe(r);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vn(r).isEqual(Vn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Jt(s.timestampValue),h=Jt(o.timestampValue);return a.seconds===h.seconds&&a.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),h=Z(o.doubleValue);return a===h?Us(a)===Us(h):isNaN(a)&&isNaN(h)}return!1}(r,t);case 9:return $e(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},h=o.mapValue.fields||{};if(na(a)!==na(h))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(h[c]===void 0||!Dt(a[c],h[c])))return!1;return!0}(r,t);default:return M()}}function Dn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Me(r,t){if(r===t)return 0;const e=pe(r),n=pe(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,a){const h=Z(o.integerValue||o.doubleValue),c=Z(a.integerValue||a.doubleValue);return h<c?-1:h>c?1:h===c?0:isNaN(h)?isNaN(c)?0:-1:1}(r,t);case 3:return sa(r.timestampValue,t.timestampValue);case 4:return sa(Vn(r),Vn(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,a){const h=fe(o),c=fe(a);return h.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const h=o.split("/"),c=a.split("/");for(let f=0;f<h.length&&f<c.length;f++){const _=q(h[f],c[f]);if(_!==0)return _}return q(h.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const h=q(Z(o.latitude),Z(a.latitude));return h!==0?h:q(Z(o.longitude),Z(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ia(r.arrayValue,t.arrayValue);case 10:return function(o,a){var h,c,f,_;const A=o.fields||{},b=a.fields||{},S=(h=A.value)===null||h===void 0?void 0:h.arrayValue,x=(c=b.value)===null||c===void 0?void 0:c.arrayValue,O=q(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=x==null?void 0:x.values)===null||_===void 0?void 0:_.length)||0);return O!==0?O:ia(S,x)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===ur.mapValue&&a===ur.mapValue)return 0;if(o===ur.mapValue)return 1;if(a===ur.mapValue)return-1;const h=o.fields||{},c=Object.keys(h),f=a.fields||{},_=Object.keys(f);c.sort(),_.sort();for(let A=0;A<c.length&&A<_.length;++A){const b=q(c[A],_[A]);if(b!==0)return b;const S=Me(h[c[A]],f[_[A]]);if(S!==0)return S}return q(c.length,_.length)}(r.mapValue,t.mapValue);default:throw M()}}function sa(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Jt(r),n=Jt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function ia(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Me(e[s],n[s]);if(o)return o}return q(e.length,n.length)}function Le(r){return Bs(r)}function Bs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Jt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return fe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Bs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${Bs(e.fields[a])}`;return s+"}"}(r.mapValue):M()}function js(r){return!!r&&"integerValue"in r}function di(r){return!!r&&"arrayValue"in r}function oa(r){return!!r&&"nullValue"in r}function aa(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Rs(r){return!!r&&"mapValue"in r}function ud(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function wn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Or(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=wn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function hd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(e)}setAll(t){let e=wt.emptyPath(),n={},s=[];t.forEach((a,h)=>{if(!e.isImmediateParentOf(h)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=h.popLast()}a?n[h.lastSegment()]=wn(a):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Rs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Rs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Or(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new Vt(wn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,s,o,a,h){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=h}static newInvalidDocument(t){return new yt(t,0,$.min(),$.min(),$.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,s){return new yt(t,1,e,$.min(),n,s,0)}static newNoDocument(t,e){return new yt(t,2,e,$.min(),$.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,$.min(),$.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.position=t,this.inclusive=e}}function la(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=Me(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ua(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function cd(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{}class rt extends fl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new fd(t,e,n):e==="array-contains"?new md(t,n):e==="in"?new _d(t,n):e==="not-in"?new yd(t,n):e==="array-contains-any"?new vd(t,n):new rt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new pd(t,n):new gd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends fl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return pl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pl(r){return r.op==="and"}function gl(r){return dd(r)&&pl(r)}function dd(r){for(const t of r.filters)if(t instanceof kt)return!1;return!0}function qs(r){if(r instanceof rt)return r.field.canonicalString()+r.op.toString()+Le(r.value);if(gl(r))return r.filters.map(t=>qs(t)).join(",");{const t=r.filters.map(e=>qs(e)).join(",");return`${r.op}(${t})`}}function ml(r,t){return r instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(r,t):r instanceof kt?function(n,s){return s instanceof kt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,h)=>o&&ml(a,s.filters[h]),!0):!1}(r,t):void M()}function _l(r){return r instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(r):r instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(_l).join(" ,")+"}"}(r):"Filter"}class fd extends rt{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class pd extends rt{constructor(t,e){super(t,"in",e),this.keys=yl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class gd extends rt{constructor(t,e){super(t,"not-in",e),this.keys=yl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function yl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class md extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return di(e)&&Dn(e.arrayValue,this.value)}}class _d extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dn(this.value.arrayValue,e)}}class yd extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Dn(this.value.arrayValue,e)}}class vd extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!di(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Dn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e=null,n=[],s=[],o=null,a=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=h,this.ue=null}}function ha(r,t=null,e=[],n=[],s=null,o=null,a=null){return new Ed(r,t,e,n,s,o,a)}function fi(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>qs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Le(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Le(n)).join(",")),t.ue=e}return t.ue}function pi(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!cd(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ml(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ua(r.startAt,t.startAt)&&ua(r.endAt,t.endAt)}function zs(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e=null,n=[],s=[],o=null,a="F",h=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wd(r,t,e,n,s,o,a,h){return new $r(r,t,e,n,s,o,a,h)}function gi(r){return new $r(r)}function ca(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Td(r){return r.collectionGroup!==null}function Tn(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let h=new ht(wt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Ar(o,n))}),e.has(wt.keyField().canonicalString())||t.ce.push(new Ar(wt.keyField(),n))}return t.ce}function xt(r){const t=F(r);return t.le||(t.le=Ad(t,Tn(r))),t.le}function Ad(r,t){if(r.limitType==="F")return ha(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ar(s.field,o)});const e=r.endAt?new Tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Tr(r.startAt.position,r.startAt.inclusive):null;return ha(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Hs(r,t,e){return new $r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Mr(r,t){return pi(xt(r),xt(t))&&r.limitType===t.limitType}function vl(r){return`${fi(xt(r))}|lt:${r.limitType}`}function Ae(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>_l(s)).join(", ")}]`),Nr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${n})`}(xt(r))}; limitType=${r.limitType})`}function Lr(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):N.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Tn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,h,c){const f=la(a,h,c);return a.inclusive?f<=0:f<0}(n.startAt,Tn(n),s)||n.endAt&&!function(a,h,c){const f=la(a,h,c);return a.inclusive?f>=0:f>0}(n.endAt,Tn(n),s))}(r,t)}function Id(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function El(r){return(t,e)=>{let n=!1;for(const s of Tn(r)){const o=bd(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function bd(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(o,a,h){const c=a.data.field(o),f=h.data.field(o);return c!==null&&f!==null?Me(c,f):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Or(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return od(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new tt(N.comparator);function Zt(){return Rd}const wl=new tt(N.comparator);function mn(...r){let t=wl;for(const e of r)t=t.insert(e.key,e);return t}function Sd(r){let t=wl;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ae(){return An()}function Tl(){return An()}function An(){return new Ge(r=>r.toString(),(r,t)=>r.isEqual(t))}const Pd=new ht(N.comparator);function B(...r){let t=Pd;for(const e of r)t=t.add(e);return t}const Cd=new ht(q);function Vd(){return Cd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(t)?"-0":t}}function Dd(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this._=void 0}}function kd(r,t,e){return r instanceof Ks?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&hi(o)&&(o=ci(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):r instanceof Ir?Al(r,t):r instanceof br?Il(r,t):function(s,o){const a=Od(s,o),h=da(a)+da(s.Pe);return js(a)&&js(s.Pe)?Dd(h):xd(s.serializer,h)}(r,t)}function Nd(r,t,e){return r instanceof Ir?Al(r,t):r instanceof br?Il(r,t):e}function Od(r,t){return r instanceof Gs?function(n){return js(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Ks extends Fr{}class Ir extends Fr{constructor(t){super(),this.elements=t}}function Al(r,t){const e=bl(t);for(const n of r.elements)e.some(s=>Dt(s,n))||e.push(n);return{arrayValue:{values:e}}}class br extends Fr{constructor(t){super(),this.elements=t}}function Il(r,t){let e=bl(t);for(const n of r.elements)e=e.filter(s=>!Dt(s,n));return{arrayValue:{values:e}}}class Gs extends Fr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function da(r){return Z(r.integerValue||r.doubleValue)}function bl(r){return di(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function $d(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Ir&&s instanceof Ir||n instanceof br&&s instanceof br?$e(n.elements,s.elements,Dt):n instanceof Gs&&s instanceof Gs?Dt(n.Pe,s.Pe):n instanceof Ks&&s instanceof Ks}(r.transform,t.transform)}class he{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new he}static exists(t){return new he(void 0,t)}static updateTime(t){return new he(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class mi{}function Rl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ld(r.key,he.none()):new _i(r.key,r.data,he.none());{const e=r.data,n=Vt.empty();let s=new ht(wt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new Ur(r.key,n,new Kt(s.toArray()),he.none())}}function Md(r,t,e){r instanceof _i?function(s,o,a){const h=s.value.clone(),c=pa(s.fieldTransforms,o,a.transformResults);h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):r instanceof Ur?function(s,o,a){if(!fr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const h=pa(s.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Sl(s)),c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function In(r,t,e,n){return r instanceof _i?function(o,a,h,c){if(!fr(o.precondition,a))return h;const f=o.value.clone(),_=ga(o.fieldTransforms,c,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Ur?function(o,a,h,c){if(!fr(o.precondition,a))return h;const f=ga(o.fieldTransforms,c,a),_=a.data;return _.setAll(Sl(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,a,h){return fr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):h}(r,t,e)}function fa(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$e(n,s,(o,a)=>$d(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class _i extends mi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends mi{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function pa(r,t,e){const n=new Map;J(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,h=t.data.field(o.field);n.set(o.field,Nd(a,h,e[s]))}return n}function ga(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,kd(o,a,t))}return n}class Ld extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Md(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=In(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=In(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Tl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let h=this.applyToLocalView(a,o.mutatedFields);h=e.has(s.key)?null:h;const c=Rl(a,h);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument($.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&$e(this.mutations,t.mutations,(e,n)=>fa(e,n))&&$e(this.baseMutations,t.baseMutations,(e,n)=>fa(e,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,L;function Pl(r){if(r===void 0)return Ft("GRPC error has no .code"),C.UNKNOWN;switch(r){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return M()}}(L=nt||(nt={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new ue([4294967295,4294967295],0);function ma(r){const t=jd().encode(r),e=new il;return e.update(t),new Uint8Array(e.digest())}function _a(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,n],0),new ue([s,o],0)]}class yi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new _n(`Invalid padding: ${e}`);if(n<0)throw new _n(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new _n(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new _n(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(ue.fromNumber(n)));return s.compare(qd)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ma(t),[n,s]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,s,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new yi(o,s,e);return n.forEach(h=>a.insert(h)),a}insert(t){if(this.Ie===0)return;const e=ma(t),[n,s]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class _n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Br($.min(),s,new tt(q),Zt(),B())}}class $n{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new $n(n,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Cl{constructor(t,e){this.targetId=t,this.me=e}}class Vl{constructor(t,e,n=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ya{constructor(){this.fe=0,this.ge=Ea(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),n=B();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}}),new $n(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Ea()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zd{constructor(t){this.Le=t,this.Be=new Map,this.ke=Zt(),this.qe=va(),this.Qe=new tt(q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(zs(o))if(n===0){const a=new N(o.path);this.Ue(e,a,yt.newNoDocument(a,$.min()))}else J(n===1);else{const a=this.Ye(e);if(a!==n){const h=this.Ze(t),c=h?this.Xe(h,t,a):1;if(c!==0){this.je(e);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,h;try{a=fe(n).toUint8Array()}catch(c){if(c instanceof dl)return Oe("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{h=new yi(a,s,o)}catch(c){return Oe(c instanceof _n?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return h.Ie===0?null:h}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.Le.tt(),h=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const h=this.Je(a);if(h){if(o.current&&zs(h.target)){const c=new N(h.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,yt.newNoDocument(c,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,a)=>{let h=!0;a.forEachWhile(c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Br(t,e,this.Qe,this.ke,n);return this.ke=Zt(),this.qe=va(),this.Qe=new tt(q),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ya,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ya),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function va(){return new tt(N.comparator)}function Ea(){return new tt(N.comparator)}const Hd={asc:"ASCENDING",desc:"DESCENDING"},Kd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gd={and:"AND",or:"OR"};class Wd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ws(r,t){return r.useProto3Json||Nr(t)?t:{value:t}}function Qd(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ve(r){return J(!!r),$.fromTimestamp(function(e){const n=Jt(e);return new It(n.seconds,n.nanos)}(r))}function Xd(r,t){return Qs(r,t).canonicalString()}function Qs(r,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function xl(r){const t=X.fromString(r);return J($l(t)),t}function Ss(r,t){const e=xl(t);if(e.get(1)!==r.databaseId.projectId)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N(kl(e))}function Dl(r,t){return Xd(r.databaseId,t)}function Jd(r){const t=xl(r);return t.length===4?X.emptyPath():kl(t)}function wa(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kl(r){return J(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(J(_===void 0||typeof _=="string"),ct.fromBase64String(_||"")):(J(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ct.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,h=a&&function(f){const _=f.code===void 0?C.UNKNOWN:Pl(f.code);return new k(_,f.message||"")}(a);e=new Vl(n,s,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ss(r,n.document.name),o=Ve(n.document.updateTime),a=n.document.createTime?Ve(n.document.createTime):$.min(),h=new Vt({mapValue:{fields:n.document.fields}}),c=yt.newFoundDocument(s,o,a,h),f=n.targetIds||[],_=n.removedTargetIds||[];e=new pr(f,_,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ss(r,n.document),o=n.readTime?Ve(n.readTime):$.min(),a=yt.newNoDocument(s,o),h=n.removedTargetIds||[];e=new pr([],h,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ss(r,n.document),o=n.removedTargetIds||[];e=new pr([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Bd(s,o),h=n.targetId;e=new Cl(h,a)}}return e}function tf(r,t){return{documents:[Dl(r,t.path)]}}function ef(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Dl(r,s);const o=function(f){if(f.length!==0)return Ol(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(_=>function(b){return{field:Ie(b.field),direction:sf(b.dir)}}(_))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const h=Ws(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function nf(r){let t=Jd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){J(n===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const b=Nl(A);return b instanceof kt&&gl(b)?b.getFilters():[b]}(e.where));let a=[];e.orderBy&&(a=function(A){return A.map(b=>function(x){return new Ar(be(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(b))}(e.orderBy));let h=null;e.limit&&(h=function(A){let b;return b=typeof A=="object"?A.value:A,Nr(b)?null:b}(e.limit));let c=null;e.startAt&&(c=function(A){const b=!!A.before,S=A.values||[];return new Tr(S,b)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const b=!A.before,S=A.values||[];return new Tr(S,b)}(e.endAt)),wd(t,s,a,o,h,"F",c,f)}function rf(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=be(e.unaryFilter.field);return rt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=be(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return rt.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(n=>Nl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function sf(r){return Hd[r]}function of(r){return Kd[r]}function af(r){return Gd[r]}function Ie(r){return{fieldPath:r.canonicalString()}}function be(r){return wt.fromServerFormat(r.fieldPath)}function Ol(r){return r instanceof rt?function(e){if(e.op==="=="){if(aa(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(aa(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:of(e.op),value:e.value}}}(r):r instanceof kt?function(e){const n=e.getFilters().map(s=>Ol(s));return n.length===1?n[0]:{compositeFilter:{op:af(e.op),filters:n}}}(r):M()}function $l(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,n,s,o=$.min(),a=$.min(),h=ct.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=h,this.expectedCount=c}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.ct=t}}function uf(r){const t=nf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.un=new cf}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Xt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class cf{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ht(X.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ht(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fe(0)}static kn(){return new Fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.changes=new Ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&In(n.mutation,s,Kt.empty(),It.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const s=ae();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=mn();return o.forEach((h,c)=>{a=a.insert(h,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ae();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,h)=>{e.set(a,h)})})}computeViews(t,e,n,s){let o=Zt();const a=An(),h=function(){return An()}();return e.forEach((c,f)=>{const _=n.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Ur)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),In(_.mutation,f,_.mutation.getFieldMask(),It.now())):a.set(f.key,Kt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((f,_)=>a.set(f,_)),e.forEach((f,_)=>{var A;return h.set(f,new ff(_,(A=a.get(f))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=An();let s=new tt((a,h)=>a-h),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const h of a)h.keys().forEach(c=>{const f=e.get(c);if(f===null)return;let _=n.get(c)||Kt.empty();_=h.applyToLocalView(f,_),n.set(c,_);const A=(s.get(h.batchId)||B()).add(c);s=s.insert(h.batchId,A)})}).next(()=>{const a=[],h=s.getReverseIterator();for(;h.hasNext();){const c=h.getNext(),f=c.key,_=c.value,A=Tl();_.forEach(b=>{if(!o.has(b)){const S=Rl(e.get(b),n.get(b));S!==null&&A.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Td(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):R.resolve(ae());let h=-1,c=o;return a.next(f=>R.forEach(f,(_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(b=>{c=c.insert(_,b)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,c,f,B())).next(_=>({batchId:h,changes:Sd(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let s=mn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,c=>{const f=function(A,b){return new $r(b,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(_=>{_.forEach((A,b)=>{a=a.insert(A,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((c,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,yt.newInvalidDocument(_)))});let h=mn();return a.forEach((c,f)=>{const _=o.get(c);_!==void 0&&In(_.mutation,f,Kt.empty(),It.now()),Lr(e,f)&&(h=h.insert(c,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ve(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:uf(s.bundledQuery),readTime:Ve(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.overlays=new tt(N.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ae();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const s=ae(),o=e.length+1,a=new N(e.child("")),h=this.overlays.getIteratorFrom(a);for(;h.hasNext();){const c=h.getNext().value,f=c.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&c.largestBatchId>n&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new tt((f,_)=>f-_);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ae(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=ae(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=s)););return R.resolve(h)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Ud(e,n));let o=this.Ir.get(e);o===void 0&&(o=B(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Tr=new ht(it.Er),this.dr=new ht(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new it(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new N(new X([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.dr.forEachInRange([n,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new N(new X([])),n=new it(e,t),s=new it(e,t+1);let o=B();return this.dr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return N.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(it.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Fd(o,e,n,s);this.mutationQueue.push(a);for(const h of s)this.br=this.br.add(new it(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],a=>{const h=this.Dr(a.wr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ht(q);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],h=>{n=n.add(h.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;N.isDocumentKey(o)||(o=o.child(""));const a=new it(new N(o),0);let h=new ht(q);return this.br.forEachWhile(c=>{const f=c.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(h=h.add(c.wr)),!0)},a),R.resolve(this.Cr(h))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){J(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new it(e,0),s=this.br.firstAfterOrEqual(n);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.Mr=t,this.docs=function(){return new tt(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=Zt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Zt();const a=e.path,h=new N(a.child("")),c=this.docs.getIteratorFrom(h);for(;c.hasNext();){const{key:f,value:{document:_}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||nd(ed(_),n)<=0||(s.has(_.key)||Lr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M()}Or(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Ef(this)}getSize(t){return R.resolve(this.size)}}class Ef extends df{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.persistence=t,this.Nr=new Ge(e=>fi(e),pi),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vi,this.targetCount=0,this.kr=Fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((a,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ui(0),this.Kr=!1,this.Kr=!0,this.$r=new _f,this.referenceDelegate=t(this),this.Ur=new wf(this),this.indexManager=new hf,this.remoteDocumentCache=function(s){return new vf(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new lf(e),this.Gr=new gf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new yf(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new Af(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Af extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class Ei{constructor(t){this.persistence=t,this.Jr=new vi,this.Yr=null}static Zr(t){return new Ei(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=N.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,$.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new wi(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rh()?8:id(Ih())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new If;return this.Xi(t,e,a).next(h=>{if(o.result=h,this.zi)return this.es(t,e,a,h.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(pn()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(pn()<=U.DEBUG&&V("QueryEngine","Query:",Ae(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(pn()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):R.resolve())}Yi(t,e){if(ca(e))return R.resolve(null);let n=xt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Hs(e,null,"F"),n=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=B(...o);return this.Ji.getDocuments(t,a).next(h=>this.indexManager.getMinOffset(t,n).next(c=>{const f=this.ts(e,h);return this.ns(e,f,a,c.readTime)?this.Yi(t,Hs(e,null,"F")):this.rs(t,f,e,c)}))})))}Zi(t,e,n,s){return ca(e)||s.isEqual($.min())?R.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,s)?R.resolve(null):(pn()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.rs(t,a,e,td(s,-1)).next(h=>h))})}ts(t,e){let n=new ht(El(t));return e.forEach((s,o)=>{Lr(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return pn()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ji.getDocumentsMatchingQuery(t,e,Xt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new tt(q),this._s=new Ge(o=>fi(o),pi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Sf(r,t,e,n){return new Rf(r,t,e,n)}async function Ml(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],h=[];let c=B();for(const f of s){a.push(f.batchId);for(const _ of f.mutations)c=c.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)c=c.add(_.key)}return e.localDocuments.getDocuments(n,c).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:h}))})})}function Ll(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Pf(r,t){const e=F(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const h=[];t.targetChanges.forEach((_,A)=>{const b=s.get(A);if(!b)return;h.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,A)));let S=b.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),s=s.insert(A,S),function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(b,S,_)&&h.push(e.Ur.updateTargetData(o,S))});let c=Zt(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(Cf(o,a,t.documentUpdates).next(_=>{c=_.Ps,f=_.Is})),!n.isEqual($.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(A=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return R.waitFor(h).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,f)).next(()=>c)}).then(o=>(e.os=s,o))}function Cf(r,t,e){let n=B(),s=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Zt();return e.forEach((h,c)=>{const f=o.get(h);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(h)),c.isNoDocument()&&c.version.isEqual($.min())?(t.removeEntry(h,c.readTime),a=a.insert(h,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(h,c)):V("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Vf(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,R.resolve(s)):e.Ur.allocateTargetId(n).next(a=>(s=new Gt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Ys(r,t,e){const n=F(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!On(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Ta(r,t,e){const n=F(r);let s=$.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,_){const A=F(c),b=A._s.get(_);return b!==void 0?R.resolve(A.os.get(b)):A.Ur.getTargetData(f,_)}(n,a,xt(t)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,h.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?s:$.min(),e?o:B())).next(h=>(xf(n,Id(t),h),{documents:h,Ts:o})))}function xf(r,t,e){let n=r.us.get(t)||$.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Aa{constructor(){this.activeTargetIds=Vd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Df{constructor(){this.so=new Aa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Aa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr=null;function Ps(){return hr===null?hr=function(){return 268435456+Math.round(2147483648*Math.random())}():hr++,"0x"+hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class $f extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,a){const h=Ps(),c=this.xo(e,n.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${h}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,c,f,s).then(_=>(V("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw Oe("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",c,"request:",s),_})}Lo(e,n,s,o,a,h){return this.Mo(e,n,s,o,a)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ke}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const s=Nf[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=Ps();return new Promise((a,h)=>{const c=new ol;c.setWithCredentials(!0),c.listenOnce(al.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dr.NO_ERROR:const _=c.getResponseJson();V(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),a(_);break;case dr.TIMEOUT:V(mt,`RPC '${t}' ${o} timed out`),h(new k(C.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:const A=c.getStatus();if(V(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",c.getResponseText()),A>0){let b=c.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const x=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(S.status);h(new k(x,S.message))}else h(new k(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else h(new k(C.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);V(mt,`RPC '${t}' ${o} sending request:`,s),c.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=Ps(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=hl(),h=ul(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const _=o.join("");V(mt,`Creating RPC '${t}' stream ${s}: ${_}`,c);const A=a.createWebChannel(_,c);let b=!1,S=!1;const x=new Of({Io:D=>{S?V(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(b||(V(mt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),b=!0),V(mt,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},To:()=>A.close()}),O=(D,G,W)=>{D.listen(G,Q=>{try{W(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return O(A,gn.EventType.OPEN,()=>{S||(V(mt,`RPC '${t}' stream ${s} transport opened.`),x.yo())}),O(A,gn.EventType.CLOSE,()=>{S||(S=!0,V(mt,`RPC '${t}' stream ${s} transport closed`),x.So())}),O(A,gn.EventType.ERROR,D=>{S||(S=!0,Oe(mt,`RPC '${t}' stream ${s} transport errored:`,D),x.So(new k(C.UNAVAILABLE,"The operation could not be completed")))}),O(A,gn.EventType.MESSAGE,D=>{var G;if(!S){const W=D.data[0];J(!!W);const Q=W,st=Q.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(st){V(mt,`RPC '${t}' stream ${s} received error:`,st);const Nt=st.status;let at=function(m){const y=nt[m];if(y!==void 0)return Pl(y)}(Nt),E=st.message;at===void 0&&(at=C.INTERNAL,E="Unknown error status: "+Nt+" with message "+st.message),S=!0,x.So(new k(at,E)),A.close()}else V(mt,`RPC '${t}' stream ${s} received:`,W),x.bo(W)}}),O(h,ll.STAT_EVENT,D=>{D.stat===Fs.PROXY?V(mt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Fs.NOPROXY&&V(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r){return new Wd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,e,n,s,o,a,h,c){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=h,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ul(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new k(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lf extends Mf{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Zd(this.serializer,t),n=function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Ve(a.readTime):$.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=wa(this.serializer),e.addTarget=function(o,a){let h;const c=a.target;if(h=zs(c)?{documents:tf(o,c)}:{query:ef(o,c)._t},h.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){h.resumeToken=Yd(o,a.resumeToken);const f=Ws(o,a.expectedCount);f!==null&&(h.expectedCount=f)}else if(a.snapshotVersion.compareTo($.min())>0){h.readTime=Qd(o,a.snapshotVersion.toTimestamp());const f=Ws(o,a.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const n=rf(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=wa(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Qs(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(C.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.Lo(t,Qs(e,n),s,a,h,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Uf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ft(e),this.D_=!1):V("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{Ln(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=F(c);f.L_.add(4),await Mn(f),f.q_.set("Unknown"),f.L_.delete(4),await jr(f)}(this))})}),this.q_=new Uf(n,s)}}async function jr(r){if(Ln(r))for(const t of r.B_)await t(!0)}async function Mn(r){for(const t of r.B_)await t(!1)}function Bl(r,t){const e=F(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),bi(e)?Ii(e):We(e).r_()&&Ai(e,t))}function Ti(r,t){const e=F(r),n=We(e);e.N_.delete(t),n.r_()&&jl(e,t),e.N_.size===0&&(n.r_()?n.o_():Ln(e)&&e.q_.set("Unknown"))}function Ai(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}We(r).A_(t)}function jl(r,t){r.Q_.xe(t),We(r).R_(t)}function Ii(r){r.Q_=new zd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),We(r).start(),r.q_.v_()}function bi(r){return Ln(r)&&!We(r).n_()&&r.N_.size>0}function Ln(r){return F(r).L_.size===0}function ql(r){r.Q_=void 0}async function jf(r){r.q_.set("Online")}async function qf(r){r.N_.forEach((t,e)=>{Ai(r,t)})}async function zf(r,t){ql(r),bi(r)?(r.q_.M_(t),Ii(r)):r.q_.set("Unknown")}async function Hf(r,t,e){if(r.q_.set("Online"),t instanceof Vl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const h of o.targetIds)s.N_.has(h)&&(await s.remoteSyncer.rejectListen(h,a),s.N_.delete(h),s.Q_.removeTarget(h))}(r,t)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ba(r,n)}else if(t instanceof pr?r.Q_.Ke(t):t instanceof Cl?r.Q_.He(t):r.Q_.We(t),!e.isEqual($.min()))try{const n=await Ll(r.localStore);e.compareTo(n)>=0&&await function(o,a){const h=o.Q_.rt(a);return h.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(c.resumeToken,a))}}),h.targetMismatches.forEach((c,f)=>{const _=o.N_.get(c);if(!_)return;o.N_.set(c,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),jl(o,c);const A=new Gt(_.target,c,f,_.sequenceNumber);Ai(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await ba(r,n)}}async function ba(r,t,e){if(!On(t))throw t;r.L_.add(1),await Mn(r),r.q_.set("Offline"),e||(e=()=>Ll(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await jr(r)})}async function Ra(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=Ln(e);e.L_.add(3),await Mn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await jr(e)}async function Kf(r,t){const e=F(r);t?(e.L_.delete(2),await jr(e)):t||(e.L_.add(2),await Mn(e),e.q_.set("Unknown"))}function We(r){return r.K_||(r.K_=function(e,n,s){const o=F(e);return o.w_(),new Lf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:jf.bind(null,r),Ro:qf.bind(null,r),mo:zf.bind(null,r),d_:Hf.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),bi(r)?Ii(r):r.q_.set("Unknown")):(await r.K_.stop(),ql(r))})),r.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,h=new Ri(t,e,a,s,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),On(r))return new k(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=mn(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new xe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new xe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.W_=new tt(N.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ue{constructor(t,e,n,s,o,a,h,c,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=h,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(h=>{a.push({type:0,doc:h})}),new Ue(t,e,xe.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Wf{constructor(){this.queries=Pa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=Pa(),o.forEach((a,h)=>{for(const c of h.j_)c.onError(n)})})(this,new k(C.ABORTED,"Firestore shutting down"))}}function Pa(){return new Ge(r=>vl(r),Mr)}async function Qf(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new Gf,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const h=zl(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(h)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Si(e)}async function Yf(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Xf(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const h of a.j_)h.X_(s)&&(n=!0);a.z_=s}}n&&Si(e)}function Jf(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function Si(r){r.Y_.forEach(t=>{t.next()})}var Xs,Ca;(Ca=Xs||(Xs={})).ea="default",Ca.Cache="cache";class Zf{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Ue(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ue.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Xs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t){this.key=t}}class Kl{constructor(t){this.key=t}}class tp{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=El(t),this.Ra=new xe(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Sa,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,h=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,A)=>{const b=s.get(_),S=Lr(this.query,A)?A:null,x=!!b&&this.mutatedKeys.has(b.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;b&&S?b.data.isEqual(S.data)?x!==O&&(n.track({type:3,doc:S}),D=!0):this.ga(b,S)||(n.track({type:2,doc:S}),D=!0,(c&&this.Aa(S,c)>0||f&&this.Aa(S,f)<0)&&(h=!0)):!b&&S?(n.track({type:0,doc:S}),D=!0):b&&!S&&(n.track({type:1,doc:b}),D=!0,(c||f)&&(h=!0)),D&&(S?(a=a.add(S),o=O?o.add(_):o.delete(_)):(a=a.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const _=this.query.limitType==="F"?a.last():a.first();a=a.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ra:a,fa:n,ns:h,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((_,A)=>function(S,x){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(S)-O(x)}(_.type,A.type)||this.Aa(_.doc,A.doc)),this.pa(n),s=s!=null&&s;const h=e&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,a.length!==0||f?{snapshot:new Ue(this.query,t.Ra,o,a,t.mutatedKeys,c===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Kl(n))}),this.da.forEach(n=>{t.has(n)||e.push(new Hl(n))}),e}ba(t){this.Ta=t.Ts,this.da=B();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ue.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ep{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class np{constructor(t){this.key=t,this.va=!1}}class rp{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ge(h=>vl(h),Mr),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(N.comparator),this.Na=new Map,this.La=new vi,this.Ba={},this.ka=new Map,this.qa=Fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sp(r,t,e=!0){const n=Xl(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Gl(n,t,e,!0),s}async function ip(r,t){const e=Xl(r);await Gl(e,t,!0,!1)}async function Gl(r,t,e,n){const s=await Vf(r.localStore,xt(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await op(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Bl(r.remoteStore,s),h}async function op(r,t,e,n,s){r.Ka=(A,b,S)=>async function(O,D,G,W){let Q=D.view.ma(G);Q.ns&&(Q=await Ta(O.localStore,D.query,!1).then(({documents:E})=>D.view.ma(E,Q)));const st=W&&W.targetChanges.get(D.targetId),Nt=W&&W.targetMismatches.get(D.targetId)!=null,at=D.view.applyChanges(Q,O.isPrimaryClient,st,Nt);return xa(O,D.targetId,at.wa),at.snapshot}(r,A,b,S);const o=await Ta(r.localStore,t,!0),a=new tp(t,o.Ts),h=a.ma(o.documents),c=$n.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=a.applyChanges(h,r.isPrimaryClient,c);xa(r,e,f.wa);const _=new ep(t,e,a);return r.Fa.set(t,_),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function ap(r,t,e){const n=F(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(a=>!Mr(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ys(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ti(n.remoteStore,s.targetId),Js(n,s.targetId)}).catch(li)):(Js(n,s.targetId),await Ys(n.localStore,s.targetId,!0))}async function lp(r,t){const e=F(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ti(e.remoteStore,n.targetId))}async function Wl(r,t){const e=F(r);try{const n=await Pf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?J(a.va):s.removedDocuments.size>0&&(J(a.va),a.va=!1))}),await Yl(e,n,t)}catch(n){await li(n)}}function Va(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,a)=>{const h=a.view.Z_(t);h.snapshot&&s.push(h.snapshot)}),function(a,h){const c=F(a);c.onlineState=h;let f=!1;c.queries.forEach((_,A)=>{for(const b of A.j_)b.Z_(h)&&(f=!0)}),f&&Si(c)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function up(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let a=new tt(N.comparator);a=a.insert(o,yt.newNoDocument(o,$.min()));const h=B().add(o),c=new Br($.min(),new Map,new tt(q),a,h);await Wl(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(t),Pi(n)}else await Ys(n.localStore,t,!1).then(()=>Js(n,t,e)).catch(li)}function Js(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||Ql(r,n)})}function Ql(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(Ti(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Pi(r))}function xa(r,t,e){for(const n of e)n instanceof Hl?(r.La.addReference(n.key,t),hp(r,n)):n instanceof Kl?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||Ql(r,n.key)):M()}function hp(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+e),r.xa.add(n),Pi(r))}function Pi(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new N(X.fromString(t)),n=r.qa.next();r.Na.set(n,new np(e)),r.Oa=r.Oa.insert(e,n),Bl(r.remoteStore,new Gt(xt(gi(e.path)),n,"TargetPurposeLimboResolution",ui.oe))}}async function Yl(r,t,e){const n=F(r),s=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((h,c)=>{a.push(n.Ka(c,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(c.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(c.targetId,A?"current":"not-current")}if(f){s.push(f);const A=wi.Wi(c.targetId,f);o.push(A)}}))}),await Promise.all(a),n.Ca.d_(s),await async function(c,f){const _=F(c);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,b=>R.forEach(b.$i,S=>_.persistence.referenceDelegate.addReference(A,b.targetId,S)).next(()=>R.forEach(b.Ui,S=>_.persistence.referenceDelegate.removeReference(A,b.targetId,S)))))}catch(A){if(!On(A))throw A;V("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const b=A.targetId;if(!A.fromCache){const S=_.os.get(b),x=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(x);_.os=_.os.insert(b,O)}}}(n.localStore,o))}async function cp(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const n=await Ml(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(h=>{h.forEach(c=>{c.reject(new k(C.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Yl(e,n.hs)}}function dp(r,t){const e=F(r),n=e.Na.get(t);if(n&&n.va)return B().add(n.key);{let s=B();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const h=e.Fa.get(a);s=s.unionWith(h.view.Va)}return s}}function Xl(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=up.bind(null,t),t.Ca.d_=Xf.bind(null,t.eventManager),t.Ca.$a=Jf.bind(null,t.eventManager),t}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fl(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Sf(this.persistence,new bf,t.initialUser,this.serializer)}Ga(t){return new Tf(Ei.Zr,this.serializer)}Wa(t){return new Df}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class Zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Va(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=cp.bind(null,this.syncEngine),await Kf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wf}()}createDatastore(t){const e=Fl(t.databaseInfo.databaseId),n=function(o){return new $f(o)}(t.databaseInfo);return function(o,a,h,c){return new Ff(o,a,h,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,h){return new Bf(n,s,o,a,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Va(this.syncEngine,e,0),function(){return Ia.D()?new Ia:new kf}())}createSyncEngine(t,e){return function(s,o,a,h,c,f,_){const A=new rp(s,o,a,h,c,f);return _&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);V("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Mn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Zs.provider={build:()=>new Zs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Jc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=zl(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Vs(r,t){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ml(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Da(r,t){r.asyncQueue.verifyOperationInProgress();const e=await gp(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ra(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ra(t.remoteStore,s)),r._onlineComponents=t}async function gp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Oe("Error using user provided cache. Falling back to memory cache: "+e),await Vs(r,new Rr)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Vs(r,new Rr);return r._offlineComponents}async function mp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Da(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Da(r,new Zs))),r._onlineComponents}async function ka(r){const t=await mp(r),e=t.eventManager;return e.onListen=sp.bind(null,t.syncEngine),e.onUnlisten=ap.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ip.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=lp.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(r,t,e){if(!e)throw new k(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function yp(r,t,e,n){if(t===!0&&n===!0)throw new k(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Oa(r){if(N.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function vp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function gr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vp(r);throw new k(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jl((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ci{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zc;switch(n.type){case"firstParty":return new Wc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Na.get(e);n&&(V("ComponentProvider","Removing Datastore"),Na.delete(e),n.terminate())}(this),Promise.resolve()}}function Ep(r,t,e,n={}){var s;const o=(r=gr(r,Ci))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let h,c;if(typeof n.mockUserToken=="string")h=n.mockUserToken,c=_t.MOCK_USER;else{h=Ah(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(f)}r._authCredentials=new Hc(new cl(h,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qr(this.firestore,t,this._query)}}class me{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new De(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new me(this.firestore,t,this._key)}}class De extends qr{constructor(t,e,n){super(t,e,gi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new me(this.firestore,null,new N(t))}withConverter(t){return new De(this.firestore,t,this._path)}}function wp(r,t,...e){if(r=Ja(r),_p("collection","path",t),r instanceof Ci){const n=X.fromString(t,...e);return Oa(n),new De(r,null,n)}{if(!(r instanceof me||r instanceof De))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Oa(n),new De(r.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ul(this,"async_queue_retry"),this.Vu=()=>{const n=Cs();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Cs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Cs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ce;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!On(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(a){let h=a.message||"";return a.stack&&(h=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),h}(n);throw Ft("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ri.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function La(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class ti extends Ci{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ma,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ma(t),this._firestoreClient=void 0,await t}}}function Tp(r,t){const e=typeof r=="object"?r:Dc(),n=typeof r=="string"?r:"(default)",s=Pc(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=wh("firestore");o&&Ep(s,...o)}return s}function Ap(r){if(r._terminated)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ip(r),r._firestoreClient}function Ip(r){var t,e,n;const s=r._freezeSettings(),o=function(h,c,f,_){return new ld(h,c,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Jl(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new pp(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const c=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sr(ct.fromBase64String(t))}catch(e){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Sr(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}const Sp=new RegExp("[~\\*/\\[\\]]");function Pp(r,t,e){if(t.search(Sp)>=0)throw Fa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Zl(...t.split("."))._internalPath}catch{throw Fa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Fa(r,t,e,n,s){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new k(C.INVALID_ARGUMENT,o+r+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Cp extends tu{data(){return super.data()}}function eu(r,t){return typeof t=="string"?Pp(r,t):t instanceof Zl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{convertValue(t,e="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Or(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new Rp(o)}convertGeoPoint(t){return new bp(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ci(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vn(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);J($l(n));const s=new xn(n.get(1),n.get(3)),o=new N(n.popFirst(5));return s.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nu extends tu{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class mr extends nu{data(t={}){return super.data(t)}}class Dp{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new yn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new mr(this._firestore,this._userDataWriter,n.key,n,new yn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(h=>{const c=new mr(s._firestore,s._userDataWriter,h.doc.key,h.doc,new yn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const c=new mr(s._firestore,s._userDataWriter,h.doc.key,h.doc,new yn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return h.type!==0&&(f=a.indexOf(h.doc.key),a=a.delete(h.doc.key)),h.type!==1&&(a=a.add(h.doc),_=a.indexOf(h.doc.key)),{type:kp(h.type),doc:c,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function kp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class ru extends xp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new me(this.firestore,null,e)}}function Np(r,...t){var e,n,s;r=Ja(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||La(t[a])||(o=t[a],a++);const h={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(La(t[a])){const A=t[a];t[a]=(e=A.next)===null||e===void 0?void 0:e.bind(A),t[a+1]=(n=A.error)===null||n===void 0?void 0:n.bind(A),t[a+2]=(s=A.complete)===null||s===void 0?void 0:s.bind(A)}let c,f,_;if(r instanceof me)f=gr(r.firestore,ti),_=gi(r._key.path),c={next:A=>{t[a]&&t[a](Op(f,r,A))},error:t[a+1],complete:t[a+2]};else{const A=gr(r,qr);f=gr(A.firestore,ti),_=A._query;const b=new ru(f);c={next:S=>{t[a]&&t[a](new Dp(f,b,A,S))},error:t[a+1],complete:t[a+2]},Vp(r._query)}return function(b,S,x,O){const D=new fp(O),G=new Zf(S,D,x);return b.asyncQueue.enqueueAndForget(async()=>Qf(await ka(b),G)),()=>{D.Za(),b.asyncQueue.enqueueAndForget(async()=>Yf(await ka(b),G))}}(Ap(f),_,h,c)}function Op(r,t,e){const n=e.docs.get(t._key),s=new ru(r);return new nu(r,s,t._key,n,new yn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ke=s})(xc),wr(new Sn("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),h=new ti(new Kc(n.getProvider("auth-internal")),new Yc(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(f.options.projectId,_)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Pe(ea,"4.7.3",t),Pe(ea,"4.7.3","esm2017")})();const $p={apiKey:"AIzaSyCw9bbJGjuL2dgR9qerwnJpE3vJ1lXoqmU",authDomain:"superstore-b3500.firebaseapp.com",databaseURL:"https://superstore-b3500-default-rtdb.firebaseio.com",projectId:"superstore-b3500",storageBucket:"superstore-b3500.firebasestorage.app",messagingSenderId:"224965135494",appId:"1:224965135494:web:be8b1896fdff06c3129507",measurementId:"G-GWNZSLE80Z"},Mp=nl($p),Lp=Tp(Mp);function Fp(r,t){const e=wp(Lp,`users/${r}/resources`);return Np(e,n=>{const s=n.docs.map(o=>({id:o.id,...o.data()}));t(s)},n=>{console.error("Firestore subscription error:",n)})}var Up=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,su=(r,t,e,n)=>{for(var s=n>1?void 0:n?Bp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Up(t,e,s),s};let Pr=class extends Tt{constructor(){super(...arguments),this.items=[]}render(){const r=this.items.filter(t=>t.category==="hub");return z`
      <section aria-labelledby="hub-heading">
        <h2 id="hub-heading">My Active Services</h2>
        <div class="grid">
          ${r.map(t=>z`
            <article class="card" tabindex="0">
              <header style="display: flex; justify-content: space-between;">
                <h3>${t.title}</h3>
                ${t.isPremium?z`<span class="badge-pro" aria-label="Premium Service">PRO</span>`:""}
              </header>
              <p>${t.description}</p>
              <footer style="margin-top: 12px; font-size: 0.9rem; color: gray;">
                <strong>Est. Delivery:</strong> ${t.deliveryDate?new Date(t.deliveryDate).toLocaleDateString():"TBD"}
              </footer>
            </article>
          `)}
        </div>
      </section>
    `}};Pr.styles=Pt`
    .grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
    .card { background: var(--surface-color, #fff); border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .badge-pro { background: gold; color: #000; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; }
    @media (min-width: 768px) { .grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); } }
  `;su([ze({type:Array})],Pr.prototype,"items",2);Pr=su([Ct("view-hub")],Pr);var jp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,iu=(r,t,e,n)=>{for(var s=n>1?void 0:n?qp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&jp(t,e,s),s};let Cr=class extends Tt{constructor(){super(...arguments),this.items=[]}render(){const r=this.items.filter(t=>t.category==="tracker"||t.category==="hub");return z`
      <section aria-labelledby="tracker-heading">
        <h2 id="tracker-heading">Project Progress</h2>
        <div class="list">
          ${r.length===0?z`<p>No active projects to track.</p>`:""}
          ${r.map(t=>z`
            <div class="tracker-item">
              <div style="display: flex; justify-content: space-between;">
                <strong>${t.title}</strong>
                <span>${t.statusPercent}%</span>
              </div>
              <div class="progress-track" aria-hidden="true">
                <div class="progress-fill" style="width: ${t.statusPercent}%;"></div>
              </div>
              <span class="visually-hidden" role="progressbar" aria-valuenow="${t.statusPercent}" aria-valuemin="0" aria-valuemax="100">
                ${t.title} is ${t.statusPercent} percent complete. Status: ${t.statusLabel}
              </span>
              <p style="font-size: 0.85rem; color: #555; margin-top: 4px;">Status: ${t.statusLabel}</p>
            </div>
          `)}
        </div>
      </section>
    `}};Cr.styles=Pt`
    /* CSS omitted for brevity, assumes standard list styling */
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    .list { display: flex; flex-direction: column; gap: 24px; }
    .tracker-item { background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .progress-track { background: #e0e0e0; border-radius: 8px; height: 12px; width: 100%; overflow: hidden; margin-top: 8px; }
    .progress-fill { background: var(--primary-color, #6200ea); height: 100%; transition: width 0.4s ease; }
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  `;iu([ze({type:Array})],Cr.prototype,"items",2);Cr=iu([Ct("view-tracker")],Cr);var zp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,ou=(r,t,e,n)=>{for(var s=n>1?void 0:n?Hp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&zp(t,e,s),s};let Vr=class extends Tt{constructor(){super(...arguments),this.items=[]}handleDownload(r){r.url?window.open(r.url,"_blank"):console.warn("No URL found for this artifact",r)}render(){const r=this.items.filter(t=>t.category==="vault"||t.artifacts&&t.artifacts.length>0);return r.length===0?z`
        <section aria-labelledby="vault-heading">
          <h2 id="vault-heading">My Secure Vault</h2>
          <div class="empty-state">
            <p>You don't have any final documents yet.</p>
          </div>
        </section>
      `:z`
      <section aria-labelledby="vault-heading">
        <h2 id="vault-heading">My Secure Vault</h2>
        <p style="font-size: 0.9rem; margin-bottom: 16px;">Download history, invoices, and completed assets.</p>
        
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Asset Name</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            ${r.flatMap(t=>(t.artifacts||[]).map(e=>z`
              <tr>
                <td>
                  <strong>${e.name||"Document"}</strong><br/>
                  <small style="color: gray;">From: ${t.title||"Unknown Project"}</small>
                </td>
                <td>${t.updatedAt?new Date(t.updatedAt).toLocaleDateString():"N/A"}</td>
                <td>
                  <button 
                    class="download-btn"
                    @click="${()=>this.handleDownload(e)}"
                    aria-label="View ${e.name||"Document"}">
                    View Document
                  </button>
                </td>
              </tr>
            `))}
          </tbody>
        </table>
      </section>
    `}};Vr.styles=Pt`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th { padding: 12px 8px; border-bottom: 2px solid #ccc; font-weight: 600; }
    td { padding: 12px 8px; border-bottom: 1px solid #eee; }
    .download-btn {
      background: transparent;
      border: 1px solid #6200ea;
      color: #6200ea;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }
    .download-btn:hover { background: #6200ea; color: white; }
    .empty-state { text-align: center; padding: 40px; color: #777; }
  `;ou([ze({type:Array})],Vr.prototype,"items",2);Vr=ou([Ct("view-vault")],Vr);var Kp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,zr=(r,t,e,n)=>{for(var s=n>1?void 0:n?Gp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Kp(t,e,s),s};let Be=class extends Tt{constructor(){super(...arguments),this.phone="",this.error="",this.loading=!1}handleInput(r){const t=r.target,e=t.value.replace(/\D/g,"");e.length<=8?(this.phone=e,t.value=e):t.value=this.phone,this.error=""}async handleSubmit(r){if(r.preventDefault(),this.phone.length!==8){this.error="Phone number must be exactly 8 digits.";return}this.loading=!0,this.error="";const t="+266"+this.phone;try{await St.requestOtp(t),sessionStorage.setItem(Se,t),At.navigate("app://otp")}catch(e){const n=e instanceof Error?e.message:"Failed to send OTP. Try again.";this.error=n}finally{this.loading=!1}}navToSignup(r){r.preventDefault(),At.navigate("app://signup")}render(){return z`
      <div class="card">
        <h2>Welcome Back</h2>
        <p style="color: #666; margin-bottom: 24px;">Enter your phone number to continue</p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="prefix">+266</span>
              <input 
                id="phone" 
                type="tel" 
                placeholder="51234567" 
                .value="${this.phone}" 
                @input="${this.handleInput}" 
                autocomplete="tel-local"
                ?disabled="${this.loading}"
              >
            </div>
            <div class="error">${this.error}</div>
          </div>
          
          <button type="submit" ?disabled="${this.phone.length!==8||this.loading}">
            ${this.loading?"Sending OTP...":"Continue"}
          </button>
        </form>

        <div class="footer">
          Don't have an account? <a @click="${this.navToSignup}">Sign Up</a>
        </div>
      </div>
    `}};Be.styles=Pt`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
    .card {
      background: var(--surface-color, #fff);
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
    }
    h2 { margin-top: 0; color: #333; }
    .input-group {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-bottom: 24px;
    }
    .input-group label {
      font-size: 0.9rem;
      margin-bottom: 8px;
      color: #555;
    }
    .phone-input {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }
    .prefix {
      background: #f0f0f0;
      padding: 12px;
      color: #555;
      font-weight: 500;
      border-right: 1px solid #ccc;
    }
    input {
      flex: 1;
      padding: 12px;
      border: none;
      outline: none;
      font-size: 1rem;
    }
    input:focus { background: #fafafa; }
    .error {
      color: #d32f2f;
      font-size: 0.85rem;
      margin-top: 4px;
      min-height: 20px;
    }
    button {
      width: 100%;
      padding: 14px;
      background: var(--primary-color, #6200ee);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover { background: #3700b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .footer { margin-top: 24px; font-size: 0.9rem; color: #666; }
    .footer a {
      color: var(--primary-color, #6200ee);
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    .footer a:hover { text-decoration: underline; }
  `;zr([et()],Be.prototype,"phone",2);zr([et()],Be.prototype,"error",2);zr([et()],Be.prototype,"loading",2);Be=zr([Ct("view-login")],Be);var Wp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Fn=(r,t,e,n)=>{for(var s=n>1?void 0:n?Qp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Wp(t,e,s),s};let ge=class extends Tt{constructor(){super(...arguments),this.otp="",this.error="",this.loading=!1,this.resendCountdown=30,this.pendingPhone=""}connectedCallback(){if(super.connectedCallback(),this.pendingPhone=sessionStorage.getItem(Se)??"",!this.pendingPhone){console.warn("No pending phone found; routing back to login."),At.navigate("app://login");return}this.startTimer()}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}startTimer(){this.resendCountdown=30,this.timer=window.setInterval(()=>{this.resendCountdown>0?this.resendCountdown--:clearInterval(this.timer)},1e3)}handleInput(r){const t=r.target,e=t.value.replace(/\D/g,"");e.length<=6?(this.otp=e,t.value=e):t.value=this.otp,this.error=""}async handleSubmit(r){if(r.preventDefault(),this.otp.length!==6){this.error="OTP must be 6 digits.";return}if(!this.pendingPhone){this.error="Session expired. Please try logging in again.";return}this.loading=!0,this.error="";try{await St.verifyOtp(this.pendingPhone,this.otp),sessionStorage.removeItem(Se),At.navigate("app://hub")}catch(t){const e=t instanceof Error?t.message:"Invalid verification code. Please try again.";this.error=e}finally{this.loading=!1}}async handleResend(){if(!(this.resendCountdown>0||!this.pendingPhone)){this.loading=!0,this.error="";try{await St.requestOtp(this.pendingPhone),this.startTimer()}catch(r){const t=r instanceof Error?r.message:"Failed to resend. Please go back to the login page.";this.error=t}finally{this.loading=!1}}}goBack(r){r.preventDefault(),sessionStorage.removeItem(Se),At.navigate("app://login")}render(){return z`
      <div class="card">
        <h2>Verify Phone</h2>
        <p style="color: #666; margin-bottom: 24px;">
          We sent a 6-digit code to your phone.<br>
          <a href="#" @click="${this.goBack}" style="color: var(--primary-color); text-decoration: none; font-size: 0.9rem;">Wrong number?</a>
        </p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <input 
              type="tel" 
              placeholder="••••••" 
              .value="${this.otp}" 
              @input="${this.handleInput}" 
              autocomplete="one-time-code"
              ?disabled="${this.loading}"
            >
            <div class="error">${this.error}</div>
          </div>
          
          <button type="submit" ?disabled="${this.otp.length!==6||this.loading}">
            ${this.loading?"Verifying...":"Verify Code"}
          </button>
        </form>

        <div class="resend">
          Didn't get the code? 
          <button 
            type="button" 
            @click="${this.handleResend}" 
            ?disabled="${this.resendCountdown>0||this.loading}"
          >
            ${this.resendCountdown>0?"Resend in "+this.resendCountdown+"s":"Resend Code"}
          </button>
        </div>
      </div>
    `}};ge.styles=Pt`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
    .card {
      background: var(--surface-color, #fff);
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
    }
    h2 { margin-top: 0; color: #333; }
    .input-group {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-bottom: 24px;
    }
    .input-group label {
      font-size: 0.9rem;
      margin-bottom: 8px;
      color: #555;
      text-align: center;
    }
    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      font-size: 1.5rem;
      text-align: center;
      letter-spacing: 0.5em;
    }
    input:focus {
      border-color: var(--primary-color, #6200ee);
      background: #fafafa;
    }
    .error {
      color: #d32f2f;
      font-size: 0.85rem;
      margin-top: 8px;
      text-align: center;
      min-height: 20px;
    }
    button {
      width: 100%;
      padding: 14px;
      background: var(--primary-color, #6200ee);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover { background: #3700b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .resend {
      margin-top: 24px;
      font-size: 0.9rem;
      color: #666;
    }
    .resend button {
      background: transparent;
      color: var(--primary-color, #6200ee);
      width: auto;
      padding: 0;
      display: inline;
    }
    .resend button:hover {
      background: transparent;
      text-decoration: underline;
    }
    .resend button:disabled {
      color: #999;
      background: transparent;
      text-decoration: none;
    }
  `;Fn([et()],ge.prototype,"otp",2);Fn([et()],ge.prototype,"error",2);Fn([et()],ge.prototype,"loading",2);Fn([et()],ge.prototype,"resendCountdown",2);ge=Fn([Ct("view-otp")],ge);var Yp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,_e=(r,t,e,n)=>{for(var s=n>1?void 0:n?Xp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Yp(t,e,s),s};let Ut=class extends Tt{constructor(){super(...arguments),this.name="",this.phone="",this.error="",this.loading=!1,this.nameError="",this.phoneError=""}handleNameInput(r){this.name=r.target.value,this.nameError=this.name.length>0&&this.name.length<2?"Name must be at least 2 characters.":"",this.error=""}handlePhoneInput(r){const t=r.target,e=t.value.replace(/\D/g,"");e.length<=8?(this.phone=e,t.value=e):t.value=this.phone,this.phoneError=this.phone.length>0&&this.phone.length!==8?"Phone number must be exactly 8 digits.":"",this.error=""}get isFormValid(){return this.name.length>=2&&this.phone.length===8}async handleSubmit(r){if(r.preventDefault(),!this.isFormValid)return;this.loading=!0,this.error="";const t="+266"+this.phone;try{await St.requestOtp(t),sessionStorage.setItem(Se,t),At.navigate("app://otp")}catch(e){const n=e instanceof Error?e.message:"Failed to send OTP. Try again.";this.error=n}finally{this.loading=!1}}navToLogin(r){r.preventDefault(),At.navigate("app://login")}render(){return z`
      <div class="card">
        <h2>Access Your Workspace</h2>
        <p class="info">
          Accounts are provisioned by your workspace administrator.<br>
          If your number is registered, enter it below to receive your access code.
        </p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <label for="name">Full Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              .value="${this.name}" 
              @input="${this.handleNameInput}"
              ?disabled="${this.loading}"
            >
            <div class="error">${this.nameError}</div>
          </div>

          <div class="input-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="prefix">+266</span>
              <input 
                id="phone" 
                type="tel" 
                placeholder="51234567" 
                .value="${this.phone}" 
                @input="${this.handlePhoneInput}"
                ?disabled="${this.loading}"
              >
            </div>
            <div class="error">${this.phoneError}</div>
          </div>

          <div class="error" style="margin-bottom: 8px;">${this.error}</div>
          
          <button type="submit" ?disabled="${!this.isFormValid||this.loading}">
            ${this.loading?"Sending Code...":"Send Access Code"}
          </button>
        </form>

        <div class="footer">
          Already have access? <a @click="${this.navToLogin}">Log In</a>
        </div>
      </div>
    `}};Ut.styles=Pt`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .card {
      background: var(--surface-color, #fff);
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin: auto;
    }
    h2 {
      margin-top: 0;
      color: #333;
      text-align: center;
    }
    .info {
      font-size: 0.85rem;
      color: #888;
      text-align: center;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .input-group label {
      font-size: 0.9rem;
      margin-bottom: 6px;
      color: #555;
    }
    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      font-size: 1rem;
    }
    input:focus {
      border-color: var(--primary-color, #6200ee);
      background: #fafafa;
    }
    .phone-input {
      display: flex;
      align-items: stretch;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }
    .phone-input:focus-within {
      border-color: var(--primary-color, #6200ee);
    }
    .prefix {
      background: #f0f0f0;
      padding: 12px;
      color: #555;
      font-weight: 500;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: center;
    }
    .phone-input input {
      border: none;
      border-radius: 0;
      flex: 1;
    }
    .error {
      color: #d32f2f;
      font-size: 0.8rem;
      margin-top: 4px;
      min-height: 16px;
    }
    button {
      width: 100%;
      padding: 14px;
      background: var(--primary-color, #6200ee);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 8px;
    }
    button:hover { background: #3700b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .footer {
      margin-top: 24px;
      font-size: 0.9rem;
      color: #666;
      text-align: center;
    }
    .footer a {
      color: var(--primary-color, #6200ee);
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    .footer a:hover { text-decoration: underline; }
  `;_e([et()],Ut.prototype,"name",2);_e([et()],Ut.prototype,"phone",2);_e([et()],Ut.prototype,"error",2);_e([et()],Ut.prototype,"loading",2);_e([et()],Ut.prototype,"nameError",2);_e([et()],Ut.prototype,"phoneError",2);Ut=_e([Ct("view-signup")],Ut);var Jp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Hr=(r,t,e,n)=>{for(var s=n>1?void 0:n?Zp(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Jp(t,e,s),s};const Ua=["login","otp","signup"];let je=class extends Tt{constructor(){super(...arguments),this._currentView="hub",this._resources=[],this._loading=!0,this._unsubscribeResources=null}connectedCallback(){super.connectedCallback(),At.addEventListener("route-changed",r=>{this._currentView=r.detail.view,this.requestUpdate()}),this._authHandler=r=>{this._onAuthChanged(r.detail.user)},St.addEventListener("auth-changed",this._authHandler),this._onAuthChanged(St.getUser()),At.resolveRoute()}disconnectedCallback(){super.disconnectedCallback(),St.removeEventListener("auth-changed",this._authHandler),this._teardownResourceSub()}_onAuthChanged(r){r!=null&&r.phone?(this._teardownResourceSub(),this._loading=!0,this._unsubscribeResources=Fp(r.phone,t=>{this._resources=t,this._loading=!1,this.requestUpdate()})):(this._resources=[],this._loading=!1,this._teardownResourceSub(),Ua.includes(this._currentView)||At.navigate("app://login"))}_teardownResourceSub(){this._unsubscribeResources&&(this._unsubscribeResources(),this._unsubscribeResources=null)}renderDynamicView(){if(this._loading&&!Ua.includes(this._currentView))return z`<p>Loading your workspace...</p>`;switch(this._currentView){case"hub":return z`<view-hub .items="${this._resources}"></view-hub>`;case"tracker":return z`<view-tracker .items="${this._resources}"></view-tracker>`;case"vault":return z`<view-vault .items="${this._resources}"></view-vault>`;case"login":return z`<view-login></view-login>`;case"otp":return z`<view-otp></view-otp>`;case"signup":return z`<view-signup></view-signup>`;default:return z`<p>Page not found</p>`}}render(){return z`${this.renderDynamicView()}`}};je.styles=Pt`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      padding: 16px;
      box-sizing: border-box;
    }
  `;Hr([et()],je.prototype,"_currentView",2);Hr([et()],je.prototype,"_resources",2);Hr([et()],je.prototype,"_loading",2);je=Hr([Ct("core-viewport")],je);var tg=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,au=(r,t,e,n)=>{for(var s=n>1?void 0:n?eg(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&tg(t,e,s),s};let xr=class extends Tt{constructor(){super(...arguments),this.isOpen=!1}_toggleMenu(){this.isOpen=!this.isOpen,this.dispatchEvent(new CustomEvent("menu-toggle",{detail:{isOpen:this.isOpen},bubbles:!0,composed:!0}))}render(){return z`
      <button 
        @click="${this._toggleMenu}"
        class="mdc-icon-button mat-mdc-icon-button mat-unthemed" 
        aria-label="Main menu">
        <span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>
        <span class="material-icons notranslate">menu</span>
        <span class="mat-focus-indicator"></span>
        <span class="mat-ripple mat-mdc-button-ripple"></span>
      </button>
    `}};xr.styles=Pt`
    :host { display: inline-block; }
    
    /* extracted Material styles */
    .mdc-icon-button {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      padding: 12px;
      border: none;
      outline: none;
      background-color: transparent;
      fill: currentColor;
      color: inherit;
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
    }
    
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .mat-mdc-button-ripple {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        pointer-events: none;
    }

    /* Ripple effect placeholder */
    .mdc-icon-button:hover .mat-mdc-button-ripple {
        background-color: rgba(0,0,0,0.04);
    }
  `;au([ze({type:Boolean})],xr.prototype,"isOpen",2);xr=au([Ct("nav-trigger")],xr);var ng=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Vi=(r,t,e,n)=>{for(var s=n>1?void 0:n?rg(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&ng(t,e,s),s};let kn=class extends Tt{constructor(){super(...arguments),this.isExpanded=!1,this.user=St.getUser()}connectedCallback(){super.connectedCallback(),this._authHandler=r=>{this.user=r.detail.user,this.isExpanded=!1},St.addEventListener("auth-changed",this._authHandler)}disconnectedCallback(){super.disconnectedCallback(),St.removeEventListener("auth-changed",this._authHandler)}_handleSignOut(){this.isExpanded=!1,St.signOut(),At.navigate("app://login")}_avatarUrl(r){return`https://ui-avatars.com/api/?name=${encodeURIComponent(r)}&background=6200ee&color=fff`}render(){var n,s,o;const r=((n=this.user)==null?void 0:n.name)??"Client",t=((s=this.user)==null?void 0:s.clientId)??"—",e=((o=this.user)==null?void 0:o.phone)??"";return z`
      <div class="profile-container">
        <div class="avatar" @click="${()=>this.isExpanded=!this.isExpanded}" role="button" aria-label="Profile menu">
           <img src="${this._avatarUrl(r)}" alt="Profile" />
        </div>

        <div class="details ${this.isExpanded?"open":""}">
           <h3>${r}</h3>
           <span class="badge">Workspace Client</span>
           <p>${e}</p>
           <small>ID: ${t}</small>
           <button class="sign-out-btn" @click="${this._handleSignOut}">Sign Out</button>
        </div>
      </div>
    `}};kn.styles=Pt`
    :host { display: block; }
    .profile-container {
        position: relative;
        width: 100%;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        background: #eee;
        border: 2px solid transparent;
        transition: border-color 0.2s;
    }
    .avatar:hover {
        border-color: #6200ee;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .details { 
        max-height: 0; 
        opacity: 0; 
        overflow: hidden;
        transition: all 0.3s ease;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        position: absolute;
        top: 50px;
        right: 0;
        width: 250px;
        z-index: 100;
    }
    .details.open { 
        max-height: 260px; 
        opacity: 1; 
        padding: 16px; 
    }
    h3 { margin: 0 0 4px 0; font-size: 1rem; }
    p { margin: 4px 0; font-size: 0.9rem; color: #666; }
    .badge {
        display: inline-block;
        font-size: 0.75rem;
        padding: 2px 8px;
        background: #ffd700;
        color: #333;
        border-radius: 10px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    small { display: block; margin-top: 8px; color: #999; font-size: 0.75rem; }
    .sign-out-btn {
        display: block;
        width: 100%;
        margin-top: 12px;
        padding: 8px 0;
        background: transparent;
        border: 1px solid #d32f2f;
        border-radius: 6px;
        color: #d32f2f;
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
    }
    .sign-out-btn:hover {
        background: #d32f2f;
        color: white;
    }
  `;Vi([et()],kn.prototype,"isExpanded",2);Vi([et()],kn.prototype,"user",2);kn=Vi([Ct("profile-expander")],kn);var sg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,lu=(r,t,e,n)=>{for(var s=n>1?void 0:n?ig(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&sg(t,e,s),s};let Dr=class extends Tt{constructor(){super(...arguments),this.visible=!0}render(){return z`
      <div class="logo-container">
        <!-- Simple geometric logo representing "KS" or stability -->
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="5" fill="none" />
          <path d="M35 35 L65 65 M65 35 L35 65" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
        </svg>
      </div>
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
    `}};Dr.styles=Pt`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #ffffff;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.8s ease-out, visibility 0.8s;
      opacity: 1;
      visibility: visible;
    }
    :host([hidden]) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .logo-container {
      width: 120px;
      height: 120px;
      animation: pulse 2s infinite ease-in-out;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: #6200ee;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.05); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .loading-bar {
      position: absolute;
      bottom: 20%;
      width: 200px;
      height: 4px;
      background: #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }

    .loading-progress {
      height: 100%;
      background: #6200ee;
      width: 0%;
      animation: load 3s ease-out forwards; 
    }

    /* Simulate a loading progress matching the boot time assumption */
    @keyframes load {
      0% { width: 0%; }
      20% { width: 10%; }
      50% { width: 40%; }
      80% { width: 80%; }
      100% { width: 100%; }
    }
  `;lu([ze({type:Boolean})],Dr.prototype,"visible",2);Dr=lu([Ct("splash-screen")],Dr);var og=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,Kr=(r,t,e,n)=>{for(var s=n>1?void 0:n?ag(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&og(t,e,s),s};const xs={hub:z`<span class="material-icons notranslate">dashboard</span>`,tracker:z`<span class="material-icons notranslate">timeline</span>`,vault:z`<span class="material-icons notranslate">lock</span>`,auth:z`<span class="material-icons notranslate">account_circle</span>`};let qe=class extends Tt{constructor(){super(...arguments),this._drawerOpen=!1,this._currentView="hub",this._booting=!0}connectedCallback(){super.connectedCallback(),At.addEventListener("route-changed",r=>{this._currentView=r.detail.view,this._drawerOpen=!1}),At.resolveRoute(),setTimeout(()=>{this._booting=!1},3e3)}_toggleDrawer(){this._drawerOpen=!this._drawerOpen}_handleMenuToggle(r){this._drawerOpen=r.detail.isOpen}_nav(r){At.navigate(`app://${r}`)}render(){return["login","otp","signup"].includes(this._currentView)?z`
        <splash-screen ?hidden=${!this._booting}></splash-screen>
        <core-viewport></core-viewport>
      `:z`
      <splash-screen ?hidden=${!this._booting}></splash-screen>

      <header>
        <nav-trigger .isOpen=${this._drawerOpen} @menu-toggle=${this._handleMenuToggle}></nav-trigger>
        <h1>Ka Sesiung</h1>
        <profile-expander></profile-expander>
      </header>

      <div class="main-container">
        <div class="scrim ${this._drawerOpen?"open":""}" @click=${this._toggleDrawer}></div>
        
        <nav class="${this._drawerOpen?"open":""}">
          <a class="nav-item ${this._currentView==="hub"?"active":""}" @click=${()=>this._nav("hub")}>
            ${xs.hub} My Hub
          </a>
          <a class="nav-item ${this._currentView==="tracker"?"active":""}" @click=${()=>this._nav("tracker")}>
            ${xs.tracker} Tracker
          </a>
          <a class="nav-item ${this._currentView==="vault"?"active":""}" @click=${()=>this._nav("vault")}>
            ${xs.vault} Vault
          </a>
        </nav>

        <core-viewport></core-viewport>
      </div>
    `}};qe.styles=Pt`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      background: #f5f5f5;
      color: #333;
    }

    /* Required for Material Icons to render within Shadow DOM */
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    header {
      display: flex;
      align-items: center;
      padding: 0 16px;
      height: 64px;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
    }

    h1 {
      flex: 1;
      font-size: 1.25rem;
      margin: 0;
      font-weight: 500;
      margin-left: 16px;
    }

    .main-container {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    nav {
      width: 256px;
      background: #fff;
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 5;
      transform: translateX(-100%);
    }

    nav.open {
      transform: translateX(0);
      box-shadow: 2px 0 8px rgba(0,0,0,0.1);
    }
    
    @media (min-width: 768px) {
      nav {
        position: relative;
        transform: translateX(0);
      }
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      text-decoration: none;
      color: #555;
      font-weight: 500;
      cursor: pointer;
    }
    
    .nav-item:hover { background: #f0f0f0; }
    .nav-item.active {
      color: #6200ee;
      background: #f5f5ff;
    }
    
    .nav-item svg, .nav-item .material-icons { margin-right: 12px; }

    core-viewport {
      flex: 1;
      overflow: hidden;
    }

    /* Scrim for mobile drawer */
    .scrim {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 4;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
    }
    .scrim.open {
      opacity: 1;
      pointer-events: auto;
    }
    @media (min-width: 768px) { .scrim { display: none; } }
  `;Kr([et()],qe.prototype,"_drawerOpen",2);Kr([et()],qe.prototype,"_currentView",2);Kr([et()],qe.prototype,"_booting",2);qe=Kr([Ct("app-shell")],qe);console.log("App initialized");
