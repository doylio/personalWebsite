const posts = [
{
	title: "Smart Brain Facial Recognition App",
	date: new Date(1525855258000),
	content: [
	{
		type: 'text',
		text: 'The Smart Brain app will take either a local file or an image address url, detect the faces inside that image, and display it to the user.  It was built in React with the <a href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</a> tool, and uses the <a href="https://www.clarifai.com/" target="_blank">Clarifai API</a> for facial recognition.  It passes the url to Clarifai, or converts the local image into a base64 string and passes that data to the face recognition model (consequently, processing the local images takes significantly longer).  It prevents the user from setting more than one input, and can display a variety of errors to the user.',
	},
	{
		type: 'image',
		image: '/static/circuit.png',
		alt: 'Smart Brain Logo',
		caption: "I hope this logo looks 'techy-cool' enough",
	},
	{
		type: 'text',
		text: 'I built this project to practice using the React framework and the Fetch API to gather data from a third party.  I used the <a href="https://tachyons.io/" target="_blank">Tachyons CSS library</a>, <a href="https://www.npmjs.com/package/react-tilt" target="_blank">react-tilt</a>, and <a href="https://www.npmjs.com/package/react-particles-js" target="_blank">react-particles-js</a> to help style the app.  I made this app from skills I learned in a <a href="https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/overview" target="_blank">Udemy course</a> by Andrei Neagoie and a <a href="https://tylermcginnis.com/free-react-bootcamp/" target="_blank">React Bootcamp</a> by Tyler McGinnis.'
	},
	{
		type: 'text',
		text: '<a href="/smartBrain">Click here to view the app.</a>'
	}
	],
}];