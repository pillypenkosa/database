//console.log( '' );






class ComponentStars {



	static html() {

		let innerHTML = '';
		arrStars.forEach( k => {

			innerHTML += ComponentKeyval.html( `
				<span class="key">id:</span> <span class="val">${ k.id }</span> 
				<span class="key">name:</span> <span class="val">${ k.name.n ? k.name.n  : '' } ${ k.name.p ? k.name.p : '' } ${ k.name.s ? k.name.s : '' }</span>
			`);
		});

		return getComponentHtml({ tag: 'stars', innerHTML, });
	}






}























