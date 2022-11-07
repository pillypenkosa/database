//console.log( '' );






class ComponentStars {


	static tag 	= 'stars';



	static index() {

		let html = '';



		arrStars.forEach( ( k , i ) => {
			html += `<div>${ i + 1 }) <span class="key">id:</span>${ k.id } <span class="key">name nps:</span>${ k.name.n ? k.name.n : '' } ${ k.name.p ? k.name.p : '' } ${ k.name.s ? k.name.s : '' }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























