//console.log( '' );








class ComponentCountry {


	static html() {

		let innerHTML = '';
		arrCountry.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title.ua }</span>
			`);
		});

		return getComponentHtml({ tag: 'country', innerHTML, });
	}






}























