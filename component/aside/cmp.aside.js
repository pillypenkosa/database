//console.log( 'aside' );









class ComponentAside {


	static arrBtns = [

		{ title: 'OEM VAG' 			, id: 'oem_vag' 		, },
		{ title: 'Win 10' 			, id: 'win10set' 		, },
		{ title: 'Валюта' 			, id: 'currency' 		, },
		{ title: 'Виробники' 		, id: 'manufacturer' 	, },
		{ title: 'Двигуни' 			, id: 'car_engine' 		, },
		{ title: 'Зірки' 			, id: 'stars' 			, },
		{ title: 'Імена' 			, id: 'names' 			, },
		{ title: 'Календар' 		, id: 'calendar' 		, },
		{ title: 'Континенти' 		, id: 'worldparts' 		, },
		{ title: 'Країни' 			, id: 'country' 		, },
		{ title: 'Міста' 			, id: 'city' 			, },
		{ title: 'Моделі авто' 		, id: 'car_models' 		, },
		{ title: 'Прізвища' 		, id: 'surnames' 		, },
		{ title: 'Фільми' 			, id: 'films' 			, },

	];



	static html() {

		let innerHTML = '';

		this.arrBtns.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 									, },
					{ k: 'title' 	, v: k.title 								, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }' )` 	, },
				], 
			});
		});

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( id ) {

		// подсветка кнопок
		btnLight( 'cmp-aside', id );


		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';



		if ( id == 'calendar' ) 
			content.innerHTML = ComponentCalendar.html();

		if ( id == 'car_engine' ) 
			content.innerHTML = ComponentCarEngine.html();

		if ( id == 'car_models' ) 
			content.innerHTML = ComponentCarModel.html();

		if ( id == 'city' ) 
			content.innerHTML = ComponentCity.html();

		if ( id == 'country' ) 
			content.innerHTML = ComponentCountry.html();

		if ( id == 'currency' ) 
			content.innerHTML = ComponentCurrency.html();
		
		if ( id == 'films' ) 
			content.innerHTML = ComponentFilms.html();

		if ( id == 'manufacturer' ) 
			content.innerHTML = ComponentManufacturer.html();

		if ( id == 'names' ) 
			content.innerHTML = ComponentNames.html();
		
		if ( id == 'oem_vag' ) 
			content.innerHTML = ComponentOemVag.html();

		if ( id == 'stars' ) 
			content.innerHTML = ComponentStars.html();

		if ( id == 'surnames' ) 
			content.innerHTML = ComponentSurnames.html();

		if ( id == 'win10set' ) 
			content.innerHTML = ComponentWin10set.html();

		if ( id == 'worldparts' ) 
			content.innerHTML = ComponentWorldparts.html();


	} 








}















