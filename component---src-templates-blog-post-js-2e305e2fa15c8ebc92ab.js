(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[989],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,n){var o=n(7228);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,n){var o=n(3646),r=n(6860),i=n(379),s=n(8206);t.exports=function(t){return o(t)||r(t)||i(t)||s()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,n){var o=n(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},9413:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(7154)),i=o(n(7316)),s=o(n(5354)),a=o(n(7294)),u=o(n(5697)),d=n(9462),l=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="https-ejayyy-github-io",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,d.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,o=(0,i.default)(t,["config","placeholder"]);return a.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},e}(a.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string}},6748:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(5354)),i=o(n(7294)),s=o(n(5697)),a=function(t){function e(){return t.apply(this,arguments)||this}(0,r.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(i.default.Component);e.default=a,a.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},a.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},4838:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(7154)),i=o(n(7316)),s=o(n(5354)),a=o(n(7294)),u=o(n(5697)),d=n(9462),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="https-ejayyy-github-io",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,d.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var e=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);e.parentNode.removeChild(e)}},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return a.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},e}(a.default.Component);e.default=l,l.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},4332:function(t,e,n){"use strict";var o=n(5318);e.ZP=void 0;var r=o(n(4838));r.default,o(n(9413)).default,o(n(6748)).default;var i=r.default;e.ZP=i},9462:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,s=function(){o=null,n||t.apply(r,i)},a=n&&!o;window.clearTimeout(o),o=setTimeout(s,e),a&&t.apply(r,i)}},e.isReactElement=s,e.shallowComparison=function t(e,n){var o,i=new Set(Object.keys(e).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof e[o]){if(t(e[o],n[o]))return!0}else if(e[o]!==n[o]&&!s(e[o]))return!0})).length};var r=o(n(319)),i=o(n(7294));function s(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},4870:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});n(7294);var o=n(8100),r=n(4332),i=n(2013),s=n(3751);var a={name:"sg48g1",styles:"margin:3rem 0"},u={name:"1etiokt",styles:"margin:0.75rem 0;font-size:2.5rem;font-weight:900;text-stroke:2px var(--textNormal);-webkit-text-stroke:2px var(--textNormal);"};function d(t){var e=t.data.markdownRemark,n={identifier:e.id,title:e.title};return(0,o.tZ)(i.Z,null,(0,o.tZ)(s.Z,{title:e.frontmatter.title,description:e.frontmatter.spoiler}),(0,o.tZ)("div",{css:a},(0,o.tZ)("h1",{css:u},e.frontmatter.title),(0,o.tZ)("p",null,e.frontmatter.date)),(0,o.tZ)("div",{dangerouslySetInnerHTML:{__html:e.html}}),(0,o.tZ)(r.ZP,{config:n}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2e305e2fa15c8ebc92ab.js.map