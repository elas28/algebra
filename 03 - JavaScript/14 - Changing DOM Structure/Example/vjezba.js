document.getElementById('main');
<div id=​"main">​…​</div>​
document.querySelector('footer');
null
document.querySelector('#footer');
<h3 id=​"footer">​Footer​</h3>​
document.querySelector('.footer');
<div class=​"footer">​…​</div>​
document.querySelectorAll('button');
NodeList(10) [button, button, button, button, button, button, button, button, button, button]
document.querySelectorAll('button')[1];
<button onclick=​"changeColor(`blue`)​">​Blue​</button>​
document.querySelector("input[name='footer']");
<input name=​"footer" placeholder=​"Enter something">​