const arrWorldPart = [

	{ id: 'africa' 		, ua: 'Африка' 				, en: 'Africa' 			, }, 			
	{ id: 'amer_n' 		, ua: 'Північна Америка' 	, en: 'North America' 	, },
	{ id: 'amer_s' 		, ua: 'Південна Америка' 	, en: 'South America' 	, },
	{ id: 'antarctic' 	, ua: 'Антарктика' 			, en: 'Antarctic' 		, },
	{ id: 'arctic' 		, ua: 'Арктика' 			, en: 'Arctic' 			, },
	{ id: 'asia' 		, ua: 'Азія' 				, en: 'Asia' 			, },
	{ id: 'europe' 		, ua: 'Європа' 				, en: 'Europe' 			, },
	{ id: 'eurasia' 	, ua: 'Євразія' 			, en: 'Eurasia' 		, },
	{ id: 'oceania' 	, ua: 'Океанія' 			, en: 'Oceania' 		, },

];




let objWorldPart = {};
arrWorldPart.forEach( k => {
	objWorldPart[ k.id ] = k;
});









