//console.log( '' );






class ComponentCarEngine {


	static tag 	= 'car-engine';



	static index() {

		let html = '';



		arrCarEngine.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id:</span>${ k.id } <span class="key">title:</span>${ k.title }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























