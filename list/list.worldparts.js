const arrWorldPart = [

	{ id: 'africa' 		, ru: 'Африка' 				, en: 'Africa' 			, }, 			
	{ id: 'amer_n' 		, ru: 'Північна Америка' 	, en: 'North America' 	, },
	{ id: 'amer_s' 		, ru: 'Південна Америка' 	, en: 'South America' 	, },
	{ id: 'antarctic' 	, ru: 'Антарктика' 			, en: 'Antarctic' 		, },
	{ id: 'arctic' 		, ru: 'Арктика' 			, en: 'Arctic' 			, },
	{ id: 'asia' 		, ru: 'Азія' 				, en: 'Asia' 			, },
	{ id: 'europe' 		, ru: 'Європа' 				, en: 'Europe' 			, },
	{ id: 'eurasia' 	, ru: 'Євразія' 			, en: 'Eurasia' 		, },
	{ id: 'oceania' 	, ru: 'Океанія' 			, en: 'Oceania' 		, },

];




let objWorldPart = {};
arrWorldPart.forEach( k => {
	objWorldPart[ k.id ] = k;
});









