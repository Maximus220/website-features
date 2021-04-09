# Writing text animation ✏️

**Future GIF place**

## How to use 📋

First, don't forget to import the JS file in your HTML code :
```
<script src="writing-text-animation.js"></script>
```
Then :
* **create a `<span>`** (or another HTML tag such as `<p>` (note that the initial effect has been made to be used with a `<span>` tag)).
* **add it the class "writing-text-animation".**
* **set parameters :**
  * `data-time` with the time you want the text to stay (time in ms). *(Default : 2000)*
  * `data-speed` with the writing speed you want. The higher that value is, the slower the text will spawn (tip : vary the value between 15 and 25). *(Default : 20)*
  * `data-delcoef` with the deletion coefficient you want to use. That coefficient will divide the `data-speed` and give the deletion speed. The higher the coefficient is, the faster the text deletion speed will be. *(Default : 2)*
  * `data-text` with a JSON formatted list of texts you want to display (e.g. `["My first text", "My second cool text"]`).
* **If you want to interact with the text,** you can add an ID to the span and interact with the ID `writing-text-animation-YOURID` in your code.

### Parameters ⚙️

``class="writing-text-animation"`` : This parameter is essential, it makes the JS file find elements you want to use the animation with.

``id="mySpanId"`` : This parameter is optional, it gives the text and ID if you want to modify the text's style. The ID to interact directly with the text is ``writing-text-animation-mySpanId``

``data-time="2000"`` : This parameter corresponds to the amount of ms the text will stay *(default value : 2000)*. ⚠️ Value is in millisecond, 1000ms = 1s ⚠️

``data-speed="20"`` : This parameter corresponds to the coefficient of variation of the writing speed *(default value : 20)*. It is recommended to use values around 15 - 25.

``data-delcoef="2"`` : This parameter corresponds to the deletion coefficient used on the initial speed *(default value : 2)*.<br>*(E.g. if the deletion coefficient is 2, the initial speed will be divided by 2, and letters will be deleted 2 times faster.)*

``data-text='["My first text", "My second cool text"]'`` : List of texts to display.

### Template 🛕

Here's a little template you can try :
```
<span id="mySpanId" class="writing-text-animation" data-time="2000" data-speed="20" data-delcoef="2" data-text='["My first text", "My second cool text"]'></span>
```
Via that template, you can interact with the ID `writing-text-animation-mySpanId` in your code to, for example, change the font-size.
<br>E.g.
```
#writing-text-animation-mySpanId{
  font-size: 2em;
}
```

## Tip 🏷️

You can add a straight bar next to the text to make a cool writing software effect 😎

**Future GIF place**
