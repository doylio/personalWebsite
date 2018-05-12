//Dependancies
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//constants
const app = express();
const port = process.env.PORT || 3000;

//Handlebars setup
hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');

//Log requests
app.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}: ${req.method} ${req.url}`;
	fs.appendFile('server.log', log + "\n", (err) => {
		if(err) {
			console.log("ERROR:  Unable to append to server.log!");
		}
	});
	console.log(log);
	next();
});	

//Get requests
app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: "Shawn Robert Doyle"
	})
});

app.get('/actor', (req, res) => {
	res.render('actor.hbs', {
		pageTitle: "Actor"
	})
});

app.get('/actor/gallery', (req, res) => {
	res.render('gallery.hbs', {
		pageTitle: "Gallery"
	})
});

app.get('/actor/resume', (req, res) => {
	res.render('resume.hbs', {
		pageTitle: "Acting Resume"
	})
});

app.get('/archive', (req, res) => {
	res.render('archive.hbs', {
		pageTitle: "Archive"
	})
});

app.get('/contact', (req, res) => {
	res.render('contact.hbs', {
		pageTitle: "Contact"
	})
})

app.get('/educator', (req, res) => {
	res.render('educator.hbs', {
		pageTitle: "Educator"
	})
})

app.get('/developer', (req, res) => {
	res.render('developer.hbs', {
		pageTitle: "Developer"
	})
})

//Static file requests
app.use(express.static(__dirname + '/public'));


//Activate
app.listen(port, () => console.log(`Listening on port ${port}...`));