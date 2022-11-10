const arrCarEngine = [






//https://uk.wikipedia.org/wiki/Volkswagen_Passat_B3
//https://uk.wikipedia.org/wiki/Volkswagen_Passat_B4




/*


{ 
	title 		: '',
	type 		: '',
	fuel 		: '',
	value 		: 0,
	valve 		: 0,
	power 		: { kwt: 0, ph: 0, rpm: 0 },
	torque 		: { nm: 0, rpm: 0 },
	turbo		: '',
	catalyst 	: ,
	speed 		: '',	
	date 		: '',
	car 		: {},
},

{ 
	title 		: '', 		// код/название двигателя 
	type 		: '', 		// тип двигателя
	fuel 		: '', 		// benzine, gas, diesel
	value 		: , 		// объем двигателя 			// куб.см
	turbo		: 1, 		// турбо
	valve 		: , 		// количество клапанов 		// шт	
	power 		: { kwt: 0, ph: 0, rpm: 0 }, 			// мощность 		// кВт, лошадиных сил, при оборотах в минуту
	torque 		: { nm: 0, rpm: 0 }, 					// крутящий момент 	// Нм, при оборотах в минуту
	catalyst 	: , 		// катализатор 				// есть/нет 	// 1/0
	speed 		: '', 		// скорость 				// км/ч 	
	date 		: '',  		// годы производства
	car 		: {}, 		// авто, где устанавливался двигатель

},
*/




	{ 
		id 			: 'm2da',
		title 		: 'M2DA',
		fuel 		: 'benzine',
		seria 		: '1.0 EcoBoost',
		value 		: { liter: '1.0', cm3: 998, },
		ohc 		: '',
		valve 		: 12,
		cylinder 	: 'R3',
		power 		: { kwt: 0, ph: 100, rpm: 0, },
		torque 		: { nm: 170, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/m2da.html',
		}
	},
	{ 
		id 			: 'm1da',
		title 		: 'M1DA',
		fuel 		: 'benzine',
		seria 		: '1.0 EcoBoost',
		value 		: { liter: '1.0', cm3: 998, },
		ohc 		: '',
		valve 		: 12,
		cylinder 	: 'R3',
		power 		: { kwt: 0, ph: 125, rpm: 0, },
		torque 		: { nm: 170, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/m1da.html',
		}
	},
	{ 
		id 			: 'asda',
		title 		: 'ASDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec',
		value 		: { liter: '1.4', cm3: 1388, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 80, rpm: 0, },
		torque 		: { nm: 124, rpm: 0, },
		car 		: { ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/asda.html',
		}
	},
	{ 
		id 			: '4a91',
		title 		: '4A91',
		fuel 		: 'benzine',
		value 		: { liter: '1.5', cm3: 1499, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 109, rpm: 0 },
		torque 		: { nm: 145, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4a91.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'm8da',
		title 		: 'M8DA',
		fuel 		: 'benzine',
		seria 		: '1.5 EcoBoost',
		value 		: { liter: '1.5', cm3: 1498 , },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 150, rpm: 0, },
		torque 		: { nm: 240, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/m8da.html',
		}
	},
	{ 
		id 			: 'm9da',
		title 		: 'M9DA',
		fuel 		: 'benzine',
		seria 		: '1.5 EcoBoost',
		value 		: { liter: '1.5', cm3: 1498 , },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 182, rpm: 0, },
		torque 		: { nm: 240, rpm: 0, },
		turbo 		: 'Continental',
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/m9da.html',
		}
	},
	{ 
		id 			: 'xtda',
		title 		: 'XTDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec Ti-VCT',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 85, rpm: 0, },
		torque 		: { nm: 141, rpm: 0, },
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/xtda.html',
		}
	},
	{ 
		id 			: 'hwda',
		title 		: 'HWDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 100, rpm: 0, },
		torque 		: { nm: 150, rpm: 0, },
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/hwda.html',
		}
	},
	{ 
		id 			: 'shda',
		title 		: 'SHDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 100, rpm: 0, },
		torque 		: { nm: 150, rpm: 0, },
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/shda.html',
		}
	},

	{ 
		id 			: 'alz',
		title 		: 'ALZ',
		fuel 		: 'benzine',
		seria 		: 'EA113-1.6',
		value 		: { liter: '1.6', cm3: 1595, },
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		//type 		: '',
		power 		: { kwt: 75, ph: 102, rpm: 5600, },
		torque 		: { nm: 148, rpm: 3800, },
		//catalyst 	: 1,
		//speed 		: '',	
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/alz.html',
		}
	},






	{ 
		id 			: 'iqdb',
		title 		: 'IQDB',
		fuel 		: 'benzine',
		seria 		: 'Duratec Ti-VCT',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 105, rpm: 0, },
		torque 		: { nm: 150, rpm: 0, },
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/iqdb.html',
		}
	},
	{ 
		id 			: 'hxda',
		title 		: 'HXDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec Ti-VCT',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		//type 		: '',
		power 		: { kwt: 0, ph: 115, rpm: 0, },
		torque 		: { nm: 155, rpm: 0, },
		//catalyst 	: 1,
		//speed 		: '',	
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/hxda.html',
		}
	},
	{ 
		id 			: 'sida',
		title 		: 'SIDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec Ti-VCT',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 115, rpm: 0, },
		torque 		: { nm: 155, rpm: 0, },	
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/sida.html',
		}
	},
	{ 
		id 			: '4a92',
		title 		: '4A92',
		fuel 		: 'benzine',
		value 		: { liter: '1.6', cm3: 1590, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 117, rpm: 0 },
		torque 		: { nm: 154, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4a92.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'pnda',
		title 		: 'PNDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec Ti-VCT',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 125, rpm: 0, },
		torque 		: { nm: 159, rpm: 0, },
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/pnda.html',
		}
	},
	{ 
		id 			: 'jqda',
		title 		: 'JQDA',
		fuel 		: 'benzine',
		seria 		: '1.6 EcoBoost',
		value 		: { liter: '1.6', cm3: 1596, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 150, rpm: 0, },
		torque 		: { nm: 240, rpm: 0, },
		turbo 		: 'BorgWarner KP39',
		car 		: { ford_c_max_2: 1, ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/jqda.html',
		}
	},
	{ 
		id 			: '4b10',
		title 		: '4B10',
		fuel 		: 'benzine',
		value 		: { liter: '1.8', cm3: 1798, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 140, rpm: 0 },
		torque 		: { nm: 175, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4b10.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'rp',
		title 		: 'RP',
		fuel 		: 'benzine',
		seria 		: 'EA827-1.8',
		value 		: { liter: '1.8', cm3: 1781, },
		type 		: 'SPFI',
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 66, ph: 90, rpm: 5250 },
		torque 		: { nm: 142, rpm: 3000 },	
		car 		: { seat_toledo_1: 1, vw_golf_2: 1, vw_jetta_a2: 1, vw_passat_b3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/vw/rp.html',
		}
	},
	{ 
		id 			: 'qqdb',
		title 		: 'QQDB',
		fuel 		: 'benzine',
		seria 		: 'Duratec HE',
		value 		: { liter: '1.8', cm3: 1798, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 125, rpm: 0, },
		torque 		: { nm: 165, rpm: 0, },
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/qqdb.html',
		}
	},
	{ 
		id 			: 'kr',
		title 		: 'KR',
		fuel 		: 'benzine',
		seria 		: '',
		value 		: { liter: '1.8', cm3: 1781, },
		type 		: 'MPFI',
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 100, ph: 136, rpm: 6300 },
		torque 		: { nm: 162, rpm: 4800 },	
		car 		: { seat_toledo_1: 1, vw_passat_b3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/vw/rp.html',
		}
	},
	{ 
		id 			: 'awt',
		title 		: 'AWT',
		fuel 		: 'benzine',
		seria 		: 'EA113-1.8T',
		value 		: { liter: '1.8T', cm3: 1781, },
		ohc 		: 'DOHC',
		valve 		: 20,
		cylinder 	: 'R4',
		//type 		: '',
		power 		: { kwt: 110, ph: 150, rpm: 5700, },
		torque 		: { nm: 210, rpm: 4600, },
		turbo		: 'KKK K03',
		//catalyst 	: 1,
		//speed 		: '',	
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/awt.html',
		}
	},
	{ 
		id 			: '2e',
		title 		: '2E',
		fuel 		: 'benzine',
		seria 		: 'EA827-2.0',
		value 		: { liter: '2.0', cm3: 1984, },
		type 		: 'MPFI',
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 85, ph: 115, rpm: 5400 },
		torque 		: { nm: 166, rpm: 3200 },
		catalyst 	: 1,	
		car 		: { vw_golf_3: 1, vw_passat_b3: 1, vw_passat_b4: 1, vw_vento: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B3#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8',
			otoba 	: 'https://otoba.ru/dvigatel/vw/2e.html',
		}
	},
	{ 
		id 			: '4b11',
		title 		: '4B11',
		fuel 		: 'benzine',
		//seria 		: '',
		value 		: { liter: '2.0', cm3: 1998, },
		//type 		: 'MPFI',
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 150, rpm: 0 },
		torque 		: { nm: 195, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4b11.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'aoda',
		title 		: 'AODA',
		fuel 		: 'benzine',
		seria 		: 'Duratec HE',
		value 		: { liter: '2.0', cm3: 1999, },
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 145, rpm: 0, },
		torque 		: { nm: 185, rpm: 0, },
		car 		: { ford_c_max_1: 1, ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/aoda.html',
		}
	},
	{ 
		id 			: 'xqda',
		title 		: 'XQDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec HE',
		value 		: { liter: '2.0', cm3: 1999, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 150, rpm: 0, },
		torque 		: { nm: 202, rpm: 0, },
		car 		: { ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/xqda.html',
		}
	},
	{ 
		id 			: '4b11t',
		title 		: '4B11T',
		fuel 		: 'benzine',
		//seria 		: '',
		value 		: { liter: '2.0 Turbo', cm3: 1998, },
		//type 		: 'MPFI',
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 240, rpm: 0 },
		torque 		: { nm: 340, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4b11t.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'agg',
		title 		: 'AGG',
		fuel 		: 'benzine',
		seria 		: 'EA827-2.0',
		value 		: { liter: '2.0', cm3: 1984, },
		type 		: 'MPFI',
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 85, ph: 115, rpm: 5400 },
		torque 		: { nm: 166, rpm: 2600 },
		catalyst 	: 1,
		car 		: { vw_corrado: 1, vw_passat_b4: 1, vw_vento: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/vw/agg.html',
			wiki_ua : 'Volkswagen_Passat_B4#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8',
		}
	},
	{ 
		id 			: 'abf',
		title 		: 'ABF',
		fuel 		: 'benzine',
		seria 		: 'EA827-2.0',
		value 		: { liter: '2.0', cm3: 1984, },
		type 		: 'MPFI',
		ohc 		: 'DOHC',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 110, ph: 150, rpm: 6000 },
		torque 		: { nm: 180, rpm: 4400 },
		catalyst 	: 1,
		car 		: { vw_golf_3: 1, vw_passat_b4: 1, seat_toledo_1: 1, seat_cordoba_1: 1, seat_ibiza_1: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/vw/abf.html',
			wiki_ua : 'Volkswagen_Passat_B4#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8',
		}
	},
	{ 
		id 			: 'alt',
		title 		: 'ALT',
		fuel 		: 'benzine',
		seria 		: 'EA113-2.0',
		value 		: { liter: '2.0', cm3: 1984, },
		ohc 		: 'DOHC',
		valve 		: 20,
		cylinder 	: 'R4',
		power 		: { kwt: 96, ph: 130, rpm: 5400, },
		torque 		: { nm: 195, rpm: 3300, },
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/audi/alt.html',
		}
	},
	{ 
		id 			: 'r9da',
		title 		: 'R9DA',
		fuel 		: 'benzine',
		seria 		: '2.0 EcoBoost',
		value 		: { liter: '2.0', cm3: 1999, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 249, rpm: 0, },
		torque 		: { nm: 360, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/r9da.html',
		}
	},
	{ 
		id 			: '4b12',
		title 		: '4B12',
		fuel 		: 'benzine',
		value 		: { liter: '2.4', cm3: 1998, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 165, rpm: 0 },
		torque 		: { nm: 222, rpm: 0 },
		catalyst 	: 1,	
		car 		: { mitsubishi_lancer_x: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/mitsubishi/4b12.html',
			wiki_ua : 'https://uk.wikipedia.org/wiki/Mitsubishi_Lancer#Mitsubishi_Lancer_10_(2007-2015)',
		}
	},
	{ 
		id 			: 'yvda',
		title 		: 'YVDA',
		fuel 		: 'benzine',
		seria 		: '2.3 EcoBoost',
		value 		: { liter: '2.3', cm3: 2261, },
		ohc 		: '',
		valve 		: 16,
		cylinder 	: 'R4',
		power 		: { kwt: 0, ph: 350, rpm: 0, },
		torque 		: { nm: 440, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_focus_3: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/yvda.html',
		}
	},
	{ 
		id 			: 'hyda',
		title 		: 'HYDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec ST/RS',
		value 		: { liter: '2.5', cm3: 2522, },
		ohc 		: '',
		valve 		: 20,
		cylinder 	: 'R5',
		power 		: { kwt: 0, ph: 225, rpm: 0, },
		torque 		: { nm: 320, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/hyda.html',
		}
	},
	{ 
		id 			: 'jzda',
		title 		: 'JZDA',
		fuel 		: 'benzine',
		seria 		: 'Duratec ST/RS',
		value 		: { liter: '2.5', cm3: 2522, },
		ohc 		: '',
		valve 		: 20,
		cylinder 	: 'R5',
		power 		: { kwt: 0, ph: 305, rpm: 0, },
		torque 		: { nm: 440, rpm: 0, },
		turbo 		: '+',
		car 		: { ford_focus_2: 1, },
		site 		: {
			otoba 	: 'https://otoba.ru/dvigatel/ford/jzda.html',
		}
	},












