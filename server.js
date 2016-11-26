/*
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article1.html'));
});

app.get('/article2',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article2.html'));
});

app.get('/article3',function(req,res){
    res.send('article three requested and will be served here');
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
*/
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', 'index.html'));
});

app.get('/about.html',function(req,res){
    res.sendFile(path.join(__dirname,'blog','about.html'));
});

app.get('/contact.html',function(req,res){
    res.sendFile(path.join(__dirname,'blog','contact.html'));
});



app.get('/article3',function(req,res){
    res.send('article three requested and will be served here');
});

app.get('/css/clean-blog.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/css/clean-blog.min.css'));
});

app.get('/css/clean-blog.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/css/clean-blog.css'));
});
app.get('/js/clean-blog.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/clean-blog.min.js'));
});

app.get('/js/clean-blog.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog/js/', 'clean-blog.js'));
});

app.get('/gulpfile.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/gulpfile.js'));
});

app.get('/js/contact_me.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/js/contact_me.js'));
});

app.get('/js/jqBootstrapValidation.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/js/jqBootstrapValidation.js'));
});

app.get('/post.html',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/post.html'));
});

app.get('/vendor/bootstrap/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/css/bootstrap.css'));
});

app.get('/vendor/bootstrap/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/css/bootstrap.min.css'));
});

app.get('/vendor/bootstrap/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/js/bootstrap.min.js'));
});

app.get('/vendor/bootstrap/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/js/bootstrap.js'));
});

app.get('/vendor/font-awesome/css/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog/vendor/font-awesome/css/', 'font-awesome.css'));
});

app.get('/vendor/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog/vendor/font-awesome/css/', 'font-awesome.min.css'));
});

app.get('/vendor/jquery/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/jquery/jquery.js'));
});

app.get('/vendor/jquery/jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/jquery/jquery.min.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});  