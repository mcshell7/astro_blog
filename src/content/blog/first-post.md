---
title: 'How To Make Reusable Components with Astro'
description: 'To make a component in Astro, start by creating a new file - _Button.astro_. This button will be an anchor tag used for navigation.'
pubDate: 'Jul 24 2024'
heroImage: '/images/astro.webp'
---

 <p><strong>Heads up!</strong> I will add in Typescript along the way, because it’s nice to have the auto-complete features for reusable components. The code will work without the Typescript though.</p>
<h2 id="table-of-content">Table of content</h2>
<ul>
<li><a href="#the-foundation">The Foundation</a></li>
<li><a href="#slots">Slots</a></li>
<li><a href="#styling">Styling</a></li>
<li><a href="#using-tailwind">Tailwind</a></li>
<li><a href="#wrapping-up">Wrapping Up</a></li>
</ul>
<h2 id="the-foundation">The Foundation</h2>
<p>To make a component in Astro, start by creating a new file - <em>Button.astro</em>.
This button will be an anchor tag used for navigation.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#E1E4E8">&gt;About Me&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>Now you can import this component in you <em>index.astro</em> page.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Button </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../components/Button.astro"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;Welcome to my website!&lt;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<h2 id="slots">Slots</h2>
<p>This button is not very reusable right, so let’s make it possible to customize the link text. One way to do that is by using slots. A <a href="https://docs.astro.build/en/core-concepts/astro-components/#slots"><code>&lt;slot /&gt;</code></a> is a placeholder for the components children, which can be plain text, a single element, several elements or nested elements.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>Now let’s make the <code>href</code> a passable prop:</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">href</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Astro.props;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">={href}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>Meanwhile, we must remember to add the <code>href</code> on our homepage.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Button </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../components/Button.astro"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;Welcome to my website!&lt;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#E1E4E8">&gt;About Me&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<h2 id="inferred-attributes">Inferred Attributes</h2>
<p>Now the component looks and feels just like an anchor tag. The only problem is, that HTML elements have many different attributes, and it would be time consuming to manually type them all.</p>
<p>Instead we can import the attributes with Typescript, and extend the expected props with the standard attributes for a given HTML element. Note, that interface <code>Props</code> is implicitly set as the type interface for <code>Astro.props</code>.</p>
<p>Now we can delete the <code>href</code> from our props, and spread all our remaining props as the attributes for our anchor tag.
This way, we will have access to <code>href</code>, <code>target</code>, <code>rel</code>, and all the other attrubitutes, and auto-completion as if it was an anchor tag.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { HTMLAttributes } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "astro/types"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">interface</span><span style="color:#B392F0"> Props</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> HTMLAttributes</span><span style="color:#E1E4E8">&lt;</span><span style="color:#9ECBFF">"a"</span><span style="color:#E1E4E8">&gt; {}</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#F97583">...</span><span style="color:#79B8FF">props</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Astro.props;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8"> {</span><span style="color:#F97583">...</span><span style="color:#E1E4E8">props}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<h2 id="styling">Styling</h2>
<p>Now it’s time to add some basic styles to our button. In Astro you can scope your CSS styles with a <code>style</code> tag at the bottom.</p>
<p>Here I have added a “button” class which will be added to all instances of the components, but I have also added a “red” class and a “blue” class. These classes are not assigned by default, but will be available, if they are set in the <code>class</code> prop, as I’m using <code>Astro.props.class</code> in the <a href="https://docs.astro.build/en/guides/styling/#combining-classes-with-classlist"><code>class:list</code></a>.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { HTMLAttributes } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "astro/types"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">interface</span><span style="color:#B392F0"> Props</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> HTMLAttributes</span><span style="color:#E1E4E8">&lt;</span><span style="color:#9ECBFF">"a"</span><span style="color:#E1E4E8">&gt; {}</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#F97583">...</span><span style="color:#79B8FF">props</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Astro.props;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span><span style="color:#B392F0"> class:list</span><span style="color:#E1E4E8">={[</span><span style="color:#9ECBFF">"button"</span><span style="color:#E1E4E8">, Astro.props.class]} {</span><span style="color:#F97583">...</span><span style="color:#E1E4E8">props}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">style</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#B392F0">  .button</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    padding</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">1</span><span style="color:#F97583">rem</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">    border</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">2</span><span style="color:#F97583">px</span><span style="color:#79B8FF"> solid</span><span style="color:#79B8FF"> black</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .red</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">red</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .blue</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">blue</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">style</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>Now we can customize our component by adding CSS classes defined in the component.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Button </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../components/Button.astro"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;Welcome to my website!&lt;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/"</span><span style="color:#E1E4E8">&gt;Home&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#B392F0"> class</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"red"</span><span style="color:#E1E4E8">&gt;About Me&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/services"</span><span style="color:#B392F0"> class</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"blue"</span><span style="color:#E1E4E8">&gt;Services&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>While having these instances styled based on CSS classes are great for minor style changes, but for more varied styles, it’s easier to make variants, then make minor adjustments with classes.</p>
<p>I have made two variants: “primary” and “secondary”, and <code>variant</code> as a prop. With these presets, we can assign complex styling as the base styling, and still be able to make minor changes with other classes.</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { HTMLAttributes } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "astro/types"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">interface</span><span style="color:#B392F0"> Props</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> HTMLAttributes</span><span style="color:#E1E4E8">&lt;</span><span style="color:#9ECBFF">"a"</span><span style="color:#E1E4E8">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70">  variant</span><span style="color:#F97583">:</span><span style="color:#9ECBFF"> "primary"</span><span style="color:#F97583"> |</span><span style="color:#9ECBFF"> "secondary"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">variant</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">...</span><span style="color:#79B8FF">props</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Astro.props;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span></span>
<span class="line"><span style="color:#B392F0">  class:list</span><span style="color:#E1E4E8">={[</span></span>
<span class="line"><span style="color:#9ECBFF">    "button"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    { primary: variant </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> "primary"</span><span style="color:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#E1E4E8">    { secondary: variant </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> "secondary"</span><span style="color:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#E1E4E8">    Astro.props.class,</span></span>
<span class="line"><span style="color:#E1E4E8">  ]}</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span><span style="color:#F97583">...</span><span style="color:#E1E4E8">props}</span></span>
<span class="line"><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">style</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#B392F0">  .button</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    padding</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">1</span><span style="color:#F97583">rem</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">    border</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">2</span><span style="color:#F97583">px</span><span style="color:#79B8FF"> solid</span><span style="color:#79B8FF"> black</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .primary</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    background-color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">black</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">white</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">    border-radius</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">50</span><span style="color:#F97583">%</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .secondary</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">black</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">    padding</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">2</span><span style="color:#F97583">rem</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .red</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">red</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  .blue</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">    color</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">blue</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">style</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p>The <em>index.astro</em> could look something like this:</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Button </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../components/Button.astro"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;Welcome to my website!&lt;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"primary"</span><span style="color:#E1E4E8">&gt;Home&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"secondary"</span><span style="color:#E1E4E8">&gt;About Me&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/services"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"secondary"</span><span style="color:#B392F0"> class</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"blue"</span><span style="color:#E1E4E8">&gt;Services&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<h3 id="using-tailwind">Using Tailwind?</h3>
<p>If you use Tailwind you might run into issues with merging classes set on the component, and classes passed down with props. I recommend using <a href="https://github.com/dcastil/tailwind-merge">tailwind-merge</a>.</p>
<p>Using this Tailwind, you wouldn’t need the “red” and “blue” classes, as minor changes would be just as easy to add on <em>index.astro</em>.</p>
<p><em>Button.astro</em>:</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { HTMLAttributes } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "astro/types"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { twMerge } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "tailwind-merge"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">interface</span><span style="color:#B392F0"> Props</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> HTMLAttributes</span><span style="color:#E1E4E8">&lt;</span><span style="color:#9ECBFF">"a"</span><span style="color:#E1E4E8">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70">  variant</span><span style="color:#F97583">:</span><span style="color:#9ECBFF"> "primary"</span><span style="color:#F97583"> |</span><span style="color:#9ECBFF"> "secondary"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">variant</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">...</span><span style="color:#79B8FF">props</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Astro.props;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">a</span></span>
<span class="line"><span style="color:#B392F0">  class</span><span style="color:#E1E4E8">={</span><span style="color:#B392F0">twMerge</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#9ECBFF">    "p-4 border-2 border-solid border-black"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    variant </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> "primary"</span><span style="color:#F97583"> &amp;&amp;</span><span style="color:#9ECBFF"> "bg-black text-white rounded-full"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    variant </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> "secondary"</span><span style="color:#F97583"> &amp;&amp;</span><span style="color:#9ECBFF"> "text-black p-8"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    Astro.props.class,</span></span>
<span class="line"><span style="color:#E1E4E8">  )}</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span><span style="color:#F97583">...</span><span style="color:#E1E4E8">props}</span></span>
<span class="line"><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">slot</span><span style="color:#E1E4E8"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">a</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<p><em>index.astro</em>:</p>
<pre class="highlight astro-code github-dark" style=" overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Button </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../components/Button.astro"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&lt;</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;Welcome to my website!&lt;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"primary"</span><span style="color:#E1E4E8">&gt;Home&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/about"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"secondary"</span><span style="color:#E1E4E8">&gt;About Me&lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;</span><span style="color:#79B8FF">Button</span><span style="color:#B392F0"> href</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"/services"</span><span style="color:#B392F0"> variant</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"secondary"</span><span style="color:#B392F0"> class</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"text-blue-500"</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">    Services</span></span>
<span class="line"><span style="color:#E1E4E8">  &lt;/</span><span style="color:#79B8FF">Button</span><span style="color:#E1E4E8">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8">&lt;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">&gt;</span></span></code></pre>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>There are many ways to make good components in Astro, and it’s certainly a great way to make a project scale better and more readable when you need to maintain it in 6 months. It’s fine to have one-off components, but having good reusable components to begin with, really makes it a lot easier to work with regardless of scale.</p> 