// Дизеля ---

	{ 
		id 			: 'avb',
		title 		: 'AVB',
		fuel 		: 'diesel',
		seria 		: 'EA188-1.9',
		value 		: { liter: '1.9 TDI', cm3: 1896, },
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 74, ph: 100, rpm: 4000, },
		torque 		: { nm: 250, rpm: 1900, },
		turbo 		: '+',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/avb.html',
		}
	},
	{ 
		id 			: 'awx',
		title 		: 'AWX',
		fuel 		: 'diesel',
		seria 		: 'EA188-1.9',
		value 		: { liter: '1.9 TDI', cm3: 1896, },
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 96, ph: 130, rpm: 4000, },
		torque 		: { nm: 285, rpm: 2500, },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/audi/awx.html',
		}
	},
	{ 
		id 			: 'avf',
		title 		: 'AVF',
		fuel 		: 'diesel',
		seria 		: 'EA188-1.9',
		value 		: { liter: '1.9 TDI', cm3: 1896, },
		ohc 		: 'SOHC',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 96, ph: 130, rpm: 4000, },
		torque 		: { nm: 310, rpm: 1900, },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/avf.html',
		}
	},
	{ 
		id 			: 'bgw',
		title 		: 'BGW',
		fuel 		: 'diesel',
		seria 		: '',
		value 		: { liter: '2.0 TDI', cm3: 1968, },
		ohc 		: '',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 100, ph: 136, rpm: 4000, },
		torque 		: { nm: 335, rpm: 1900, },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
		}
	},
	{ 
		id 			: 'bhw',
		title 		: 'BHW',
		fuel 		: 'diesel',
		seria 		: '',
		value 		: { liter: '2.0 TDI', cm3: 1968, },
		ohc 		: '',
		valve 		: 8,
		cylinder 	: 'R4',
		power 		: { kwt: 100, ph: 136, rpm: 4000, },
		torque 		: { nm: 335, rpm: 1900, },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
		}
	},
	{ 
		id 			: 'akn',
		title 		: 'AKN',
		fuel 		: 'diesel',
		seria 		: 'EA330',
		value 		: { liter: '2.5 TDI', cm3: 2496, },
		ohc 		: '2 x DOHC',
		valve 		: 24,
		cylinder 	: 'V6',
		power 		: { kwt: 110, ph: 150, rpm: 4000, },
		torque 		: { nm: 310, rpm: 3200 , },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/akn.html',
		}
	},
	{ 
		id 			: 'bdg',
		title 		: 'BDG',
		fuel 		: 'diesel',
		seria 		: 'EA330',
		value 		: { liter: '2.5 TDI', cm3: 2496, },
		ohc 		: '2 x DOHC',
		valve 		: 24,
		cylinder 	: 'V6',
		power 		: { kwt: 120, ph: 163, rpm: 4000, },
		torque 		: { nm: 350, rpm: 3000, },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/audi/bdg.html',
		}
	},
	{ 
		id 			: 'bau',
		title 		: 'BAU',
		fuel 		: 'diesel',
		seria 		: 'EA330',
		value 		: { liter: '2.5 TDI', cm3: 2496 , },
		ohc 		: '2 x DOHC',
		valve 		: 24,
		cylinder 	: 'V6',
		power 		: { kwt: 132, ph: 180, rpm: 4000, },
		torque 		: { nm: 370, rpm: 2500 , },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/audi/bau.html',
		}
	},
	{ 
		id 			: 'bdh',
		title 		: 'BDH',
		fuel 		: 'diesel',
		seria 		: 'EA330',
		value 		: { liter: '2.5 TDI', cm3: 2496 , },
		ohc 		: '2 x DOHC',
		valve 		: 24,
		cylinder 	: 'V6',
		power 		: { kwt: 132, ph: 180, rpm: 4000, },
		torque 		: { nm: 370, rpm: 2500 , },
		turbo 		: 'VGT',
		car 		: { vw_passat_b5p: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#%D0%94%D0%B2%D0%B8%D0%B3%D1%83%D0%BD%D0%B8_Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: 'https://otoba.ru/dvigatel/vw/bdh.html',
		}
	},

















