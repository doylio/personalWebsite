const page = document.querySelector("#page-contents");


window.onload = function() {
	for(let i = 0; i < posts.length; i++) {
		createPost(posts[i]);
	}	
}


function createPost(postData) {
	const post = document.createElement('div');
	post.classList.add("post");
	
	const title = document.createElement("h2");
	title.innerText = postData.title;
	post.appendChild(title);

	let contentItem;
	postData.content.forEach((item) => {
		if(item.type === 'text') {
			contentItem = document.createElement('p');
			contentItem.innerHTML = item.text;
		} else if(item.type === 'image') {
			console.log("Image");
			contentItem = document.createElement('div');
			contentItem.classList.add('post-img');

			contentItem.appendChild(document.createElement('img'));
			contentItem.firstElementChild.setAttribute('src', item.image);
			contentItem.firstElementChild.setAttribute('alt', item.alt);

			contentItem.appendChild(document.createElement('p'));
			contentItem.lastElementChild.innerText = item.caption;
		}
		post.appendChild(contentItem);
	});

	const date = document.createElement('h6');
	date.innerText = postData.date.toLocaleDateString();
	post.appendChild(date);

	page.appendChild(post);
}