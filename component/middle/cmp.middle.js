//console.log( 'header' );




class ComponentMiddle {



	static tag 	= 'middle';





	static index() {

		let html = `
			${ ComponentAside.index() }
			<div id="content"></div>
		`;


		return getComponentHtml( this.tag, html );
	}





}