/*







	{ 
		title 		: 'RF',
		value 		: { liter: 1.6, cm3: 1595, },
		type 		: 'carburetor',
		valve 		: 8,
		power 		: { kwt: 53, ph: 72, rpm: 5200 },
		torque 		: { nm: 120, rpm: 2700 },
		catalyst 	: 1,
		speed 		: '161–169',	
		date 		: '04.1988 – 07.1989',
		car 		: { vw_passat_b3: 1, },
		site 		: {
			wiki_ua : '',
			otoba 	: '',
		}
	},













	{ 
		title 		: 'RF',
		liter 		: 1.6,
		cm3 		: 0,

		type 		: 'carburetor',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 53, ph: 72, rpm: 5200 },
		torque 		: { nm: 120, rpm: 2700 },
		catalyst 	: 1,
		speed 		: '161–169',	
		date 		: '04.1988 – 07.1989',
		car 		: { vw_passat_b3: 1, },
		site 		: {
			wiki_ua : 'Volkswagen_Passat_B5#Volkswagen_Passat_B5_GP_(2000-2005)',
			otoba 	: '',
		}
	},














	{ 
		title 		: '1.6 1F',
		type 		: 'SPFI',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 53, ph: 72, rpm: 5200 },
		torque 		: { nm: 125, rpm: 2750 },
		catalyst 	: 1,
		speed 		: '161–169',	
		date 		: '04.1988 – 07.1990',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.6 ABN',
		type 		: 'carburetor',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 55, ph: 75, rpm: 5200 },
		torque 		: { nm: 125, rpm: 2600 },
		catalyst 	: 0,
		speed 		: '165–171',	
		date 		: '04.1988 – 09.1993',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.6 EZ',
		type 		: 'carburetor',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 55, ph: 75, rpm: 5200 },
		torque 		: { nm: 125, rpm: 2600 },
		catalyst 	: 0,
		speed 		: '165–171',	
		date 		: '04.1988 – 09.1993',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.8 AAM',
		type 		: 'SPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 55, ph: 75, rpm: 5000 },
		torque 		: { nm: 140, rpm: 2500 },
		catalyst 	: 1,
		speed 		: '164–170',	
		date 		: '08.1990 – 05.1997',
		car 		: { vw_passat_b3: 1, vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.8 ANN',
		type 		: 'SPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 55, ph: 75, rpm: 5000 },
		torque 		: { nm: 140, rpm: 2500 },
		catalyst 	: 1,
		speed 		: '164–169',	
		date 		: '10.1993 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},

	{ 
		title 		: '1.8 ABS',
		type 		: 'SPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 66, ph: 90, rpm: 5000 },
		torque 		: { nm: 145, rpm: 2500 },
		catalyst 	: 1,
		speed 		: '170–177',	
		date 		: '08/1991 – 03.1997',
		car 		: { vw_passat_b3: 1, vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.8 ADZ',
		type 		: 'SPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 66, ph: 90, rpm: 5500 },
		torque 		: { nm: 145, rpm: 2500 },
		catalyst 	: 1,
		speed 		: '170–177',	
		date 		: '10.1993 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.8 ANP',
		type 		: 'SPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 66, ph: 90, rpm: 5500 },
		torque 		: { nm: 145, rpm: 2500 },
		catalyst 	: 1,
		speed 		: '170–177',	
		date 		: '10.1993 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.6 AEK',
		type 		: 'injector',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 74 , ph: 101, rpm: 5800 },
		torque 		: { nm: 135  , rpm: 4400 },
		catalyst 	: 1,
		speed 		: '181–186',	
		date 		: '10.1994 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.6 AFT',
		type 		: 'injector',
		value 		: 1595,
		valve 		: 8,
		power 		: { kwt: 74 , ph: 101, rpm: 5800 },
		torque 		: { nm: 140 , rpm: 3500 },
		catalyst 	: 1,
		speed 		: '181–186',	
		date 		: '10.1994 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},
	{ 
		title 		: '1.8 PF',
		type 		: 'MPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 79, ph: 107, rpm: 5400 },
		torque 		: { nm: 154, rpm: 3800 },
		catalyst 	: 1,
		speed 		: '184–190',	
		date 		: '04.1988 – 07.1990',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.8 PB',
		type 		: 'MPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 82, ph: 112, rpm: 5400 },
		torque 		: { nm: 159, rpm: 4000 },
		catalyst 	: 0,
		speed 		: '188–192',	
		date 		: '04.1988 – 07.1990',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.8 KR',
		type 		: 'MPFI',
		value 		: 1781,
		valve 		: 16,
		power 		: { kwt: 100, ph: 136, rpm: 6300 },
		torque 		: { nm: 162, rpm: 4800 },
		catalyst 	: 0,
		speed 		: '199–206',	
		date 		: '07.1988 – 09.1993',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '1.8 PG G60',
		type 		: 'MPFI',
		value 		: 1781,
		valve 		: 8,
		power 		: { kwt: 118, ph: 160, rpm: 5600 },
		torque 		: { nm: 225, rpm: 3800 },
		catalyst 	: 0,
		speed 		: '210–215',	
		date 		: '10.1988 – 09.1993',
		car 		: { vw_passat_b3: 1, },
	},

	{ 
		title 		: '2.0 ADY',
		type 		: 'MPFI',
		value 		: 1984,
		valve 		: 8,
		power 		: { kwt: 85, ph: 115, rpm: 5400 },
		torque 		: { nm: 166, rpm: 3200 },
		catalyst 	: 1,
		speed 		: '187-195',	
		date 		: '10.1993 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},

	{ 
		title 		: '2.0 9A',
		type 		: 'MPFI',
		value 		: 1984,
		valve 		: 16,
		power 		: { kwt: 100, ph: 136, rpm: 5800 },
		torque 		: { nm: 180, rpm: 4400 },
		catalyst 	: 1,
		speed 		: '197–206',	
		date 		: '07.1988 – 09.1993',
		car 		: { vw_passat_b3: 1, },
	},
	{ 
		title 		: '2.0 ABF',
		type 		: 'MPFI',
		value 		: 1984,
		valve 		: 16,
		power 		: { kwt: 110, ph: 150, rpm: 6000 },
		torque 		: { nm: 180, rpm: 4400 },
		catalyst 	: 1,
		speed 		: '204–213',	
		date 		: '01.1994 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},
	{ 
		title 		: '2.8 VR6 AAA',
		type 		: 'MPFI',
		value 		: 2792,
		valve 		: 12,
		power 		: { kwt: 128, ph: 174, rpm: 5800 },
		torque 		: { nm: 235, rpm: 4200 },
		catalyst 	: 1,
		speed 		: '220–224',	
		date 		: '10.1988 – 05.1997',
		car 		: { vw_passat_b3: 1, vw_passat_b4: 1, },
	},
	{ 
		title 		: '2.9 VR6 ABV',
		type 		: 'MPFI',
		value 		: 2861,
		valve 		: 12,
		power 		: { kwt: 135, ph: 184, rpm: 5800 },
		torque 		: { nm: 245, rpm: 4200 },
		catalyst 	: 1,
		speed 		: '218',	
		date 		: '10.1994 – 03.1997',
		car 		: { vw_passat_b4: 1, },
	},




	{ 
		title 		: '1.5 4A91',
		type 		: '',
		value 		: 1499,
		valve 		: 16,
		power 		: { kwt: 80, ph: 109, rpm: 0 },
		torque 		: { nm: 145, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/mitsubishi/4a91.html', },
		]
	},
	{ 
		title 		: '1.6 4A92',
		type 		: '',
		value 		: 1590,
		valve 		: 16,
		power 		: { kwt: 85, ph: 117, rpm: 0 },
		torque 		: { nm: 154, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/mitsubishi/4a92.html', },
		]
	},
	{ 
		title 		: '1.8 4B10',
		type 		: '',
		value 		: 1798,
		valve 		: 16,
		power 		: { kwt: 0, ph: 140, rpm: 0 },
		torque 		: { nm: 175, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/mitsubishi/4b10.html', },
		]
	},
	{ 
		title 		: '2.0 4B11',
		type 		: '',
		value 		: 1998,
		valve 		: 16,
		power 		: { kwt: 0, ph: 150, rpm: 0 },
		torque 		: { nm: 195, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/mitsubishi/4b11.html', },
		]
	},
	{ 
		title 		: '2.0 4B11T',
		type 		: '',
		value 		: 1998,
		valve 		: 16,
		power 		: { kwt: 0, ph: 241, rpm: 0 },
		torque 		: { nm: 340, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru' 		, href: 'https://otoba.ru/dvigatel/mitsubishi/4b11t.html', },
			{ title: 'wikimotors.ru' 	, href: 'http://wikimotors.ru/4b11t/', },
		]
	},
	{ 
		title 		: '2.4 4B12',
		type 		: '',
		value 		: 2359,
		valve 		: 16,
		power 		: { kwt: 0, ph: 170, rpm: 0 },
		torque 		: { nm: 222, rpm: 0 },
		catalyst 	: 0,
		speed 		: '',	
		date 		: '',
		site 		: [
			{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/mitsubishi/4b12.html', },
		]
	},


*/




];







