//console.log( '' );






class ComponentCity {


	static html() {

		let innerHTML = '';
		arrCity.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title.ua }</span>
			`);
		});

		return getComponentHtml({ tag: 'city', innerHTML, });
	}



}























