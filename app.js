// подсветка кнопок
function btnLight( container, id ) { 	// container - блок, где расположены кнопки 		// data-id - идентификатор конкретной кнопки

	// !!! в каждой кнопке должен быть класс `btn` и атрибут data-id <div class="btn" data-id=" ...anyTxt... "></div>
	//console.log( container, id );


	let arr = document.querySelectorAll( container + ' .btn' );

	arr.forEach( k => {
		if ( k.dataset.id == id ) 
			k.classList.add( 'active' );
		else 
			k.classList.remove( 'active' );
	});
}






function big1Letter( txt ) {

	return txt[ 0 ].toUpperCase() + txt.slice( 1 );
}




// вся строка в нижний регистр
// toLowerCase()





function getComponentHtml( title, html ) {
	return `<cmp-${ title }>${ html }</cmp-${ title }>`;
}











