var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = { 
  title : 'Article One | Deepika',
  heading : 'Article One',
  date : 'October 13,2016',
  content : `
  <p> This is for article one html page..This is the additional html file which is linked to the main html page </p>
            
  <p> GitHub lets you version your code, collaborate with others, and share what you have built with the world. We are excited to see what you make. </p>
            
  <p> Ready to put your first open source project on GitHub? Get started by creating a repository for your work to live in. A repository will let you version your work, open issues to track bugs or tasks, and invite contributors to work with you. </p>
  `
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

app.get('/article-one',function(req,res) {
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
