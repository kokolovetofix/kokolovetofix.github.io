"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7855],{37855:function(r,e,t){t.d(e,{tv:function(){return me}});var chunk_HHQZCQ2Q_o=r=>"boolean"==typeof r?`${r}`:0===r?"0":r,c=r=>!r||"object"!=typeof r||0===Object.keys(r).length,chunk_HHQZCQ2Q_p=(r,e)=>JSON.stringify(r)===JSON.stringify(e);function f(r,e){r.forEach(function(r){Array.isArray(r)?f(r,e):e.push(r)})}function s(r){let e=[];return f(r,e),e}var chunk_HHQZCQ2Q_y=(...r)=>s(r).filter(Boolean),chunk_HHQZCQ2Q_i=(r,e)=>{let t={};for(let o in r)null!=e&&e.hasOwnProperty(o)?t[o]="object"==typeof r[o]?chunk_HHQZCQ2Q_i(r[o],e[o]):e[o]+" "+r[o]:t[o]=r[o];for(let r in e)t.hasOwnProperty(r)||(t[r]=e[r]);return t},chunk_HHQZCQ2Q_a=r=>r&&"string"==typeof r?r.replace(/\s+/g," ").trim():r;function createClassUtils(r){var e=createClassMap(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,i=void 0===o?{}:o;return{getClassGroupId:function(r){var t=r.split("-");return""===t[0]&&1!==t.length&&t.shift(),getGroupRecursive(t,e)||getGroupIdForArbitraryProperty(r)},getConflictingClassGroupIds:function(r,e){var o=t[r]||[];return e&&i[r]?[].concat(o,i[r]):o}}}function getGroupRecursive(r,e){if(0===r.length)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),i=o?getGroupRecursive(r.slice(1),o):void 0;if(i)return i;if(0!==e.validators.length){var n=r.join("-");return e.validators.find(function(r){return(0,r.validator)(n)})?.classGroupId}}var o=/^\[(.+)\]$/;function getGroupIdForArbitraryProperty(r){if(o.test(r)){var e=o.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function createClassMap(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]};return getPrefixedClassGroupEntries(Object.entries(r.classGroups),t).forEach(function(r){var t=r[0];processClassesRecursively(r[1],o,t,e)}),o}function processClassesRecursively(r,e,t,o){r.forEach(function(r){if("string"==typeof r){(""===r?e:getPart(e,r)).classGroupId=t;return}if("function"==typeof r){if(isThemeGetter(r)){processClassesRecursively(r(o),e,t,o);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(function(r){var i=r[0];processClassesRecursively(r[1],getPart(e,i),t,o)})})}function getPart(r,e){var t=r;return e.split("-").forEach(function(r){t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t}function isThemeGetter(r){return r.isThemeGetter}function getPrefixedClassGroupEntries(r,e){return e?r.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?e+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){return[e+r[0],r[1]]})):r})]}):r}function createLruCache(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function update(i,n){t.set(i,n),++e>r&&(e=0,o=t,t=new Map)}return{get:function(r){var e=t.get(r);return void 0!==e?e:void 0!==(e=o.get(r))?(update(r,e),e):void 0},set:function(r,e){t.has(r)?t.set(r,e):update(r,e)}}}function createSplitModifiers(r){var e=r.separator||":",t=1===e.length,o=e[0],i=e.length;return function(r){for(var n,a=[],l=0,u=0,d=0;d<r.length;d++){var p=r[d];if(0===l){if(p===o&&(t||r.slice(d,d+i)===e)){a.push(r.slice(u,d)),u=d+i;continue}if("/"===p){n=d;continue}}"["===p?l++:"]"===p&&l--}var b=0===a.length?r:r.substring(u),g=b.startsWith("!"),m=g?b.substring(1):b;return{modifiers:a,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:n&&n>u?n-u:void 0}}}function sortModifiers(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(r){"["===r[0]?(e.push.apply(e,t.sort().concat([r])),t=[]):t.push(r)}),e.push.apply(e,t.sort()),e}function createConfigUtils(r){return{cache:createLruCache(r.cacheSize),splitModifiers:createSplitModifiers(r),...createClassUtils(r)}}var i=/\s+/;function mergeClassList(r,e){var t=e.splitModifiers,o=e.getClassGroupId,n=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(i).map(function(r){var e=t(r),i=e.modifiers,n=e.hasImportantModifier,a=e.baseClassName,l=e.maybePostfixModifierPosition,u=o(l?a.substring(0,l):a),d=!!l;if(!u){if(!l||!(u=o(a)))return{isTailwindClass:!1,originalClassName:r};d=!1}var p=sortModifiers(i).join(":");return{isTailwindClass:!0,modifierId:n?p+"!":p,classGroupId:u,originalClassName:r,hasPostfixModifier:d}}).reverse().filter(function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,t=r.classGroupId,o=r.hasPostfixModifier,i=e+t;return!a.has(i)&&(a.add(i),n(t,o).forEach(function(r){return a.add(e+r)}),!0)}).reverse().map(function(r){return r.originalClassName}).join(" ")}function twJoin(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=toValue(r))&&(o&&(o+=" "),o+=e);return o}function toValue(r){if("string"==typeof r)return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=toValue(r[o]))&&(t&&(t+=" "),t+=e);return t}function createTailwindMerge(){for(var r,e,t,o=arguments.length,i=Array(o),n=0;n<o;n++)i[n]=arguments[n];var a=initTailwindMerge;function initTailwindMerge(o){var n=i[0];return e=(r=createConfigUtils(i.slice(1).reduce(function(r,e){return e(r)},n()))).cache.get,t=r.cache.set,a=tailwindMerge,tailwindMerge(o)}function tailwindMerge(o){var i=e(o);if(i)return i;var n=mergeClassList(o,r);return t(o,n),n}return function(){return a(twJoin.apply(null,arguments))}}function fromTheme(r){var themeGetter=function(e){return e[r]||[]};return themeGetter.isThemeGetter=!0,themeGetter}var n=/^\[(?:([a-z-]+):)?(.+)\]$/i,a=/^\d+\/\d+$/,l=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,d=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function isLength(r){return isNumber(r)||l.has(r)||a.test(r)||isArbitraryLength(r)}function isArbitraryLength(r){return getIsArbitraryValue(r,"length",isLengthOnly)}function isArbitrarySize(r){return getIsArbitraryValue(r,"size",isNever)}function isArbitraryPosition(r){return getIsArbitraryValue(r,"position",isNever)}function isArbitraryUrl(r){return getIsArbitraryValue(r,"url",isUrl)}function isArbitraryNumber(r){return getIsArbitraryValue(r,"number",isNumber)}function isNumber(r){return!Number.isNaN(Number(r))}function isPercent(r){return r.endsWith("%")&&isNumber(r.slice(0,-1))}function isInteger(r){return isIntegerOnly(r)||getIsArbitraryValue(r,"number",isIntegerOnly)}function isArbitraryValue(r){return n.test(r)}function isAny(){return!0}function isTshirtSize(r){return u.test(r)}function isArbitraryShadow(r){return getIsArbitraryValue(r,"",isShadow)}function getIsArbitraryValue(r,e,t){var o=n.exec(r);return!!o&&(o[1]?o[1]===e:t(o[2]))}function isLengthOnly(r){return d.test(r)}function isNever(){return!1}function isUrl(r){return r.startsWith("url(")}function isIntegerOnly(r){return Number.isInteger(Number(r))}function isShadow(r){return p.test(r)}function getDefaultConfig(){var r=fromTheme("colors"),e=fromTheme("spacing"),t=fromTheme("blur"),o=fromTheme("brightness"),i=fromTheme("borderColor"),n=fromTheme("borderRadius"),a=fromTheme("borderSpacing"),l=fromTheme("borderWidth"),u=fromTheme("contrast"),d=fromTheme("grayscale"),p=fromTheme("hueRotate"),b=fromTheme("invert"),g=fromTheme("gap"),m=fromTheme("gradientColorStops"),y=fromTheme("gradientColorStopPositions"),h=fromTheme("inset"),v=fromTheme("margin"),A=fromTheme("opacity"),w=fromTheme("padding"),x=fromTheme("saturate"),k=fromTheme("scale"),S=fromTheme("sepia"),C=fromTheme("skew"),V=fromTheme("space"),T=fromTheme("translate"),getOverscroll=function(){return["auto","contain","none"]},getOverflow=function(){return["auto","hidden","clip","visible","scroll"]},getSpacingWithAutoAndArbitrary=function(){return["auto",isArbitraryValue,e]},getSpacingWithArbitrary=function(){return[isArbitraryValue,e]},getLengthWithEmpty=function(){return["",isLength]},getNumberWithAutoAndArbitrary=function(){return["auto",isNumber,isArbitraryValue]},getPositions=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},getLineStyles=function(){return["solid","dashed","dotted","double","none"]},getBlendModes=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},getAlign=function(){return["start","end","center","between","around","evenly","stretch"]},getZeroAndEmpty=function(){return["","0",isArbitraryValue]},getBreaks=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},getNumber=function(){return[isNumber,isArbitraryNumber]},getNumberAndArbitrary=function(){return[isNumber,isArbitraryValue]};return{cacheSize:500,theme:{colors:[isAny],spacing:[isLength],blur:["none","",isTshirtSize,isArbitraryValue],brightness:getNumber(),borderColor:[r],borderRadius:["none","","full",isTshirtSize,isArbitraryValue],borderSpacing:getSpacingWithArbitrary(),borderWidth:getLengthWithEmpty(),contrast:getNumber(),grayscale:getZeroAndEmpty(),hueRotate:getNumberAndArbitrary(),invert:getZeroAndEmpty(),gap:getSpacingWithArbitrary(),gradientColorStops:[r],gradientColorStopPositions:[isPercent,isArbitraryLength],inset:getSpacingWithAutoAndArbitrary(),margin:getSpacingWithAutoAndArbitrary(),opacity:getNumber(),padding:getSpacingWithArbitrary(),saturate:getNumber(),scale:getNumber(),sepia:getZeroAndEmpty(),skew:getNumberAndArbitrary(),space:getSpacingWithArbitrary(),translate:getSpacingWithArbitrary()},classGroups:{aspect:[{aspect:["auto","square","video",isArbitraryValue]}],container:["container"],columns:[{columns:[isTshirtSize]}],"break-after":[{"break-after":getBreaks()}],"break-before":[{"break-before":getBreaks()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(getPositions(),[isArbitraryValue])}],overflow:[{overflow:getOverflow()}],"overflow-x":[{"overflow-x":getOverflow()}],"overflow-y":[{"overflow-y":getOverflow()}],overscroll:[{overscroll:getOverscroll()}],"overscroll-x":[{"overscroll-x":getOverscroll()}],"overscroll-y":[{"overscroll-y":getOverscroll()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",isInteger]}],basis:[{basis:getSpacingWithAutoAndArbitrary()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",isArbitraryValue]}],grow:[{grow:getZeroAndEmpty()}],shrink:[{shrink:getZeroAndEmpty()}],order:[{order:["first","last","none",isInteger]}],"grid-cols":[{"grid-cols":[isAny]}],"col-start-end":[{col:["auto",{span:["full",isInteger]},isArbitraryValue]}],"col-start":[{"col-start":getNumberWithAutoAndArbitrary()}],"col-end":[{"col-end":getNumberWithAutoAndArbitrary()}],"grid-rows":[{"grid-rows":[isAny]}],"row-start-end":[{row:["auto",{span:[isInteger]},isArbitraryValue]}],"row-start":[{"row-start":getNumberWithAutoAndArbitrary()}],"row-end":[{"row-end":getNumberWithAutoAndArbitrary()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",isArbitraryValue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",isArbitraryValue]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(getAlign())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(getAlign(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(getAlign(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[V]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[V]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",isArbitraryValue,e]}],"min-w":[{"min-w":["min","max","fit",isArbitraryValue,isLength]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[isTshirtSize]},isTshirtSize,isArbitraryValue]}],h:[{h:[isArbitraryValue,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",isArbitraryValue,isLength]}],"max-h":[{"max-h":[isArbitraryValue,e,"min","max","fit"]}],"font-size":[{text:["base",isTshirtSize,isArbitraryLength]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",isArbitraryNumber]}],"font-family":[{font:[isAny]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",isArbitraryValue]}],"line-clamp":[{"line-clamp":["none",isNumber,isArbitraryNumber]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",isArbitraryValue,isLength]}],"list-image":[{"list-image":["none",isArbitraryValue]}],"list-style-type":[{list:["none","disc","decimal",isArbitraryValue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(getLineStyles(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",isLength]}],"underline-offset":[{"underline-offset":["auto",isArbitraryValue,isLength]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:getSpacingWithArbitrary()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",isArbitraryValue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",isArbitraryValue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(getPositions(),[isArbitraryPosition])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",isArbitrarySize]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},isArbitraryUrl]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[].concat(getLineStyles(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:getLineStyles()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(getLineStyles())}],"outline-offset":[{"outline-offset":[isArbitraryValue,isLength]}],"outline-w":[{outline:[isLength]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:getLengthWithEmpty()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[isLength]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",isTshirtSize,isArbitraryShadow]}],"shadow-color":[{shadow:[isAny]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":getBlendModes()}],"bg-blend":[{"bg-blend":getBlendModes()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",isTshirtSize,isArbitraryValue]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[b]}],saturate:[{saturate:[x]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",isArbitraryValue]}],duration:[{duration:getNumberAndArbitrary()}],ease:[{ease:["linear","in","out","in-out",isArbitraryValue]}],delay:[{delay:getNumberAndArbitrary()}],animate:[{animate:["none","spin","ping","pulse","bounce",isArbitraryValue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[isInteger,isArbitraryValue]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",isArbitraryValue]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",isArbitraryValue]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":getSpacingWithArbitrary()}],"scroll-mx":[{"scroll-mx":getSpacingWithArbitrary()}],"scroll-my":[{"scroll-my":getSpacingWithArbitrary()}],"scroll-ms":[{"scroll-ms":getSpacingWithArbitrary()}],"scroll-me":[{"scroll-me":getSpacingWithArbitrary()}],"scroll-mt":[{"scroll-mt":getSpacingWithArbitrary()}],"scroll-mr":[{"scroll-mr":getSpacingWithArbitrary()}],"scroll-mb":[{"scroll-mb":getSpacingWithArbitrary()}],"scroll-ml":[{"scroll-ml":getSpacingWithArbitrary()}],"scroll-p":[{"scroll-p":getSpacingWithArbitrary()}],"scroll-px":[{"scroll-px":getSpacingWithArbitrary()}],"scroll-py":[{"scroll-py":getSpacingWithArbitrary()}],"scroll-ps":[{"scroll-ps":getSpacingWithArbitrary()}],"scroll-pe":[{"scroll-pe":getSpacingWithArbitrary()}],"scroll-pt":[{"scroll-pt":getSpacingWithArbitrary()}],"scroll-pr":[{"scroll-pr":getSpacingWithArbitrary()}],"scroll-pb":[{"scroll-pb":getSpacingWithArbitrary()}],"scroll-pl":[{"scroll-pl":getSpacingWithArbitrary()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",isArbitraryValue]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[isLength,isArbitraryNumber]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var b=createTailwindMerge(getDefaultConfig);function mergeConfigs(r,e){for(var t in e)mergePropertyRecursively(r,t,e[t]);return r}var g=Object.prototype.hasOwnProperty,m=new Set(["string","number","boolean"]);function mergePropertyRecursively(r,e,t){if(!g.call(r,e)||m.has(typeof t)||null===t){r[e]=t;return}if(Array.isArray(t)&&Array.isArray(r[e])){r[e]=r[e].concat(t);return}if("object"==typeof t&&"object"==typeof r[e]){if(null===r[e]){r[e]=t;return}for(var o in t)mergePropertyRecursively(r[e],o,t[o])}}function extendTailwindMerge(r){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return"function"==typeof r?createTailwindMerge.apply(void 0,[getDefaultConfig,r].concat(t)):createTailwindMerge.apply(void 0,[function(){return mergeConfigs(getDefaultConfig(),r)}].concat(t))}var y={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},K=r=>r||void 0,M=(...r)=>K(s(r).filter(Boolean).join(" ")),h=null,v={},A=!1,j=(...r)=>e=>e.twMerge?((!h||A)&&(A=!1,h=c(v)?b:extendTailwindMerge(v)),K(h(M(r)))):M(r),_=(r,e)=>{for(let t in e)r.hasOwnProperty(t)?r[t]=M(r[t],e[t]):r[t]=e[t];return r},me=(r,e)=>{var t,o,i,n,a;let{slots:l={},variants:u={},compoundVariants:d=[],compoundSlots:p=[],defaultVariants:b={}}=r,g={...y,...e},m=M(null==(t=null==r?void 0:r.extend)?void 0:t.base,null==r?void 0:r.base),h=chunk_HHQZCQ2Q_i(u,null==(o=null==r?void 0:r.extend)?void 0:o.variants),w={...null==(i=null==r?void 0:r.extend)?void 0:i.defaultVariants,...b};c(g.twMergeConfig)||chunk_HHQZCQ2Q_p(g.twMergeConfig,v)||(A=!0,v=g.twMergeConfig);let x=c(l)?{}:{base:null==r?void 0:r.base,...l},k=c(null==(n=null==r?void 0:r.extend)?void 0:n.slots)?x:_(null==(a=null==r?void 0:r.extend)?void 0:a.slots,c(x)?{base:null==r?void 0:r.base}:x),b$1=e=>{var t,o,i,n;if(c(h)&&c(l)&&c(null==(t=null==r?void 0:r.extend)?void 0:t.slots))return j(m,null==e?void 0:e.class,null==e?void 0:e.className)(g);if(d&&!Array.isArray(d))throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof d}`);if(p&&!Array.isArray(p))throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof p}`);let re=(r,e,t=[],o)=>{if("string"==typeof e)t.push(chunk_HHQZCQ2Q_a(e).split(" ").map(e=>`${r}:${e}`));else if(Array.isArray(e))t.push(e.flatMap(e=>`${r}:${e}`));else if("object"==typeof e&&"string"==typeof o){let i=null==e?void 0:e[o];if(i&&"string"==typeof i){let e=chunk_HHQZCQ2Q_a(i);t[o]=t[o]?[...t[o],...e.split(" ").map(e=>`${r}:${e}`)]:e.split(" ").map(e=>`${r}:${e}`)}else Array.isArray(i)&&i.length>0&&(t[o]=i.flatMap(e=>`${r}:${e}`))}return t},U=(r,t=h,o=null)=>{let i=null==t?void 0:t[r];if(!i||c(i))return null;let n=null==e?void 0:e[r];if(null===n)return null;let a=chunk_HHQZCQ2Q_o(n),l=Array.isArray(g.responsiveVariants)&&g.responsiveVariants.length>0||!0===g.responsiveVariants,u=null==w?void 0:w[r],d=[];"object"==typeof a&&l&&(d=Object.keys(a).reduce((r,e)=>{let t=a[e],n=null==i?void 0:i[t];return"initial"===e?(u=t,r):Array.isArray(g.responsiveVariants)&&!g.responsiveVariants.includes(e)?r:re(e,n,r,o)},[]));let p=i[a]||i[chunk_HHQZCQ2Q_o(u)];return"object"==typeof d&&"string"==typeof o&&d[o]?_(d,p):d.length>0?[p,...d]:p},ne=r=>h&&"object"==typeof h?Object.keys(h).reduce((e,t)=>{let o=U(t,h,r),i="base"===r&&"string"==typeof o?o:o&&o[r];return i&&e.push(i),e},[]):null,a=e&&Object.fromEntries(Object.entries(e).filter(([,r])=>void 0!==r)),W=r=>{var t;let o="object"==typeof(null==e?void 0:e[r])?{[r]:null==(t=e[r])?void 0:t.initial}:{};return{...w,...a,...o}},z=(r=[])=>null==r?void 0:r.filter(({class:r,className:e,...t})=>Object.entries(t).every(([r,e])=>{let t=W(r);return Array.isArray(e)?e.includes(t[r]):t[r]===e})).flatMap(({class:r,className:e})=>[r,e]),D=()=>{var e;let t=z(d);return chunk_HHQZCQ2Q_y(z(null==(e=null==r?void 0:r.extend)?void 0:e.compoundVariants),t)};if(!c(l)||!c(null==(o=null==r?void 0:r.extend)?void 0:o.slots)){let r;let e=null!=(i=Array.isArray(r=D())?r.reduce((r,e)=>{if("string"==typeof e&&(r.base=j(r.base,e)(g)),"object"==typeof e)for(let t of Object.keys(e))r[t]=j(r[t],e[t])(g);return r},{}):r)?i:[],t=null!=(n=p.length<1?null:p.reduce((r,e)=>{let{slots:t=[],class:o,className:i,...n}=e;if(!c(n))for(let e of Object.keys(n)){let t=W(e)[e];if(!t||t!==n[e])return r}for(let e of t)r[e]||(r[e]=[]),r[e].push([o,i]);return r},{}))?n:[];return{..."object"!=typeof k||c(k)?{}:Object.keys(k).reduce((r,o)=>(r[o]=r=>j(k[o],ne(o),null==e?void 0:e[o],null==t?void 0:t[o],null==r?void 0:r.class,null==r?void 0:r.className)(g),r),{})}}return j(m,h?Object.keys(h).map(r=>U(r,h)):null,D(),null==e?void 0:e.class,null==e?void 0:e.className)(g)};return b$1.variantKeys=(()=>{if(!(!h||"object"!=typeof h))return Object.keys(h)})(),b$1.base=m,b$1.slots=k,b$1.variants=h,b$1.defaultVariants=w,b$1.compoundSlots=p,b$1.compoundVariants=d,b$1}}}]);