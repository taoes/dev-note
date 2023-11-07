import{_ as c,r as i,o as p,c as l,a as n,b as a,w as e,d as t,e as o}from"./app-d035ab8f.js";const u="/assets/spring-bean-cycle-9add9081.png",r={},d={class:"table-of-contents"},v=o('<p>在日常的开发中，会不可避免的遇到Bean之间循环依赖的。所谓的循环依赖，就是两个或者两个以上的Bean互相持有对方，这样在程序运行调用中，会出现这种循环依赖的现象，假设是两个Service，当程序调用ServiceA时，ServiceA中依赖ServiceB，在ServiceB中又依赖了ServiceA，这样就形成了循环依赖，如下图：</p><p><img src="'+u+`" alt="image.png"></p><blockquote><p>如果系统中出现循环依赖，一方面也说明了你的项目架构出现了问题，应当首先从系统的角度出发，而不是从Spring的循环依赖解决出发!!!</p></blockquote><p>Spring 提供了字段注入和构造器注入的方式来注入依赖。</p><h2 id="字段注入-注入单例" tabindex="-1"><a class="header-anchor" href="#字段注入-注入单例" aria-hidden="true">#</a> 字段注入(注入单例)</h2><p>首先定义ServiceA和ServiceB，然后在配置类中注入ServiceA和ServiceB, 并尝试调用ServiceA的print方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceA</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">ServiceB</span> serviceB<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serviceB<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceB</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">ServiceA</span> serviceA<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入IOC容器中添加Serice，然后在main方法中获取ServiceA的实例，查看注入的数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfBeanRecycle</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ServiceA</span> <span class="token function">serviceA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServiceA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ServiceB</span> <span class="token function">serviceB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServiceB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AnnotationConfigApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">MainConfigOfBeanRecycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ServiceA</span> bean <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ServiceA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以观察到输出结果，并没有出现循环依赖的问题:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>com.zhoutao123.spring.bean.ServiceA@1dd92fe2
com.zhoutao123.spring.bean.ServiceB@6b53e23f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多例注入-prototype" tabindex="-1"><a class="header-anchor" href="#多例注入-prototype" aria-hidden="true">#</a> 多例注入(Prototype)</h2><p>修改上面的ServiceA &amp; ServiceB 添加<code>@Scope(&quot;prototype&quot;)</code> 注解，标识非单例模式，尝试启动，发现报错,抛出异常 <code>BeanCurrentlyInCreationException</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Requested bean is currently in creation: Is there an unresolvable circular reference?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="构造器注入" tabindex="-1"><a class="header-anchor" href="#构造器注入" aria-hidden="true">#</a> 构造器注入</h2><p>将ServiceA和ServiceB 修改为构造注入的方式，再次尝试启动IOC容器，观察结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceA</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">private</span> <span class="token class-name">ServiceB</span> serviceB<span class="token punctuation">;</span>

  <span class="token comment">// 构造方式注入ServiceB</span>
  <span class="token keyword">public</span> <span class="token class-name">ServiceA</span><span class="token punctuation">(</span><span class="token class-name">ServiceB</span> serviceB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>serviceB <span class="token operator">=</span> serviceB<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceB</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">private</span>  <span class="token class-name">ServiceA</span> serviceA<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">ServiceB</span><span class="token punctuation">(</span><span class="token class-name">ServiceA</span> serviceA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>serviceA <span class="token operator">=</span> serviceA<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动IOC容器，发现仍然报循环应用的错误，异常为 <code>BeanCurrentlyInCreationException</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Requested bean is currently in creation: Is there an unresolvable circular reference?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在SpringBoot中尝试实现则发现出现了更详细的循环依赖图</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Description:

The dependencies of some of the beans in the application context form a cycle:

┌─────┐
|  serviceA defined in file [/Users/zhoutao/workspace/MyGithub/SpringBoot/build/classes/java/main/com/zhoutao123/spring/springboot/service/ServiceA.class]
↑     ↓
|  serviceB defined in file [/Users/zhoutao/workspace/MyGithub/SpringBoot/build/classes/java/main/com/zhoutao123/spring/springboot/service/ServiceB.class]
└─────┘

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="现象说明" tabindex="-1"><a class="header-anchor" href="#现象说明" aria-hidden="true">#</a> 现象说明</h2><p>在上面的三个实例中，构造注入和Prototype的两种方式出现循环依赖的问题，字段注入的方式没有出现循环依赖的情况，这说明Spring是可以解决单例模式下的字段注入的循环依赖的、</p><h2 id="三级缓存" tabindex="-1"><a class="header-anchor" href="#三级缓存" aria-hidden="true">#</a> 三级缓存</h2><p>Spring内部常见Bean的时候会创建缓存，共计有三个缓存，我们称之为三级缓存的方式，其定义如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token doc-comment comment">/** 单实例Bean ,Key 是Bean的名称，Value是Bean的实例*/</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> singletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/** 缓存Bean的Factory 	,Key 是Bean的名称，Value是Bean的工厂实例 */</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> singletonFactories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/** 缓存早期的Bean，早期的Bean指的是不完美的Bean，属性设置未完成的Bean */</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> earlySingletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其解决循环依赖的流程如下</p><ol><li>在 finishBeanFactoryInitialization 方法中开始通过反射的方式创建 ServiceA，并标记A正在创建中，保存在二级缓存 earlySingletonObjects\`</li><li>之后开始设置ServiceA的属性，发现ServiceA依赖于ServiceB，开始从缓存singletonObjects中获取ServiceB，发现ServiceB没有被创建，并未在一级缓存和二级缓存中发现ServiceB，所以从singletonFactories中创建SerIversonB，创建完成后，将ServiceB保存到二级缓存earlySingletonObjects中</li><li>开始尝试为ServiceB设置属性，发现依赖ServiceA，尝试从一级缓存singletonObjects缓存中查找ServiceA，未发现，再次从二级缓存 earlySingletonObjects中获取，发现ServiceA的引用，设置到ServiceB的属性上，ServiceB创建完成之后，转换移一级缓存singletonObjects中，返回ServiceB的引用</li><li>ServiceB创建完成并返回引用后后，ServiceB单例被保存在一级缓存singletonObjects缓存中，最后为ServiceA设置字段属性就可以找到ServiceB的引用，设置属性并转移到一级缓存中</li></ol>`,28);function k(m,b){const s=i("router-link");return p(),l("div",null,[n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#字段注入-注入单例"},{default:e(()=>[t("字段注入(注入单例)")]),_:1})]),n("li",null,[a(s,{to:"#多例注入-prototype"},{default:e(()=>[t("多例注入(Prototype)")]),_:1})]),n("li",null,[a(s,{to:"#构造器注入"},{default:e(()=>[t("构造器注入")]),_:1})]),n("li",null,[a(s,{to:"#现象说明"},{default:e(()=>[t("现象说明")]),_:1})]),n("li",null,[a(s,{to:"#三级缓存"},{default:e(()=>[t("三级缓存")]),_:1})])])]),v])}const S=c(r,[["render",k],["__file","005.Spring_Bean的循环依赖以及其解决方式.html.vue"]]);export{S as default};
