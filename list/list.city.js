const arrCity = [

//{ id: '' , title: { ua: '' , en: '' , }, country: '', site: { wiki: { ua: '', }, }, },




















{ id: 'kyiv'					, title: { ua: 'Київ' 					, en: 'Kyiv' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%9A%D0%B8%D1%97%D0%B2', }, }, },
{ id: 'kharkiv'					, title: { ua: 'Харків' 				, en: 'Kharkiv' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2', }, }, },
{ id: 'vinnytsia' 				, title: { ua: 'Вінниця' 				, en: 'Vinnytsia' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F', }, }, },
{ id: 'dnipro' 					, title: { ua: 'Дніпро' 				, en: 'Dnipro' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE', }, }, },
{ id: 'donetsk' 				, title: { ua: 'Донецьк' 				, en: 'Donetsk' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D1%8C%D0%BA', }, }, },
{ id: 'zhytomyr' 				, title: { ua: 'Житомир' 				, en: 'Zhytomyr' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80', }, }, },
{ id: 'zaporizhzhia' 			, title: { ua: 'Запоріжжя' 				, en: 'Zaporizhzhia' 			, }, country: 'ukr', site: { wiki: { ua: '%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F', }, }, },
{ id: 'ivano_frankivsk' 		, title: { ua: 'Івано-Франківськ' 		, en: 'Ivano-Frankivsk' 		, }, country: 'ukr', site: { wiki: { ua: '%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA', }, }, },
{ id: 'kropyvnytskyi' 			, title: { ua: 'Кропивницький' 			, en: 'Kropyvnytskyi' 			, }, country: 'ukr', site: { wiki: { ua: '%D0%9A%D1%80%D0%BE%D0%BF%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9', }, }, },
{ id: 'luhansk' 				, title: { ua: 'Луганськ' 				, en: 'Luhansk' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D1%8C%D0%BA', }, }, },
{ id: 'Lutsk' 					, title: { ua: 'Луцьк' 					, en: 'Lutsk' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%9B%D1%83%D1%86%D1%8C%D0%BA', }, }, },
{ id: 'lviv' 					, title: { ua: 'Львів' 					, en: 'Lviv' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%9B%D1%8C%D0%B2%D1%96%D0%B2', }, }, },
{ id: 'mykolayiv' 				, title: { ua: 'Миколаїв' 				, en: 'Mykolayiv' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2', }, }, },
{ id: 'odesa' 					, title: { ua: 'Одеса' 					, en: 'Odesa' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%9E%D0%B4%D0%B5%D1%81%D0%B0', }, }, },
{ id: 'poltava' 				, title: { ua: 'Полтава' 				, en: 'Poltava' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'rivne' 					, title: { ua: 'Рівне' 					, en: 'Rivne' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%A0%D1%96%D0%B2%D0%BD%D0%B5', }, }, },
{ id: 'sevastopol' 				, title: { ua: 'Севастополь' 			, en: 'Sevastopol' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C', }, }, },
{ id: 'simferopol' 				, title: { ua: 'Сімферополь' 			, en: 'Simferopol' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A1%D1%96%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C', }, }, },
{ id: 'sumy' 					, title: { ua: 'Суми' 					, en: 'Sumy' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%A1%D1%83%D0%BC%D0%B8', }, }, },
{ id: 'ternopil' 				, title: { ua: 'Тернопіль' 				, en: 'Ternopil' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C', }, }, },
{ id: 'uzhhorod' 				, title: { ua: 'Ужгород' 				, en: 'Uzhhorod' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4', }, }, },
{ id: 'kherson' 				, title: { ua: 'Херсон' 				, en: 'Kherson' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD', }, }, },
{ id: 'khmelnytskyi' 			, title: { ua: 'Хмельницький' 			, en: 'Khmelnytskyi' 			, }, country: 'ukr', site: { wiki: { ua: '%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9', }, }, },
{ id: 'cherkasy' 				, title: { ua: 'Черкаси' 				, en: 'Cherkasy' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D0%B8', }, }, },
{ id: 'chernivtsi' 				, title: { ua: 'Чернівці' 				, en: 'Chernivtsi' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96', }, }, },
{ id: 'chernihiv' 				, title: { ua: 'Чернігів' 				, en: 'Chernihiv' 				, }, country: 'ukr', site: { wiki: { ua: '%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2', }, }, },
{ id: 'yalta' 					, title: { ua: 'Ялта' 					, en: 'Yalta' 					, }, country: 'ukr', site: { wiki: { ua: '%D0%AF%D0%BB%D1%82%D0%B0', }, }, },













{ id: 'abu_dhabi' 				, title: { ua: 'Абу-Дабі' 				, en: 'Abu Dhabi' 				, }, country: 'are', site: { wiki: { ua: '%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D1%96', }, }, },
{ id: 'accra' 					, title: { ua: 'Аккра' 					, en: 'Accra' 					, }, country: 'gha', site: { wiki: { ua: '%D0%90%D0%BA%D0%BA%D1%80%D0%B0', }, }, },
{ id: 'algeria' 				, title: { ua: 'Алжир' 	 				, en: 'Algeria' 				, }, country: 'dza', site: { wiki: { ua: '%D0%90%D0%BB%D0%B6%D0%B8%D1%80_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'alma_ata' 				, title: { ua: 'Алма-Ата' 				, en: 'Alma-Ata' 				, }, country: 'kaz', site: { wiki: { ua: '%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D0%B8', }, }, },
{ id: 'amman' 					, title: { ua: 'Амман' 					, en: 'Amman' 					, }, country: 'jor', site: { wiki: { ua: '%D0%90%D0%BC%D0%BC%D0%B0%D0%BD', }, }, },
{ id: 'amsterdam' 				, title: { ua: 'Амстердам' 				, en: 'Amsterdam' 				, }, country: 'nld', site: { wiki: { ua: '%D0%90%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%B4%D0%B0%D0%BC', }, }, },
{ id: 'andorra_la_vella' 		, title: { ua: 'Андорра-ла-Велья' 		, en: 'Andorra la Vella' 		, }, country: 'and', site: { wiki: { ua: '%D0%90%D0%BD%D0%B4%D0%BE%D1%80%D1%80%D0%B0-%D0%BB%D0%B0-%D0%92%D0%B5%D0%BB%D1%8C%D1%8F', }, }, },
{ id: 'ankara' 					, title: { ua: 'Анкара' 				, en: 'Ankara' 					, }, country: 'tur', site: { wiki: { ua: '%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0', }, }, },
{ id: 'antananarivo' 			, title: { ua: 'Антананаріву' 			, en: 'Antananarivo' 			, }, country: 'mdg', site: { wiki: { ua: '%D0%90%D0%BD%D1%82%D0%B0%D0%BD%D0%B0%D0%BD%D0%B0%D1%80%D1%96%D0%B2%D1%83', }, }, },
{ id: 'athens' 					, title: { ua: 'Афіни' 					, en: 'Athens' 					, }, country: 'grc', site: { wiki: { ua: '%D0%90%D1%84%D1%96%D0%BD%D0%B8', }, }, },
{ id: 'ashgabat' 				, title: { ua: 'Ашгабат' 				, en: 'Ashgabat' 				, }, country: 'tkm', site: { wiki: { ua: '%D0%90%D1%88%D0%B3%D0%B0%D0%B1%D0%B0%D1%82', }, }, },
{ id: 'baghdad' 				, title: { ua: 'Багдад' 				, en: 'Baghdad' 				, }, country: 'irq', site: { wiki: { ua: '%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%B4', }, }, },
{ id: 'baku' 					, title: { ua: 'Баку' 					, en: 'Baku' 					, }, country: 'aze', site: { wiki: { ua: '%D0%91%D0%B0%D0%BA%D1%83', }, }, },
{ id: 'bamako' 					, title: { ua: 'Бамако' 				, en: 'Bamako' 					, }, country: 'mli', site: { wiki: { ua: '%D0%91%D0%B0%D0%BC%D0%B0%D0%BA%D0%BE', }, }, },
{ id: 'bandar_seri_begawan' 	, title: { ua: 'Бандар-Сері-Бегаван' 	, en: 'Bandar Seri Begawan' 	, }, country: 'brn', site: { wiki: { ua: '%D0%91%D0%B0%D0%BD%D0%B4%D0%B0%D1%80-%D0%A1%D0%B5%D1%80%D1%96-%D0%91%D0%B5%D0%B3%D0%B0%D0%B2%D0%B0%D0%BD', }, }, },
{ id: 'banjul' 					, title: { ua: 'Банжул' 				, en: 'Banjul' 					, }, country: 'gmb', site: { wiki: { ua: '%D0%91%D0%B0%D0%BD%D0%B6%D1%83%D0%BB', }, }, },
{ id: 'beirut' 					, title: { ua: 'Бейрут' 				, en: 'Beirut' 					, }, country: 'lbn', site: { wiki: { ua: '%D0%91%D0%B5%D0%B9%D1%80%D1%83%D1%82 ', }, }, },
{ id: 'belgrade' 				, title: { ua: 'Белград' 				, en: 'Belgrade' 				, }, country: 'srb', site: { wiki: { ua: '%D0%91%D0%B5%D0%BB%D0%B3%D1%80%D0%B0%D0%B4', }, }, },
{ id: 'belmopan' 				, title: { ua: 'Бельмопан' 				, en: 'Belmopan' 				, }, country: 'blz', site: { wiki: { ua: '%D0%91%D0%B5%D0%BB%D1%8C%D0%BC%D0%BE%D0%BF%D0%B0%D0%BD', }, }, },
{ id: 'berlin' 					, title: { ua: 'Берлін' 				, en: 'Berlin' 					, }, country: 'deu', site: { wiki: { ua: '%D0%91%D0%B5%D1%80%D0%BB%D1%96%D0%BD', }, }, },
{ id: 'bern' 					, title: { ua: 'Берн' 					, en: 'Bern' 					, }, country: 'che', site: { wiki: { ua: '%D0%91%D0%B5%D1%80%D0%BD', }, }, },
{ id: 'bissau' 					, title: { ua: 'Бісау' 					, en: 'Bissau' 					, }, country: 'gnb', site: { wiki: { ua: '%D0%91%D1%96%D1%81%D0%B0%D1%83', }, }, },
{ id: 'bishkek' 				, title: { ua: 'Бішкек' 				, en: 'Bishkek' 				, }, country: 'kgz', site: { wiki: { ua: '%D0%91%D1%96%D1%88%D0%BA%D0%B5%D0%BA', }, }, },
{ id: 'bogota' 					, title: { ua: 'Богота' 				, en: 'Bogota' 					, }, country: 'col', site: { wiki: { ua: '%D0%91%D0%BE%D0%B3%D0%BE%D1%82%D0%B0', }, }, },
{ id: 'brazzaville' 			, title: { ua: 'Браззавіль' 			, en: 'Brazzaville' 			, }, country: 'cog', site: { wiki: { ua: '%D0%91%D1%80%D0%B0%D0%B7%D0%B7%D0%B0%D0%B2%D1%96%D0%BB%D1%8C', }, }, },
{ id: 'brasilia' 				, title: { ua: 'Бразиліа' 				, en: 'Brasilia' 				, }, country: 'bra', site: { wiki: { ua: '%D0%91%D1%80%D0%B0%D0%B7%D0%B8%D0%BB%D1%96%D0%B0', }, }, },
{ id: 'bridgetown' 				, title: { ua: 'Бриджтаун' 				, en: 'Bridgetown' 				, }, country: 'brb', site: { wiki: { ua: '%D0%91%D1%80%D0%B8%D0%B4%D0%B6%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'brussels' 				, title: { ua: 'Брюссель' 				, en: 'Brussels' 				, }, country: 'bel', site: { wiki: { ua: '%D0%91%D1%80%D1%8E%D1%81%D1%81%D0%B5%D0%BB%D1%8C', }, }, },
{ id: 'budapest' 				, title: { ua: 'Будапешт' 				, en: 'Budapest' 				, }, country: 'hun', site: { wiki: { ua: '%D0%91%D1%83%D0%B4%D0%B0%D0%BF%D0%B5%D1%88%D1%82', }, }, },
{ id: 'buenos_aires' 			, title: { ua: 'Буенос-Айрес' 			, en: 'Buenos Aires' 			, }, country: 'arg', site: { wiki: { ua: '%D0%91%D1%83%D0%B5%D0%BD%D0%BE%D1%81-%D0%90%D0%B9%D1%80%D0%B5%D1%81', }, }, },
{ id: 'bucharest' 				, title: { ua: 'Бухарест' 				, en: 'Bucharest' 				, }, country: 'rou', site: { wiki: { ua: '%D0%91%D1%83%D1%85%D0%B0%D1%80%D0%B5%D1%81%D1%82', }, }, },
{ id: 'vaduz' 					, title: { ua: 'Вадуц' 					, en: 'Vaduz' 					, }, country: 'lie', site: { wiki: { ua: '%D0%92%D0%B0%D0%B4%D1%83%D1%86', }, }, },
{ id: 'valletta' 				, title: { ua: 'Валлетта' 				, en: 'Valletta' 				, }, country: 'mlt', site: { wiki: { ua: '%D0%92%D0%B0%D0%BB%D0%BB%D0%B5%D1%82%D1%82%D0%B0', }, }, },
{ id: 'warszawa' 				, title: { ua: 'Варшава' 				, en: 'Warszawa' 				, }, country: 'pol', site: { wiki: { ua: '%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'washington' 				, title: { ua: 'Вашингтон' 				, en: 'Washington' 				, }, country: 'usa', site: { wiki: { ua: '%D0%92%D0%B0%D1%88%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD', }, }, },
{ id: 'wellington' 				, title: { ua: 'Веллінгтон' 			, en: 'Wellington' 				, }, country: 'nzl', site: { wiki: { ua: '%D0%92%D0%B5%D0%BB%D0%BB%D1%96%D0%BD%D0%B3%D1%82%D0%BE%D0%BD', }, }, },
{ id: 'vientiane' 				, title: { ua: 'В\'єнтьян' 				, en: 'Vientiane' 				, }, country: 'lao', site: { wiki: { ua: '%D0%92%27%D1%94%D0%BD%D1%82%D1%8C%D1%8F%D0%BD', }, }, },
{ id: 'wien' 					, title: { ua: 'Відень' 				, en: 'Wien' 					, }, country: 'aut', site: { wiki: { ua: '%D0%92%D1%96%D0%B4%D0%B5%D0%BD%D1%8C', }, }, },
{ id: 'vilnius' 				, title: { ua: 'Вільнюс' 				, en: 'Vilnius' 				, }, country: 'ltu', site: { wiki: { ua: '%D0%92%D1%96%D0%BB%D1%8C%D0%BD%D1%8E%D1%81', }, }, },
{ id: 'gaborone' 				, title: { ua: 'Габороне' 				, en: 'Gaborone' 				, }, country: 'bwa', site: { wiki: { ua: '%D0%93%D0%B0%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B5', }, }, },
{ id: 'havana' 					, title: { ua: 'Гавана' 				, en: 'Havana' 					, }, country: 'cub', site: { wiki: { ua: '%D0%93%D0%B0%D0%B2%D0%B0%D0%BD%D0%B0', }, }, },
{ id: 'guatemala' 				, title: { ua: 'Гватемала' 				, en: 'Guatemala' 				, }, country: 'gtm', site: { wiki: { ua: '%D0%93%D0%B2%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D0%BB%D0%B0_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'dhaka' 					, title: { ua: 'Дака' 					, en: 'Dhaka' 					, }, country: 'bgd', site: { wiki: { ua: '%D0%94%D0%B0%D0%BA%D0%B0', }, }, },
{ id: 'jakarta' 				, title: { ua: 'Джакарта' 				, en: 'Jakarta' 				, }, country: 'idn', site: { wiki: { ua: '%D0%94%D0%B6%D0%B0%D0%BA%D0%B0%D1%80%D1%82%D0%B0', }, }, },
{ id: 'djibouti' 				, title: { ua: 'Джибуті' 				, en: 'Djibouti'				, }, country: 'dji', site: { wiki: { ua: '%D0%94%D0%B6%D0%B8%D0%B1%D1%83%D1%82%D1%96_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'georgetown' 				, title: { ua: 'Джорджтаун' 			, en: 'Georgetown' 				, }, country: 'guy', site: { wiki: { ua: '%D0%94%D0%B6%D0%BE%D1%80%D0%B4%D0%B6%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'doha' 					, title: { ua: 'Доха' 					, en: 'Doha' 					, }, country: 'qat', site: { wiki: { ua: '%D0%94%D0%BE%D1%85%D0%B0', }, }, },
{ id: 'dublin' 					, title: { ua: 'Дублін' 				, en: 'Dublin' 					, }, country: 'irl', site: { wiki: { ua: '%D0%94%D1%83%D0%B1%D0%BB%D1%96%D0%BD', }, }, },
{ id: 'dushanbe' 				, title: { ua: 'Душанбе' 				, en: 'Dushanbe' 				, }, country: 'tjk', site: { wiki: { ua: '%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5', }, }, },
{ id: 'el_kuwait' 				, title: { ua: 'Ель-Кувейт' 			, en: 'El Kuwait' 				, }, country: 'kwt', site: { wiki: { ua: '%D0%95%D0%BB%D1%8C-%D0%9A%D1%83%D0%B2%D0%B5%D0%B9%D1%82', }, }, },
{ id: 'riyadh' 					, title: { ua: 'Ер-Ріяд' 				, en: 'Riyadh' 					, }, country: 'sau', site: { wiki: { ua: '%D0%95%D1%80-%D0%A0%D1%96%D1%8F%D0%B4', }, }, },
{ id: 'yerevan' 				, title: { ua: 'Єреван' 				, en: 'Yerevan' 				, }, country: 'arm', site: { wiki: { ua: '%D0%84%D1%80%D0%B5%D0%B2%D0%B0%D0%BD', }, }, },
{ id: 'jerusalem' 				, title: { ua: 'Єрусалим' 				, en: 'Jerusalem' 				, }, country: 'isr', site: { wiki: { ua: '%D0%84%D1%80%D1%83%D1%81%D0%B0%D0%BB%D0%B8%D0%BC', }, }, },
{ id: 'kabul' 					, title: { ua: 'Кабул' 					, en: 'Kabul' 					, }, country: 'afg', site: { wiki: { ua: '%D0%9A%D0%B0%D0%B1%D1%83%D0%BB', }, }, },
{ id: 'cairo' 					, title: { ua: 'Каїр' 					, en: 'Cairo' 					, }, country: 'egy', site: { wiki: { ua: '%D0%9A%D0%B0%D1%97%D1%80', }, }, },
{ id: 'canberra'				, title: { ua: 'Канберра' 				, en: 'Canberra' 				, }, country: 'aus', site: { wiki: { ua: '%D0%9A%D0%B0%D0%BD%D0%B1%D0%B5%D1%80%D1%80%D0%B0', }, }, },
{ id: 'caracas' 				, title: { ua: 'Каракас' 				, en: 'Caracas' 				, }, country: 'ven', site: { wiki: { ua: '%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%B0%D1%81', }, }, },
{ id: 'cape_town' 				, title: { ua: 'Кейптаун' 				, en: 'Cape Town' 				, }, country: 'zaf', site: { wiki: { ua: '%D0%9A%D0%B5%D0%B9%D0%BF%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'сhisinau' 				, title: { ua: 'Кишинів' 				, en: 'Chisinau' 				, }, country: 'mda', site: { wiki: { ua: '%D0%9A%D0%B8%D1%88%D0%B8%D0%BD%D1%96%D0%B2', }, }, },
{ id: 'kinshasa' 				, title: { ua: 'Кіншаса' 				, en: 'Kinshasa' 				, }, country: 'cod', site: { wiki: { ua: '%D0%9A%D1%96%D0%BD%D1%88%D0%B0%D1%81%D0%B0', }, }, },
{ id: 'conakry' 				, title: { ua: 'Конакрі' 				, en: 'Conakry' 				, }, country: 'gin', site: { wiki: { ua: '%D0%9A%D0%BE%D0%BD%D0%B0%D0%BA%D1%80%D1%96', }, }, },
{ id: 'copenhagen' 				, title: { ua: 'Копенгаген' 			, en: 'Copenhagen' 				, }, country: 'dnk', site: { wiki: { ua: '%D0%9A%D0%BE%D0%BF%D0%B5%D0%BD%D0%B3%D0%B0%D0%B3%D0%B5%D0%BD', }, }, },
{ id: 'kuala_lumpur' 			, title: { ua: 'Куала-Лумпур' 			, en: 'Kuala Lumpur' 			, }, country: 'mys', site: { wiki: { ua: '%D0%9A%D1%83%D0%B0%D0%BB%D0%B0-%D0%9B%D1%83%D0%BC%D0%BF%D1%83%D1%80', }, }, },
{ id: 'libreville' 				, title: { ua: 'Лібревіль' 				, en: 'Libreville' 				, }, country: 'gab', site: { wiki: { ua: '%D0%9B%D1%96%D0%B1%D1%80%D0%B5%D0%B2%D1%96%D0%BB%D1%8C', }, }, },
{ id: 'lima' 					, title: { ua: 'Ліма' 					, en: 'Lima' 					, }, country: 'per', site: { wiki: { ua: '%D0%9B%D1%96%D0%BC%D0%B0', }, }, },
{ id: 'london' 					, title: { ua: 'Лондон' 				, en: 'London' 					, }, country: 'gbr', site: { wiki: { ua: '%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD', }, }, },
{ id: 'luanda' 					, title: { ua: 'Луанда' 				, en: 'Luanda' 					, }, country: 'ago', site: { wiki: { ua: '%D0%9B%D1%83%D0%B0%D0%BD%D0%B4%D0%B0', }, }, },
{ id: 'lusaka' 					, title: { ua: 'Лусака' 				, en: 'Lusaka' 					, }, country: 'zmb', site: { wiki: { ua: '%D0%9B%D1%83%D1%81%D0%B0%D0%BA%D0%B0', }, }, },
{ id: 'luxembourg' 				, title: { ua: 'Люксембург' 			, en: 'Luxembourg' 				, }, country: 'lux', site: { wiki: { ua: '%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'madrid' 					, title: { ua: 'Мадрид' 				, en: 'Madrid' 					, }, country: 'esp', site: { wiki: { ua: '%D0%9C%D0%B0%D0%B4%D1%80%D0%B8%D0%B4', }, }, },
{ id: 'manama' 					, title: { ua: 'Манама' 				, en: 'Manama' 					, }, country: 'bhr', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BD%D0%B0%D0%BC%D0%B0', }, }, },
{ id: 'managua' 				, title: { ua: 'Манагуа' 				, en: 'Managua' 				, }, country: 'nic', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BD%D0%B0%D0%B3%D1%83%D0%B0', }, }, },
{ id: 'maseru' 					, title: { ua: 'Масеру' 				, en: 'Maseru' 					, }, country: 'lso', site: { wiki: { ua: '%D0%9C%D0%B0%D1%81%D0%B5%D1%80%D1%83', }, }, },
{ id: 'mexico' 					, title: { ua: 'Мехіко' 				, en: 'Mexico' 					, }, country: 'mex', site: { wiki: { ua: '%D0%9C%D0%B5%D1%85%D1%96%D0%BA%D0%BE', }, }, },
{ id: 'milan' 					, title: { ua: 'Мілан' 					, en: 'Milan' 					, }, country: 'ita', site: { wiki: { ua: '%D0%9C%D1%96%D0%BB%D0%B0%D0%BD', }, }, },
{ id: 'minsk' 					, title: { ua: 'Мінськ' 				, en: 'Minsk' 					, }, country: 'blr', site: { wiki: { ua: '%D0%9C%D1%96%D0%BD%D1%81%D1%8C%D0%BA', }, }, },
{ id: 'monrovia' 				, title: { ua: 'Монровія' 				, en: 'Monrovia' 				, }, country: 'lbr', site: { wiki: { ua: '%D0%9C%D0%BE%D0%BD%D1%80%D0%BE%D0%B2%D1%96%D1%8F', }, }, },
{ id: 'moscow'					, title: { ua: 'Москва' 				, en: 'Moscow' 					, }, country: 'rus', site: { wiki: { ua: '%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0', }, }, },
{ id: 'naypedo' 				, title: { ua: 'Найп\'їдо' 				, en: 'Naypedo' 				, }, country: 'bur', site: { wiki: { ua: '%D0%9D%D0%B0%D0%B9%D0%BF%27%D1%97%D0%B4%D0%BE', }, }, },
{ id: 'nairobi' 				, title: { ua: 'Найробі' 				, en: 'Nairobi' 				, }, country: 'ken', site: { wiki: { ua: '%D0%9D%D0%B0%D0%B9%D1%80%D0%BE%D0%B1%D1%96', }, }, },
{ id: 'nicosia' 				, title: { ua: 'Нікосія' 				, en: 'Nicosia' 				, }, country: 'cyp', site: { wiki: { ua: '%D0%9D%D1%96%D0%BA%D0%BE%D1%81%D1%96%D1%8F', }, }, },
{ id: 'nouakchott' 				, title: { ua: 'Нуакшот' 				, en: 'Nouakchott' 				, }, country: 'mrt', site: { wiki: { ua: '%D0%9D%D1%83%D0%B0%D0%BA%D1%88%D0%BE%D1%82', }, }, },
{ id: 'nur_sultan' 				, title: { ua: 'Нур-Султан' 			, en: 'Nur-Sultan' 				, }, country: 'kaz', site: { wiki: { ua: '%D0%9D%D1%83%D1%80-%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD', }, }, },
{ id: 'nuuk' 					, title: { ua: 'Нуук' 					, en: 'Nuuk' 					, }, country: 'grl', site: { wiki: { ua: '%D0%9D%D1%83%D1%83%D0%BA', }, }, },
{ id: 'new_delhi' 				, title: { ua: 'Нью-Делі' 				, en: 'New Delhi' 				, }, country: 'ind', site: { wiki: { ua: '%D0%9D%D1%8C%D1%8E-%D0%94%D0%B5%D0%BB%D1%96', }, }, },
{ id: 'oslo' 					, title: { ua: 'Осло' 					, en: 'Oslo' 					, }, country: 'nor', site: { wiki: { ua: '%D0%9E%D1%81%D0%BB%D0%BE', }, }, },
{ id: 'ottawa' 					, title: { ua: 'Оттава' 				, en: 'Ottawa' 					, }, country: 'can', site: { wiki: { ua: '%D0%9E%D1%82%D1%82%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'paris' 					, title: { ua: 'Париж' 					, en: 'Paris' 					, }, country: 'fra', site: { wiki: { ua: '%D0%9F%D0%B0%D1%80%D0%B8%D0%B6', }, }, },
{ id: 'beijing'					, title: { ua: 'Пекін' 					, en: 'Beijing' 				, }, country: 'chn', site: { wiki: { ua: '%D0%9F%D0%B5%D0%BA%D1%96%D0%BD', }, }, },
{ id: 'south_tarawa' 			, title: { ua: 'Південна Тарава' 		, en: 'South Tarawa' 			, }, country: 'kir', site: { wiki: { ua: '%D0%9F%D1%96%D0%B2%D0%B4%D0%B5%D0%BD%D0%BD%D0%B0_%D0%A2%D0%B0%D1%80%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'phnom_penh' 				, title: { ua: 'Пномпень' 				, en: 'Phnom Penh' 				, }, country: 'khm', site: { wiki: { ua: '%D0%9F%D0%BD%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%8C', }, }, },
{ id: 'porto_novo' 				, title: { ua: 'Порто-Ново' 			, en: 'Porto Novo' 				, }, country: 'ben', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82%D0%BE-%D0%9D%D0%BE%D0%B2%D0%BE', }, }, },
{ id: 'port_au_prince' 			, title: { ua: 'Порт-о-Пренс' 			, en: 'Port-au-Prince' 			, }, country: 'hti', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82-%D0%BE-%D0%9F%D1%80%D0%B5%D0%BD%D1%81', }, }, },
{ id: 'praha'					, title: { ua: 'Прага' 					, en: 'Praha' 					, }, country: 'cze', site: { wiki: { ua: '%D0%9F%D1%80%D0%B0%D0%B3%D0%B0', }, }, },
{ id: 'pyongyang'				, title: { ua: 'Пхеньян' 				, en: 'Pyongyang' 				, }, country: 'prk', site: { wiki: { ua: '%D0%9F%D1%85%D0%B5%D0%BD%D1%8C%D1%8F%D0%BD', }, }, },
{ id: 'reykjavik' 				, title: { ua: 'Рейк\'явік' 			, en: 'Reykjavik' 				, }, country: 'isl', site: { wiki: { ua: '%D0%A0%D0%B5%D0%B9%D0%BA%27%D1%8F%D0%B2%D1%96%D0%BA', }, }, },
{ id: 'riga' 					, title: { ua: 'Рига' 					, en: 'Riga' 					, }, country: 'lva', site: { wiki: { ua: '%D0%A0%D0%B8%D0%B3%D0%B0', }, }, },
{ id: 'rome' 					, title: { ua: 'Рим' 					, en: 'Rome' 					, }, country: 'ita', site: { wiki: { ua: '%D0%A0%D0%B8%D0%BC', }, }, },
{ id: 'rose' 					, title: { ua: 'Розо' 					, en: 'Rose' 					, }, country: 'dma', site: { wiki: { ua: '%D0%A0%D0%BE%D0%B7%D0%BE', }, }, },
{ id: 'san_jose' 				, title: { ua: 'Сан-Хосе' 				, en: 'San Jose' 				, }, country: 'cri', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A5%D0%BE%D1%81%D0%B5_(%D0%9A%D0%BE%D1%81%D1%82%D0%B0-%D0%A0%D0%B8%D0%BA%D0%B0)', }, }, },
{ id: 'san_juan' 				, title: { ua: 'Сан-Хуан' 				, en: 'San Juan' 				, }, country: 'pri', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A5%D1%83%D0%B0%D0%BD', }, }, },
{ id: 'sana' 					, title: { ua: 'Сана' 					, en: 'Sana' 					, }, country: 'yem', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD%D0%B0', }, }, },
{ id: 'sarajevo' 				, title: { ua: 'Сараєво' 				, en: 'Sarajevo' 				, }, country: 'bih', site: { wiki: { ua: '%D0%A1%D0%B0%D1%80%D0%B0%D1%94%D0%B2%D0%BE', }, }, },
{ id: 'seoul'					, title: { ua: 'Сеул' 					, en: 'Seoul' 					, }, country: 'kor', site: { wiki: { ua: '%D0%A1%D0%B5%D1%83%D0%BB', }, }, },
{ id: 'skopje' 					, title: { ua: 'Скоп\'є' 				, en: 'Skopje' 					, }, country: 'mkd', site: { wiki: { ua: '%D0%A1%D0%BA%D0%BE%D0%BF%27%D1%94', }, }, },
{ id: 'sofia' 					, title: { ua: 'Софія' 					, en: 'Sofia' 					, }, country: 'bgr', site: { wiki: { ua: '%D0%A1%D0%BE%D1%84%D1%96%D1%8F', }, }, },
{ id: 'stockholm' 				, title: { ua: 'Стокгольм' 				, en: 'Stockholm' 				, }, country: 'swe', site: { wiki: { ua: '%D0%A1%D1%82%D0%BE%D0%BA%D0%B3%D0%BE%D0%BB%D1%8C%D0%BC', }, }, },
{ id: 'sucre' 					, title: { ua: 'Сукре' 					, en: 'Sucre' 					, }, country: 'bol', site: { wiki: { ua: '%D0%A1%D1%83%D0%BA%D1%80%D0%B5', }, }, },
{ id: 'tallinn' 				, title: { ua: 'Таллінн' 				, en: 'Tallinn' 				, }, country: 'est', site: { wiki: { ua: '%D0%A2%D0%B0%D0%BB%D0%BB%D1%96%D0%BD%D0%BD', }, }, },
{ id: 'tashkent' 				, title: { ua: 'Ташкент' 				, en: 'Tashkent' 				, }, country: 'uzb', site: { wiki: { ua: '%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82', }, }, },
{ id: 'tehran' 					, title: { ua: 'Тегеран' 				, en: 'Tehran' 					, }, country: 'irn', site: { wiki: { ua: '%D0%A2%D0%B5%D0%B3%D0%B5%D1%80%D0%B0%D0%BD', }, }, },
{ id: 'tegucigalpa' 			, title: { ua: 'Тегусігальпа' 			, en: 'Tegucigalpa' 			, }, country: 'hnd', site: { wiki: { ua: '%D0%A2%D0%B5%D0%B3%D1%83%D1%81%D1%96%D0%B3%D0%B0%D0%BB%D1%8C%D0%BF%D0%B0', }, }, },
{ id: 'tirana' 					, title: { ua: 'Тирана' 				, en: 'Tirana' 					, }, country: 'alb', site: { wiki: { ua: '%D0%A2%D0%B8%D1%80%D0%B0%D0%BD%D0%B0', }, }, },
{ id: 'tbilisi' 				, title: { ua: 'Тбілісі' 				, en: 'Tbilisi' 				, }, country: 'geo', site: { wiki: { ua: '%D0%A2%D0%B1%D1%96%D0%BB%D1%96%D1%81%D1%96', }, }, },
{ id: 'tokyo' 					, title: { ua: 'Токіо' 					, en: 'Tokyo' 					, }, country: 'jpn', site: { wiki: { ua: '%D0%A2%D0%BE%D0%BA%D1%96%D0%BE', }, }, },
{ id: 'tripoli' 				, title: { ua: 'Триполі' 				, en: 'Tripoli' 				, }, country: 'lby', site: { wiki: { ua: '%D0%A2%D1%80%D0%B8%D0%BF%D0%BE%D0%BB%D1%96', }, }, },
{ id: 'thimphu' 				, title: { ua: 'Тхімпху' 				, en: 'Thimphu' 				, }, country: 'btn', site: { wiki: { ua: '%D0%A2%D1%85%D1%96%D0%BC%D0%BF%D1%85%D1%83', }, }, },
{ id: 'hanoi' 					, title: { ua: 'Ханой' 					, en: 'Hanoi' 					, }, country: 'vnm', site: { wiki: { ua: '%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9', }, }, },
{ id: 'harare' 					, title: { ua: 'Хараре' 				, en: 'Harare' 					, }, country: 'zwe', site: { wiki: { ua: '%D0%A5%D0%B0%D1%80%D0%B0%D1%80%D0%B5', }, }, },
{ id: 'yamoussoukro' 			, title: { ua: 'Ямусукро' 				, en: 'Yamoussoukro' 			, }, country: 'civ', site: { wiki: { ua: '%D0%AF%D0%BC%D1%83%D1%81%D1%83%D0%BA%D1%80%D0%BE', }, }, },
{ id: 'yaounde' 				, title: { ua: 'Яунде' 					, en: 'Yaounde' 				, }, country: 'cmr', site: { wiki: { ua: '%D0%AF%D1%83%D0%BD%D0%B4%D0%B5', }, }, },

















/*

{ 
	id: '', 
	country: '', 
	title: { 
		ru: '', 
		ua: '', 
		en: '', 
	}, 
	site: { 
		wiki: { 
			ru: '', 
			ua: '', 
			en: '', 
		}, 
	}, 
},

*/


/*



		{ country: 'Австралия', city: 'Аделаида', capital: 0 },
		{ country: 'Австралия', city: 'Канберра', capital: 1 },
		{ country: 'Австралия', city: 'Мельбурн', capital: 0 },
		{ country: 'Австралия', city: 'Сидней', capital: 0 },
		{ country: 'Белоруссия', city: 'Минск', capital: 1 },
		{ country: 'Бельгия', city: 'Брюссель', capital: 1 },
		{ country: 'Великобритания', city: 'Лондон', capital: 1 },
		{ country: 'Германия', city: 'Берлин', capital: 1 },
		{ country: 'Греция', city: 'Афины', capital: 1 },
		{ country: 'Дания', city: 'Копенгаген', capital: 1 },
		{ country: 'Египет', city: 'Каир', capital: 1 },
		{ country: 'Италия', city: 'Рим', capital: 1 },
		{ country: 'Испания', city: 'Мадрид', capital: 1 },
		{ country: 'Китай', city: 'Пекин', capital: 1 },
		{ country: 'Латвия', city: 'Рига', capital: 1 },
		{ country: 'Литва', city: 'Вильнюс', capital: 1 },
		{ country: 'Мексика', city: 'Мехико', capital: 1 },
		{ country: 'Молдавия', city: 'Кишинёв', capital: 1 },
		{ country: 'Нидерланды', city: 'Амстердам', capital: 1 },
		{ country: 'Польша', city: 'Варшава', capital: 1 },
		{ country: 'Россия', city: 'Москва', capital: 1 },
		{ country: 'США', city: 'Вашингтон', capital: 1 },
		{ country: 'США', city: 'Лас-Вегас', capital: 0 },
		{ country: 'США', city: 'Лос-Анджелес', capital: 0 },
		{ country: 'США', city: 'Нью-Йорк', capital: 0 },
		{ country: 'США', city: 'Сан-Франциско', capital: 0 },
		{ country: 'Таиланд', city: 'Бангкок', capital: 1 },
		{ country: 'Финляндия', city: 'Хельсинки', capital: 1 },
		{ country: 'Франция', city: 'Париж', capital: 1 },
		{ country: 'Чехия', city: 'Прага', capital: 1 },
		{ country: 'Швеция', city: 'Стокгольм', capital: 1 },
		{ country: 'Эстония', city: 'Таллин', capital: 1 },
		{ country: 'Япония', city: 'Токио', capital: 1 },





*/











];




let objCity = {};
arrCity.forEach( k => {
	objCity[ k.id ] = k;
});



//console.log( objCity );













