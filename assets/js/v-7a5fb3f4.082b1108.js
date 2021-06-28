(self.webpackChunk=self.webpackChunk||[]).push([[8814],{6728:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-7a5fb3f4",path:"/guide/ui/components.html",title:"组件",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"内置全局组件",slug:"内置全局组件",children:[]},{level:2,title:"组件库",slug:"组件库",children:[{level:3,title:"全局加载",slug:"全局加载",children:[]},{level:3,title:"国际化",slug:"国际化",children:[]},{level:3,title:"优化",slug:"优化",children:[]}]}],filePathRelative:"guide/ui/components.md",git:{updatedTime:1624861573e3,contributors:[]}}},9745:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return w}});var e=a(6252);const l=(0,e.Wm)("h1",{id:"组件",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#组件","aria-hidden":"true"},"#"),(0,e.Uk)(" 组件")],-1),t=(0,e.Wm)("h2",{id:"内置全局组件",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#内置全局组件","aria-hidden":"true"},"#"),(0,e.Uk)(" 内置全局组件")],-1),p=(0,e.Wm)("p",null,"内置两个非常实用的全局组件：",-1),r=(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",null,"组件"),(0,e.Wm)("th",null,"说明"),(0,e.Wm)("th",null,"API")])],-1),o=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"<static-file />")],-1),c=(0,e.Wm)("td",null,[(0,e.Uk)("根据"),(0,e.Wm)("strong",null,"环境变量"),(0,e.Uk)("动态引入静态资源")],-1),i={href:"/reference/components/staticFile.md",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("详情"),m=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"<svg-icon />")],-1),d=(0,e.Wm)("td",null,"自动加载的 SVG 图标",-1),k={href:"/reference/components/svgIcon.md",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("详情"),h=(0,e.Wm)("h2",{id:"组件库",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#组件库","aria-hidden":"true"},"#"),(0,e.Uk)(" 组件库")],-1),f=(0,e.Uk)("基础组件库选择 "),g={href:"https://element-plus.gitee.io/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("Element-plus"),v=(0,e.Uk)("，如果不了解请详细阅读文档。"),y=(0,e.uE)('<h3 id="全局加载" tabindex="-1"><a class="header-anchor" href="#全局加载" aria-hidden="true">#</a> 全局加载</h3><p>所有的组件均在 @/components/index.ts 中按需加载：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  ElButton<span class="token punctuation">,</span>\n  ElNotification<span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>\n  ElButton<span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span>\n  ElNotification<span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>分别以 components、plugins 两种形式导出，例如 ElButton 为 components，同时 <code>Element-plus</code> 也提供了 例如 ElNotification 这种插件的形式导出。</p><h3 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h3><p>默认情况已经将 element-plus 设置为中文：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> lang <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span><span class="token punctuation">;</span>\n\nlocale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h3><p>使用 babel 已对组件库做按需加载处理。</p>',9);var w={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,t,p,(0,e.Wm)("table",null,[r,(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[o,c,(0,e.Wm)("td",null,[(0,e.Wm)("a",i,[u,(0,e.Wm)(a)])])]),(0,e.Wm)("tr",null,[m,d,(0,e.Wm)("td",null,[(0,e.Wm)("a",k,[b,(0,e.Wm)(a)])])])])]),h,(0,e.Wm)("p",null,[f,(0,e.Wm)("a",g,[W,(0,e.Wm)(a)]),v]),y],64)}}}}]);