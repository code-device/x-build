(self.webpackChunk=self.webpackChunk||[]).push([[6361],{5828:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-08d1b990",path:"/guide/core/pinia.html",title:"状态管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是 Pinia ？",slug:"什么是-pinia",children:[]},{level:2,title:"Store",slug:"store",children:[{level:3,title:"内置 Store",slug:"内置-store",children:[]},{level:3,title:"创建 Store",slug:"创建-store",children:[]}]},{level:2,title:"State",slug:"state",children:[{level:3,title:"添加属性",slug:"添加属性",children:[]},{level:3,title:"在模板中使用 store",slug:"在模板中使用-store",children:[]}]},{level:2,title:"Getters",slug:"getters",children:[]},{level:2,title:"Actions",slug:"actions",children:[]},{level:2,title:"Devtools",slug:"devtools",children:[]}],filePathRelative:"guide/core/pinia.md",git:{updatedTime:1624861573e3,contributors:[]}}},5881:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return $}});var e=a(6252);const t=(0,e.Wm)("h1",{id:"状态管理",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#状态管理","aria-hidden":"true"},"#"),(0,e.Uk)(" 状态管理")],-1),p=(0,e.Wm)("h2",{id:"什么是-pinia",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#什么是-pinia","aria-hidden":"true"},"#"),(0,e.Uk)(" 什么是 Pinia ？")],-1),o=(0,e.Uk)("由于 "),l=(0,e.Wm)("code",null,"vuex 4",-1),r=(0,e.Uk)(" 对 typescript 的支持让人感到难过，所以状态管理弃用了 vuex 而采取了 "),c={href:"https://pinia.esm.dev/",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("pinia"),u=(0,e.Uk)("。"),d={class:"custom-container tip"},k=(0,e.Wm)("p",{class:"custom-container-title"},"为什么采用 Pinia ?",-1),m=(0,e.Wm)("strong",null,"Pinia",-1),h=(0,e.Uk)(" 的 API 设计非常接近 "),b=(0,e.Wm)("code",null,"Vuex 5",-1),g=(0,e.Uk)(" 的"),v={href:"https://github.com/vuejs/rfcs/discussions/270",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("提案"),W=(0,e.Uk)("。（作者是 Vue 核心团队成员）"),x=(0,e.Wm)("li",null,[(0,e.Uk)("无需像 "),(0,e.Wm)("code",null,"Vuex 4"),(0,e.Uk)(" 自定义复杂的类型来支持 typescript，天生具备完美的类型推断。")],-1),y=(0,e.Wm)("li",null,"模块化设计，你引入的每一个 store 在打包时都可以自动拆分他们。",-1),U=(0,e.Wm)("li",null,"无嵌套结构，但你可以在任意的 store 之间交叉组合使用。",-1),S=(0,e.Wm)("li",null,[(0,e.Wm)("strong",null,"Pinia"),(0,e.Uk)(" 与 "),(0,e.Wm)("strong",null,"Vue devtools"),(0,e.Uk)(" 挂钩，不会影响 Vue 3 开发体验。")],-1),w=(0,e.Uk)("下面简单的介绍一下如何使用 Pinia，并对比 vuex 有哪些区别与注意事项，具体请参考"),P={href:"https://pinia.esm.dev/",target:"_blank",rel:"noopener noreferrer"},V=(0,e.Uk)("官方文档"),A=(0,e.Uk)("。"),_=(0,e.Wm)("h2",{id:"store",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#store","aria-hidden":"true"},"#"),(0,e.Uk)(" Store")],-1),L=(0,e.Wm)("p",null,"在深入研究核心概念之前，我们需要知道脚手架内置了哪些 Store 和如何自定义创建 Store。",-1),D=(0,e.Wm)("h3",{id:"内置-store",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#内置-store","aria-hidden":"true"},"#"),(0,e.Uk)(" 内置 Store")],-1),I=(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",null,"Store"),(0,e.Wm)("th",null,"说明"),(0,e.Wm)("th",null,"API")])],-1),j=(0,e.Wm)("td",null,"useUserStore",-1),E=(0,e.Wm)("td",null,"用户登录与信息管理",-1),G={href:"/reference/store/user.md",target:"_blank",rel:"noopener noreferrer"},R=(0,e.Uk)("详情"),C=(0,e.Wm)("td",null,"useMenuStore",-1),q=(0,e.Wm)("td",null,"路由&菜单管理",-1),H={href:"/reference/store/menu.md",target:"_blank",rel:"noopener noreferrer"},J=(0,e.Uk)("详情"),M=(0,e.Wm)("td",null,"useLogStore",-1),N=(0,e.Wm)("td",null,"日志管理",-1),O={href:"/reference/store/log.md",target:"_blank",rel:"noopener noreferrer"},T=(0,e.Uk)("详情"),Y=(0,e.uE)('<h3 id="创建-store" tabindex="-1"><a class="header-anchor" href="#创建-store" aria-hidden="true">#</a> 创建 Store</h3><p>Pinia 已经内置在脚手架中，并且与 vue 已经做好了关联，你可以在任何位置\b创建一个 store：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  getters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这与 Vuex 有很大不同，它是标准的 Javascript 模块导出，这种方式也让开发人员和你的 IDE 更加清楚 store 来自哪里。</p><div class="custom-container warning"><p class="custom-container-title">Pinia 与 Vuex 的区别</p><ul><li><strong>id</strong> 是必要的，它将所使用 store 连接到 devtools。</li><li>创建方式：<code>new Vuex.Store(...)</code>(vuex3)，<code>createStore(...)</code>(vuex4)。</li><li>对比于 vuex3 ，state 现在是一个<strong>函数返回对象</strong>。</li><li>没有 <strong>mutations</strong>，不用担心，state 的变化依然记录在 devtools 中。</li></ul></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><h3 id="添加属性" tabindex="-1"><a class="header-anchor" href="#添加属性" aria-hidden="true">#</a> 添加属性</h3><p>创建好 store 之后，可以在 state 中创建一些属性了，</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;codexu&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将 store 中的 state 属性设置为一个函数，该函数返回一个包含不同状态值的对象，这与我们在组件中定义数据的方式非常相似。</p><h3 id="在模板中使用-store" tabindex="-1"><a class="header-anchor" href="#在模板中使用-store" aria-hidden="true">#</a> 在模板中使用 store</h3><p>现在我们想从 store 中获取到 name 的状态，我们只需要使用以下的方式即可：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>userStore<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>\n\n<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> <span class="token punctuation">{</span> userStore <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意这里并不需要 <code>userStore.state.name</code>。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>虽然上面的写法很舒适，但是你一定不要用解构的方式去提取它内部的值，这样做的话，会失去它的响应式：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> email <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div></div><h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h2><p>Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能，传统的函数声明使用 this 代替了 state 的传参方法，但箭头函数还是要使用函数的第一个参数来获取 state ，因为箭头函数处理 this 的作用范围：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>getters<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token function">nameLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>length\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">nameLength</span><span class="token operator">:</span> state <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>name<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n  <span class="token function-variable function">nameLength</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>length ❌ \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><p>这里与 Vuex 有极大的不同，Pinia 仅提供了一种方法来定义如何更改状态的规则，<strong>放弃 mutations 只依靠 Actions</strong>，这是一项重大的改变。</p><div class="custom-container tip"><p class="custom-container-title">Pinia 让 Actions 更加的灵活</p><ul><li>可以通过<strong>组件</strong>或其他 <strong>action</strong> 调用</li><li>可以从<strong>其他 store</strong> 的 action 中调用</li><li>直接在商店实例上调用</li><li>支持<strong>同步</strong>或<strong>异步</strong></li><li>有任意数量的参数</li><li>可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）</li><li>可以 <code>$patch</code> 方法直接更改状态属性</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>actions<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">insertPost</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">doAjaxRequest</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="devtools" tabindex="-1"><a class="header-anchor" href="#devtools" aria-hidden="true">#</a> Devtools</h2><p>脚手架已内置下面的代码，这将添加 devtools 支持：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia<span class="token punctuation">,</span> PiniaPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PiniaPlugin<span class="token punctuation">)</span>\n<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 Vue 3 中，仍然不支持时间旅行和编辑等一些功能，因为 vue-devtools 还没有公开必要的 API。</p>',26);var $={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,p,(0,e.Wm)("p",null,[o,l,r,(0,e.Wm)("a",c,[i,(0,e.Wm)(a)]),u]),(0,e.Wm)("div",d,[k,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[m,h,b,g,(0,e.Wm)("a",v,[f,(0,e.Wm)(a)]),W]),x,y,U,S])]),(0,e.Wm)("p",null,[w,(0,e.Wm)("a",P,[V,(0,e.Wm)(a)]),A]),_,L,D,(0,e.Wm)("table",null,[I,(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[j,E,(0,e.Wm)("td",null,[(0,e.Wm)("a",G,[R,(0,e.Wm)(a)])])]),(0,e.Wm)("tr",null,[C,q,(0,e.Wm)("td",null,[(0,e.Wm)("a",H,[J,(0,e.Wm)(a)])])]),(0,e.Wm)("tr",null,[M,N,(0,e.Wm)("td",null,[(0,e.Wm)("a",O,[T,(0,e.Wm)(a)])])])])]),Y],64)}}}}]);