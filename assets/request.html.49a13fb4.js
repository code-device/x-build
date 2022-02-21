import{r as p,o as r,c as t,a as s,b as e,F as o,e as a,d as c}from"./app.b400f69e.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=s("h1",{id:"http",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),a(" HTTP")],-1),u=s("h2",{id:"\u5F02\u6B65\u8BF7\u6C42\u5C01\u88C5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5F02\u6B65\u8BF7\u6C42\u5C01\u88C5","aria-hidden":"true"},"#"),a(" \u5F02\u6B65\u8BF7\u6C42\u5C01\u88C5")],-1),h=a("\u811A\u624B\u67B6\u63A8\u8350\u4F7F\u7528 "),b=s("code",null,"@/libs/request.ts",-1),k=a(" \u53D1\u9001\u8BF7\u6C42\uFF0Crequest.ts \u662F\u57FA\u4E8E "),m={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},_=a("axios"),g=a(" \u7684\u5C01\u88C5\uFF0C\u4FBF\u4E8E\u7EDF\u4E00\u5904\u7406 POST\uFF0CGET \u7B49\u8BF7\u6C42\u53C2\u6570\uFF0C\u8BF7\u6C42\u5934\uFF0C\u4EE5\u53CA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7B49\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u770B request.ts \u5B83\u5C01\u88C5\u4E86\u5168\u5C40 request \u62E6\u622A\u5668\u3001response \u62E6\u622A\u5668\u3001\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u3001baseURL \u8BBE\u7F6E\u7B49\u3002"),v=c(`<h3 id="\u63A5\u53E3\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49" aria-hidden="true">#</a> \u63A5\u53E3\u5B9A\u4E49</h3><ul><li>\u6240\u6709\u7684\u63A5\u53E3\u5E94\u5B9A\u4E49\u5728 <code>@/api</code> \u6587\u4EF6\u5939\u5185\u3002</li></ul><h3 id="\u914D\u7F6E\u63A5\u53E3\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u63A5\u53E3\u5730\u5740" aria-hidden="true">#</a> \u914D\u7F6E\u63A5\u53E3\u5730\u5740</h3><p>\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5730\u5740\u5728 .env</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_API</span><span class="token operator">=</span>/api/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u73AF\u5883\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u533A\u5206" aria-hidden="true">#</a> \u73AF\u5883\u533A\u5206</h4><p>\u5982\u679C\u5E0C\u671B\u4E0D\u540C\u7684\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684\u8BF7\u6C42\u5730\u5740\uFF0C\u53EF\u4EE5\u5728 .env.development \u3001.env.test \u6216 .env.production \u4E2D\u6DFB\u52A0\u8BBE\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_API</span><span class="token operator">=</span>/api-dev/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u54CD\u5E94\u62E6\u622A" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u62E6\u622A" aria-hidden="true">#</a> \u54CD\u5E94\u62E6\u622A</h3><p>\u5728 @/libs/request.ts \u4E2D\u5B9A\u4E49\u54CD\u5E94\u62E6\u622A\u3002</p><h4 id="\u9ED8\u8BA4\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7EA6\u5B9A" aria-hidden="true">#</a> \u9ED8\u8BA4\u7EA6\u5B9A</h4><p>\u9ED8\u8BA4\u8BBE\u7F6E\u4E0B response.data \u7684\u6570\u636E\u683C\u5F0F\u5E94\u4E3A\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u63A5\u53E3\u7EA6\u5B9A\u7684\u72B6\u6001\u7801 \u975E http \u72B6\u6001\u7801</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63A5\u53E3\u8FD4\u56DE\u8BF7\u6C42\u72B6\u6001\u4FE1\u606F</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD4\u56DE\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// data \u5185\u624D\u662F\u771F\u6B63\u7684\u8FD4\u56DE\u6570\u636E</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u54CD\u5E94\u62E6\u622A\u5668\u4E2D\u4F1A\u5BF9 http \u72B6\u6001\u7801\u4EE5\u53CA response.data.code \u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u5168\u90E8\u4E3A\u6B63\u5E38\u5C06\u4F1A\u8FD4\u56DE response.data.data\uFF0C\u5982\u679C\u6709\u9519\u8BEF\u5C06\u4F1A\u89E6\u53D1\u65E5\u5FD7\u8BB0\u5F55\u548C\u4FE1\u606F\u663E\u793A\uFF0C\u5982\u679C\u662F\u767B\u5F55\u72B6\u6001\u5931\u6548\u5C06\u81EA\u52A8\u6E05\u7A7A\u672C\u5730\u7684\u767B\u5F55\u72B6\u6001\u5E76\u9000\u56DE\u5230\u767B\u5F55\u9875\u9762\u3002\u6240\u6709\u7684\u5224\u65AD\u903B\u8F91\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u8981\u81EA\u884C\u4FEE\u6539\u3002</p><h2 id="\u8DE8\u57DF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a> \u8DE8\u57DF\u95EE\u9898</h2><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS \u5168\u79F0\u4E3A Cross Origin Resource Sharing\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u3002\u8FD9\u79CD\u65B9\u6848\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\u6CA1\u6709\u4EC0\u4E48\u5DE5\u4F5C\u91CF\uFF0C\u548C\u6B63\u5E38\u53D1\u9001\u8BF7\u6C42\u5199\u6CD5\u4E0A\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\uFF0C\u5DE5\u4F5C\u91CF\u57FA\u672C\u90FD\u5728\u540E\u7AEF\u8FD9\u91CC\u3002\u6BCF\u4E00\u6B21\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u5148\u4EE5 OPTIONS \u8BF7\u6C42\u65B9\u5F0F\u53D1\u9001\u4E00\u4E2A\u9884\u8BF7\u6C42\uFF08\u4E5F\u4E0D\u662F\u6240\u6709\u8BF7\u6C42\u90FD\u4F1A\u53D1\u9001 options\uFF0C\u5C55\u5F00\u4ECB\u7ECD \u70B9\u6211\uFF09\uFF0C\u901A\u8FC7\u9884\u68C0\u8BF7\u6C42\u4ECE\u800C\u83B7\u77E5\u670D\u52A1\u5668\u7AEF\u5BF9\u8DE8\u6E90\u8BF7\u6C42\u652F\u6301\u7684 HTTP \u65B9\u6CD5\u3002\u5728\u786E\u8BA4\u670D\u52A1\u5668\u5141\u8BB8\u8BE5\u8DE8\u6E90\u8BF7\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u518D\u4EE5\u5B9E\u9645\u7684 HTTP \u8BF7\u6C42\u65B9\u6CD5\u53D1\u9001\u90A3\u4E2A\u771F\u6B63\u7684\u8BF7\u6C42\u3002\u63A8\u8350\u7684\u539F\u56E0\u662F\uFF1A\u53EA\u8981\u7B2C\u4E00\u6B21\u914D\u597D\u4E86\uFF0C\u4E4B\u540E\u4E0D\u7BA1\u6709\u591A\u5C11\u63A5\u53E3\u548C\u9879\u76EE\u590D\u7528\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E00\u52B3\u6C38\u9038\u7684\u89E3\u51B3\u4E86\u8DE8\u57DF\u95EE\u9898\uFF0C\u800C\u4E14\u4E0D\u7BA1\u662F\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u6B63\u5F0F\u73AF\u5883\u90FD\u80FD\u65B9\u4FBF\u7684\u4F7F\u7528\u3002</p><h3 id="\u672C\u5730\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u4EE3\u7406" aria-hidden="true">#</a> \u672C\u5730\u4EE3\u7406</h3><p>\u672C\u5730\u914D\u7F6E\u4EE3\u7406\uFF1A<code>vue.config.js</code>\uFF0C\u4EC5\u80FD\u5728\u5F00\u53D1\u73AF\u5883\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://47.100.186.132/your-path/api&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="mock-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#mock-\u6570\u636E" aria-hidden="true">#</a> Mock \u6570\u636E</h2><p>X-BUILD \u5E76\u4E0D\u6253\u7B97\u96C6\u6210 Mock \u529F\u80FD\u3002</p>`,22),y=a("\u5982\u679C\u4F60\u6709\u9700\u8981\uFF0C\u63A8\u8350\u4F7F\u7528 "),f={href:"https://github.com/anncwb/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},x=a("vite-plugin-mock"),P=a(" \u6765\u8FDB\u884C mock \u6570\u636E\u5904\u7406\u3002");function T(j,O){const n=p("ExternalLinkIcon");return r(),t(o,null,[d,u,s("p",null,[h,b,k,s("a",m,[_,e(n)]),g]),v,s("p",null,[y,s("a",f,[x,e(n)]),P])],64)}var E=l(i,[["render",T]]);export{E as default};
