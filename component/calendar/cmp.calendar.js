//console.log( '' );






class ComponentCalendar {


	static tag 	= 'calendar';





	static index() {

		let html = '<div class="title">objZodiac = {}</div>';


		for ( let k in objZodiac ) {
			html += `<div>${ k }:</div>`;
		}


		html += '<div class="title">objTitleCalendar = {}</div>';


		for ( let k in objTitleCalendar ) {
			html += `<div>${ k }:</div>`;
		}



		return getComponentHtml( this.tag, html );
	}





	static clc( elem ) {
		//btnLight( `.${ this.tag }`, elem.dataset.id );

	}



}























