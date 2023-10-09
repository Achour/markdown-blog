---
title: 'Dropcap in Css using the ::first-letter pseudo-element selector '
description: 'The ::first-letter CSS pseudo-element selector is used to target and style the first letter of a block-level element, such as a paragraph (<p>), heading (<h1>, <h2>, etc.), or a block-level container. It allows you to apply special styling to the initial letter of a block of text, often used for creating drop caps or decorative text effects.'
pubDate: 'Oct 08 2023'
heroImage: '/dropcap-css.png'
---

Have you ever used the ::first-letter pseudo selector with font-size to style the first letter of a paragraph and it didn't look right?
<br>
<br>

Instead of using font-size use this new simple yet useful css property.
<br>
<br>

The initial-letter property allows you to specify the size of the initial letter, in terms of how many lines it occupies, and the number of lines it should sink.
<br>
<br>
example:
<br>
<br>
```css
.dropcap::first-letter {
    color: red;
    initial-letter: 3 3;
    padding: 0px 10px;
}
```
<br>
HTML:
<br>
<br>

```html 
<p class="dropcap">
    Debitis venenatis pretium aliquip do cum labore eum enim! Diam!
    Class veniam. Aliquam facilisi nisi nonummy cupidatat do
    voluptates diamlorem inceptos dui magni parturient dignissimos
    aute eum consequat.
</p>
```

<br>
Result:
<br>

<br>


![dropcap](/dropcap-screenshot.png "Dropcap")