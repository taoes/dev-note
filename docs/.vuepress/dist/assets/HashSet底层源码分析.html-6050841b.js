import{_ as p,r as c,o,c as i,a,d as n,b as t,e as s}from"./app-d035ab8f.js";const l="/assets/hashset_stract-4ea2ddef.png",u={},d=s('<p>HashSet 是Jdk提供一种对象容器，元素不可重复的数据结构，经常被用于去重或者着重声明集合为不重复的集合的作用，其类图如下所示。</p><p><img src="'+l+`" alt="HashSet 继承关系"></p><p>和 <code>ArrayList</code> 相比，HashSet多了两个构造方法 <code>HashSet(int,float)</code> &amp; <code>HashSet(int,float,boolean)</code> 这里来着重分析下这五个构造方法，查看其是如何实现构造的。</p><p><a name="IwWIA"></a></p><h2 id="hashset-的构造方法" tabindex="-1"><a class="header-anchor" href="#hashset-的构造方法" aria-hidden="true">#</a> HashSet 的构造方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">.75f</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addAll</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
     * Constructs a new, empty linked hash set.  (This package private
     * constructor is only used by LinkedHashSet.) The backing
     * HashMap instance is a LinkedHashMap with the specified initial
     * capacity and the specified load factor.
     *
     * <span class="token keyword">@param</span>      <span class="token parameter">initialCapacity</span>   the initial capacity of the hash map
     * <span class="token keyword">@param</span>      <span class="token parameter">loadFactor</span>        the load factor of the hash map
     * <span class="token keyword">@param</span>      <span class="token parameter">dummy</span>             ignored (distinguishes this
     *             constructor from other int, float constructor.)
     * <span class="token keyword">@throws</span>     <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if the initial capacity is less
     *             than zero, or if the load factor is nonpositive
     */</span>
    <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">,</span> <span class="token keyword">boolean</span> dummy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r={href:"https://www.zhoutao123.com/page/book/java/category/qgh3pq",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"HashSet(int initialCapacity, float loadFactor, boolean dummy)",-1),v=a("code",null,"LinkedHashMap",-1),m=a("code",null,"LinkedHashSet",-1),h=s(`<p><a name="1195C"></a></p><h2 id="hashset-添加元素" tabindex="-1"><a class="header-anchor" href="#hashset-添加元素" aria-hidden="true">#</a> HashSet 添加元素</h2><p>HashSet 中是如何添加不可重复的元素的，我们这里可以看下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">PRESENT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token constant">PRESENT</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，这里实现的方式是向Map中新增元素，将对象作为KEY，将一个静态方法作为VALUE， <code>Map</code> 中的Key如果重复会自动的覆盖，所以这里使用的是Map的KEY集合作为唯一，这也是比较巧妙的。</p><p><a name="JiJ3a"></a></p><h2 id="hashset-移除元素" tabindex="-1"><a class="header-anchor" href="#hashset-移除元素" aria-hidden="true">#</a> HashSet 移除元素</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">PRESENT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token operator">==</span><span class="token constant">PRESENT</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从HashSet添加元素的方式，就可以大致知道HashSet的元素是如何实现的，显然是直接移除指定KEY，然后判断移除的key对应的value是否等于 PRESENT，也就是当时保存的对象</p><p><a name="PRLbr"></a></p><h2 id="hashset的其他方法实现" tabindex="-1"><a class="header-anchor" href="#hashset的其他方法实现" aria-hidden="true">#</a> HashSet的其他方法实现</h2>`,11),b={href:"https://www.zhoutao123.com/page/book/java/category/qgh3pq",target:"_blank",rel:"noopener noreferrer"},y=s(`<p><a name="O8Dj6"></a></p><h2 id="集合大小" tabindex="-1"><a class="header-anchor" href="#集合大小" aria-hidden="true">#</a> 集合大小</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="V4Vlo"></a></p><h3 id="是否空集" tabindex="-1"><a class="header-anchor" href="#是否空集" aria-hidden="true">#</a> 是否空集</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="MVl8t"></a></p><h3 id="清空集合" tabindex="-1"><a class="header-anchor" href="#清空集合" aria-hidden="true">#</a> 清空集合</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function w(f,g){const e=c("ExternalLinkIcon");return o(),i("div",null,[d,a("p",null,[n("可以看到，HashSet的底层仍然使用的是HashMap作为基础实现，对HashMap的分析可以查看笔者的通栏目的文章 "),a("a",r,[n("HashMap 底层源码分析"),t(e)]),n("，但特殊的是 "),k,n(" 则使用的是 "),v,n(" 作为实现,此方法是并非公有方法，是给 "),m,n(" 使用的，这里暂时忽略之。")]),h,a("p",null,[n("其实HashSet的底层实现大部分都是调用Map的相关实现方法，这里可以参考笔者的同栏文章 "),a("a",b,[n("HashMap 底层源码分析"),t(e)])]),y])}const H=p(u,[["render",w],["__file","HashSet底层源码分析.html.vue"]]);export{H as default};
