//console.log( 'aside' );









class ComponentAside {



	//static cmpTitle = 'cmpAside';




	static arrBtns = [

		

		//{ title: 'Календар' 				, id: 'calendar' 				, },
		{ title: 'Виробники' 				, id: 'manufacturer' 			, },





	];





	static html() {

		let htmlBtns = '';

		this.arrBtns.forEach( k => {
			//htmlBtns += `<div class="btn" data-id="${ k.id }" onclick="AsideComponent.showWin( '${ k.id }' )">${ k.title }</div>`;
			htmlBtns += `<div class="btn" data-id="${ k.id }" onclick="ComponentAside.showWin( '${ k.id }' )">${ k.title }</div>`;
		});

		return `<aside>
			${ htmlBtns }
		</aside>`;
	}




	static showWin( id ) {

		//console.log( txt );


		// подсветка кнопок
		btnLight( 'aside', id );



		// очистка контента



		let content = document.querySelectorAll( '.cmpContent' )[ 0 ];
		content.innerHTML = '';

		//console.log( content );


/*

		if ( id == 'calendar' ) 
			content.innerHTML = ComponentArr2arr.html();
		
*/


		if ( id == 'manufacturer' ) 
			content.innerHTML = ComponentManufacturer.html();





	} 








}















