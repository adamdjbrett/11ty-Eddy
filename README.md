# Eddy: An ~~Jekyll~~ 11ty Theme for Minimal Editions
We are trying to be as faithful as possible in modifying this template to work with 11ty.

11ty Developer [Adam Dj Brett](https://www.adamdjbrett.com)

## CHANGELOG
1. SCSS to CSS - to make it easier for intro students
2. sorting the /texts/ into themeatic categories based on the layouts.
    * makes the code base clearer for students and simplifies teh front matter
3. switching to pagefind.app for better search and to make the site lighter weight\
4. moving assets to `public` like 11ty loves
5. Swapping up the way themes work between the two SSGs.
    * `_includes` no includes `layouts` and `widgets` (widgets are just the old `includes` bumped down a folder level)
6. swapping the Jekyll TOC for the [11ty TOC plugin](https://plug11ty.com/plugins/table-of-contents/)
7. swapping footnotes to standard Markdown footnotes
8. adding set theme color selector to `_data/metadata.json`
9. adding tags

### Themes Color 

Open File on `_data/metadata.json`

- Red Themes Code: `08`
  - implementation `"theme_base_color": "08"`
- Orange Themes Code: `09`
  - implementation `"theme_base_color": "09"`
- Yellow Themes Code: `0a`
  - implementation `"theme_base_color": "0a"`
- Green Themes Code: `0b`
  - implementation `"theme_base_color": "0b"`
- Cyan Themes Code: `0c`
  - implementation `"theme_base_color": "0c"`
- Blue Themes Code: `0d`
  - implementation `"theme_base_color": "0d"`
- Magenta Themes Code: `0e`
  - implementation `"theme_base_color": "0e"`
- Brown Themes Code: `0f`
  - implementation `"theme_base_color": "0f"`


### Using Class ,ID , Footer Notes on Markdown

Example 

Footer Notes

`O Captain! my Captain! our fearful trip is done;[^fn1]`

Class

`But O heart! heart! heart!{.indent-3}`

Footer Notes

`[^fn2]: The bugle is a small trumpet implicated in the military industrial complex.`


### Using Table of Content

Enable table of content set : true

Implementation:
`show_table_of_content: true`

Disbale table of content set : false

Implementation:
`show_table_of_content: false`



* * *

# Ed: A Jekyll Theme for Minimal Editions


## Introduction

Ed is a [Jekyll](https://jekyllrb.com/) theme designed for textual editors based on
[minimal computing](http://go-dh.github.io/mincomp/) principles, and focused on legibility,
durability, ease and flexibility.

One of our most pressing and ever-evolving needs as scholars is to pass on our textual artifacts
from one generation to another. The art of textual editing, among other practices, has helped many
cultures to remember and interpret for centuries. Alas, that art is practiced and encouraged in its
highest form by a dwindling number of scholars. In a digital environment the problem is compounded
by the difficulties of the medium. While vast repositories and "e-publications" appear on the
online scene yearly, very few manifest a textual scholar's disciplined attention to detail. In
contrast, most textual scholars who have made the leap to a rigorous digital practice have focused
on markup, relying on technical teams to deploy and maintain their work. This makes your average
scholarly digital edition a very costly and therefore limited affair.

As we see it, a minimal edition is one that aims to reduce the size and complexity of the back and
front end while flattening the learning curves for the user and the producer. Out of the box, the Ed
theme can help you build a simple reading edition, or a traditional scholarly edition with footnotes
and a bibliography, without breaking the bank. In our estimate, these are the two most immediately
useful type of editions for editors and readers. An edition produced with Ed consists of static
pages whose rate of decay is substantially lower than database-driven systems. As an added bonus,
these static pages require less bandwidth. Our hope is that our approach can help beginners and
veterans deploy beautiful editions with less effort, and that it can help us teach a 'full stack'
[in one academic semester](https://github.com/susannalles/MinimalEditions/blob/master/README.md),
while allowing us to care for our projects at less cost, and perhaps, just perhaps, to generate
high-quality editions on github.io in large quantities based on the
[git-lit](http://jonreeve.com/2015/09/introducing-git-lit/) model by Jonathan Reeve. We're coming
for you, Kindle!


## Sample Ed editions.

- [Our sample site](http://minicomp.github.io/ed/) is the first edition built with Ed.
- [Fugitive Verses](http://fugitiverses.viraltexts.org/): Popular Reprinted Poetry from Nineteenth Century Newspapers
- [mini lazarillo](http://minilazarillo.github.io/): A minimal edition of the *Lazarillo de Tormes*
- [Making and Knowing](https://cu-mkp.github.io/GR8975-edition/): The BnF Ms Fr 640 in Translation
- [Daisy Miller: A Comedy in Three Acts](https://britaneeelizabeth.github.io/ed/texts/DaisyMillerPlay/)


## Current Features

- Templates for narrative, drama and poetry
- Responsive design for mobile phones, tablets and PCs.
- Relatively easy to learn and teach
- Works well in high- or low- bandwidth scenarios
- Easier for digital archives and libraries to preserve
- Open source, open access
- Unobtrusive footnotes
- Metadata in Dublin Core and OpenGraph to play nice with Zotero, libraries and social media.
- Automatic table of content generation
- Simple search functionality
- Annotations via [hypothes.is](https://hypothes.is/)
- Optional: Ability to generate well-formatted bibliographies and linked citations


## Installing and using Ed

To learn how to install and begin using Ed, please visit our
[documentation page](http://minicomp.github.io/ed/documentation).

