//console.log( 'header' );




class ComponentMiddle {



	static html() {


		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				${ ComponentAside.html() }
				<div id="content"></div>
			`, 
		});
	}




}











