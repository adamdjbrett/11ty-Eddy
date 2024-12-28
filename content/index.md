---

---

# Hi,

Ed\[ddy\] is an <s><a href="https://jekyllrb.com/" target="_blank">Jekyll</a></s> <a href="https://11ty.dev/" target="_blank" rel="noopener">11ty</a> theme designed for textual editors based on <a href="http://go-dh.github.io/mincomp/">minimal computing principles</a>, and focused on legibility, durability, ease and flexibility. Our underlying technology is easy to learn and teach, and can produce beautifully rendered scholarly or reading editions of texts meant to last. To start using Ed, please see <a href="/ed/documentation/">our documentation</a> for installation instructions and more. To learn more about the ideas behind Ed and a list of current features see our <a href="/ed/about/">about</a> section. To  see Ed in action, we've provided some sample minimal editions for you below.

<hr/>
<h2>{{metadata.sample_texts.title}}</h2>
<div class="toc">
<ul class="texts">
{%- for entry in collections.texts | reverse | limit(5) %}
<li class="text-title"><a href="{{ entry.url }}">{{ entry.data.title }}</a></li>
{%- endfor %}
</ul>
<hr/>
<p class="port ms-3"><a href="{{metadata.url}}/texts">{{metadata.sample_texts.text}}</a></p>
</div>
