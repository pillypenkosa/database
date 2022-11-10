//console.log( '' );






class ComponentNames {


	static html() {

		let innerHTML = '';
		arrNames.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">ua:</span> <span class="val">${ k.ua }</span> 
				<span class="key">en:</span> <span class="val">${ k.en }</span>
			`);
		});

		return getComponentHtml({ tag: 'names', innerHTML, });
	}








}























