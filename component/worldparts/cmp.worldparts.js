//console.log( '' );






class ComponentWorldparts {


	static html() {

		let innerHTML = '';
		arrWorldPart.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">en:</span> <span class="val">${ k.en }</span>
			`);
		});

		return getComponentHtml({ tag: 'worldparts', innerHTML, });
	}







}























