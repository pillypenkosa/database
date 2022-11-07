//console.log( '' );






class ComponentWin10set {


	static tag 	= 'win10set';



	static index() {

		let html = '';



		arrWin10set.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">title:</span>${ k.title }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























