import{r as s,o as t,c as r,a,b as i,F as o,d as p,e}from"./app.b400f69e.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},d=p(`<h1 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h1><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684\u4E0B\u5217\u6587\u4EF6\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>.env # \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165</li><li>.env.local # \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</li><li>.env.[mode] # \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165</li><li>.env.[mode].local # \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</li></ul></div><p>\u73AF\u5883\u6587\u4EF6\u53EA\u5305\u542B\u73AF\u5883\u53D8\u91CF\u7684\u201C\u952E=\u503C\u201D\u5BF9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VITE_APP_TITLE</span><span class="token operator">=</span>X-BUILD
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> Mode</h2><table><thead><tr><th>\u6587\u4EF6</th><th>\u8BF4\u660E</th><th>\u547D\u4EE4</th></tr></thead><tbody><tr><td>.env</td><td>\u901A\u7528\u914D\u7F6E</td><td>-</td></tr><tr><td>.env.development</td><td>\u5F00\u53D1\u73AF\u5883</td><td>npm run dev</td></tr><tr><td>.env.staging</td><td>\u9884\u751F\u4EA7\u73AF\u5883</td><td>npm run staging</td></tr><tr><td>.env.production</td><td>\u751F\u4EA7\u73AF\u5883</td><td>npm run build</td></tr></tbody></table><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><h3 id="vite-app-title" tabindex="-1"><a class="header-anchor" href="#vite-app-title" aria-hidden="true">#</a> VITE_APP_TITLE</h3><p>\u7528\u4E8E\u663E\u793A\u9ED8\u8BA4\u7684\u9875\u9762\u6807\u9898\uFF0C\u914D\u5408\u8DEF\u7531 mate.title \u5C5E\u6027\uFF0C\u6700\u540E\u5C55\u793A\u6548\u679C\uFF1A</p><div class="language-title ext-title line-numbers-mode"><pre class="language-title"><code>\u9996\u9875 \uFF5C X-BUILD 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vite-app-base-url" tabindex="-1"><a class="header-anchor" href="#vite-app-base-url" aria-hidden="true">#</a> VITE_APP_BASE_URL</h3><p>\u9ED8\u8BA4\u5F02\u6B65\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00\uFF0C\u533A\u5206\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\uFF0C\u5728\u505A\u5F02\u6B65\u8BF7\u6C42\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 <code>@/libs/request.ts</code> \u6765\u521B\u5EFA <code>axios</code> \u8BF7\u6C42\u5B9E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u4EE3\u7801\u53C2\u8003 @/libs/request.js</p></blockquote><h3 id="vite-app-static-url" tabindex="-1"><a class="header-anchor" href="#vite-app-static-url" aria-hidden="true">#</a> VITE_APP_STATIC_URL</h3>`,16),u=e("\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\u524D\u7F00\uFF0C\u533A\u5206\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\uFF0C\u5177\u4F53\u7528\u6CD5\u53C2\u8003 "),h={href:"/Components/Static.md",target:"_blank",rel:"noopener noreferrer"},_=e("\u9759\u6001\u8D44\u6E90\u52A0\u8F7D\u7EC4\u4EF6"),b=e("\u3002"),m=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"\u6CE8\u610F"),a("p",null,[e("\u73AF\u5883\u53D8\u91CF\u5FC5\u987B\u4EE5 "),a("code",null,"VITE_APP"),e(" \u4E3A\u5F00\u5934\uFF0C\u4F8B\u5982\uFF1AVITE_APP_TITLE\u3001VITE_APP_STATIC_URL\u3002")])],-1),v=a("h3",{id:"vite-public-path",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vite-public-path","aria-hidden":"true"},"#"),e(" VITE_PUBLIC_PATH")],-1),k=a("p",null,"\u6784\u5EFA\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\uFF0C\u4E0E vite.config.ts \u4E2D\u7684 base \u5C5E\u6027\u5BF9\u5E94\u3002",-1);function g(T,f){const n=s("ExternalLinkIcon");return t(),r(o,null,[d,a("p",null,[u,a("a",h,[_,i(n)]),b]),m,v,k],64)}var x=l(c,[["render",g]]);export{x as default};
