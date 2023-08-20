window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++){
	const randomTime = Math.floor(Math.random() * 5000) + 1000;
	const promise = new Promise ((resolve)=> {
		setTimeout(() => {
			resolve(`Promise ${i+1} ${randomTime/1000} `);
		},randomTime);
	});
	promises.push(promise);
	}

Promise.any(promises)
.then((result)=> {
	const outputDiv = document,getElementbyId("output");
	outputDiv.textContent = result;
	
})
.catch ((error ) =>){
	console.error("All promises rejected : ", error);
});
