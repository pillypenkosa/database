//console.log( '' );






class ComponentWorldparts {


	static tag 	= 'worldparts';



	static index() {

		let html = '';



		arrWorldPart.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id:</span>${ k.id } <span class="key">ua:</span>${ k.ua }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























