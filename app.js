var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');;

var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/workorder', function (req, res) {
    //console.log(req.body.jsonWO);
	//jsonWO = '{"errorCode": "202", "errorMessage": "Success", "success": true, "workorders": [{"area":"Area 51","name":"John","woarea":"District 22", "woorderno":39},{"area":"Area 51","name":"John","woarea":"District 22","woorderno":38}]}';
    res.render(__dirname + '/views/WorkOrders', JSON.parse(req.body.jsonWO));
	//console.log(JSON.parse(jsonWO));
	//res.render(__dirname + '/views/WorkOrders', JSON.parse(jsonWO));
});

app.post('/acknowledge', function (req, res) {
    res.render(__dirname + '/views/Acknowledge', { user: req.body.user });
});


app.listen(3040);
console.log('server running ' + 'now ' + Date.now());




/*app.get('/login',function (req, res){
	var url ='http://52.160.97.191:18080/SpringMVCHibernate/authenticate';
	var body = {"user":"John", "password":"Tcs@123" } 

	fetch(url, { 
		method: 'POST',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' },
	})
    .then(res => res.json())
    .then(json => console.log(json))
	.catch(err => console.error(err));
}); 
 */
 



/*http.createServer(function(request, response) {

	//var app = express();
	//app.get('/',function(req,res){
    //   
    // res.sendFile('index.html');
	//
	//});

	/*if(request.url === "/Index"){
		sendFileContent(response, "index.html", "text/html");
	}
	else if(request.url === "/"){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
	}
	else if(/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "text/css");
	}
	else if(/^\/[a-zA-Z0-9\/]*.png$/.test(request.url.toString())){
		sendFileContent(response, request.url.toString().substring(1), "image/png");
	}
	else{
		console.log("Requested URL is: " + request.url);
		response.end();
	}
}).listen(3040);

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}*/

