console.log('Loaded!');

// change

var element = document.getElementById('main-text');
element.innerHTML = "WOW!!!";

//move

var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveRight , 100);
    //img.style.marginLeft = '100px';
};