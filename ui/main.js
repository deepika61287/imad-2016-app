console.log('Loaded!');

// change

//var element = document.getElementById('main-text');
//element.innerHTML = "WOW!!!";

//move

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function()
{
    var interval = setInterval(moveRight , 50);
    //img.style.marginLeft = '100px';
};

var button = document.getElementById('counter');
button.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var counter = request.responseText;
            //counter = counter + 1;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
  
  request.open('GET','http://deepika61287.imad.hasura-app.io/counter',true);
  request.send(null);
  
};


var submit = document.getElementById('submit_btn');

submit.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var names = request.responseText;
            names = JSON.parse(names);
            console.log("check 1: JSON parson cmd" +names)
            var list = '';
            for(var i = 0; i < names.length; i++)
            {
                list+= '<li>' + names[i] + '</li>'
                console.log('The names are' +names[i] )
            }
            //counter = counter + 1;
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            console.log(list);
        }
    }
};
  
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET','http://deepika61287.imad.hasura-app.io/submit-name?name=' +name,true);
  request.send(null);
  
};
