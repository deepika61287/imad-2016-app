var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

  'article-one'   : { 
  title : 'Article One | Deepika',
  heading : 'Article One',
  date : 'October 13,2016',
  content : `
  <p> This is for article one html page..This is the additional html file which is linked to the main html page </p>
            
  <p> ONE </p>
            
  `
},
  'article-two'   : {
  title : 'Article Two | Deepika',
  heading : 'Article Two',
  date : 'October 14,2016',
  content : `
  <p> This is for article two html page..This is the additional html file which is linked to the main html page </p>
            
  <p> TWO </p>
            
  `
  },
  'article-three' : {
  title : 'Article Three | Deepika',
  heading : 'Article Three',
  date : 'October 15,2016',
  content : `
  <p> This is for article two html page..This is the additional html file which is linked to the main html page </p>
            
  <p> THREE </p>
            
  `
  }

};

function createTemplate(data)
    {

    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate =  `
      
      <html>
        
        <head>
            
            ${title}
            
            <meta name = "viewport" content="width=device-width" initial-scaled ="1"> 
            
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        
        <body>
            
            <div class = "container">
            
                <div>
                
                    <a href = '/' > Home </a>
                    
                
                </div>
            
                <hr/>
            
                <div>
                
                    ${heading}   
                
                </div>
            
                <div>
                
                    ${date}
                
                </div>
            
                <div>
                
                    ${content}
                
                </div>
            
            </div>
            
        </body>
        
    </html>
    
    
      `;
      
      return htmlTemplate;
      
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name' , function (req , res) {
   var name = req.query.name;
   names.push(name);
   //JSON
   res.send(JSON.stringify(names));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/favicon.ico',function(req,res) {
    rees.sendFile(path.join(__dirname, 'ui' , 'favicon.ico'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
