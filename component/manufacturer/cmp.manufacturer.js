//console.log( '' );






class ComponentManufacturer {


	static cmpTitle = 'cmpManufacturer';







	static html() {

		var cpHtml = '';


		let tBody = '';
		arrManufacturer.forEach( ( k , i ) => {

			let site = '';
			if ( k.site ) 
			{
				if ( k.site.avtopro ) 
					site += `<div><span class="${ this.cmpTitle }-table-key">avtopro:</span> ${ k.site.avtopro }</div>`;

				if ( k.site.official ) 
					site += `<div><span class="${ this.cmpTitle }-table-key">official:</span> ${ k.site.official }</div>`;

				if ( k.site.wiki_ua ) 
					site += `<div><span class="${ this.cmpTitle }-table-key">wiki_ua:</span> ${ k.site.wiki_ua }</div>`;








			}


			let hashtags = '';
			if ( k.hashtags ) 
			{
				for ( let k1 in k.hashtags ) 
					hashtags += k1 + ' ';
			}













			tBody += `<tr>
				<td>${ i + 1 }</td>
				<td>${ k.id ? k.id : '' }</td>
				<td>${ k.title ? k.title : '' }</td>
				<td>${ k.year ? k.year : '' }</td>
				<td>${ k.country ? k.country : '' }</td>
				<td>${ k.parent ? k.parent : '' }</td>
				<td class="${ this.cmpTitle }-table-left">${ site }</td>
				<td class="${ this.cmpTitle }-table-left">${ hashtags }</td>
				<td>${ k.note ? k.note : '' }</td>
			</tr>`;
		});



		return `<table class="${ this.cmpTitle }-table">
			<thead>
				<tr>
					<td>i</td>
					<td>id</td>
					<td>title</td>
					<td>year</td>
					<td>country</td>
					<td>parent</td>
					<td>site</td>
					<td>hashtags</td>
					<td>note</td>
				</tr>
			</thead>
			<tbody>${ tBody }</tbody>
		</table>`;
	}






	static clc( elem ) {

		btnLight( `.${ this.cmpTitle }-cp`, elem.dataset.id );

		//let divContent = document.querySelectorAll( `.${ this.cmpTitle }-content` )[ 0 ];


	}




}























