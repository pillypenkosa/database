//console.log( '' );






class ComponentFilms {


	static tag 	= 'films';



	static index() {

		let html = '';



		arrFilms.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id:</span>${ k.id } <span class="key">title.ru:</span>${ k.title.ru } <span class="key">year:</span>${ k.year }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























