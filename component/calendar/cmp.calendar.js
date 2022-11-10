//console.log( '' );






class ComponentCalendar {




	static html() {

		let innerHTML = '';
		arrZodiac.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">title:</span> <span class="val">${ k.title }</span>
			`);
		});

		return getComponentHtml({ tag: 'calendar', innerHTML, });
	}






}























