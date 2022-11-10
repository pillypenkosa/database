//console.log( 'aside' );









class ComponentBtn {



	static html( innerHTML, param ) {
	//static html( innerHTML, f, arg ) {

/*
		let data = {
			tag: 'btn',
			param: [
				{ k: 'class' 		, v: 'active' 					, },
				{ k: 'name' 		, v: 'Имя Розы' 				, },
				{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				{ k: 'data-id' 		, v: 'any-data' 				, },
				{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				{ k: 'selected' 	, v: '' 						, },
				{ k: 'defer' 		, v: '' 						, },
			],
			innerHTML: 'ComponentBtn.html()',
		};
*/

		
		return getComponentHtml({ tag: 'btn', param, innerHTML, });
	}

























	static clc2( f ) {

		return;



		alert( 'ComponentBtn.clc() ' + f );









		let foo = function(){
			f();
		}

		foo();




/*
		// подсветка кнопок
		btnLight( 'cmp-aside', id );
		alert( 'Тыкнул cmp-btn' );

		*/


	} 








}















