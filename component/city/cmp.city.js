//console.log( '' );






class ComponentCity {


	static tag 	= 'city';




	static index() {

		let html = '';

		arrCity.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id:</span>${ k.id } <span class="key">title.ua:</span>${ k.title.ua }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}




}























