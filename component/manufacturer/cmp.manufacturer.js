//console.log( '' );






class ComponentManufacturer {



	static html() {

		let innerHTML = '';
		arrManufacturer.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title }</span>
			`);
		});

		return getComponentHtml({ tag: 'manufacturer', innerHTML, });
	}





}























