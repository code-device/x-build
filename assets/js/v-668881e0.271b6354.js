(self.webpackChunk=self.webpackChunk||[]).push([[259],{4910:function(e,a,n){"use strict";n.r(a),n.d(a,{data:function(){return t}});const t={key:"v-668881e0",path:"/guide/core/env.html",title:"环境变量",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Mode",slug:"mode",children:[]},{level:2,title:"Params",slug:"params",children:[{level:3,title:"VUE_APP_TITLE",slug:"vue-app-title",children:[]},{level:3,title:"VUE_APP_API",slug:"vue-app-api",children:[]},{level:3,title:"VUE_APP_STATIC_URL",slug:"vue-app-static-url",children:[]}]}],filePathRelative:"guide/core/env.md",git:{updatedTime:1624861573e3,contributors:[]}}},9138:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return c}});var t=n(6252);const s=(0,t.uE)('<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1><p>项目根目录中的下列文件来指定环境变量：</p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>.env # 在所有的环境中被载入</li><li>.env.local # 在所有的环境中被载入，但会被 git 忽略</li><li>.env.[mode] # 只在指定的模式中被载入</li><li>.env.[mode].local # 只在指定的模式中被载入，但会被 git 忽略</li></ul></div><p>环境文件只包含环境变量的“键=值”对：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_TITLE</span><span class="token operator">=</span>X-BUILD\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> Mode</h2><table><thead><tr><th>文件</th><th>说明</th><th>命令</th></tr></thead><tbody><tr><td>.env</td><td>通用配置</td><td>-</td></tr><tr><td>.env.development</td><td>开发环境</td><td>npm run serve</td></tr><tr><td>.env.test</td><td>测试环境</td><td>npm run build:test</td></tr><tr><td>.env.production</td><td>生产环境</td><td>npm run build</td></tr></tbody></table><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><h3 id="vue-app-title" tabindex="-1"><a class="header-anchor" href="#vue-app-title" aria-hidden="true">#</a> VUE_APP_TITLE</h3><p>用于显示默认的页面标题，配合路由 mate.title 属性，最后展示效果：</p><div class="language-title ext-title line-numbers-mode"><pre class="language-title"><code>首页 ｜ X-BUILD\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vue-app-api" tabindex="-1"><a class="header-anchor" href="#vue-app-api" aria-hidden="true">#</a> VUE_APP_API</h3><p>默认异步请求路径前缀，区分开发环境和生产环，在做异步请求时，推荐使用 <code>@/libs/request.ts</code> 来创建 <code>axios</code> 请求实例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  baseURL<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span><span class="token punctuation">,</span>\n  timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>代码参考 @/libs/request.js</p></blockquote><h3 id="vue-app-static-url" tabindex="-1"><a class="header-anchor" href="#vue-app-static-url" aria-hidden="true">#</a> VUE_APP_STATIC_URL</h3>',16),l=(0,t.Uk)("静态资源路径前缀，区分开发环境和生产环境，具体用法参考 "),i={href:"/Components/Static.md",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("静态资源加载组件"),p=(0,t.Uk)("。"),d=(0,t.Wm)("div",{class:"custom-container warning"},[(0,t.Wm)("p",{class:"custom-container-title"},"注意"),(0,t.Wm)("p",null,"环境变量必须以VUE_APP_为开头，例如：VUE_APP_API、VUE_APP_TITLE")],-1);var c={render:function(e,a){const n=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,(0,t.Wm)("p",null,[l,(0,t.Wm)("a",i,[r,(0,t.Wm)(n)]),p]),d],64)}}}}]);