//console.log( 'header' );




class ComponentMiddle {



	static cmpTitle = 'cmpMiddle';







	static index() {



		return `
		<div class="${ this.cmpTitle }">
			<aside>
				${ ComponentAside.html() }
			</aside>

			<div class="cmpContent"></div>
		</div>
		`;
	}





}











