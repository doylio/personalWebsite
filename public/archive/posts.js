const posts = [
{
	title: "The Sorting Hat",
	date: new Date(1527921579000),
	content: [
	{
		type: 'text',
		text: 'The Sorting Hat app is a tool to help understand computer sorting algorithms.  It allows the user to create a list of randomly numbered hats, and sort them according to one of six sorting algorimths.  It uses async/await functions to allow the user to slow down the sorting process and more clearly see how it works.  It also times the sorting process and displays the total time taken when the sorting is complete.'
	},
	{
		type: 'image',
		image: '/static/sortingHatLogo.jpg',
		alt: 'Sorting Hat Logo',
		caption: 'I may have stolen some thematic ideas...',
		width: 300
	},
	{
		type: 'text',
		text: 'My goal for this project was to learn about and implement a variety of comparison sorting algorithms.  To do this properly, I applied the CS theory I learned from the <a href="https://www.youtube.com/watch?v=jUyQqLvg8Qw&list=PLhQjrBD2T382VRUw5ZpSxQSFrxMOdFObl&index=5" target="_blank">Harvard CS50 Course</a> and many hours reading Wikipedia articles on sorting algorithms.  I chose six sorting algorithms for the app:  3 slower algorithms, but easy to understand; and 3 more complicated recursive algorithms, which are much quicker.'
	},
	{
		type: 'text',
		text: 'In building this project, I faced three large challenges.  Firstly, I wanted to build the hat object in HTML5 Canvas so I could dynamically color it.  This required learning some limited use of bezier curves to create a bottom ellipse and then the upper hat.  I found <a href="http://www.victoriakirst.com/beziertool/" target="_blank">this tool</a> very helpful in that process.'
	},
	{
		type: 'text',
		text:  'I then wanted the hats to line up by their colour, so the user can easily see order from disorder.  I initally assigned them colour by the hex value associated with their random number, but this does not create the elegant rainbow I imagined it would.  I learned about the <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank">HSV colour model</a> and assigned their hue from their random number, keeping the value and saturation constant.  This created the desired effect.'
	},
	{
		type: 'image',
		image: '/static/HSVWiki.png',
		alt: 'The HSV Color Model cylinder',
		caption: 'By <a href="//commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder.png" title="File:HSV color solid cylinder.png">HSV_color_solid_cylinder.png</a>: <a href="//commons.wikimedia.org/wiki/User:SharkD" title="User:SharkD">SharkD</a><br>Derivative work: <span style="border:1px solid #f57900;padding:1px;"><a href="//commons.wikimedia.org/wiki/User:SharkD" title="User:SharkD"><span style="color:#8f5902;padding-left:1px;">SharkD</span></a> <a href="//commons.wikimedia.org/wiki/User_talk:SharkD" title="User talk:SharkD"><span style="color:#fff;background:#fcaf3e;">&nbsp;Talk&nbsp;</span></a></span> - <a href="//commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder.png" title="File:HSV color solid cylinder.png">HSV_color_solid_cylinder.png</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=9801673">Link</a>'
	},
	{
		type: 'text',
		text:  'The most difficult issue to resolve was the delay functionality in the sorting algorithms.  There is no sleep function in Javascript, so I wrote one which resolved a promise after <em>n</em> milliseconds.  Do to this, I had to create an async/await version of each function and, for the recursive algorithms, have each step "await" the Promise of the lower step to resolve before moving on.'
	},
	{
		type: 'text',
		text: 'The app was built with the <a href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</a> tool.  It uses <a href="https://www.npmjs.com/package/react-particles-js" target="_blank">react-particles-js</a> for the dynamic background, and other npm packages for the <a href="https://www.npmjs.com/package/react-responsive-modal" target="_blank">Modal</a> and the <a href="https://www.npmjs.com/package/react-input-range" target="_blank">Slider</a>. '
	},
	{
		type: 'text',
		text: '<a href="/sortingHat">Click here to view the app.</a>'
	}
	]
},
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
		image: '/static/smartBrainLogo.png',
		alt: 'Smart Brain Logo',
		caption: "I hope this logo looks 'techy-cool' enough",
		width: 200
	},
	{
		type: 'text',
		text: "I had two learning goals for this project.  To learn how to build and deploy a single-page React App, and to learn how to make static API calls to a third party.  I incidentally learnt about styling using Tachyons (I'm used to bootstrap) and how to use the popular ParticlesJS Library."
	},
	{
		type: 'image',
		image: '/static/react-1.png',
		alt: 'React Logo',
		caption: 'React Logo',
		width: 300,
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
},
];