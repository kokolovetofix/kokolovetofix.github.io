"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{60863:function(e,t,r){r.d(t,{Dq:function(){return useFieldArray},cI:function(){return useForm}});var i=r(52983),isCheckBoxInput=e=>"checkbox"===e.type,isDateObject=e=>e instanceof Date,isNullOrUndefined=e=>null==e;let isObjectType=e=>"object"==typeof e;var isObject=e=>!isNullOrUndefined(e)&&!Array.isArray(e)&&isObjectType(e)&&!isDateObject(e),getEventValue=e=>isObject(e)&&e.target?isCheckBoxInput(e.target)?e.target.checked:e.target.value:e,getNodeParentName=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,isNameInFieldArray=(e,t)=>e.has(getNodeParentName(t)),compact=e=>Array.isArray(e)?e.filter(Boolean):[],isUndefined=e=>void 0===e,get=(e,t,r)=>{if(!t||!isObject(e))return r;let i=compact(t.split(/[,[\].]+?/)).reduce((e,t)=>isNullOrUndefined(e)?e:e[t],e);return isUndefined(i)||i===e?isUndefined(e[t])?r:e[t]:i};let a={BLUR:"blur",FOCUS_OUT:"focusout"},s={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},l={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},n=i.createContext(null),useFormContext=()=>i.useContext(n);var getProxyFormState=(e,t,r,i=!0)=>{let a={defaultValues:t._defaultValues};for(let l in e)Object.defineProperty(a,l,{get:()=>(t._proxyFormState[l]!==s.all&&(t._proxyFormState[l]=!i||s.all),r&&(r[l]=!0),e[l])});return a},isEmptyObject=e=>isObject(e)&&!Object.keys(e).length,shouldRenderFormState=(e,t,r,i)=>{r(e);let{name:a,...l}=e;return isEmptyObject(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(e=>t[e]===(!i||s.all))},convertToArrayPayload=e=>Array.isArray(e)?e:[e];function useSubscribe(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var isString=e=>"string"==typeof e,generateWatchOutput=(e,t,r,i,a)=>isString(e)?(i&&t.watch.add(e),get(r,e,a)):Array.isArray(e)?e.map(e=>(i&&t.watch.add(e),get(r,e))):(i&&(t.watchAll=!0),r),isPlainObject=e=>{let t=e.constructor&&e.constructor.prototype;return isObject(t)&&t.hasOwnProperty("isPrototypeOf")},u="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function cloneObject(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(u&&(e instanceof Blob||e instanceof FileList))&&(r||isObject(e))))return e;else if(t=r?[]:{},Array.isArray(e)||isPlainObject(e))for(let r in e)t[r]=cloneObject(e[r]);else t=e;return t}var appendErrors=(e,t,r,i,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:a||!0}}:{},isKey=e=>/^\w*$/.test(e),stringToPath=e=>compact(e.replace(/["|']|\]/g,"").split(/\.|\[/));function set(e,t,r){let i=-1,a=isKey(t)?[t]:stringToPath(t),s=a.length,l=s-1;for(;++i<s;){let t=a[i],s=r;if(i!==l){let r=e[t];s=isObject(r)||Array.isArray(r)?r:isNaN(+a[i+1])?{}:[]}e[t]=s,e=e[t]}return e}let focusFieldBy=(e,t,r)=>{for(let i of r||Object.keys(e)){let r=get(e,i);if(r){let{_f:e,...i}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else isObject(i)&&focusFieldBy(i,t)}}};var generateId=()=>{let e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)})},getFocusFieldName=(e,t,r={})=>r.shouldFocus||isUndefined(r.shouldFocus)?r.focusName||`${e}.${isUndefined(r.focusIndex)?t:r.focusIndex}.`:"",getValidationModes=e=>({isOnSubmit:!e||e===s.onSubmit,isOnBlur:e===s.onBlur,isOnChange:e===s.onChange,isOnAll:e===s.all,isOnTouch:e===s.onTouched}),isWatched=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),updateFieldArrayRootError=(e,t,r)=>{let i=compact(get(e,r));return set(i,"root",t[r]),set(e,r,i),e},isBoolean=e=>"boolean"==typeof e,isFileInput=e=>"file"===e.type,isFunction=e=>"function"==typeof e,isHTMLElement=e=>{if(!u)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},isMessage=e=>isString(e),isRadioInput=e=>"radio"===e.type,isRegex=e=>e instanceof RegExp;let o={value:!1,isValid:!1},d={value:!0,isValid:!0};var getCheckboxValue=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!isUndefined(e[0].attributes.value)?isUndefined(e[0].value)||""===e[0].value?d:{value:e[0].value,isValid:!0}:d:o}return o};let c={isValid:!1,value:null};var getRadioValue=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,c):c;function getValidateError(e,t,r="validate"){if(isMessage(e)||Array.isArray(e)&&e.every(isMessage)||isBoolean(e)&&!e)return{type:r,message:isMessage(e)?e:"",ref:t}}var getValueAndMessage=e=>isObject(e)&&!isRegex(e)?e:{value:e,message:""},validateField=async(e,t,r,i,a)=>{let{ref:s,refs:n,required:u,maxLength:o,minLength:d,min:c,max:f,pattern:g,validate:y,name:m,valueAsNumber:p,mount:h,disabled:b}=e._f,A=get(t,m);if(!h||b)return{};let v=n?n[0]:s,setCustomValidity=e=>{i&&v.reportValidity&&(v.setCustomValidity(isBoolean(e)?"":e||""),v.reportValidity())},V={},_=isRadioInput(s),F=isCheckBoxInput(s),x=(p||isFileInput(s))&&isUndefined(s.value)&&isUndefined(A)||isHTMLElement(s)&&""===s.value||""===A||Array.isArray(A)&&!A.length,O=appendErrors.bind(null,m,r,V),getMinMaxMessage=(e,t,r,i=l.maxLength,a=l.minLength)=>{let n=e?t:r;V[m]={type:e?i:a,message:n,ref:s,...O(e?i:a,n)}};if(a?!Array.isArray(A)||!A.length:u&&(!(_||F)&&(x||isNullOrUndefined(A))||isBoolean(A)&&!A||F&&!getCheckboxValue(n).isValid||_&&!getRadioValue(n).isValid)){let{value:e,message:t}=isMessage(u)?{value:!!u,message:u}:getValueAndMessage(u);if(e&&(V[m]={type:l.required,message:t,ref:v,...O(l.required,t)},!r))return setCustomValidity(t),V}if(!x&&(!isNullOrUndefined(c)||!isNullOrUndefined(f))){let e,t;let i=getValueAndMessage(f),a=getValueAndMessage(c);if(isNullOrUndefined(A)||isNaN(A)){let r=s.valueAsDate||new Date(A),convertTimeToDate=e=>new Date(new Date().toDateString()+" "+e),l="time"==s.type,n="week"==s.type;isString(i.value)&&A&&(e=l?convertTimeToDate(A)>convertTimeToDate(i.value):n?A>i.value:r>new Date(i.value)),isString(a.value)&&A&&(t=l?convertTimeToDate(A)<convertTimeToDate(a.value):n?A<a.value:r<new Date(a.value))}else{let r=s.valueAsNumber||(A?+A:A);isNullOrUndefined(i.value)||(e=r>i.value),isNullOrUndefined(a.value)||(t=r<a.value)}if((e||t)&&(getMinMaxMessage(!!e,i.message,a.message,l.max,l.min),!r))return setCustomValidity(V[m].message),V}if((o||d)&&!x&&(isString(A)||a&&Array.isArray(A))){let e=getValueAndMessage(o),t=getValueAndMessage(d),i=!isNullOrUndefined(e.value)&&A.length>e.value,a=!isNullOrUndefined(t.value)&&A.length<t.value;if((i||a)&&(getMinMaxMessage(i,e.message,t.message),!r))return setCustomValidity(V[m].message),V}if(g&&!x&&isString(A)){let{value:e,message:t}=getValueAndMessage(g);if(isRegex(e)&&!A.match(e)&&(V[m]={type:l.pattern,message:t,ref:s,...O(l.pattern,t)},!r))return setCustomValidity(t),V}if(y){if(isFunction(y)){let e=await y(A,t),i=getValidateError(e,v);if(i&&(V[m]={...i,...O(l.validate,i.message)},!r))return setCustomValidity(i.message),V}else if(isObject(y)){let e={};for(let i in y){if(!isEmptyObject(e)&&!r)break;let a=getValidateError(await y[i](A,t),v,i);a&&(e={...a,...O(i,a.message)},setCustomValidity(a.message),r&&(V[m]=e))}if(!isEmptyObject(e)&&(V[m]={ref:v,...e},!r))return V}}return setCustomValidity(!0),V};function append(e,t){return[...e,...convertToArrayPayload(t)]}var fillEmptyArray=e=>Array.isArray(e)?e.map(()=>void 0):void 0;function insert(e,t,r){return[...e.slice(0,t),...convertToArrayPayload(r),...e.slice(t)]}var moveArrayAt=(e,t,r)=>Array.isArray(e)?(isUndefined(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function prepend(e,t){return[...convertToArrayPayload(t),...convertToArrayPayload(e)]}function removeAtIndexes(e,t){let r=0,i=[...e];for(let e of t)i.splice(e-r,1),r++;return compact(i).length?i:[]}var removeArrayAt=(e,t)=>isUndefined(t)?[]:removeAtIndexes(e,convertToArrayPayload(t).sort((e,t)=>e-t)),swapArrayAt=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function baseGet(e,t){let r=t.slice(0,-1).length,i=0;for(;i<r;)e=isUndefined(e)?i++:e[t[i++]];return e}function isEmptyArray(e){for(let t in e)if(!isUndefined(e[t]))return!1;return!0}function unset(e,t){let r=Array.isArray(t)?t:isKey(t)?[t]:stringToPath(t),i=1===r.length?e:baseGet(e,r),a=r.length-1,s=r[a];return i&&delete i[s],0!==a&&(isObject(i)&&isEmptyObject(i)||Array.isArray(i)&&isEmptyArray(i))&&unset(e,r.slice(0,-1)),e}var updateAt=(e,t,r)=>(e[t]=r,e);function useFieldArray(e){let t=useFormContext(),{control:r=t.control,name:a,keyName:l="id",shouldUnregister:n}=e,[u,o]=i.useState(r._getFieldArray(a)),d=i.useRef(r._getFieldArray(a).map(generateId)),c=i.useRef(u),f=i.useRef(a),g=i.useRef(!1);f.current=a,c.current=u,r._names.array.add(a),e.rules&&r.register(a,e.rules),useSubscribe({next:({values:e,name:t})=>{if(t===f.current||!t){let t=get(e,f.current);Array.isArray(t)&&(o(t),d.current=t.map(generateId))}},subject:r._subjects.array});let y=i.useCallback(e=>{g.current=!0,r._updateFieldArray(a,e)},[r,a]);return i.useEffect(()=>{if(r._state.action=!1,isWatched(a,r._names)&&r._subjects.state.next({...r._formState}),g.current&&(!getValidationModes(r._options.mode).isOnSubmit||r._formState.isSubmitted)){if(r._options.resolver)r._executeSchema([a]).then(e=>{let t=get(e.errors,a),i=get(r._formState.errors,a);(i?!t&&i.type:t&&t.type)&&(t?set(r._formState.errors,a,t):unset(r._formState.errors,a),r._subjects.state.next({errors:r._formState.errors}))});else{let e=get(r._fields,a);e&&e._f&&validateField(e,r._formValues,r._options.criteriaMode===s.all,r._options.shouldUseNativeValidation,!0).then(e=>!isEmptyObject(e)&&r._subjects.state.next({errors:updateFieldArrayRootError(r._formState.errors,e,a)}))}}r._subjects.values.next({name:a,values:{...r._formValues}}),r._names.focus&&focusFieldBy(r._fields,e=>!!e&&e.startsWith(r._names.focus||"")),r._names.focus="",r._updateValid()},[u,a,r]),i.useEffect(()=>(get(r._formValues,a)||r._updateFieldArray(a),()=>{(r._options.shouldUnregister||n)&&r.unregister(a)}),[a,r,l,n]),{swap:i.useCallback((e,t)=>{let i=r._getFieldArray(a);swapArrayAt(i,e,t),swapArrayAt(d.current,e,t),y(i),o(i),r._updateFieldArray(a,i,swapArrayAt,{argA:e,argB:t},!1)},[y,a,r]),move:i.useCallback((e,t)=>{let i=r._getFieldArray(a);moveArrayAt(i,e,t),moveArrayAt(d.current,e,t),y(i),o(i),r._updateFieldArray(a,i,moveArrayAt,{argA:e,argB:t},!1)},[y,a,r]),prepend:i.useCallback((e,t)=>{let i=convertToArrayPayload(cloneObject(e)),s=prepend(r._getFieldArray(a),i);r._names.focus=getFocusFieldName(a,0,t),d.current=prepend(d.current,i.map(generateId)),y(s),o(s),r._updateFieldArray(a,s,prepend,{argA:fillEmptyArray(e)})},[y,a,r]),append:i.useCallback((e,t)=>{let i=convertToArrayPayload(cloneObject(e)),s=append(r._getFieldArray(a),i);r._names.focus=getFocusFieldName(a,s.length-1,t),d.current=append(d.current,i.map(generateId)),y(s),o(s),r._updateFieldArray(a,s,append,{argA:fillEmptyArray(e)})},[y,a,r]),remove:i.useCallback(e=>{let t=removeArrayAt(r._getFieldArray(a),e);d.current=removeArrayAt(d.current,e),y(t),o(t),r._updateFieldArray(a,t,removeArrayAt,{argA:e})},[y,a,r]),insert:i.useCallback((e,t,i)=>{let s=convertToArrayPayload(cloneObject(t)),l=insert(r._getFieldArray(a),e,s);r._names.focus=getFocusFieldName(a,e,i),d.current=insert(d.current,e,s.map(generateId)),y(l),o(l),r._updateFieldArray(a,l,insert,{argA:e,argB:fillEmptyArray(t)})},[y,a,r]),update:i.useCallback((e,t)=>{let i=cloneObject(t),s=updateAt(r._getFieldArray(a),e,i);d.current=[...s].map((t,r)=>t&&r!==e?d.current[r]:generateId()),y(s),o([...s]),r._updateFieldArray(a,s,updateAt,{argA:e,argB:i},!0,!1)},[y,a,r]),replace:i.useCallback(e=>{let t=convertToArrayPayload(cloneObject(e));d.current=t.map(generateId),y([...t]),o([...t]),r._updateFieldArray(a,[...t],e=>e,{},!0,!1)},[y,a,r]),fields:i.useMemo(()=>u.map((e,t)=>({...e,[l]:d.current[t]||generateId()})),[u,l])}}function createSubject(){let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var isPrimitive=e=>isNullOrUndefined(e)||!isObjectType(e);function deepEqual(e,t){if(isPrimitive(e)||isPrimitive(t))return e===t;if(isDateObject(e)&&isDateObject(t))return e.getTime()===t.getTime();let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let a of r){let r=e[a];if(!i.includes(a))return!1;if("ref"!==a){let e=t[a];if(isDateObject(r)&&isDateObject(e)||isObject(r)&&isObject(e)||Array.isArray(r)&&Array.isArray(e)?!deepEqual(r,e):r!==e)return!1}}return!0}var isMultipleSelect=e=>"select-multiple"===e.type,isRadioOrCheckbox=e=>isRadioInput(e)||isCheckBoxInput(e),live=e=>isHTMLElement(e)&&e.isConnected,objectHasFunction=e=>{for(let t in e)if(isFunction(e[t]))return!0;return!1};function markFieldsDirty(e,t={}){let r=Array.isArray(e);if(isObject(e)||r)for(let r in e)Array.isArray(e[r])||isObject(e[r])&&!objectHasFunction(e[r])?(t[r]=Array.isArray(e[r])?[]:{},markFieldsDirty(e[r],t[r])):isNullOrUndefined(e[r])||(t[r]=!0);return t}function getDirtyFieldsFromDefaultValues(e,t,r){let i=Array.isArray(e);if(isObject(e)||i)for(let i in e)Array.isArray(e[i])||isObject(e[i])&&!objectHasFunction(e[i])?isUndefined(t)||isPrimitive(r[i])?r[i]=Array.isArray(e[i])?markFieldsDirty(e[i],[]):{...markFieldsDirty(e[i])}:getDirtyFieldsFromDefaultValues(e[i],isNullOrUndefined(t)?{}:t[i],r[i]):r[i]=!deepEqual(e[i],t[i]);return r}var getDirtyFields=(e,t)=>getDirtyFieldsFromDefaultValues(e,t,markFieldsDirty(t)),getFieldValueAs=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>isUndefined(e)?e:t?""===e?NaN:e?+e:e:r&&isString(e)?new Date(e):i?i(e):e;function getFieldValue(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:isFileInput(t)?t.files:isRadioInput(t)?getRadioValue(e.refs).value:isMultipleSelect(t)?[...t.selectedOptions].map(({value:e})=>e):isCheckBoxInput(t)?getCheckboxValue(e.refs).value:getFieldValueAs(isUndefined(t.value)?e.ref.value:t.value,e)}var getResolverOptions=(e,t,r,i)=>{let a={};for(let r of e){let e=get(t,r);e&&set(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:i}},getRuleValue=e=>isUndefined(e)?e:isRegex(e)?e.source:isObject(e)?isRegex(e.value)?e.value.source:e.value:e,hasValidation=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function schemaErrorLookup(e,t,r){let i=get(e,r);if(i||isKey(r))return{error:i,name:r};let a=r.split(".");for(;a.length;){let i=a.join("."),s=get(t,i),l=get(e,i);if(s&&!Array.isArray(s)&&r!==i)break;if(l&&l.type)return{name:i,error:l};a.pop()}return{name:r}}var skipValidation=(e,t,r,i,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?i.isOnBlur:a.isOnBlur)?!e:(r?!i.isOnChange:!a.isOnChange)||e),unsetEmptyArray=(e,t)=>!compact(get(e,t)).length&&unset(e,t);let f={mode:s.onSubmit,reValidateMode:s.onChange,shouldFocusError:!0};function createFormControl(e={},t){let r,i={...f,...e},l={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},o=(isObject(i.defaultValues)||isObject(i.values))&&cloneObject(i.defaultValues||i.values)||{},d=i.shouldUnregister?{}:cloneObject(o),c={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},y=0,m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:createSubject(),array:createSubject(),state:createSubject()},h=e.resetOptions&&e.resetOptions.keepDirtyValues,b=getValidationModes(i.mode),A=getValidationModes(i.reValidateMode),v=i.criteriaMode===s.all,debounce=e=>t=>{clearTimeout(y),y=setTimeout(e,t)},_updateValid=async e=>{if(m.isValid||e){let e=i.resolver?isEmptyObject((await _executeSchema()).errors):await executeBuiltInValidation(n,!0);e!==l.isValid&&p.state.next({isValid:e})}},_updateIsValidating=e=>m.isValidating&&p.state.next({isValidating:e}),updateErrors=(e,t)=>{set(l.errors,e,t),p.state.next({errors:l.errors})},updateValidAndValue=(e,t,r,i)=>{let a=get(n,e);if(a){let s=get(d,e,isUndefined(r)?get(o,e):r);isUndefined(s)||i&&i.defaultChecked||t?set(d,e,t?s:getFieldValue(a._f)):setFieldValue(e,s),c.mount&&_updateValid()}},updateTouchAndDirty=(e,t,r,i,a)=>{let s=!1,n=!1,u={name:e};if(!r||i){m.isDirty&&(n=l.isDirty,l.isDirty=u.isDirty=_getDirty(),s=n!==u.isDirty);let r=deepEqual(get(o,e),t);n=get(l.dirtyFields,e),r?unset(l.dirtyFields,e):set(l.dirtyFields,e,!0),u.dirtyFields=l.dirtyFields,s=s||m.dirtyFields&&!r!==n}if(r){let t=get(l.touchedFields,e);t||(set(l.touchedFields,e,r),u.touchedFields=l.touchedFields,s=s||m.touchedFields&&t!==r)}return s&&a&&p.state.next(u),s?u:{}},shouldRenderByError=(t,i,a,s)=>{let n=get(l.errors,t),u=m.isValid&&isBoolean(i)&&l.isValid!==i;if(e.delayError&&a?(r=debounce(()=>updateErrors(t,a)))(e.delayError):(clearTimeout(y),r=null,a?set(l.errors,t,a):unset(l.errors,t)),(a?!deepEqual(n,a):n)||!isEmptyObject(s)||u){let e={...s,...u&&isBoolean(i)?{isValid:i}:{},errors:l.errors,name:t};l={...l,...e},p.state.next(e)}_updateIsValidating(!1)},_executeSchema=async e=>i.resolver(d,i.context,getResolverOptions(e||g.mount,n,i.criteriaMode,i.shouldUseNativeValidation)),executeSchemaAndUpdateState=async e=>{let{errors:t}=await _executeSchema();if(e)for(let r of e){let e=get(t,r);e?set(l.errors,r,e):unset(l.errors,r)}else l.errors=t;return t},executeBuiltInValidation=async(e,t,r={valid:!0})=>{for(let a in e){let s=e[a];if(s){let{_f:e,...a}=s;if(e){let a=g.array.has(e.name),n=await validateField(s,d,v,i.shouldUseNativeValidation,a);if(n[e.name]&&(r.valid=!1,t))break;t||(get(n,e.name)?a?updateFieldArrayRootError(l.errors,n,e.name):set(l.errors,e.name,n[e.name]):unset(l.errors,e.name))}a&&await executeBuiltInValidation(a,t,r)}}return r.valid},_getDirty=(e,t)=>(e&&t&&set(d,e,t),!deepEqual(getValues(),o)),_getWatch=(e,t,r)=>generateWatchOutput(e,g,{...c.mount?d:isUndefined(t)?o:isString(e)?{[e]:t}:t},r,t),setFieldValue=(e,t,r={})=>{let i=get(n,e),a=t;if(i){let r=i._f;r&&(r.disabled||set(d,e,getFieldValueAs(t,r)),a=isHTMLElement(r.ref)&&isNullOrUndefined(t)?"":t,isMultipleSelect(r.ref)?[...r.ref.options].forEach(e=>e.selected=a.includes(e.value)):r.refs?isCheckBoxInput(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find(t=>t===e.value):a===e.value)):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach(e=>e.checked=e.value===a):isFileInput(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||p.values.next({name:e,values:{...d}})))}(r.shouldDirty||r.shouldTouch)&&updateTouchAndDirty(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&trigger(e)},setValues=(e,t,r)=>{for(let i in t){let a=t[i],s=`${e}.${i}`,l=get(n,s);!g.array.has(e)&&isPrimitive(a)&&(!l||l._f)||isDateObject(a)?setFieldValue(s,a,r):setValues(s,a,r)}},setValue=(e,r,i={})=>{let a=get(n,e),s=g.array.has(e),u=cloneObject(r);set(d,e,u),s?(p.array.next({name:e,values:{...d}}),(m.isDirty||m.dirtyFields)&&i.shouldDirty&&p.state.next({name:e,dirtyFields:getDirtyFields(o,d),isDirty:_getDirty(e,u)})):!a||a._f||isNullOrUndefined(u)?setFieldValue(e,u,i):setValues(e,u,i),isWatched(e,g)&&p.state.next({...l}),p.values.next({name:e,values:{...d}}),c.mount||t()},onChange=async e=>{let t=e.target,s=t.name,u=get(n,s);if(u){let o,c;let f=t.type?getFieldValue(u._f):getEventValue(e),y=e.type===a.BLUR||e.type===a.FOCUS_OUT,h=!hasValidation(u._f)&&!i.resolver&&!get(l.errors,s)&&!u._f.deps||skipValidation(y,get(l.touchedFields,s),l.isSubmitted,A,b),V=isWatched(s,g,y);set(d,s,f),y?(u._f.onBlur&&u._f.onBlur(e),r&&r(0)):u._f.onChange&&u._f.onChange(e);let _=updateTouchAndDirty(s,f,y,!1),F=!isEmptyObject(_)||V;if(y||p.values.next({name:s,type:e.type,values:{...d}}),h)return m.isValid&&_updateValid(),F&&p.state.next({name:s,...V?{}:_});if(!y&&V&&p.state.next({...l}),_updateIsValidating(!0),i.resolver){let{errors:e}=await _executeSchema([s]),t=schemaErrorLookup(l.errors,n,s),r=schemaErrorLookup(e,n,t.name||s);o=r.error,s=r.name,c=isEmptyObject(e)}else(o=(await validateField(u,d,v,i.shouldUseNativeValidation))[s])?c=!1:m.isValid&&(c=await executeBuiltInValidation(n,!0));u._f.deps&&trigger(u._f.deps),shouldRenderByError(s,c,o,_)}},trigger=async(e,t={})=>{let r,a;let s=convertToArrayPayload(e);if(_updateIsValidating(!0),i.resolver){let t=await executeSchemaAndUpdateState(isUndefined(e)?e:s);r=isEmptyObject(t),a=e?!s.some(e=>get(t,e)):r}else e?((a=(await Promise.all(s.map(async e=>{let t=get(n,e);return await executeBuiltInValidation(t&&t._f?{[e]:t}:t)}))).every(Boolean))||l.isValid)&&_updateValid():a=r=await executeBuiltInValidation(n);return p.state.next({...!isString(e)||m.isValid&&r!==l.isValid?{}:{name:e},...i.resolver||!e?{isValid:r}:{},errors:l.errors,isValidating:!1}),t.shouldFocus&&!a&&focusFieldBy(n,e=>e&&get(l.errors,e),e?s:g.mount),a},getValues=e=>{let t={...o,...c.mount?d:{}};return isUndefined(e)?t:isString(e)?get(t,e):e.map(e=>get(t,e))},getFieldState=(e,t)=>({invalid:!!get((t||l).errors,e),isDirty:!!get((t||l).dirtyFields,e),isTouched:!!get((t||l).touchedFields,e),error:get((t||l).errors,e)}),unregister=(e,t={})=>{for(let r of e?convertToArrayPayload(e):g.mount)g.mount.delete(r),g.array.delete(r),get(n,r)&&(t.keepValue||(unset(n,r),unset(d,r)),t.keepError||unset(l.errors,r),t.keepDirty||unset(l.dirtyFields,r),t.keepTouched||unset(l.touchedFields,r),i.shouldUnregister||t.keepDefaultValue||unset(o,r));p.values.next({values:{...d}}),p.state.next({...l,...t.keepDirty?{isDirty:_getDirty()}:{}}),t.keepIsValid||_updateValid()},register=(e,t={})=>{let r=get(n,e),a=isBoolean(t.disabled);return set(n,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),g.mount.add(e),r?a&&set(d,e,t.disabled?void 0:get(d,e,getFieldValue(r._f))):updateValidAndValue(e,!0,t.value),{...a?{disabled:t.disabled}:{},...i.shouldUseNativeValidation?{required:!!t.required,min:getRuleValue(t.min),max:getRuleValue(t.max),minLength:getRuleValue(t.minLength),maxLength:getRuleValue(t.maxLength),pattern:getRuleValue(t.pattern)}:{},name:e,onChange,onBlur:onChange,ref:a=>{if(a){register(e,t),r=get(n,e);let i=isUndefined(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,s=isRadioOrCheckbox(i),l=r._f.refs||[];(s?l.find(e=>e===i):i===r._f.ref)||(set(n,e,{_f:{...r._f,...s?{refs:[...l.filter(live),i,...Array.isArray(get(o,e))?[{}]:[]],ref:{type:i.type,name:e}}:{ref:i}}}),updateValidAndValue(e,!1,void 0,i))}else(r=get(n,e,{}))._f&&(r._f.mount=!1),(i.shouldUnregister||t.shouldUnregister)&&!(isNameInFieldArray(g.array,e)&&c.action)&&g.unMount.add(e)}}},_focusError=()=>i.shouldFocusError&&focusFieldBy(n,e=>e&&get(l.errors,e),g.mount),_reset=(r,i={})=>{let a=r||o,s=cloneObject(a),f=r&&!isEmptyObject(r)?s:o;if(i.keepDefaultValues||(o=a),!i.keepValues){if(i.keepDirtyValues||h)for(let e of g.mount)get(l.dirtyFields,e)?set(f,e,get(d,e)):setValue(e,get(f,e));else{if(u&&isUndefined(r))for(let e of g.mount){let t=get(n,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(isHTMLElement(e)){let t=e.closest("form");if(t){t.reset();break}}}}n={}}d=e.shouldUnregister?i.keepDefaultValues?cloneObject(o):{}:s,p.array.next({values:{...f}}),p.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},c.mount||t(),c.mount=!m.isValid||!!i.keepIsValid,c.watch=!!e.shouldUnregister,p.state.next({submitCount:i.keepSubmitCount?l.submitCount:0,isDirty:i.keepDirty?l.isDirty:!!(i.keepDefaultValues&&!deepEqual(r,o)),isSubmitted:!!i.keepIsSubmitted&&l.isSubmitted,dirtyFields:i.keepDirtyValues?l.dirtyFields:i.keepDefaultValues&&r?getDirtyFields(o,r):{},touchedFields:i.keepTouched?l.touchedFields:{},errors:i.keepErrors?l.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},reset=(e,t)=>_reset(isFunction(e)?e(d):e,t);return isFunction(i.defaultValues)&&i.defaultValues().then(e=>{reset(e,i.resetOptions),p.state.next({isLoading:!1})}),{control:{register,unregister,getFieldState,_executeSchema,_getWatch,_getDirty,_updateValid,_removeUnmounted:()=>{for(let e of g.unMount){let t=get(n,e);t&&(t._f.refs?t._f.refs.every(e=>!live(e)):!live(t._f.ref))&&unregister(e)}g.unMount=new Set},_updateFieldArray:(e,t=[],r,i,a=!0,s=!0)=>{if(i&&r){if(c.action=!0,s&&Array.isArray(get(n,e))){let t=r(get(n,e),i.argA,i.argB);a&&set(n,e,t)}if(s&&Array.isArray(get(l.errors,e))){let t=r(get(l.errors,e),i.argA,i.argB);a&&set(l.errors,e,t),unsetEmptyArray(l.errors,e)}if(m.touchedFields&&s&&Array.isArray(get(l.touchedFields,e))){let t=r(get(l.touchedFields,e),i.argA,i.argB);a&&set(l.touchedFields,e,t)}m.dirtyFields&&(l.dirtyFields=getDirtyFields(o,d)),p.state.next({name:e,isDirty:_getDirty(e,t),dirtyFields:l.dirtyFields,errors:l.errors,isValid:l.isValid})}else set(d,e,t)},_getFieldArray:t=>compact(get(c.mount?d:o,t,e.shouldUnregister?get(o,t,[]):[])),_reset,_updateFormState:e=>{l={...l,...e}},_subjects:p,_proxyFormState:m,get _fields(){return n},get _formValues(){return d},get _state(){return c},set _state(value){c=value},get _defaultValues(){return o},get _names(){return g},set _names(value){g=value},get _formState(){return l},set _formState(value){l=value},get _options(){return i},set _options(value){i={...i,...value}}},trigger,register,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=cloneObject(d);if(p.state.next({isSubmitting:!0}),i.resolver){let{errors:e,values:t}=await _executeSchema();l.errors=e,a=t}else await executeBuiltInValidation(n);unset(l.errors,"root"),isEmptyObject(l.errors)?(p.state.next({errors:{}}),await e(a,r)):(t&&await t({...l.errors},r),_focusError(),setTimeout(_focusError)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:isEmptyObject(l.errors),submitCount:l.submitCount+1,errors:l.errors})},watch:(e,t)=>isFunction(e)?p.values.subscribe({next:r=>e(_getWatch(void 0,t),r)}):_getWatch(e,t,!0),setValue,getValues,reset,resetField:(e,t={})=>{get(n,e)&&(isUndefined(t.defaultValue)?setValue(e,get(o,e)):(setValue(e,t.defaultValue),set(o,e,t.defaultValue)),t.keepTouched||unset(l.touchedFields,e),t.keepDirty||(unset(l.dirtyFields,e),l.isDirty=t.defaultValue?_getDirty(e,get(o,e)):_getDirty()),!t.keepError&&(unset(l.errors,e),m.isValid&&_updateValid()),p.state.next({...l}))},clearErrors:e=>{e&&convertToArrayPayload(e).forEach(e=>unset(l.errors,e)),p.state.next({errors:e?l.errors:{}})},unregister,setError:(e,t,r)=>{let i=(get(n,e,{_f:{}})._f||{}).ref;set(l.errors,e,{...t,ref:i}),p.state.next({name:e,errors:l.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},setFocus:(e,t={})=>{let r=get(n,e),i=r&&r._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState}}function useForm(e={}){let t=i.useRef(),[r,a]=i.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:isFunction(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...createFormControl(e,()=>a(e=>({...e}))),formState:r});let s=t.current.control;return s._options=e,useSubscribe({subject:s._subjects.state,next:e=>{shouldRenderFormState(e,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),i.useEffect(()=>{e.values&&!deepEqual(e.values,s._defaultValues)&&s._reset(e.values,s._options.resetOptions)},[e.values,s]),i.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=getProxyFormState(r,s),t.current}}}]);