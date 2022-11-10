//console.log( '' );






class ComponentSurnames {


	static html() {

		let innerHTML = '';
		arrSurnames.forEach( ( k, i ) => {

			//<span class="val">${ i + 1 })</span> 
			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title }</span>
			`);
		});

		return getComponentHtml({ tag: 'surnames', innerHTML, });
	}



}























