console.log('Loaded!');

// change

var element = document.getElementById('main-text');
element.innerHTML = "WOW!!!";

//move

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function() {
    var interval = setInterval(moveRight , 50);
    //img.style.marginLeft = '100px';
};

var button = document.getElementById('counter');
button.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(readystatechange === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
  };
  
  request.open('GET','http://deepika61287.imad.hasura-app.io/counter',true);
  request.send(null);
  
};