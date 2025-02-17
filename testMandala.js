/**
	* Muestra informacion del elemento seleccionado
*/
function informacion( e ){
	let estilosComputados = window.getComputedStyle(e);
	let estilos = e.style;
	console.log( estilosComputados );
	console.log( estilos );
	let largo = e.getTotalLength();
	let infoStr = e + e.id + " - " + largo;
	console.log( infoStr );
}

/**
	* Animamos los elementos seleccionados
*/
function animate( e ){
	let estilos = e.style;
	estilos.opacity = .2;
	estilos.fillOpacity = .3;
}

/**
	* Selecciona los elementos 'path' del mandala seleccionado dado su id
	* @param id representa el id del elemento cuyos path queremos animar
	* @param speed representa la velocidad de carga en milisegundos
*/
function mandala( id, speed ){
	let sel = '#' + id + ' path';
	let items = document.querySelectorAll( sel );
	for ( let i = 0; i < items.length; i++ ){
		setTimeout( function(){
			animate( items[i] );
			//informacion( items[i] );
		}, ( i + 1 ) * speed);
	}
}
