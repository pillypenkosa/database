//console.log( '' );






class ComponentNames {


	static tag 	= 'names';



	static index() {

		let html = '';



		arrNames.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">ua:</span>${ k.ua } <span class="key">en:</span>${ k.en }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























