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
img.onclick = function() {
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
  
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  var submit = document.getElementById("submit_btn");
  submit.onclick = function() {
    
    //make req to server and send the name
    
    //capture the name and display the set of names submitted
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i = 0; i < names.length; i++)
    {
        list+= '<li>' + names[i] + '</li>'
        console.log(names[i]);
    }
    var ul = document.getElementById("namelist");
    console.log('name is' +name[i]);
    ul.innerHTML = list;
    };
  
};