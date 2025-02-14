function getMandalaData(){

   // Toma cada uno de los path y muestra su id y el total de su longitud en consola.
   document.querySelectorAll('#weed_mandala_left path').forEach(camino=>{
      let idElemento = camino.id;
      let largo = camino.getTotalLength();
      let displ = camino.style.display;
      let stringInfo = idElemento + ' : ' + largo + ' : ' + displ
      console.log(stringInfo);
   });

}