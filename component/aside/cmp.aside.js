//console.log( 'aside' );









class ComponentAside {

	static tag 	= 'aside';



	static arrBtns = [

		{ title: 'OEM VAG' 			, id: 'oem_vag' 		, },
		{ title: 'Win 10' 			, id: 'win10set' 		, },
		{ title: 'Валюта' 			, id: 'currency' 		, },
		{ title: 'Виробники' 		, id: 'manufacturer' 	, },
		{ title: 'Двигуни' 			, id: 'engine' 			, },
		{ title: 'Зірки' 			, id: 'stars' 			, },
		{ title: 'Імена' 			, id: 'names' 			, },
		{ title: 'Календар' 		, id: 'calendar' 		, },
		{ title: 'Країни' 			, id: 'country' 		, },
		{ title: 'Континенти' 		, id: 'worldparts' 		, },
		{ title: 'Міста' 			, id: 'city' 			, },
		{ title: 'Прізвища' 		, id: 'surnames' 		, },
		{ title: 'Фільми' 			, id: 'films' 			, },





	];




	static index() {


		//let htmlBtns = '';

		let html = '';


		this.arrBtns.forEach( k => {
			html += `<div class="btn" data-id="${ k.id }" onclick="ComponentAside.clc( '${ k.id }' )">${ k.title }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}




	static clc( id ) {

		//console.log( id );


		// подсветка кнопок
		btnLight( 'cmp-aside', id );



		// очистка контента

		//let content = document.querySelectorAll( 'cmp-content' )[ 0 ];
		let content = document.getElementById( 'content' );
		content.innerHTML = '';


		if ( id == 'currency' ) 
			content.innerHTML = ComponentCurrency.index();

		if ( id == 'calendar' ) 
			content.innerHTML = ComponentCalendar.index();

		if ( id == 'city' ) 
			content.innerHTML = ComponentCity.index();

		if ( id == 'country' ) 
			content.innerHTML = ComponentCountry.index();

		if ( id == 'engine' ) 
			content.innerHTML = ComponentCarEngine.index();

		if ( id == 'films' ) 
			content.innerHTML = ComponentFilms.index();

		if ( id == 'manufacturer' ) 
			content.innerHTML = ComponentManufacturer.index();

		if ( id == 'names' ) 
			content.innerHTML = ComponentNames.index();

		if ( id == 'oem_vag' ) 
			content.innerHTML = ComponentOemVag.index();

		if ( id == 'stars' ) 
			content.innerHTML = ComponentStars.index();

		if ( id == 'surnames' ) 
			content.innerHTML = ComponentSurnames.index();

		if ( id == 'win10set' ) 
			content.innerHTML = ComponentWin10set.index();

		if ( id == 'worldparts' ) 
			content.innerHTML = ComponentWorldparts.index();

	} 








}















