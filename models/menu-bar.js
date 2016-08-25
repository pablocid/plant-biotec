'use strict';

module.exports = function MenuBarModel() {
    return {
        logo: 'img/logo.png',
        menu:[
			{text:'Home',link:'/'},
			{text:'Research areas',link:null , 
				submenu:[
					{text:'historia',link:''}
					/*{text:'estatutos',link:'/estatutos'},
					{text:'directorio',link:'/directorio'}*/
				]
			},
			{text:'Projects',link:null},
			{text:'Publications',
				submenu:[
					{text:'Scientific',link:''},
					{text:'Posters',link:''}
				]},
			{text:'Lab team',link:''},
			{text:'Contact',link:''}
		]
    };
};
