//console.log( '' );






class ComponentOemVag {


	static tag 	= 'oem-vag';



	static index() {

		let html = '';



		arrOemVag.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id: VAG </span>${ k.id } <span class="key">title:</span>${ k.title }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























