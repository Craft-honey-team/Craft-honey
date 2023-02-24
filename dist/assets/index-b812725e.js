(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Qr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function yt(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ge(s)?wc(s):yt(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ge(t))return t;if(le(t))return t}}const bc=/;(?![^(]*\))/g,vc=/:([^]+)/,yc=/\/\*.*?\*\//gs;function wc(t){const e={};return t.replace(yc,"").split(bc).forEach(n=>{if(n){const s=n.split(vc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ss(t){let e="";if(ge(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=ss(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ec="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ic=Qr(Ec);function ca(t){return!!t||t===""}function xc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Gt(t[s],e[s]);return n}function Gt(t,e){if(t===e)return!0;let n=Hi(t),s=Hi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$n(t),s=$n(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?xc(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Gt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Gt(n,e))}const z=t=>ge(t)?t:t==null?"":F(t)||le(t)&&(t.toString===da||!$(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:wn(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!ha(e)?String(e):e,ce={},an=[],Je=()=>{},Tc=()=>!1,Sc=/^on[^a-z]/,Ws=t=>Sc.test(t),ei=t=>t.startsWith("onUpdate:"),xe=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cc=Object.prototype.hasOwnProperty,Q=(t,e)=>Cc.call(t,e),F=Array.isArray,ln=t=>rs(t)==="[object Map]",wn=t=>rs(t)==="[object Set]",Hi=t=>rs(t)==="[object Date]",$=t=>typeof t=="function",ge=t=>typeof t=="string",$n=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",fa=t=>le(t)&&$(t.then)&&$(t.catch),da=Object.prototype.toString,rs=t=>da.call(t),Pc=t=>rs(t).slice(8,-1),ha=t=>rs(t)==="[object Object]",ni=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kc=/-(\w)/g,rt=zs(t=>t.replace(kc,(e,n)=>n?n.toUpperCase():"")),Rc=/\B([A-Z])/g,En=zs(t=>t.replace(Rc,"-$1").toLowerCase()),Ks=zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=zs(t=>t?`on${Ks(t)}`:""),Vn=(t,e)=>!Object.is(t,e),Is=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $i;const Ac=()=>$i||($i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ne;class pa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ga(t){return new pa(t)}function Oc(t,e=Ne){e&&e.active&&e.effects.push(t)}function Mc(){return Ne}function Nc(t){Ne&&Ne.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ma=t=>(t.w&Rt)>0,_a=t=>(t.n&Rt)>0,Dc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},Lc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ma(r)&&!_a(r)?r.delete(t):e[n++]=r,r.w&=~Rt,r.n&=~Rt}e.length=n}},Sr=new WeakMap;let An=0,Rt=1;const Cr=30;let qe;const zt=Symbol(""),Pr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Oc(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,xt=!0,Rt=1<<++An,An<=Cr?Dc(this):Vi(this),this.fn()}finally{An<=Cr&&Lc(this),Rt=1<<--An,qe=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xt=!0;const ba=[];function In(){ba.push(xt),xt=!1}function xn(){const t=ba.pop();xt=t===void 0?!0:t}function Ue(t,e,n){if(xt&&qe){let s=Sr.get(t);s||Sr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),va(r)}}function va(t,e){let n=!1;An<=Cr?_a(t)||(t.n|=Rt,n=!ma(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function ft(t,e,n,s,r,i){const o=Sr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=Wn(s);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(zt)),ln(t)&&a.push(o.get(Pr)));break;case"delete":F(t)||(a.push(o.get(zt)),ln(t)&&a.push(o.get(Pr)));break;case"set":ln(t)&&a.push(o.get(zt));break}if(a.length===1)a[0]&&kr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);kr(si(l))}}function kr(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&Wi(s);for(const s of n)s.computed||Wi(s)}function Wi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Uc=Qr("__proto__,__v_isRef,__isVue"),ya=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n)),Fc=ii(),Bc=ii(!1,!0),jc=ii(!0),zi=Hc();function Hc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)Ue(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const s=Z(this)[e].apply(this,n);return xn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?su:Ta:e?xa:Ia).get(s))return s;const o=F(s);if(!t&&o&&Q(zi,r))return Reflect.get(zi,r,i);const a=Reflect.get(s,r,i);return($n(r)?ya.has(r):Uc(r))||(t||Ue(s,"get",r),e)?a:de(a)?o&&ni(r)?a:a.value:le(a)?t?Sa(a):Tn(a):a}}const $c=wa(),Vc=wa(!0);function wa(t=!1){return function(n,s,r,i){let o=n[s];if(pn(o)&&de(o)&&!de(r))return!1;if(!t&&(!Os(r)&&!pn(r)&&(o=Z(o),r=Z(r)),!F(n)&&de(o)&&!de(r)))return o.value=r,!0;const a=F(n)&&ni(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Vn(r,o)&&ft(n,"set",s,r):ft(n,"add",s,r)),l}}function Wc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function zc(t,e){const n=Reflect.has(t,e);return(!$n(e)||!ya.has(e))&&Ue(t,"has",e),n}function Kc(t){return Ue(t,"iterate",F(t)?"length":zt),Reflect.ownKeys(t)}const Ea={get:Fc,set:$c,deleteProperty:Wc,has:zc,ownKeys:Kc},qc={get:jc,set(t,e){return!0},deleteProperty(t,e){return!0}},Gc=xe({},Ea,{get:Bc,set:Vc}),oi=t=>t,qs=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&Ue(r,"get",e),Ue(r,"get",i));const{has:o}=qs(r),a=s?oi:n?ci:zn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&Ue(s,"has",t),Ue(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ms(t,e=!1){return t=t.__v_raw,!e&&Ue(Z(t),"iterate",zt),Reflect.get(t,"size",t)}function Ki(t){t=Z(t);const e=Z(this);return qs(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function qi(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=qs(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Vn(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Gi(t){const e=Z(this),{has:n,get:s}=qs(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ft(e,"delete",t,void 0),i}function Ji(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?oi:t?ci:zn;return!t&&Ue(a,"iterate",zt),o.forEach((c,f)=>s.call(r,l(c),l(f),i))}}function bs(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=ln(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),f=n?oi:e?ci:zn;return!e&&Ue(i,"iterate",l?Pr:zt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function Jc(){const t={get(i){return ps(this,i)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!1)},e={get(i){return ps(this,i,!1,!0)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!0)},n={get(i){return ps(this,i,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:_s(!0,!1)},s={get(i){return ps(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bs(i,!1,!1),n[i]=bs(i,!0,!1),e[i]=bs(i,!1,!0),s[i]=bs(i,!0,!0)}),[t,n,e,s]}const[Yc,Xc,Qc,Zc]=Jc();function ai(t,e){const n=e?t?Zc:Qc:t?Xc:Yc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const eu={get:ai(!1,!1)},tu={get:ai(!1,!0)},nu={get:ai(!0,!1)},Ia=new WeakMap,xa=new WeakMap,Ta=new WeakMap,su=new WeakMap;function ru(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iu(t){return t.__v_skip||!Object.isExtensible(t)?0:ru(Pc(t))}function Tn(t){return pn(t)?t:li(t,!1,Ea,eu,Ia)}function ou(t){return li(t,!1,Gc,tu,xa)}function Sa(t){return li(t,!0,qc,nu,Ta)}function li(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=iu(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Tt(t){return pn(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function pn(t){return!!(t&&t.__v_isReadonly)}function Os(t){return!!(t&&t.__v_isShallow)}function Ca(t){return Tt(t)||pn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function gn(t){return As(t,"__v_skip",!0),t}const zn=t=>le(t)?Tn(t):t,ci=t=>le(t)?Sa(t):t;function Pa(t){xt&&qe&&(t=Z(t),va(t.dep||(t.dep=si())))}function ka(t,e){t=Z(t),t.dep&&kr(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Ra(t,!1)}function au(t){return Ra(t,!0)}function Ra(t,e){return de(t)?t:new lu(t,e)}class lu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:zn(e)}get value(){return Pa(this),this._value}set value(e){const n=this.__v_isShallow||Os(e)||pn(e);e=n?e:Z(e),Vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),ka(this))}}function cn(t){return de(t)?t.value:t}const cu={get:(t,e,n)=>cn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Aa(t){return Tt(t)?t:new Proxy(t,cu)}function uu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=du(t,n);return e}class fu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function du(t,e,n){const s=t[e];return de(s)?s:new fu(t,e,n)}var Oa;class hu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Oa]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,ka(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Pa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Oa="__v_isReadonly";function pu(t,e,n=!1){let s,r;const i=$(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new hu(s,r,i||!r,n)}function St(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Gs(i,e,n)}return r}function je(t,e,n,s){if($(t)){const i=St(t,e,n,s);return i&&fa(i)&&i.catch(o=>{Gs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(je(t[i],e,n,s));return r}function Gs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){St(l,null,10,[t,o,a]);return}}gu(t,n,r,s)}function gu(t,e,n,s=!0){console.error(t)}let Kn=!1,Rr=!1;const Ee=[];let et=0;const un=[];let at=null,Bt=0;const Ma=Promise.resolve();let fi=null;function di(t){const e=fi||Ma;return t?e.then(this?t.bind(this):t):e}function mu(t){let e=et+1,n=Ee.length;for(;e<n;){const s=e+n>>>1;qn(Ee[s])<t?e=s+1:n=s}return e}function hi(t){(!Ee.length||!Ee.includes(t,Kn&&t.allowRecurse?et+1:et))&&(t.id==null?Ee.push(t):Ee.splice(mu(t.id),0,t),Na())}function Na(){!Kn&&!Rr&&(Rr=!0,fi=Ma.then(La))}function _u(t){const e=Ee.indexOf(t);e>et&&Ee.splice(e,1)}function bu(t){F(t)?un.push(...t):(!at||!at.includes(t,t.allowRecurse?Bt+1:Bt))&&un.push(t),Na()}function Yi(t,e=Kn?et+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function Da(t){if(un.length){const e=[...new Set(un)];if(un.length=0,at){at.push(...e);return}for(at=e,at.sort((n,s)=>qn(n)-qn(s)),Bt=0;Bt<at.length;Bt++)at[Bt]();at=null,Bt=0}}const qn=t=>t.id==null?1/0:t.id,vu=(t,e)=>{const n=qn(t)-qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){Rr=!1,Kn=!0,Ee.sort(vu);const e=Je;try{for(et=0;et<Ee.length;et++){const n=Ee[et];n&&n.active!==!1&&St(n,null,14)}}finally{et=0,Ee.length=0,Da(),Kn=!1,fi=null,(Ee.length||un.length)&&La()}}function yu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||ce;p&&(r=n.map(b=>ge(b)?b.trim():b)),h&&(r=n.map(Wn))}let a,l=s[a=cr(e)]||s[a=cr(rt(e))];!l&&i&&(l=s[a=cr(En(e))]),l&&je(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(c,t,6,r)}}function Ua(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const f=Ua(c,e,!0);f&&(a=!0,xe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(le(t)&&s.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):xe(o,i),le(t)&&s.set(t,o),o)}function Js(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,En(e))||Q(t,e))}let ye=null,Fa=null;function Ms(t){const e=ye;return ye=t,Fa=t&&t.type.__scopeId||null,e}function Ae(t,e=ye,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&oo(-1);const i=Ms(e);let o;try{o=t(...r)}finally{Ms(i),s._d&&oo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ur(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:S}=t;let U,R;const B=Ms(t);try{if(n.shapeFlag&4){const V=r||s;U=Ze(f.call(V,V,h,i,b,p,x)),R=l}else{const V=e;U=Ze(V.length>1?V(i,{attrs:l,slots:a,emit:c}):V(i,null)),R=e.props?l:wu(l)}}catch(V){Un.length=0,Gs(V,t,1),U=ee(He)}let O=U;if(R&&S!==!1){const V=Object.keys(R),{shapeFlag:K}=O;V.length&&K&7&&(o&&V.some(ei)&&(R=Eu(R,o)),O=At(O,R))}return n.dirs&&(O=At(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ms(B),U}const wu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Eu=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Iu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Xi(s,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Js(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,c):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Js(n,i))return!0}return!1}function xu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tu=t=>t.__isSuspense;function Su(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):bu(t)}function xs(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function tt(t,e,n=!1){const s=ve||ye;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const vs={};function Nn(t,e,n){return Ba(t,e,n)}function Ba(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ce){const a=ve;let l,c=!1,f=!1;if(de(t)?(l=()=>t.value,c=Os(t)):Tt(t)?(l=()=>t,s=!0):F(t)?(f=!0,c=t.some(O=>Tt(O)||Os(O)),l=()=>t.map(O=>{if(de(O))return O.value;if(Tt(O))return Vt(O);if($(O))return St(O,a,2)})):$(t)?e?l=()=>St(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:l=Je,e&&s){const O=l;l=()=>Vt(O())}let h,p=O=>{h=R.onStop=()=>{St(O,a,4)}},b;if(Jn)if(p=Je,e?n&&je(e,a,3,[l(),f?[]:void 0,p]):l(),r==="sync"){const O=wf();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Je;let x=f?new Array(t.length).fill(vs):vs;const S=()=>{if(R.active)if(e){const O=R.run();(s||c||(f?O.some((V,K)=>Vn(V,x[K])):Vn(O,x)))&&(h&&h(),je(e,a,3,[O,x===vs?void 0:f&&x[0]===vs?[]:x,p]),x=O)}else R.run()};S.allowRecurse=!!e;let U;r==="sync"?U=S:r==="post"?U=()=>Re(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>hi(S));const R=new ri(l,U);e?n?S():x=R.run():r==="post"?Re(R.run.bind(R),a&&a.suspense):R.run();const B=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return b&&b.push(B),B}function Cu(t,e,n){const s=this.proxy,r=ge(t)?t.includes(".")?ja(s,t):()=>s[t]:t.bind(s,s);let i;$(e)?i=e:(i=e.handler,n=e);const o=ve;mn(this);const a=Ba(r,i.bind(s),n);return o?mn(o):Kt(),a}function ja(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Vt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(wn(t)||ln(t))t.forEach(n=>{Vt(n,e)});else if(ha(t))for(const n in t)Vt(t[n],e);return t}function Pu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),Ka(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],ku={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=al(),s=Pu();let r;return()=>{const i=e.default&&$a(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==He){o=S;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return fr(o);const c=Qi(o);if(!c)return fr(o);const f=Ar(c,a,s,n);Or(c,f);const h=n.subTree,p=h&&Qi(h);let b=!1;const{getTransitionKey:x}=c.type;if(x){const S=x();r===void 0?r=S:S!==r&&(r=S,b=!0)}if(p&&p.type!==He&&(!jt(c,p)||b)){const S=Ar(p,a,s,n);if(Or(p,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},fr(o);l==="in-out"&&c.type!==He&&(S.delayLeave=(U,R,B)=>{const O=Ha(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=B})}return o}}},Ru=ku;function Ha(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ar(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:S,onAppear:U,onAfterAppear:R,onAppearCancelled:B}=e,O=String(t.key),V=Ha(n,t),K=(A,J)=>{A&&je(A,s,9,J)},re=(A,J)=>{const Y=J[1];K(A,J),F(A)?A.every(fe=>fe.length<=1)&&Y():A.length<=1&&Y()},W={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=S||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=V[O];Y&&jt(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=l,Y=c,fe=f;if(!n.isMounted)if(r)J=U||l,Y=R||c,fe=B||f;else return;let me=!1;const Oe=A._enterCb=Se=>{me||(me=!0,Se?K(fe,[A]):K(Y,[A]),W.delayedLeave&&W.delayedLeave(),A._enterCb=void 0)};J?re(J,[A,Oe]):Oe()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let fe=!1;const me=A._leaveCb=Oe=>{fe||(fe=!0,J(),Oe?K(x,[A]):K(b,[A]),A._leaveCb=void 0,V[Y]===t&&delete V[Y])};V[Y]=t,p?re(p,[A,me]):me()},clone(A){return Ar(A,e,n,s)}};return W}function fr(t){if(Ys(t))return t=At(t),t.children=null,t}function Qi(t){return Ys(t)?t.children?t.children[0]:void 0:t}function Or(t,e){t.shapeFlag&6&&t.component?Or(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $a(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===De?(o.patchFlag&128&&r++,s=s.concat($a(o.children,e,a))):(e||o.type!==He)&&s.push(a!=null?At(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Va(t){return $(t)?{setup:t,name:t.name}:t}const Dn=t=>!!t.type.__asyncLoader,Ys=t=>t.type.__isKeepAlive;function Au(t,e){Wa(t,"a",e)}function Ou(t,e){Wa(t,"da",e)}function Wa(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ys(r.parent.vnode)&&Mu(s,e,n,r),r=r.parent}}function Mu(t,e,n,s){const r=Xs(e,t,s,!0);qa(()=>{ti(s[e],r)},n)}function Xs(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;In(),mn(n);const a=je(e,n,t,o);return Kt(),xn(),a});return s?r.unshift(i):r.push(i),i}}const ht=t=>(e,n=ve)=>(!Jn||t==="sp")&&Xs(t,(...s)=>e(...s),n),Nu=ht("bm"),za=ht("m"),Du=ht("bu"),Lu=ht("u"),Ka=ht("bum"),qa=ht("um"),Uu=ht("sp"),Fu=ht("rtg"),Bu=ht("rtc");function ju(t,e=ve){Xs("ec",t,e)}function we(t,e){const n=ye;if(n===null)return t;const s=tr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ce]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Vt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(In(),je(l,n,8,[t.el,a,t,e]),xn())}}const pi="components";function Jt(t,e){return Ja(pi,t,!0,e)||t}const Ga=Symbol();function Hu(t){return ge(t)?Ja(pi,t,!1)||t:t||Ga}function Ja(t,e,n=!0,s=!1){const r=ye||ve;if(r){const i=r.type;if(t===pi){const a=bf(i,!1);if(a&&(a===e||a===rt(e)||a===Ks(rt(e))))return i}const o=Zi(r[t]||i[t],e)||Zi(r.appContext[t],e);return!o&&s?i:o}}function Zi(t,e){return t&&(t[e]||t[rt(e)]||t[Ks(rt(e))])}function bv(t,e,n,s){let r;const i=n&&n[s];if(F(t)||ge(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function $u(t,e,n={},s,r){if(ye.isCE||ye.parent&&Dn(ye.parent)&&ye.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Ie();const o=i&&Ya(i(n)),a=Zs(De,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ya(t){return t.some(e=>Ds(e)?!(e.type===He||e.type===De&&!Ya(e.children)):!0)?t:null}const Mr=t=>t?ll(t)?tr(t)||t.proxy:Mr(t.parent):null,Ln=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>Cu.bind(t)}),dr=(t,e)=>t!==ce&&!t.__isScriptSetup&&Q(t,e),Vu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(dr(s,e))return o[e]=1,s[e];if(r!==ce&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,i[e];if(n!==ce&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const f=Ln[e];let h,p;if(f)return e==="$attrs"&&Ue(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return dr(r,e)?(r[e]=n,!0):s!==ce&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&Q(t,o)||dr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(Ln,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Wu(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:S,deactivated:U,beforeDestroy:R,beforeUnmount:B,destroyed:O,unmounted:V,render:K,renderTracked:re,renderTriggered:W,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:fe,components:me,directives:Oe,filters:Se}=e;if(c&&zu(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];$(ne)&&(s[ie]=ne.bind(n))}if(r){const ie=r.call(n,n);le(ie)&&(t.data=Tn(ie))}if(Nr=!0,i)for(const ie in i){const ne=i[ie],We=$(ne)?ne.bind(n,n):$(ne.get)?ne.get.bind(n,n):Je,Nt=!$(ne)&&$(ne.set)?ne.set.bind(n):Je,ze=Le({get:We,set:Nt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ze.value,set:ke=>ze.value=ke})}if(a)for(const ie in a)Xa(a[ie],s,n,ie);if(l){const ie=$(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ne=>{xs(ne,ie[ne])})}f&&eo(f,t,"c");function he(ie,ne){F(ne)?ne.forEach(We=>ie(We.bind(n))):ne&&ie(ne.bind(n))}if(he(Nu,h),he(za,p),he(Du,b),he(Lu,x),he(Au,S),he(Ou,U),he(ju,A),he(Bu,re),he(Fu,W),he(Ka,B),he(qa,V),he(Uu,J),F(Y))if(Y.length){const ie=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});K&&t.render===Je&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),me&&(t.components=me),Oe&&(t.directives=Oe)}function zu(t,e,n=Je,s=!1){F(t)&&(t=Dr(t));for(const r in t){const i=t[r];let o;le(i)?"default"in i?o=tt(i.from||r,i.default,!0):o=tt(i.from||r):o=tt(i),de(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function eo(t,e,n){je(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xa(t,e,n,s){const r=s.includes(".")?ja(n,s):()=>n[s];if(ge(t)){const i=e[t];$(i)&&Nn(r,i)}else if($(t))Nn(r,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>Xa(i,e,n,s));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Nn(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ns(l,c,o,!0)),Ns(l,e,o)),le(e)&&i.set(e,l),l}function Ns(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ns(t,i,n,!0),r&&r.forEach(o=>Ns(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ku[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ku={data:to,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ut,directives:Ut,watch:Gu,provide:to,inject:qu};function to(t,e){return e?t?function(){return xe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function qu(t,e){return Ut(Dr(t),Dr(e))}function Dr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?xe(xe(Object.create(null),t),e):e}function Gu(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ce(t[s],e[s]);return n}function Ju(t,e,n,s=!1){const r={},i={};As(i,er,1),t.propsDefaults=Object.create(null),Qa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ou(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Yu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Js(t.emitsOptions,p))continue;const b=e[p];if(l)if(Q(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const x=rt(p);r[x]=Lr(l,a,x,b,t,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Qa(t,e,r,i)&&(c=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=En(h))===h||!Q(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Lr(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],c=!0)}c&&ft(t,"set","$attrs")}function Qa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let f;r&&Q(r,f=rt(l))?!i||!i.includes(f)?n[f]=c:(a||(a={}))[f]=c:Js(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||ce;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Lr(r,l,h,c[h],t,!Q(c,h))}}return o}function Lr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(mn(r),s=c[n]=l.call(null,e),Kt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===En(n))&&(s=!0))}return s}function Za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!$(t)){const f=h=>{l=!0;const[p,b]=Za(h,e,!0);xe(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return le(t)&&s.set(t,an),an;if(F(i))for(let f=0;f<i.length;f++){const h=rt(i[f]);no(h)&&(o[h]=ce)}else if(i)for(const f in i){const h=rt(f);if(no(h)){const p=i[f],b=o[h]=F(p)||$(p)?{type:p}:Object.assign({},p);if(b){const x=io(Boolean,b.type),S=io(String,b.type);b[0]=x>-1,b[1]=S<0||x<S,(x>-1||Q(b,"default"))&&a.push(h)}}}const c=[o,a];return le(t)&&s.set(t,c),c}function no(t){return t[0]!=="$"}function so(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ro(t,e){return so(t)===so(e)}function io(t,e){return F(e)?e.findIndex(n=>ro(n,t)):$(e)&&ro(e,t)?0:-1}const el=t=>t[0]==="_"||t==="$stable",mi=t=>F(t)?t.map(Ze):[Ze(t)],Xu=(t,e,n)=>{if(e._n)return e;const s=Ae((...r)=>mi(e(...r)),n);return s._c=!1,s},tl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(el(r))continue;const i=t[r];if($(i))e[r]=Xu(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},nl=(t,e)=>{const n=mi(e);t.slots.default=()=>n},Qu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),As(e,"_",n)):tl(e,t.slots={})}else t.slots={},e&&nl(t,e);As(t.slots,er,1)},Zu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tl(e,r)),o=e}else e&&(nl(t,e),o={default:1});if(i)for(const a in r)!el(a)&&!(a in o)&&delete r[a]};function sl(){return{app:null,config:{isNativeTag:Tc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(t,e){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!le(r)&&(r=null);const i=sl(),o=new Set;let a=!1;const l=i.app={_uid:ef++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ef,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...f)):$(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,h){if(!a){const p=ee(s,r);return p.appContext=i,f&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,tr(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Ur(t,e,n,s,r=!1){if(F(t)){t.forEach((p,b)=>Ur(p,e&&(F(e)?e[b]:e),n,s,r));return}if(Dn(s)&&!r)return;const i=s.shapeFlag&4?tr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,Q(h,c)&&(h[c]=null)):de(c)&&(c.value=null)),$(l))St(l,a,12,[o,f]);else{const p=ge(l),b=de(l);if(p||b){const x=()=>{if(t.f){const S=p?Q(h,l)?h[l]:f[l]:l.value;r?F(S)&&ti(S,i):F(S)?S.includes(i)||S.push(i):p?(f[l]=[i],Q(h,l)&&(h[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,Q(h,l)&&(h[l]=o)):b&&(l.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Re(x,n)):x()}}}const Re=Su;function nf(t){return sf(t)}function sf(t,e){const n=Ac();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Je,insertStaticContent:x}=t,S=(u,d,g,_=null,y=null,I=null,P=!1,E=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!jt(u,d)&&(_=C(u),ke(u,y,I,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:M}=d;switch(w){case Qs:U(u,d,g,_);break;case He:R(u,d,g,_);break;case Ts:u==null&&B(d,g,_,P);break;case De:me(u,d,g,_,y,I,P,E,T);break;default:M&1?K(u,d,g,_,y,I,P,E,T):M&6?Oe(u,d,g,_,y,I,P,E,T):(M&64||M&128)&&w.process(u,d,g,_,y,I,P,E,T,X)}D!=null&&y&&Ur(D,u&&u.ref,I,d||u,!d)},U=(u,d,g,_)=>{if(u==null)s(d.el=a(d.children),g,_);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},R=(u,d,g,_)=>{u==null?s(d.el=l(d.children||""),g,_):d.el=u.el},B=(u,d,g,_)=>{[u.el,u.anchor]=x(u.children,d,g,_,u.el,u.anchor)},O=({el:u,anchor:d},g,_)=>{let y;for(;u&&u!==d;)y=p(u),s(u,g,_),u=y;s(d,g,_)},V=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,_,y,I,P,E,T)=>{P=P||d.type==="svg",u==null?re(d,g,_,y,I,P,E,T):J(u,d,y,I,P,E,T)},re=(u,d,g,_,y,I,P,E)=>{let T,w;const{type:D,props:M,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,I,M&&M.is,M),L&8?f(T,u.children):L&16&&A(u.children,T,null,_,y,I&&D!=="foreignObject",P,E),G&&Dt(u,null,_,"created"),M){for(const se in M)se!=="value"&&!Es(se)&&i(T,se,null,M[se],I,u.children,_,y,k);"value"in M&&i(T,"value",null,M.value),(w=M.onVnodeBeforeMount)&&Qe(w,_,u)}W(T,u,u.scopeId,P,_),G&&Dt(u,null,_,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,d,g),((w=M&&M.onVnodeMounted)||oe||G)&&Re(()=>{w&&Qe(w,_,u),oe&&H.enter(T),G&&Dt(u,null,_,"mounted")},y)},W=(u,d,g,_,y)=>{if(g&&b(u,g),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(y){let I=y.subTree;if(d===I){const P=y.vnode;W(u,P,P.scopeId,P.slotScopeIds,y.parent)}}},A=(u,d,g,_,y,I,P,E,T=0)=>{for(let w=T;w<u.length;w++){const D=u[w]=E?_t(u[w]):Ze(u[w]);S(null,D,d,g,_,y,I,P,E)}},J=(u,d,g,_,y,I,P)=>{const E=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:D}=d;T|=u.patchFlag&16;const M=u.props||ce,L=d.props||ce;let H;g&&Lt(g,!1),(H=L.onVnodeBeforeUpdate)&&Qe(H,g,d,u),D&&Dt(d,u,g,"beforeUpdate"),g&&Lt(g,!0);const G=y&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,g,_,G,I):P||ne(u,d,E,null,g,_,G,I,!1),T>0){if(T&16)fe(E,d,M,L,g,_,y);else if(T&2&&M.class!==L.class&&i(E,"class",null,L.class,y),T&4&&i(E,"style",M.style,L.style,y),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const pe=oe[se],Ke=M[pe],tn=L[pe];(tn!==Ke||pe==="value")&&i(E,pe,Ke,tn,y,u.children,g,_,k)}}T&1&&u.children!==d.children&&f(E,d.children)}else!P&&w==null&&fe(E,d,M,L,g,_,y);((H=L.onVnodeUpdated)||D)&&Re(()=>{H&&Qe(H,g,d,u),D&&Dt(d,u,g,"updated")},_)},Y=(u,d,g,_,y,I,P)=>{for(let E=0;E<d.length;E++){const T=u[E],w=d[E],D=T.el&&(T.type===De||!jt(T,w)||T.shapeFlag&70)?h(T.el):g;S(T,w,D,null,_,y,I,P,!0)}},fe=(u,d,g,_,y,I,P)=>{if(g!==_){if(g!==ce)for(const E in g)!Es(E)&&!(E in _)&&i(u,E,g[E],null,P,d.children,y,I,k);for(const E in _){if(Es(E))continue;const T=_[E],w=g[E];T!==w&&E!=="value"&&i(u,E,w,T,P,d.children,y,I,k)}"value"in _&&i(u,"value",g.value,_.value)}},me=(u,d,g,_,y,I,P,E,T)=>{const w=d.el=u?u.el:a(""),D=d.anchor=u?u.anchor:a("");let{patchFlag:M,dynamicChildren:L,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(s(w,g,_),s(D,g,_),A(d.children,g,D,y,I,P,E,T)):M>0&&M&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,y,I,P,E),(d.key!=null||y&&d===y.subTree)&&rl(u,d,!0)):ne(u,d,g,D,y,I,P,E,T)},Oe=(u,d,g,_,y,I,P,E,T)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,g,_,P,T):Se(d,g,_,y,I,P,T):_e(u,d,T)},Se=(u,d,g,_,y,I,P)=>{const E=u.component=hf(u,_,y);if(Ys(u)&&(E.ctx.renderer=X),pf(E),E.asyncDep){if(y&&y.registerDep(E,he),!u.el){const T=E.subTree=ee(He);R(null,T,d,g)}return}he(E,u,d,g,y,I,P)},_e=(u,d,g)=>{const _=d.component=u.component;if(Iu(u,d,g))if(_.asyncDep&&!_.asyncResolved){ie(_,d,g);return}else _.next=d,_u(_.update),_.update();else d.el=u.el,_.vnode=d},he=(u,d,g,_,y,I,P)=>{const E=()=>{if(u.isMounted){let{next:D,bu:M,u:L,parent:H,vnode:G}=u,oe=D,se;Lt(u,!1),D?(D.el=G.el,ie(u,D,P)):D=G,M&&Is(M),(se=D.props&&D.props.onVnodeBeforeUpdate)&&Qe(se,H,D,G),Lt(u,!0);const pe=ur(u),Ke=u.subTree;u.subTree=pe,S(Ke,pe,h(Ke.el),C(Ke),u,y,I),D.el=pe.el,oe===null&&xu(u,pe.el),L&&Re(L,y),(se=D.props&&D.props.onVnodeUpdated)&&Re(()=>Qe(se,H,D,G),y)}else{let D;const{el:M,props:L}=d,{bm:H,m:G,parent:oe}=u,se=Dn(d);if(Lt(u,!1),H&&Is(H),!se&&(D=L&&L.onVnodeBeforeMount)&&Qe(D,oe,d),Lt(u,!0),M&&q){const pe=()=>{u.subTree=ur(u),q(M,u.subTree,u,y,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&pe()):pe()}else{const pe=u.subTree=ur(u);S(null,pe,g,_,u,y,I),d.el=pe.el}if(G&&Re(G,y),!se&&(D=L&&L.onVnodeMounted)){const pe=d;Re(()=>Qe(D,oe,pe),y)}(d.shapeFlag&256||oe&&Dn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Re(u.a,y),u.isMounted=!0,d=g=_=null}},T=u.effect=new ri(E,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Lt(u,!0),w()},ie=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Yu(u,d.props,_,g),Zu(u,d.children,g),In(),Yi(),xn()},ne=(u,d,g,_,y,I,P,E,T=!1)=>{const w=u&&u.children,D=u?u.shapeFlag:0,M=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Nt(w,M,g,_,y,I,P,E,T);return}else if(L&256){We(w,M,g,_,y,I,P,E,T);return}}H&8?(D&16&&k(w,y,I),M!==w&&f(g,M)):D&16?H&16?Nt(w,M,g,_,y,I,P,E,T):k(w,y,I,!0):(D&8&&f(g,""),H&16&&A(M,g,_,y,I,P,E,T))},We=(u,d,g,_,y,I,P,E,T)=>{u=u||an,d=d||an;const w=u.length,D=d.length,M=Math.min(w,D);let L;for(L=0;L<M;L++){const H=d[L]=T?_t(d[L]):Ze(d[L]);S(u[L],H,g,null,y,I,P,E,T)}w>D?k(u,y,I,!0,!1,M):A(d,g,_,y,I,P,E,T,M)},Nt=(u,d,g,_,y,I,P,E,T)=>{let w=0;const D=d.length;let M=u.length-1,L=D-1;for(;w<=M&&w<=L;){const H=u[w],G=d[w]=T?_t(d[w]):Ze(d[w]);if(jt(H,G))S(H,G,g,null,y,I,P,E,T);else break;w++}for(;w<=M&&w<=L;){const H=u[M],G=d[L]=T?_t(d[L]):Ze(d[L]);if(jt(H,G))S(H,G,g,null,y,I,P,E,T);else break;M--,L--}if(w>M){if(w<=L){const H=L+1,G=H<D?d[H].el:_;for(;w<=L;)S(null,d[w]=T?_t(d[w]):Ze(d[w]),g,G,y,I,P,E,T),w++}}else if(w>L)for(;w<=M;)ke(u[w],y,I,!0),w++;else{const H=w,G=w,oe=new Map;for(w=G;w<=L;w++){const Me=d[w]=T?_t(d[w]):Ze(d[w]);Me.key!=null&&oe.set(Me.key,w)}let se,pe=0;const Ke=L-G+1;let tn=!1,Fi=0;const Pn=new Array(Ke);for(w=0;w<Ke;w++)Pn[w]=0;for(w=H;w<=M;w++){const Me=u[w];if(pe>=Ke){ke(Me,y,I,!0);continue}let Xe;if(Me.key!=null)Xe=oe.get(Me.key);else for(se=G;se<=L;se++)if(Pn[se-G]===0&&jt(Me,d[se])){Xe=se;break}Xe===void 0?ke(Me,y,I,!0):(Pn[Xe-G]=w+1,Xe>=Fi?Fi=Xe:tn=!0,S(Me,d[Xe],g,null,y,I,P,E,T),pe++)}const Bi=tn?rf(Pn):an;for(se=Bi.length-1,w=Ke-1;w>=0;w--){const Me=G+w,Xe=d[Me],ji=Me+1<D?d[Me+1].el:_;Pn[w]===0?S(null,Xe,g,ji,y,I,P,E,T):tn&&(se<0||w!==Bi[se]?ze(Xe,g,ji,2):se--)}}},ze=(u,d,g,_,y=null)=>{const{el:I,type:P,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){P.move(u,d,g,X);return}if(P===De){s(I,d,g);for(let M=0;M<T.length;M++)ze(T[M],d,g,_);s(u.anchor,d,g);return}if(P===Ts){O(u,d,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,d,g),Re(()=>E.enter(I),y);else{const{leave:M,delayLeave:L,afterLeave:H}=E,G=()=>s(I,d,g),oe=()=>{M(I,()=>{G(),H&&H()})};L?L(I,G,oe):oe()}else s(I,d,g)},ke=(u,d,g,_=!1,y=!1)=>{const{type:I,props:P,ref:E,children:T,dynamicChildren:w,shapeFlag:D,patchFlag:M,dirs:L}=u;if(E!=null&&Ur(E,null,g,u,!0),D&256){d.ctx.deactivate(u);return}const H=D&1&&L,G=!Dn(u);let oe;if(G&&(oe=P&&P.onVnodeBeforeUnmount)&&Qe(oe,d,u),D&6)v(u.component,g,_);else{if(D&128){u.suspense.unmount(g,_);return}H&&Dt(u,null,d,"beforeUnmount"),D&64?u.type.remove(u,d,g,y,X,_):w&&(I!==De||M>0&&M&64)?k(w,d,g,!1,!0):(I===De&&M&384||!y&&D&16)&&k(T,d,g),_&&en(u)}(G&&(oe=P&&P.onVnodeUnmounted)||H)&&Re(()=>{oe&&Qe(oe,d,u),H&&Dt(u,null,d,"unmounted")},g)},en=u=>{const{type:d,el:g,anchor:_,transition:y}=u;if(d===De){hs(g,_);return}if(d===Ts){V(u);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:P,delayLeave:E}=y,T=()=>P(g,I);E?E(u.el,I,T):T()}else I()},hs=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},v=(u,d,g)=>{const{bum:_,scope:y,update:I,subTree:P,um:E}=u;_&&Is(_),y.stop(),I&&(I.active=!1,ke(P,u,d,g)),E&&Re(E,d),Re(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},k=(u,d,g,_=!1,y=!1,I=0)=>{for(let P=I;P<u.length;P++)ke(u[P],d,g,_,y)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,d,g)=>{u==null?d._vnode&&ke(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,g),Yi(),Da(),d._vnode=u},X={p:S,um:ke,m:ze,r:en,mt:Se,mc:A,pc:ne,pbc:Y,n:C,o:t};let ue,q;return e&&([ue,q]=e(X)),{render:N,hydrate:ue,createApp:tf(N,ue)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rl(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=_t(r[i]),a.el=o.el),n||rl(o,a)),a.type===Qs&&(a.el=o.el)}}function rf(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const of=t=>t.__isTeleport,De=Symbol(void 0),Qs=Symbol(void 0),He=Symbol(void 0),Ts=Symbol(void 0),Un=[];let Ge=null;function Ie(t=!1){Un.push(Ge=t?null:[])}function af(){Un.pop(),Ge=Un[Un.length-1]||null}let Gn=1;function oo(t){Gn+=t}function il(t){return t.dynamicChildren=Gn>0?Ge||an:null,af(),Gn>0&&Ge&&Ge.push(t),t}function $e(t,e,n,s,r,i){return il(m(t,e,n,s,r,i,!0))}function Zs(t,e,n,s,r){return il(ee(t,e,n,s,r,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function jt(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",ol=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||de(t)||$(t)?{i:ye,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ol(e),ref:e&&Ss(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ye};return a?(bi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Gn>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const ee=lf;function lf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ga)&&(t=He),Ds(t)){const a=At(t,e,!0);return n&&bi(a,n),Gn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(vf(t)&&(t=t.__vccOpts),e){e=cf(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=ss(a)),le(l)&&(Ca(l)&&!F(l)&&(l=xe({},l)),e.style=yt(l))}const o=ge(t)?1:Tu(t)?128:of(t)?64:le(t)?4:$(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function cf(t){return t?Ca(t)||er in t?xe({},t):t:null}function At(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?uf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ol(a),ref:e&&e.ref?n&&r?F(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&At(t.ssContent),ssFallback:t.ssFallback&&At(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function be(t=" ",e=0){return ee(Qs,null,t,e)}function _i(t,e){const n=ee(Ts,null,t);return n.staticCount=e,n}function Ls(t="",e=!1){return e?(Ie(),Zs(He,null,t)):ee(He,null,t)}function Ze(t){return t==null||typeof t=="boolean"?ee(He):F(t)?ee(De,null,t.slice()):typeof t=="object"?_t(t):ee(Qs,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:At(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(er in e)?e._ctx=ye:r===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),s&64?(n=16,e=[be(e)]):n=8);t.children=e,t.shapeFlag|=n}function uf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ss([e.class,s.class]));else if(r==="style")e.style=yt([e.style,s.style]);else if(Ws(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Qe(t,e,n,s=null){je(t,e,7,[n,s])}const ff=sl();let df=0;function hf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ff,i={uid:df++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Za(s,r),emitsOptions:Ua(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yu.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const al=()=>ve||ye,mn=t=>{ve=t,t.scope.on()},Kt=()=>{ve&&ve.scope.off(),ve=null};function ll(t){return t.vnode.shapeFlag&4}let Jn=!1;function pf(t,e=!1){Jn=e;const{props:n,children:s}=t.vnode,r=ll(t);Ju(t,n,r,e),Qu(t,s);const i=r?gf(t,e):void 0;return Jn=!1,i}function gf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gn(new Proxy(t.ctx,Vu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?_f(t):null;mn(t),In();const i=St(s,t,0,[t.props,r]);if(xn(),Kt(),fa(i)){if(i.then(Kt,Kt),e)return i.then(o=>{ao(t,o,e)}).catch(o=>{Gs(o,t,0)});t.asyncDep=i}else ao(t,i,e)}else cl(t,e)}function ao(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Aa(e)),cl(t,n)}let lo;function cl(t,e,n){const s=t.type;if(!t.render){if(!e&&lo&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=xe(xe({isCustomElement:i,delimiters:a},o),l);s.render=lo(r,c)}}t.render=s.render||Je}mn(t),In(),Wu(t),xn(),Kt()}function mf(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function _f(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=mf(t))},slots:t.slots,emit:t.emit,expose:e}}function tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Aa(gn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function bf(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function vf(t){return $(t)&&"__vccOpts"in t}const Le=(t,e)=>pu(t,e,Jn);function ul(t,e,n){const s=arguments.length;return s===2?le(e)&&!F(e)?Ds(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ds(n)&&(n=[n]),ee(t,e,n))}const yf=Symbol(""),wf=()=>tt(yf),Ef="3.2.45",If="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,co=Ht&&Ht.createElement("template"),xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ht.createElementNS(If,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{co.innerHTML=s?`<svg>${t}</svg>`:t;const a=co.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Tf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sf(t,e,n){const s=t.style,r=ge(n);if(n&&!r){for(const i in n)Fr(s,i,n[i]);if(e&&!ge(e))for(const i in e)n[i]==null&&Fr(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uo=/\s*!important$/;function Fr(t,e,n){if(F(n))n.forEach(s=>Fr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cf(t,e);uo.test(n)?t.setProperty(En(s),n.replace(uo,""),"important"):t[s]=n}}const fo=["Webkit","Moz","ms"],hr={};function Cf(t,e){const n=hr[e];if(n)return n;let s=rt(e);if(s!=="filter"&&s in t)return hr[e]=s;s=Ks(s);for(let r=0;r<fo.length;r++){const i=fo[r]+s;if(i in t)return hr[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Pf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=Ic(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kf(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ca(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function lt(t,e,n,s){t.addEventListener(e,n,s)}function Rf(t,e,n,s){t.removeEventListener(e,n,s)}function Af(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Of(e);if(s){const c=i[e]=Df(s,r);lt(t,a,c,l)}else o&&(Rf(t,a,o,l),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function Of(t){let e;if(po.test(t)){e={};let s;for(;s=t.match(po);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let pr=0;const Mf=Promise.resolve(),Nf=()=>pr||(Mf.then(()=>pr=0),pr=Date.now());function Df(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je(Lf(s,n.value),e,5,[s])};return n.value=t,n.attached=Nf(),n}function Lf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const go=/^on[a-z]/,Uf=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Tf(t,s,r):e==="style"?Sf(t,n,s):Ws(e)?ei(e)||Af(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ff(t,e,s,r))?kf(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pf(t,e,s,r))};function Ff(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&go.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||go.test(e)&&ge(n)?!1:e in t}const Bf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ru.props;const Ot=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Is(e,n):e};function jf(t){t.target.composing=!0}function mo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ct={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ot(r);const i=s||r.props&&r.props.type==="number";lt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wn(a)),t._assign(a)}),n&&lt(t,"change",()=>{t.value=t.value.trim()}),e||(lt(t,"compositionstart",jf),lt(t,"compositionend",mo),lt(t,"change",mo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ot(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Wn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Hf={deep:!0,created(t,e,n){t._assign=Ot(n),lt(t,"change",()=>{const s=t._modelValue,r=_n(t),i=t.checked,o=t._assign;if(F(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(wn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(fl(t,i))})},mounted:_o,beforeUpdate(t,e,n){t._assign=Ot(n),_o(t,e,n)}};function _o(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Zr(e,s.props.value)>-1:wn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Gt(e,fl(t,!0)))}const $f={created(t,{value:e},n){t.checked=Gt(e,n.props.value),t._assign=Ot(n),lt(t,"change",()=>{t._assign(_n(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ot(s),e!==n&&(t.checked=Gt(e,s.props.value))}},Vf={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=wn(e);lt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wn(_n(o)):_n(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ot(s)},mounted(t,{value:e}){bo(t,e)},beforeUpdate(t,e,n){t._assign=Ot(n)},updated(t,{value:e}){bo(t,e)}};function bo(t,e){const n=t.multiple;if(!(n&&!F(e)&&!wn(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=_n(i);if(n)F(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Gt(_n(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _n(t){return"_value"in t?t._value:t.value}function fl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Br={created(t,e,n){ys(t,e,n,null,"created")},mounted(t,e,n){ys(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){ys(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){ys(t,e,n,s,"updated")}};function Wf(t,e){switch(t){case"SELECT":return Vf;case"TEXTAREA":return Ct;default:switch(e){case"checkbox":return Hf;case"radio":return $f;default:return Ct}}}function ys(t,e,n,s,r){const o=Wf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const $t={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):kn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),kn(t,!0),s.enter(t)):s.leave(t,()=>{kn(t,!1)}):kn(t,e))},beforeUnmount(t,{value:e}){kn(t,e)}};function kn(t,e){t.style.display=e?t._vod:"none"}const zf=xe({patchProp:Uf},xf);let vo;function Kf(){return vo||(vo=nf(zf))}const qf=(...t)=>{const e=Kf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Gf(s);if(!r)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gf(t){return ge(t)?document.querySelector(t):t}var Jf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let dl;const nr=t=>dl=t,hl=Symbol();function jr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Fn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fn||(Fn={}));function Yf(){const t=ga(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=gn({install(i){nr(r),r._a=i,i.provide(hl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Jf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const pl=()=>{};function yo(t,e,n,s=pl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Mc()&&Nc(r),r}function nn(t,...e){t.slice().forEach(n=>{n(...e)})}function Hr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];jr(r)&&jr(s)&&t.hasOwnProperty(n)&&!de(s)&&!Tt(s)?t[n]=Hr(r,s):t[n]=s}return t}const Xf=Symbol();function Qf(t){return!jr(t)||!t.hasOwnProperty(Xf)}const{assign:bt}=Object;function Zf(t){return!!(de(t)&&t.effect)}function ed(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const f=uu(n.state.value[t]);return bt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=gn(Le(()=>{nr(n);const b=n._s.get(t);return o[p].call(b,b)})),h),{}))}return l=gl(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{bt(p,h)})},l}function gl(t,e,n={},s,r,i){let o;const a=bt({actions:{}},n),l={deep:!0};let c,f,h=gn([]),p=gn([]),b;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let S;function U(W){let A;c=f=!1,typeof W=="function"?(W(s.state.value[t]),A={type:Fn.patchFunction,storeId:t,events:b}):(Hr(s.state.value[t],W),A={type:Fn.patchObject,payload:W,storeId:t,events:b});const J=S=Symbol();di().then(()=>{S===J&&(c=!0)}),f=!0,nn(h,A,s.state.value[t])}const R=pl;function B(){o.stop(),h=[],p=[],s._s.delete(t)}function O(W,A){return function(){nr(s);const J=Array.from(arguments),Y=[],fe=[];function me(_e){Y.push(_e)}function Oe(_e){fe.push(_e)}nn(p,{args:J,name:W,store:K,after:me,onError:Oe});let Se;try{Se=A.apply(this&&this.$id===t?this:K,J)}catch(_e){throw nn(fe,_e),_e}return Se instanceof Promise?Se.then(_e=>(nn(Y,_e),_e)).catch(_e=>(nn(fe,_e),Promise.reject(_e))):(nn(Y,Se),Se)}}const V={_p:s,$id:t,$onAction:yo.bind(null,p),$patch:U,$reset:R,$subscribe(W,A={}){const J=yo(h,W,A.detached,()=>Y()),Y=o.run(()=>Nn(()=>s.state.value[t],fe=>{(A.flush==="sync"?f:c)&&W({storeId:t,type:Fn.direct,events:b},fe)},bt({},l,A)));return J},$dispose:B},K=Tn(V);s._s.set(t,K);const re=s._e.run(()=>(o=ga(),o.run(()=>e())));for(const W in re){const A=re[W];if(de(A)&&!Zf(A)||Tt(A))i||(x&&Qf(A)&&(de(A)?A.value=x[W]:Hr(A,x[W])),s.state.value[t][W]=A);else if(typeof A=="function"){const J=O(W,A);re[W]=J,a.actions[W]=A}}return bt(K,re),bt(Z(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:W=>{U(A=>{bt(A,W)})}}),s._p.forEach(W=>{bt(K,o.run(()=>W({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),c=!0,f=!0,K}function td(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=al();return a=a||c&&tt(hl,null),a&&nr(a),a=dl,a._s.has(s)||(i?gl(s,e,r,a):ed(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const ml=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ml(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const b=a<<4&240|c>>2;if(s.push(b),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sd=function(t){const e=ml(t);return _l.encodeByteArray(e,!0)},bl=function(t){return sd(t).replace(/\./g,"")},vl=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const id=()=>rd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},vi=()=>{try{return id()||od()||ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ld=t=>{var e,n;return(n=(e=vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cd=()=>{var t;return(t=vi())===null||t===void 0?void 0:t.config},yl=t=>{var e;return(e=vi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function dd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pd(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gd(){try{return typeof indexedDB=="object"}catch{return!1}}function md(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _d="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_d,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?bd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mt(r,a,s)}}function bd(t,e){return t.replace(vd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vd=/\{\$([^}]+)}/g;function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wo(i)&&wo(o)){if(!Us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wo(t){return t!==null&&typeof t=="object"}/**
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
 */function os(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function On(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wd(t,e){const n=new Ed(t,e);return n.subscribe.bind(n)}class Ed{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Id(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=gr),r.error===void 0&&(r.error=gr),r.complete===void 0&&(r.complete=gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Id(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gr(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ud;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sd(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Td(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Td(t){return t===Ft?void 0:t}function Sd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Pd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},kd=ae.INFO,Rd={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Rd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=kd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Od=(t,e)=>e.some(n=>t instanceof n);let Eo,Io;function Md(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nd(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,$r=new WeakMap,Il=new WeakMap,mr=new WeakMap,yi=new WeakMap;function Dd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&El.set(n,t)}).catch(()=>{}),yi.set(e,t),e}function Ld(t){if($r.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$r.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Il.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ud(t){Vr=t(Vr)}function Fd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return Il.set(s,e.sort?e.sort():[e]),Pt(s)}:Nd().includes(t)?function(...e){return t.apply(_r(this),e),Pt(El.get(this))}:function(...e){return Pt(t.apply(_r(this),e))}}function Bd(t){return typeof t=="function"?Fd(t):(t instanceof IDBTransaction&&Ld(t),Od(t,Md())?new Proxy(t,Vr):t)}function Pt(t){if(t instanceof IDBRequest)return Dd(t);if(mr.has(t))return mr.get(t);const e=Bd(t);return e!==t&&(mr.set(t,e),yi.set(e,t)),e}const _r=t=>yi.get(t);function jd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Hd=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],br=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$d.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Hd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return br.set(e,i),i}Ud(t=>({...t,get:(e,n,s)=>xo(e,n)||t.get(e,n,s),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
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
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",To="0.9.3";/**
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
 */const Yt=new wl("@firebase/app"),zd="@firebase/app-compat",Kd="@firebase/analytics-compat",qd="@firebase/analytics",Gd="@firebase/app-check-compat",Jd="@firebase/app-check",Yd="@firebase/auth",Xd="@firebase/auth-compat",Qd="@firebase/database",Zd="@firebase/database-compat",eh="@firebase/functions",th="@firebase/functions-compat",nh="@firebase/installations",sh="@firebase/installations-compat",rh="@firebase/messaging",ih="@firebase/messaging-compat",oh="@firebase/performance",ah="@firebase/performance-compat",lh="@firebase/remote-config",ch="@firebase/remote-config-compat",uh="@firebase/storage",fh="@firebase/storage-compat",dh="@firebase/firestore",hh="@firebase/firestore-compat",ph="firebase",gh="9.17.1";/**
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
 */const zr="[DEFAULT]",mh={[Wr]:"fire-core",[zd]:"fire-core-compat",[qd]:"fire-analytics",[Kd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Yd]:"fire-auth",[Xd]:"fire-auth-compat",[Qd]:"fire-rtdb",[Zd]:"fire-rtdb-compat",[eh]:"fire-fn",[th]:"fire-fn-compat",[nh]:"fire-iid",[sh]:"fire-iid-compat",[rh]:"fire-fcm",[ih]:"fire-fcm-compat",[oh]:"fire-perf",[ah]:"fire-perf-compat",[lh]:"fire-rc",[ch]:"fire-rc-compat",[uh]:"fire-gcs",[fh]:"fire-gcs-compat",[dh]:"fire-fst",[hh]:"fire-fst-compat","fire-js":"fire-js",[ph]:"fire-js-all"};/**
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
 */const Fs=new Map,Kr=new Map;function _h(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(Kr.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Kr.set(e,t);for(const n of Fs.values())_h(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const bh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new is("app","Firebase",bh);/**
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
 */class vh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=gh;function Tl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(n||(n=cd()),!n)throw kt.create("no-options");const i=Fs.get(r);if(i){if(Us(n,i.options)&&Us(s,i.config))return i;throw kt.create("duplicate-app",{appName:r})}const o=new Cd(r);for(const l of Kr.values())o.addComponent(l);const a=new vh(n,s,o);return Fs.set(r,a),a}function yh(t=zr){const e=Fs.get(t);if(!e&&t===zr)return Tl();if(!e)throw kt.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=mh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}Yn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wh="firebase-heartbeat-database",Eh=1,Xn="firebase-heartbeat-store";let vr=null;function Sl(){return vr||(vr=jd(wh,Eh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xn)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),vr}async function Ih(t){try{return(await Sl()).transaction(Xn).objectStore(Xn).get(Cl(t))}catch(e){if(e instanceof Mt)Yt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function So(t,e){try{const s=(await Sl()).transaction(Xn,"readwrite");return await s.objectStore(Xn).put(e,Cl(t)),s.done}catch(n){if(n instanceof Mt)Yt.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function Cl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xh=1024,Th=30*24*60*60*1e3;class Sh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Th}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ch(this._heartbeatsCache.heartbeats),r=bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Co(){return new Date().toISOString().substring(0,10)}function Ch(t,e=xh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Po(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gd()?md().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ih(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Po(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kh(t){Yn(new bn("platform-logger",e=>new Vd(e),"PRIVATE")),Yn(new bn("heartbeat",e=>new Sh(e),"PRIVATE")),fn(Wr,To,t),fn(Wr,To,"esm2017"),fn("fire-js","")}kh("");var Rh="firebase",Ah="9.17.1";/**
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
 */fn(Rh,Ah,"app");function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=Pl,kl=new is("auth","Firebase",Pl());/**
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
 */const ko=new wl("@firebase/auth");function Cs(t,...e){ko.logLevel<=ae.ERROR&&ko.error(`Auth (${sr}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw Ei(t,...e)}function nt(t,...e){return Ei(t,...e)}function Rl(t,e,n){const s=Object.assign(Object.assign({},Oh()),{[e]:n});return new is("auth","Firebase",s).create(e,{appName:t.name})}function Mh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ei(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kl.create(t,...e)}function j(t,e,...n){if(!t)throw Ei(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cs(e),new Error(e)}function dt(t,e){t||ct(e)}/**
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
 */const Ro=new Map;function ut(t){dt(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
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
 */function Nh(t,e){const n=xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Us(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Dh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function qr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lh(){return Ao()==="http:"||Ao()==="https:"}function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Uh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lh()||dd()||"connection"in navigator)?navigator.onLine:!0}function Fh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class as{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=fd()||hd()}get(){return Uh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ii(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Al{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jh=new as(3e4,6e4);function ls(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cs(t,e,n,s,r={}){return Ol(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=os(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Ml(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ol(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bh),e);try{const r=new Hh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ws(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rl(t,f,c);Ve(t,f)}}catch(r){if(r instanceof Mt)throw r;Ve(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await cs(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ml(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ii(t.config,r):`${t.config.apiScheme}://${r}`}class Hh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),jh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function $h(t,e){return cs(t,"POST","/v1/accounts:delete",e)}async function Vh(t,e){return cs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const n=Zt(t),s=await n.getIdToken(e),r=xi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Bn(yr(r.auth_time)),issuedAtTime:Bn(yr(r.iat)),expirationTime:Bn(yr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yr(t){return Number(t)*1e3}function xi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=vl(n);return r?JSON.parse(r):(Cs("Failed to decode base64 JWT payload"),null)}catch(r){return Cs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zh(t){const e=xi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&Kh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Qn(t,Vh(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],a=Jh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Gh(t){const e=Zt(t);await Bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Yh(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xh(t,e){const n=await Ol(t,{},async()=>{const s=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ml(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zn;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function gt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qn(this,$h(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:V,isAnonymous:K,providerData:re,stsTokenManager:W}=n;j(O&&W,e,"internal-error");const A=Zn.fromJSON(this.name,W);j(typeof O=="string",e,"internal-error"),gt(h,e.name),gt(p,e.name),j(typeof V=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),gt(b,e.name),gt(x,e.name),gt(S,e.name),gt(U,e.name),gt(R,e.name),gt(B,e.name);const J=new qt({uid:O,auth:e,email:p,emailVerified:V,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:S,stsTokenManager:A,createdAt:R,lastLoginAt:B});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zn;r.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Bs(i),i}}/**
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
 */class Dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dl.type="NONE";const Oo=Dl;/**
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
 */function Ps(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ps(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ps("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new dn(ut(Oo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ut(Oo);const o=Ps(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const h=qt._fromJSON(e,f);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new dn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new dn(i,e,s))}}/**
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
 */function Mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jl(e))return"Blackberry";if(Hl(e))return"Webos";if(Ti(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if(Bl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ll(t=Te()){return/firefox\//i.test(t)}function Ti(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(t=Te()){return/crios\//i.test(t)}function Fl(t=Te()){return/iemobile/i.test(t)}function Bl(t=Te()){return/android/i.test(t)}function jl(t=Te()){return/blackberry/i.test(t)}function Hl(t=Te()){return/webos/i.test(t)}function rr(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qh(t=Te()){var e;return rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zh(){return pd()&&document.documentMode===10}function $l(t=Te()){return rr(t)||Bl(t)||Hl(t)||jl(t)||/windows phone/i.test(t)||Fl(t)}function ep(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vl(t,e=[]){let n;switch(t){case"Browser":n=Mo(Te());break;case"Worker":n=`${Mo(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${s}`}/**
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
 */class tp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class np{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Zt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Sn(t){return Zt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sp(t,e,n){const s=Sn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wl(e),{host:o,port:a}=rp(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ip()}function Wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rp(t){const e=Wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Do(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ip(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function op(t,e){return cs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ap(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",ls(t,e))}/**
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
 */async function lp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",ls(t,e))}async function cp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",ls(t,e))}/**
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
 */class es extends Si{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new es(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ap(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return op(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hn(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",ls(t,e))}/**
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
 */const up="http://localhost";class Xt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:up,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=os(n)}return e}}/**
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
 */function fp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dp(t){const e=On(Mn(t)).link,n=e?On(Mn(e)).deep_link_id:null,s=On(Mn(t)).deep_link_id;return(s?On(Mn(s)).link:null)||s||n||e||t}class Ci{constructor(e){var n,s,r,i,o,a;const l=On(Mn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,h=fp((r=l.mode)!==null&&r!==void 0?r:null);j(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dp(e);try{return new Ci(n)}catch{return null}}}/**
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
 */class Cn{constructor(){this.providerId=Cn.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ci.parseLink(n);return j(s,"argument-error"),es._fromEmailAndCode(e,s.code,s.tenantId)}}Cn.PROVIDER_ID="password";Cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends fs{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class Pe extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Pe.credential(n,s)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
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
 */class Et extends fs{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends fs{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function hp(t,e){return us(t,"POST","/v1/accounts:signUp",ls(t,e))}/**
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
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),o=Lo(s);return new Qt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new Qt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class js extends Mt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,js.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new js(e,n,s,r)}}function zl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?js._fromErrorAndOperation(t,i,e,s):i})}async function pp(t,e,n=!1){const s=await Qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",s)}/**
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
 */async function gp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Qn(t,zl(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=xi(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Qt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
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
 */async function Kl(t,e,n=!1){const s="signIn",r=await zl(t,s,e),i=await Qt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mp(t,e){return Kl(Sn(t),e)}async function _p(t,e,n){const s=Sn(t),r=await hp(s,{returnSecureToken:!0,email:e,password:n}),i=await Qt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function bp(t,e,n){return mp(Zt(t),Cn.credential(e,n))}function vp(t,e,n,s){return Zt(t).onIdTokenChanged(e,n,s)}function yp(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Hs="__sak";/**
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
 */class ql{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wp(){const t=Te();return Ti(t)||rr(t)}const Ep=1e3,Ip=10;class Gl extends ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wp()&&ep(),this.fallbackToPolling=$l(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ip):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const xp=Gl;/**
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
 */class Jl extends ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jl.type="SESSION";const Yl=Jl;/**
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
 */function Tp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ir(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Tp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
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
 */function ki(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=ki("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function Cp(t){st().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Xl(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Pp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rp(){return Xl()?self:null}/**
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
 */const Ql="firebaseLocalStorageDb",Ap=1,$s="firebaseLocalStorage",Zl="fbase_key";class ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function or(t,e){return t.transaction([$s],e?"readwrite":"readonly").objectStore($s)}function Op(){const t=indexedDB.deleteDatabase(Ql);return new ds(t).toPromise()}function Gr(){const t=indexedDB.open(Ql,Ap);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($s,{keyPath:Zl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($s)?e(s):(s.close(),await Op(),e(await Gr()))})})}async function Uo(t,e,n){const s=or(t,!0).put({[Zl]:e,value:n});return new ds(s).toPromise()}async function Mp(t,e){const n=or(t,!1).get(e),s=await new ds(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=or(t,!0).delete(e);return new ds(n).toPromise()}const Np=800,Dp=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Dp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Rp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pp(),!this.activeServiceWorker)return;this.sender=new Sp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gr();return await Uo(e,Hs,"1"),await Fo(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Mp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=or(r,!1).getAll();return new ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Np)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const Lp=ec;/**
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
 */function Up(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Up().appendChild(s)})}function Bp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new as(3e4,6e4);/**
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
 */function tc(t,e){return e?ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ri extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jp(t){return Kl(t.auth,new Ri(t),t.bypassAuthState)}function Hp(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),gp(n,new Ri(t),t.bypassAuthState)}async function $p(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),pp(n,new Ri(t),t.bypassAuthState)}/**
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
 */class nc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jp;case"linkViaPopup":case"linkViaRedirect":return $p;case"reauthViaPopup":case"reauthViaRedirect":return Hp;default:Ve(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vp=new as(2e3,1e4);async function sc(t,e,n){const s=Sn(t);Mh(t,e,Pi);const r=tc(s,n);return new Wt(s,"signInViaPopup",e,r).executeNotNull()}class Wt extends nc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vp.get())};e()}}Wt.currentPopupAction=null;/**
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
 */const Wp="pendingRedirect",ks=new Map;class zp extends nc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ks.get(this.auth._key());if(!e){try{const s=await Kp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ks.set(this.auth._key(),e)}return this.bypassAuthState||ks.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kp(t,e){const n=Jp(e),s=Gp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function qp(t,e){ks.set(t._key(),e)}function Gp(t){return ut(t._redirectPersistence)}function Jp(t){return Ps(Wp,t.config.apiKey,t.name)}async function Yp(t,e,n=!1){const s=Sn(t),r=tc(s,e),o=await new zp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Xp=10*60*1e3;class Qp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rc(t);default:return!1}}/**
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
 */async function eg(t,e={}){return cs(t,"GET","/v1/projects",e)}/**
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
 */const tg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ng=/^https?/;async function sg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eg(t);for(const n of e)try{if(rg(n))return}catch{}Ve(t,"unauthorized-domain")}function rg(t){const e=qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ng.test(n))return!1;if(tg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ig=new as(3e4,6e4);function jo(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function og(t){return new Promise((e,n)=>{var s,r,i;function o(){jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jo(),n(nt(t,"network-request-failed"))},timeout:ig.get()})}if(!((r=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=Bp("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function ag(t){return Rs=Rs||og(t),Rs}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lg=new as(5e3,15e3),cg="__/auth/iframe",ug="emulator/auth/iframe",fg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hg(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ii(e,ug):`https://${t.config.authDomain}/${cg}`,s={apiKey:e.apiKey,appName:t.name,v:sr},r=dg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${os(s).slice(1)}`}async function pg(t){const e=await ag(t),n=st().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:hg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},lg.get());function l(){st().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mg=500,_g=600,bg="_blank",vg="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(t,e,n,s=mg,r=_g){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gg),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Te().toLowerCase();n&&(a=Ul(c)?bg:n),Ll(c)&&(e=e||vg,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(Qh(c)&&a!=="_self")return wg(e||"",a),new Ho(null);const h=window.open(e||"",a,f);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Ho(h)}function wg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Eg="__/auth/handler",Ig="emulator/auth/handler";function $o(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:sr,eventId:r};if(e instanceof Pi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${xg(t)}?${os(a).slice(1)}`}function xg({config:t}){return t.emulator?Ii(t,Ig):`https://${t.authDomain}/${Eg}`}/**
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
 */const wr="webStorageSupport";class Tg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yl,this._completeRedirectFn=Yp,this._overrideRedirectResult=qp}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=$o(e,n,s,qr(),r);return yg(e,o,ki())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Cp($o(e,n,s,qr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pg(e),s=new Qp(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wr,{type:wr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $l()||Ti()||rr()}}const Sg=Tg;var Vo="@firebase/auth",Wo="0.21.3";/**
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
 */class Cg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kg(t){Yn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vl(t)},f=new np(a,l,c);return Dh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new bn("auth-internal",e=>{const n=Sn(e.getProvider("auth").getImmediate());return(s=>new Cg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Vo,Wo,Pg(t)),fn(Vo,Wo,"esm2017")}/**
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
 */const Rg=5*60,Ag=yl("authIdTokenMaxAge")||Rg;let zo=null;const Og=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ag)return;const r=n==null?void 0:n.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ts(t=yh()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nh(t,{popupRedirectResolver:Sg,persistence:[Lp,xp,Yl]}),s=yl("authTokenSyncURL");if(s){const i=Og(s);yp(n,i,()=>i(n.currentUser)),vp(n,o=>i(o))}const r=ld("auth");return r&&sp(n,`http://${r}`),n}kg("Browser");const Be=td("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",lang:"ru",langProp:{}})}),Ai="/assets/Telegram-c178456d.svg",Oi="/assets/WhatsApp-64705ce5.svg",Mi="/assets/Instagram-d32ffc78.svg",it=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Mg={props:{buttonName:String},data:()=>({contact:!1,store:Be()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},Ng={class:"grid overflow-scroll [&_*]:font-roboto"},Dg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1"},Lg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Ug=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Fg={class:"grid grid-cols-2"},Bg={class:"text-3xl mb-[5px] font-semibold font-roboto"},jg={class:"text-2xl font-roboto"},Hg={class:"text-2xl mb-[20px] font-roboto"},$g={class:"text-3xl mb-[5px] font-roboto font-semibold"},Vg=m("p",{class:"text-2xl mb-[20px] font-roboto"},"+996779454233",-1),Wg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},zg={class:"text-3xl font-roboto font-semibold"},Kg=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+Ai+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+Oi+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Mi+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div>',3),qg=m("div",null,[m("p",{class:"text-3xl mb-[5px] font-roboto font-semibold"},"E-mail:"),m("p",{class:"text-2xl font-roboto"},"crafthoneykg@gmail.com")],-1);function Gg(t,e,n,s,r,i){return Ie(),$e("div",Ng,[m("div",Dg,[m("span",Lg,z(t.store.langProp[t.store.lang].contacts),1),Ug,m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},z(t.store.langProp[t.store.lang].feedback),1)]),m("div",Fg,[m("div",null,[m("p",Bg,z(t.store.langProp[t.store.lang].address),1),m("p",jg,"770033, "+z(t.store.langProp[t.store.lang].kyrgyzstan),1),m("p",Hg,z(t.store.langProp[t.store.lang].street),1)]),m("div",null,[m("p",$g,z(t.store.langProp[t.store.lang].telephone),1),Vg]),m("div",Wg,[m("p",zg,z(t.store.langProp[t.store.lang].socialNetworks),1),Kg]),qg])])}const ic=it(Mg,[["render",Gg]]),Jg="/assets/drawing-9a7198cf.svg",Yg="/assets/CraftHoney-0d412893.svg",Xg="/assets/menu-694c5a76.svg",Qg="/assets/account_circle-229cba33.svg",Zg="/assets/shopping_cart-809c2612.svg",em="/assets/Register_1-5c661edd.svg",tm="/assets/Enter_1-7f28cdb9.svg",nm={data(){return{burgerMenu:!1,store:Be()}},components:{Contacts:ic},mounted(){console.log(this.$route)}},sm={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},rm={class:"grid grid-flow-col gap-[40px] items-center"},im=m("img",{class:"self-center w-[60px] inline",src:Jg},null,-1),om=m("img",{class:"ml-[10px] self-center w-[120px] inline",src:Yg},null,-1),am={key:0,class:"text-xl [&>a]:mr-[30px] max-[1200px]:hidden"},lm={class:"grid min-[1201px]:hidden"},cm={class:"grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden"},um={class:"flex items-center"},fm=m("img",{class:"mr-[10px] w-[24px]",src:Qg},null,-1),dm={class:""},hm=m("img",{class:"w-[22px] max-[800px]:hidden",src:Zg,alt:""},null,-1),pm={class:"text-xl"},gm={class:"ml-[8px] hover:cursor-pointer px-1",name:"lang",id:""},mm={selected:"",disabled:"",hidden:""},_m=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Mi+'" alt=""></a></div>',1),bm={class:""},vm={class:"flex flex-col justify-center [&>*]:px-[10px]"},ym=m("strong",null,"X",-1),wm=[ym],Em={class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},Im=m("img",{class:"w-[24px] h-24[px] mr-[10px]",src:em,alt:""},null,-1),xm=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:tm,alt:""},null,-1),Tm=_i('<div class="my-[20px] px-[10px]"><div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a></div></div><p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Mi+'" alt=""></a></div>',1);function Sm(t,e,n,s,r,i){const o=Jt("router-link");return Ie(),$e("header",sm,[m("div",rm,[m("div",null,[ee(o,{class:"flex max-w-fit",to:"home"},{default:Ae(()=>[im,om]),_:1})]),t.$route.name!="Home"?(Ie(),$e("div",am,[ee(o,{to:"Products"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),ee(o,{to:"about"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].about),1)]),_:1}),ee(o,{to:"Blog"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=a=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},z(r.store.langProp[r.store.lang].contacts),1)])):Ls("",!0)]),m("div",lm,[m("img",{onClick:e[1]||(e[1]=a=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:Xg})]),m("div",cm,[m("div",um,[fm,m("button",{class:"text-xl text-center",onClick:e[2]||(e[2]=a=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},z(r.store.langProp[r.store.lang].entrance),1)]),m("div",dm,[ee(o,{to:"Checkout"},{default:Ae(()=>[hm]),_:1})]),m("div",null,[m("p",pm,[be(z(r.store.langProp[r.store.lang].lang)+": ",1),m("select",gm,[m("option",mm,z(r.store.lang),1),m("option",{onClick:e[3]||(e[3]=a=>r.store.lang="rus"),value:""},"RUS"),m("option",{onClick:e[4]||(e[4]=a=>r.store.lang="en"),value:""},"ENG"),m("option",{onClick:e[5]||(e[5]=a=>r.store.lang="kyr"),value:""},"KYR")])])]),_m]),m("div",{class:ss(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[m("div",bm,[m("div",vm,[m("button",{onClick:e[6]||(e[6]=a=>r.burgerMenu=!1),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right"},wm),ee(o,{to:"Products",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ae(()=>[be("Каталог")]),_:1}),ee(o,{to:"about",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ae(()=>[be("О нас")]),_:1}),ee(o,{to:"Blog",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ae(()=>[be("Блог")]),_:1}),m("button",{onClick:e[7]||(e[7]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},"Контакты")]),m("div",Em,[m("button",{onClick:e[8]||(e[8]=a=>(r.store.bg="bg-bee",r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[Im,be("Регистрация")]),m("button",{onClick:e[9]||(e[9]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[xm,be("Вход")])]),Tm])],2)])}const Cm=it(nm,[["render",Sm]]),Pm={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",store:Be()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail=""}}},km={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},Rm={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},Am=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Om={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Mm={class:"text-3xl justify-self-center font-roboto"},Nm=["placeholder"],Dm={class:"grid grid-cols-2 gap-[20px]"},Lm=["placeholder"],Um=m("textarea",{class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,-1),Fm={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},Bm={class:"bg-[#EAAD02] text-white rounded-[5px]"};function jm(t,e,n,s,r,i){return Ie(),$e("div",km,[m("div",Rm,[m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},z(t.store.langProp[t.store.lang].contacts),1),Am,m("span",Om,z(t.store.langProp[t.store.lang].feedback),1)]),m("h2",Mm,z(t.store.langProp[t.store.lang].contactUs),1),we(m("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValueName=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp[t.store.lang].yourName},null,8,Nm),[[Ct,t.inputValueName]]),m("div",Dm,[we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.inputValueMail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[Ct,t.inputValueMail]]),we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.inputValuePhone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:t.store.langProp[t.store.lang].telephone_1},null,8,Lm),[[Ct,t.inputValuePhone]])]),Um,m("div",Fm,[m("button",Bm,z(t.store.langProp[t.store.lang].send),1),m("button",{onClick:e[4]||(e[4]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},z(t.store.langProp[t.store.lang].reset),1)])])}const oc=it(Pm,[["render",jm]]),Hm="/assets/call-65c88a38.svg",$m={data(){return{store:Be()}},components:{Feedback:oc}},Vm={class:"bg-white flex justify-center my-[1vh] w-full"},Wm={class:"self-center"},zm=m("img",{class:"inline ml-2",src:Hm},null,-1);function Km(t,e,n,s,r,i){return Ie(),$e("footer",Vm,[m("div",Wm,[m("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),zm])])}const qm=it($m,[["render",Km]]),Gm="/assets/Vector-9ca58fbf.svg",Ni="/assets/visibility_on-0c36d6bb.svg",Di="/assets/visibility_off-e6686e60.svg",Jm={props:{buttonName:String},data(){return{email:"",password:"",store:Be(),showPassword:!1}},methods:{loginGoogle(){const t=ts(),e=new Pe;sc(t,e).then(n=>{Pe.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Pe.credentialFromError(n)})},async login(){const t=ts();bp(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword}}},Ym={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},Xm={class:"grid auto-rows-min gap-[20px]"},Qm={class:"text-[30px] flex justify-center"},Zm={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},e_=m("span",{class:"mx-2"},"|",-1),t_=m("img",{class:"mr-[8px]",src:Gm},null,-1),n_=["placeholder"],s_={class:"relative"},r_=["type","placeholder"],i_={src:Ni,alt:""},o_={src:Di,alt:""},a_=["disabled"],l_={class:"text-center"};function c_(t,e,n,s,r,i){const o=Jt("router-link");return Ie(),$e("div",Ym,[m("div",Xm,[m("div",Qm,[m("span",Zm,z(r.store.langProp[r.store.lang].entrance),1),e_,m("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},z(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[t_,be(z(r.store.langProp[r.store.lang].loginWithGoogle),1)]),we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,n_),[[Ct,r.email]]),m("div",s_,[we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].enterPassword},null,8,r_),[[Br,r.password]]),m("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",i_,null,512),[[$t,r.showPassword]]),we(m("img",o_,null,512),[[$t,!r.showPassword]])])]),ee(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].forgotYourPassword),1)]),_:1}),m("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},z(r.store.langProp[r.store.lang].toComeIn),9,a_),m("p",l_,[be(z(r.store.langProp[r.store.lang].dontHaveAnAccountYet),1),m("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},z(r.store.langProp[r.store.lang].create),1)])])])}const u_=it(Jm,[["render",c_]]),f_="/assets/Vector-9ca58fbf.svg",d_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:Be()}},methods:{loginGoogle(){const t=ts(),e=new Pe;sc(t,e).then(n=>{Pe.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Pe.credentialFromError(n)})},async register(){const t=ts();_p(t,this.email,this.password).then(e=>{e.user,this.store.comp="Login"}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},h_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},p_={class:"grid auto-rows-min gap-[20px]"},g_={class:"text-[30px] h-[45px] flex justify-center"},m_=m("span",{class:"mx-2"},"|",-1),__={class:"bg-gray-300 rounded-[10px] px-2 text-black"},b_=m("img",{class:"mr-[8px]",src:f_},null,-1),v_=["placeholder"],y_=["placeholder"],w_={class:"relative"},E_=["type","placeholder"],I_={src:Ni,alt:""},x_={src:Di,alt:""},T_={class:"relative"},S_=["type","placeholder"],C_={src:Ni,alt:""},P_={src:Di,alt:""},k_={key:0,class:"text-red-500 font-roboto leading-[2px]"},R_=["disabled"],A_={class:"text-center"};function O_(t,e,n,s,r,i){return Ie(),$e("div",h_,[m("div",p_,[m("div",g_,[m("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},z(r.store.langProp[r.store.lang].entrance),1),m_,m("span",__,z(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[b_,be(" "+z(r.store.langProp[r.store.lang].loginWithGoogle),1)]),we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp[r.store.lang].username},null,8,v_),[[Ct,r.name]]),we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,y_),[[Ct,r.email]]),m("div",w_,[we(m("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].password},null,40,E_),[[Br,r.password]]),m("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",I_,null,512),[[$t,r.showPassword]]),we(m("img",x_,null,512),[[$t,!r.showPassword]])])]),m("div",T_,[we(m("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].confirmThePassword},null,8,S_),[[Br,r.password2]]),m("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",C_,null,512),[[$t,r.showPassword]]),we(m("img",P_,null,512),[[$t,!r.showPassword]])])]),r.password2!=r.password?(Ie(),$e("div",k_,z(r.store.langProp[r.store.lang].passwordMismatch),1)):Ls("",!0),we(m("div",{class:"text-red-500 font-roboto leading-[2px]"},z(r.store.langProp[r.store.lang].minimumNumberOfSymbols)+" - "+z(r.MinLength),513),[[$t,r.passwordMinLength&&r.password.length<=5]]),m("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},z(r.store.langProp[r.store.lang].toComeIn),9,R_),m("p",A_,[be(z(r.store.langProp[r.store.lang].doYouAlreadyHaveAnAccount),1),m("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},z(r.store.langProp[r.store.lang].toComeIn),1)])])])}const M_=it(d_,[["render",O_]]),N_={data(){return{store:Be()}},components:{Contacts:ic,Feedback:oc,Login:u_,Register:M_}},D_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},L_={class:"p-2 text-right"},U_=m("strong",null,"X",-1),F_=[U_];function B_(t,e,n,s,r,i){return r.store.modal?(Ie(),$e("div",D_,[r.store.modal?(Ie(),$e("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Ls("",!0),m("div",{class:ss([r.store.bg,"max-h-screen overflow-scroll bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[m("div",L_,[m("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},F_)]),(Ie(),Zs(Hu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):Ls("",!0)}const j_=it(N_,[["render",B_]]),H_={components:{Header:Cm,Footer:qm,LayoutModal:j_}},$_={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"};function V_(t,e,n,s,r,i){const o=Jt("LayoutModal"),a=Jt("Header");return Ie(),$e(De,null,[ee(o),m("div",$_,[ee(a),$u(t.$slots,"default")])],64)}const W_=it(H_,[["render",V_]]),z_={};function K_(t,e){const n=Jt("RouterView");return Ie(),Zs(n)}const q_=it(z_,[["render",K_]]),G_="modulepreload",J_=function(t){return"/"+t},Ko={},sn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=J_(i),i in Ko)return;Ko[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":G_,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function Y_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Er(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ye(r)?r.map(t):t(r)}return n}const jn=()=>{},Ye=Array.isArray,X_=/\/$/,Q_=t=>t.replace(X_,"");function Ir(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=nb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Z_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&vn(e.matched[s],n.matched[r])&&ac(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ac(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tb(t[n],e[n]))return!1;return!0}function tb(t,e){return Ye(t)?Go(t,e):Ye(e)?Go(e,t):t===e}function Go(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function nb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ns;(function(t){t.pop="pop",t.push="push"})(ns||(ns={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function sb(t){if(!t)if(on){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q_(t)}const rb=/^[^#]+#/;function ib(t,e){return t.replace(rb,"#")+e}function ob(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function ab(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ob(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jo(t,e){return(history.state?history.state.position-e:-1)+t}const Jr=new Map;function lb(t,e){Jr.set(t,e)}function cb(t){const e=Jr.get(t);return Jr.delete(t),e}let ub=()=>location.protocol+"//"+location.host;function lc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qo(l,"")}return qo(n,t)+s+r}function fb(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const b=lc(t,location),x=n.value,S=e.value;let U=0;if(p){if(n.value=b,e.value=p,o&&o===x){o=null;return}U=S?p.position-S.position:0}else s(b);r.forEach(R=>{R(n.value,x,{delta:U,type:ns.pop,direction:U?U>0?Hn.forward:Hn.back:Hn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:ar()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:h}}function Yo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ar():null}}function db(t){const{history:e,location:n}=window,s={value:lc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:ub()+t+l;try{e[f?"replaceState":"pushState"](c,"",p),r.value=c}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(l,c){const f=te({},e.state,Yo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,f,!0),s.value=l}function a(l,c){const f=te({},r.value,e.state,{forward:l,scroll:ar()});i(f.current,f,!0);const h=te({},Yo(s.value,l,null),{position:f.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function hb(t){t=sb(t);const e=db(t),n=fb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=te({location:"",base:t,go:s,createHref:ib.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pb(t){return typeof t=="string"||t&&typeof t=="object"}function cc(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uc=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function yn(t,e){return te(new Error,{type:t,[uc]:!0},e)}function ot(t,e){return t instanceof Error&&uc in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",gb={sensitive:!1,strict:!1,start:!0,end:!0},mb=/[.+*?^${}()[\]/\\]/g;function _b(t,e){const n=te({},gb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(mb,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:S,optional:U,regexp:R}=p;i.push({name:x,repeatable:S,optional:U});const B=R||Qo;if(B!==Qo){b+=10;try{new RegExp(`(${B})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+V.message)}}let O=S?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),S&&(b+=-20),B===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",x=i[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function l(c){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:x,repeatable:S,optional:U}=b,R=x in c?c[x]:"";if(Ye(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Ye(R)?R.join("/"):R;if(!B)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=B}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function bb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=bb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zo(s))return 1;if(Zo(r))return-1}return r.length-s.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yb={type:0,value:""},wb=/[a-zA-Z0-9_]/;function Eb(t){if(!t)return[[]];if(t==="/")return[[yb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",f="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:wb.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Ib(t,e,n){const s=_b(Eb(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xb(t,e){const n=[],s=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const b=!p,x=Tb(f);x.aliasOf=p&&p.record;const S=na(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of O)U.push(te({},x,{components:p?p.record.components:x.components,path:V,aliasOf:p?p.record:x}))}let R,B;for(const O of U){const{path:V}=O;if(h&&V[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(V&&re+V)}if(R=Ib(O,h,S),p?p.alias.push(R):(B=B||R,B!==R&&B.alias.push(R),b&&f.name&&!ta(R)&&o(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)i(K[re],R,p&&p.children[re])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return B?()=>{o(B)}:jn}function o(f){if(cc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){let h=0;for(;h<n.length&&vb(f,n[h])>=0&&(f.record.path!==n[h].record.path||!fc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ta(f)&&s.set(f.record.name,f)}function c(f,h){let p,b={},x,S;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw yn(1,{location:f});S=p.record.name,b=te(ea(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),f.params&&ea(f.params,p.keys.map(B=>B.name))),x=p.stringify(b)}else if("path"in f)x=f.path,p=n.find(B=>B.re.test(x)),p&&(b=p.parse(x),S=p.record.name);else{if(p=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw yn(1,{location:f,currentLocation:h});S=p.record.name,b=te({},h.params,f.params),x=p.stringify(b)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:S,path:x,params:b,matched:U,meta:Cb(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ea(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Tb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Sb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Sb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Cb(t){return t.reduce((e,n)=>te(e,n.meta),{})}function na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fc(t,e){return e.children.some(n=>n===t||fc(t,n))}const dc=/#/g,Pb=/&/g,kb=/\//g,Rb=/=/g,Ab=/\?/g,hc=/\+/g,Ob=/%5B/g,Mb=/%5D/g,pc=/%5E/g,Nb=/%60/g,gc=/%7B/g,Db=/%7C/g,mc=/%7D/g,Lb=/%20/g;function Li(t){return encodeURI(""+t).replace(Db,"|").replace(Ob,"[").replace(Mb,"]")}function Ub(t){return Li(t).replace(gc,"{").replace(mc,"}").replace(pc,"^")}function Yr(t){return Li(t).replace(hc,"%2B").replace(Lb,"+").replace(dc,"%23").replace(Pb,"%26").replace(Nb,"`").replace(gc,"{").replace(mc,"}").replace(pc,"^")}function Fb(t){return Yr(t).replace(Rb,"%3D")}function Bb(t){return Li(t).replace(dc,"%23").replace(Ab,"%3F")}function jb(t){return t==null?"":Bb(t).replace(kb,"%2F")}function Vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Hb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(hc," "),o=i.indexOf("="),a=Vs(o<0?i:i.slice(0,o)),l=o<0?null:Vs(i.slice(o+1));if(a in e){let c=e[a];Ye(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=Fb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(i=>i&&Yr(i)):[s&&Yr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $b(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Vb=Symbol(""),ra=Symbol(""),Ui=Symbol(""),_c=Symbol(""),Xr=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(yn(4,{from:n,to:e})):h instanceof Error?a(h):pb(h)?a(yn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(c);t.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function xr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wb(a)){const c=(a.__vccOpts||a)[e];c&&r.push(vt(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Y_(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&vt(p,n,s,i,o)()}))}}return r}function Wb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=tt(Ui),n=tt(_c),s=Le(()=>e.resolve(cn(t.to))),r=Le(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(vn.bind(null,f));if(p>-1)return p;const b=oa(l[c-2]);return c>1&&oa(f)===b&&h[h.length-1].path!==b?h.findIndex(vn.bind(null,l[c-2])):p}),i=Le(()=>r.value>-1&&Gb(n.params,s.value.params)),o=Le(()=>r.value>-1&&r.value===n.matched.length-1&&ac(n.params,s.value.params));function a(l={}){return qb(l)?e[cn(t.replace)?"replace":"push"](cn(t.to)).catch(jn):Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const zb=Va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=Tn(ia(t)),{options:s}=tt(Ui),r=Le(()=>({[aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Kb=zb;function qb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ye(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,Jb=Va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=tt(Xr),r=Le(()=>t.route||s.value),i=tt(ra,0),o=Le(()=>{let c=cn(i);const{matched:f}=r.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),a=Le(()=>r.value.matched[o.value]);xs(ra,Le(()=>o.value+1)),xs(Vb,a),xs(Xr,r);const l=ui();return Nn(()=>[l.value,a.value,t.name],([c,f,h],[p,b,x])=>{f&&(f.instances[h]=c,b&&b!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),c&&f&&(!b||!vn(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return la(n.default,{Component:p,route:c});const b=h.props[f],x=b?b===!0?c.params:typeof b=="function"?b(c):b:null,U=ul(p,te({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return la(n.default,{Component:U,route:c})||U}}});function la(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yb=Jb;function Xb(t){const e=xb(t.routes,t),n=t.parseQuery||Hb,s=t.stringifyQuery||sa,r=t.history,i=Rn(),o=Rn(),a=Rn(),l=au(mt);let c=mt;on&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Er.bind(null,v=>""+v),h=Er.bind(null,jb),p=Er.bind(null,Vs);function b(v,k){let C,N;return cc(v)?(C=e.getRecordMatcher(v),N=k):N=v,e.addRoute(N,C)}function x(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function S(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function R(v,k){if(k=te({},k||l.value),typeof v=="string"){const u=Ir(n,v,k.path),d=e.resolve({path:u.path},k),g=r.createHref(u.fullPath);return te(u,d,{params:p(d.params),hash:Vs(u.hash),redirectedFrom:void 0,href:g})}let C;if("path"in v)C=te({},v,{path:Ir(n,v.path,k.path).path});else{const u=te({},v.params);for(const d in u)u[d]==null&&delete u[d];C=te({},v,{params:h(v.params)}),k.params=h(k.params)}const N=e.resolve(C,k),X=v.hash||"";N.params=f(p(N.params));const ue=Z_(s,te({},v,{hash:Ub(X),path:N.path})),q=r.createHref(ue);return te({fullPath:ue,hash:X,query:s===sa?$b(v.query):v.query||{}},N,{redirectedFrom:void 0,href:q})}function B(v){return typeof v=="string"?Ir(n,v,l.value.path):te({},v)}function O(v,k){if(c!==v)return yn(8,{from:k,to:v})}function V(v){return W(v)}function K(v){return V(te(B(v),{replace:!0}))}function re(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let N=typeof C=="function"?C(v):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=B(N):{path:N},N.params={}),te({query:v.query,hash:v.hash,params:"path"in N?{}:v.params},N)}}function W(v,k){const C=c=R(v),N=l.value,X=v.state,ue=v.force,q=v.replace===!0,u=re(C);if(u)return W(te(B(u),{state:typeof u=="object"?te({},X,u.state):X,force:ue,replace:q}),k||C);const d=C;d.redirectedFrom=k;let g;return!ue&&eb(s,N,C)&&(g=yn(16,{to:d,from:N}),Nt(N,N,!0,!1)),(g?Promise.resolve(g):J(d,N)).catch(_=>ot(_)?ot(_,2)?_:We(_):ie(_,d,N)).then(_=>{if(_){if(ot(_,2))return W(te({replace:q},B(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:ue}),k||d)}else _=fe(d,N,!0,q,X);return Y(d,N,_),_})}function A(v,k){const C=O(v,k);return C?Promise.reject(C):Promise.resolve()}function J(v,k){let C;const[N,X,ue]=Qb(v,k);C=xr(N.reverse(),"beforeRouteLeave",v,k);for(const u of N)u.leaveGuards.forEach(d=>{C.push(vt(d,v,k))});const q=A.bind(null,v,k);return C.push(q),rn(C).then(()=>{C=[];for(const u of i.list())C.push(vt(u,v,k));return C.push(q),rn(C)}).then(()=>{C=xr(X,"beforeRouteUpdate",v,k);for(const u of X)u.updateGuards.forEach(d=>{C.push(vt(d,v,k))});return C.push(q),rn(C)}).then(()=>{C=[];for(const u of v.matched)if(u.beforeEnter&&!k.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)C.push(vt(d,v,k));else C.push(vt(u.beforeEnter,v,k));return C.push(q),rn(C)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),C=xr(ue,"beforeRouteEnter",v,k),C.push(q),rn(C))).then(()=>{C=[];for(const u of o.list())C.push(vt(u,v,k));return C.push(q),rn(C)}).catch(u=>ot(u,8)?u:Promise.reject(u))}function Y(v,k,C){for(const N of a.list())N(v,k,C)}function fe(v,k,C,N,X){const ue=O(v,k);if(ue)return ue;const q=k===mt,u=on?history.state:{};C&&(N||q?r.replace(v.fullPath,te({scroll:q&&u&&u.scroll},X)):r.push(v.fullPath,X)),l.value=v,Nt(v,k,C,q),We()}let me;function Oe(){me||(me=r.listen((v,k,C)=>{if(!hs.listening)return;const N=R(v),X=re(N);if(X){W(te(X,{replace:!0}),N).catch(jn);return}c=N;const ue=l.value;on&&lb(Jo(ue.fullPath,C.delta),ar()),J(N,ue).catch(q=>ot(q,12)?q:ot(q,2)?(W(q.to,N).then(u=>{ot(u,20)&&!C.delta&&C.type===ns.pop&&r.go(-1,!1)}).catch(jn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ie(q,N,ue))).then(q=>{q=q||fe(N,ue,!1),q&&(C.delta&&!ot(q,8)?r.go(-C.delta,!1):C.type===ns.pop&&ot(q,20)&&r.go(-1,!1)),Y(N,ue,q)}).catch(jn)}))}let Se=Rn(),_e=Rn(),he;function ie(v,k,C){We(v);const N=_e.list();return N.length?N.forEach(X=>X(v,k,C)):console.error(v),Promise.reject(v)}function ne(){return he&&l.value!==mt?Promise.resolve():new Promise((v,k)=>{Se.add([v,k])})}function We(v){return he||(he=!v,Oe(),Se.list().forEach(([k,C])=>v?C(v):k()),Se.reset()),v}function Nt(v,k,C,N){const{scrollBehavior:X}=t;if(!on||!X)return Promise.resolve();const ue=!C&&cb(Jo(v.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return di().then(()=>X(v,k,ue)).then(q=>q&&ab(q)).catch(q=>ie(q,v,k))}const ze=v=>r.go(v);let ke;const en=new Set,hs={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:S,resolve:R,options:t,push:V,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:ne,install(v){const k=this;v.component("RouterLink",Kb),v.component("RouterView",Yb),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(l)}),on&&!ke&&l.value===mt&&(ke=!0,V(r.location).catch(X=>{}));const C={};for(const X in mt)C[X]=Le(()=>l.value[X]);v.provide(Ui,k),v.provide(_c,Tn(C)),v.provide(Xr,l);const N=v.unmount;en.add(v),v.unmount=function(){en.delete(v),en.size<1&&(c=mt,me&&me(),me=null,l.value=mt,ke=!1,he=!1),N()}}};return hs}function rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Qb(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>vn(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vn(c,l))||r.push(l))}return[n,s,r]}const Zb="/assets/paralax1-371235c6.png",ev="/assets/paralax2-aa0b773a.png",tv="/assets/paralax3a-7b662525.png",nv="/assets/paralax3b-b777e898.png",sv="/assets/paralax9-20ab124f.png",rv={data(){return{xPos:0,yPos:0,store:Be()}},methods:{check(t){this.xPos=t.clientX-window.innerWidth/2,this.yPos=t.clientY-window.innerHeight/2},touch(t){this.xPos=t.touches[0].clientX-window.innerWidth/2,this.yPos=t.touches[0].clientY-window.innerHeight/2}},computed:{parallaxHeight(){return window.innerHeight-102*2}}},iv={class:"relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none"},ov=m("div",{class:"absolute w-full h-full bg-gray-900 bg-opacity-[.3]"},null,-1),av={class:"h-full justify-center flex items-center"},lv={class:"grid gap-[10vh] [&_*]:text-white"},cv={class:"justify-center flex"},uv={class:"grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"},fv={class:"justify-center flex max-[800px]:pt-[10px]"},dv={class:"grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"};function hv(t,e,n,s,r,i){const o=Jt("router-link"),a=Jt("Layout");return Ie(),$e("div",{onTouchmove:e[1]||(e[1]=(...l)=>i.touch&&i.touch(...l)),onMousemove:e[2]||(e[2]=(...l)=>i.check&&i.check(...l))},[ee(a,null,{default:Ae(()=>[m("div",iv,[ov,m("img",{style:yt({transform:`translate(${r.xPos/10}px, ${r.yPos/10}px)`}),class:"w-[2200px] absolute left-[-10%] top-[-10%] -z-10",src:Zb},null,4),m("img",{style:yt({transform:`translate(${r.xPos/13}px, ${r.yPos/13}px)`}),class:"w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10",src:ev},null,4),m("img",{style:yt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]",src:tv},null,4),m("img",{style:yt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]",src:nv},null,4),m("img",{style:yt({transform:`translate(${r.xPos/18}px, ${r.yPos/20}px)`}),class:"w-[2200px] absolute justify-self-center bottom-[-4%] -z-10",src:sv},null,4),m("div",av,[m("div",lv,[m("div",cv,[m("div",uv,[ee(o,{to:"Products",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),ee(o,{to:"about",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].about),1)]),_:1})])]),m("div",fv,[m("div",dv,[ee(o,{to:"Blog",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Ae(()=>[be(z(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white")),class:"relative z-10 bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},z(r.store.langProp[r.store.lang].contacts),1)])])])])])]),_:1})],32)}const pv=it(rv,[["render",hv]]);let Tr=[{path:"/home",alias:"home",component:pv},{path:"/about",alias:"About",component:()=>sn(()=>import("./About-5b5fb651.js"),[])},{path:"/Products",alias:"Products",component:()=>sn(()=>import("./Products-66869ae8.js"),[])},{path:"Personal/:id",alias:"Personal/:id",component:()=>sn(()=>import("./Personal-b458c345.js"),[])},{path:"/PersonalArea/:id",alias:"PersonalArea/:id",component:()=>sn(()=>import("./PersonalArea-fd720f95.js"),[])},{path:"/Blog",alias:"Blog",component:()=>sn(()=>import("./Blog-b59c9d7a.js"),[])},{path:"/Checkout",alias:"Checkout",component:()=>sn(()=>import("./Checkout-c5b278c8.js"),[])}];const gv=Xb({history:hb("/"),routes:[{path:"/",name:"root",beforeEnter:async t=>{await fetch("api/language",{body:"ru"})},redirect:t=>Be().lang},{path:"/ru",name:"ru",redirect:t=>"ru/home",beforeEnter:t=>{console.log("repeat"),Be().lang="ru"},children:Tr},{path:"/en",name:"en",redirect:t=>"en/home",beforeEnter:t=>{Be().lang="en"},children:Tr},{path:"/kg",name:"kg",redirect:t=>"kg/home",beforeEnter:t=>{Be().lang="kg"},children:Tr}]});const lr=qf(q_),mv=Yf();new Pe;const _v={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};lr.component("Layout",W_);lr.use(mv);lr.use(gv);Tl(_v);ts();lr.mount("#app");export{De as F,W_ as L,it as _,m as a,be as b,Zs as c,$e as d,bv as e,ee as f,Mi as g,Ie as o,Jt as r,z as t,Be as u,Ae as w};
