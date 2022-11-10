//console.log( '' );






class ComponentFilms {


	static html() {

		let innerHTML = '';
		arrFilms.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title.ru }</span>
			`);
		});

		return getComponentHtml({ tag: 'films', innerHTML, });
	}


}























