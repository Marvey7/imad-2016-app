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
  res.sendFile(path.join(__dirname, 'blog/vendor/font-awesome/css', 'font-awesome.css'));
});

app.get('/vendor/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog/vendor/font-awesome/css', 'font-awesome.min.css'));
});

app.get('/vendor/jquery/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/jquery/jquery.js'));
});

app.get('/vendor/jquery/jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/jquery/jquery.min.js'));
});

app.get('/img/about-bg.jpg',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/img/about-bg.jpg'));
});

app.get('/img/contact-bg.jpg',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/img/contact-bg.jpg'));
});

app.get('/img/home-bg.jpg',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/img/home-bg.jpg'));
});

app.get('/img/post-bg.jpg',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/img/post-bg.jpg'));
});

app.get('/img/post-sample-image.jpg',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/img/post-sample-image.jpg'));
});

app.get('/less/clean-blog.less',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/less/clean-blog.less'));
});

app.get('/less/mixins.less',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/less/mixins.less'));
});

app.get('/less/variables.less',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/less/variables.less'));
});

app.get('/mail/contact-me.php',function(req,res){
    res.sendFile(path.join(__dirname,'blog','/mail/contact-me.php'));
});

app.get('/vendor/bootstrap/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/glyphicons-halflings-regular.eot'));
});

app.get('/vendor/bootstrap/glyphicons-halflings-regular.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/glyphicons-halflings-regular.svg'));
});

app.get('/vendor/bootstrap/glyphicons-halflings-regular.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/glyphicons-halflings-regular.woff'));
});

app.get('/vendor/bootstrap/glyphicons-halflings-regular.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/glyphicons-halflings-regular.ttf'));
});

app.get('/vendor/bootstrap/glyphicons-halflings-regular.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/bootstrap/glyphicons-halflings-regular.woff2'));
});

app.get('/vendor/font-awesome/fonts/FontAwesome.otf', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/FontAwesome.otf'));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/fontawesome-webfont.eot'));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/fontawesome-webfont.svg'));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/fontawesome-webfont.ttf'));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/fontawesome-webfont.woff'));
});

app.get('/vendor/font-awesome/fonts/fontawesome-webfont.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/fonts/fontawesome-webfont.woff2'));
});

app.get('/vendor/font-awesome/less/animated.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/animated.less'));
});

app.get('/vendor/font-awesome/less/bordered-pulled.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/bordered-pulled.less'));
});

app.get('/vendor/font-awesome/less/core.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/core.less'));
});

app.get('/vendor/font-awesome/less/fixed-width.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/fixed-width.less'));
});

app.get('/vendor/font-awesome/less/font-awesome.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/font-awesome.less'));
});

app.get('/vendor/font-awesome/less/icons.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/icons.less'));
});

app.get('/vendor/font-awesome/less/larger.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/larger.less'));
});

app.get('/vendor/font-awesome/less/list.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/list.less'));
});

app.get('/vendor/font-awesome/less/mixins.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/mixins.less'));
});

app.get('/vendor/font-awesome/less/path.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/path.less'));
});

app.get('/vendor/font-awesome/less/rotated-flipped.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/rotated-flipped.less'));
});

app.get('/vendor/font-awesome/less/screen-reader.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/screen-reader.less'));
});

app.get('/vendor/font-awesome/less/stacked.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/stacked.less'));
});

app.get('/vendor/font-awesome/less/variables.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/variables.less'));
});

.............................................................................................


app.get('/vendor/font-awesome/less/animated.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/animated.scss'));
});

app.get('/vendor/font-awesome/less/bordered-pulled.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/bordered-pulled.scss'));
});

app.get('/vendor/font-awesome/less/core.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/core.scss'));
});

app.get('/vendor/font-awesome/less/fixed-width.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/fixed-width.scss'));
});

app.get('/vendor/font-awesome/less/font-awesome.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/font-awesome.scss'));
});

app.get('/vendor/font-awesome/less/icons.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/icons.scss'));
});

app.get('/vendor/font-awesome/less/larger.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/larger.scss'));
});

app.get('/vendor/font-awesome/less/list.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/list.scss'));
});

app.get('/vendor/font-awesome/less/mixins.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/mixins.scss'));
});

app.get('/vendor/font-awesome/less/path.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/path.scss'));
});

app.get('/vendor/font-awesome/less/rotated-flipped.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/rotated-flipped.scss'));
});

app.get('/vendor/font-awesome/less/screen-reader.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/screen-reader.scss'));
});

app.get('/vendor/font-awesome/less/stacked.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/stacked.scss'));
});

app.get('/vendor/font-awesome/less/variables.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'blog', '/vendor/font-awesome/less/variables.scss'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});  