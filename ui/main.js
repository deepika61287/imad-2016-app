console.log('Loaded!');

// change

var element = document.getElementById('main-text');
element.innerHTML = "WOW!!!";

//move

var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '100px';
};