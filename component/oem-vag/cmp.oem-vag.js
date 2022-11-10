//console.log( '' );





class ComponentOemVag {



	static html() {

		let innerHTML = '';
		arrOemVag.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title }</span>
			`);
		});

		return getComponentHtml({ tag: 'oem-vag', innerHTML, });
	}






}























