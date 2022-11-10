



class LoadDependences {



	static load() {

		// завантаження списків БД з GitHub
		dependences.listGIT.forEach( k => {

			let script = document.createElement( 'script' );
			script.src = `https://pillypenkosa.github.io/database/list/list.${ k }.js`;
			//script.setAttribute( 'defer', '' );
			divList.append( script );
		});



		// завантаження списків БД з проекту
		dependences.listApp.forEach( k => {

			let script = document.createElement( 'script' );
			script.src = `list/list.${ k }.js`;
			//script.setAttribute( 'defer', '' );
			divList.append( script );
		});



		// завантаження компонентів
		dependences.components.forEach( k => {

			let css = document.createElement( 'link' );
			css.href = `component/${ k }/cmp.${ k }.css`;
			css.rel = 'stylesheet'; 
			css.type = 'text/css'; 
			document.head.append( css );

			let script = document.createElement( 'script' );
			script.src = `component/${ k }/cmp.${ k }.js`;
			//script.setAttribute( 'defer', '' );
			divComponent.append( script );
		});

	}


}




