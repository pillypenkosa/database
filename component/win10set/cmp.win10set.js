//console.log( '' );






class ComponentWin10set {



	static html() {

		let innerHTML = '';
		arrWin10set.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">title:</span> <span class="val">${ k.title }</span>
			`);
		});

		return getComponentHtml({ tag: 'win10set', innerHTML, });
	}







}























