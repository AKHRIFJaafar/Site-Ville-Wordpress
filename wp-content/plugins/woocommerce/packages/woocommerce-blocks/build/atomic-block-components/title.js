(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[18],{175:function(t,e,c){"use strict";var o=c(11),n=c.n(o),r=c(25),a=c.n(r),i=c(0),l=(c(2),c(26)),s=c(8),u=c.n(s);c(220);e.a=function(t){var e=t.className,c=void 0===e?"":e,o=t.disabled,r=void 0!==o&&o,s=t.name,p=t.permalink,b=void 0===p?"":p,d=a()(t,["className","disabled","name","permalink"]),m=u()("wc-block-components-product-name",c);return r?Object(i.createElement)("span",n()({className:m},d),Object(l.decodeEntities)(s)):Object(i.createElement)("a",n()({className:m,href:b},d),Object(l.decodeEntities)(s))}},220:function(t,e){},384:function(t,e,c){"use strict";var o=c(5),n=c.n(o),r=c(6);function a(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}function i(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?a(Object(c),!0).forEach((function(e){n()(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}var l={headingLevel:{type:"number",default:2},productLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(r.W)()&&(l=i(i({},l),{},{align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}})),e.a=l},390:function(t,e,c){"use strict";var o=c(5),n=c.n(o),r=c(0),a=(c(2),c(8)),i=c.n(a),l=c(38),s=c(22),u=c(6),p=function(t){var e=t.color,c=t.fontSize;return Object(u.W)()?{color:e,fontSize:c}:{}},b=c(68),d=c(175),m=c(85);c(545),e.a=Object(b.withProductDataContext)((function(t){var e,c,o,a=t.className,b=t.headingLevel,O=void 0===b?2:b,f=t.productLink,j=void 0===f||f,y=t.align,v=t.color,w=t.customColor,g=t.fontSize,k=t.customFontSize,h=Object(l.useInnerBlockLayoutContext)().parentClassName,S=Object(l.useProductDataContext)().product,z=Object(m.a)().dispatchStoreEvent,C="h".concat(O),E=Object(s.getColorClassName)("color",v),N=Object(s.getFontSizeClass)(g),P=i()((e={"has-text-color":v||w,"has-font-size":g||k},n()(e,E,E),n()(e,N,N),e));return S.id?Object(r.createElement)(C,{className:i()(a,"wc-block-components-product-title",(c={},n()(c,"".concat(h,"__product-title"),h),n()(c,"wc-block-components-product-title--align-".concat(y),y&&Object(u.W)()),c))},Object(r.createElement)(d.a,{className:i()(n()({},P,Object(u.W)())),disabled:!j,name:S.name,permalink:S.permalink,rel:j?"nofollow":null,style:p({color:w,fontSize:k}),onClick:function(){z("product-view-link",{product:S})}})):Object(r.createElement)(C,{className:i()(a,"wc-block-components-product-title",(o={},n()(o,"".concat(h,"__product-title"),h),n()(o,"wc-block-components-product-title--align-".concat(y),y&&Object(u.W)()),n()(o,P,Object(u.W)()),o)),style:p({color:w,fontSize:k})})}))},545:function(t,e){},941:function(t,e,c){"use strict";c.r(e);var o=c(939),n=c(390),r=c(384);e.default=Object(o.a)(r.a)(n.a)}}]);