/*++++++++++++++++++CAMBIAR IMAGEN PASANDO EL RATON+++++++++++++++++++*/
document.getElementById('portador').addEventListener('mouseover', bosque);
function bosque(){
  document.getElementById('imagenes').src="img/menu/general_road.jpg"
}
document.getElementById('portador').addEventListener('mouseout', bosqueout);
function bosqueout(){
  document.getElementById('imagenes').src="";
}

document.getElementById('orca').addEventListener('mouseover', orcaimg);
function orcaimg(){
   var racing="Racing";
  document.getElementById('imagenes').src="img/menu/orca.jpg"
   document.getElementById('orca').innerHTML="Orca | "+ racing;
}
document.getElementById('orca').addEventListener('mouseout', orcaimgout);
function orcaimgout(){
  document.getElementById('imagenes').src="";
  document.getElementById('orca').innerHTML="Orca";
}

document.getElementById('orcaAero').addEventListener('mouseover', orcaAeroimg);
function orcaAeroimg(){
  var racing="Racing";
  document.getElementById('imagenes').src="img/menu/OrcaAero.jpg"
  document.getElementById('orcaAero').innerHTML="Orca Aero | "+ racing;

}
document.getElementById('orcaAero').addEventListener('mouseout', orcaAeroout);
function orcaAeroout(){
  document.getElementById('imagenes').src="";
   document.getElementById('orcaAero').innerHTML="Orca Aero";
}
document.getElementById('avant').addEventListener('mouseover', avant);
function avant(){
   var endurance="Endurance";
  document.getElementById('imagenes').src="img/menu/avant.jpg"
    document.getElementById('avant').innerHTML="Avant | "+ endurance;
}
document.getElementById('avant').addEventListener('mouseout', avantout);
function avantout(){
  document.getElementById('imagenes').src="";
  document.getElementById('avant').innerHTML="Avant";
}
document.getElementById('terra').addEventListener('mouseover', terra);
function terra(){
  var road="All-Road";
  document.getElementById('imagenes').src="img/menu/terra.jpg"
     document.getElementById('terra').innerHTML="Terra | "+ road;
}
document.getElementById('terra').addEventListener('mouseout', terraout);
function terraout(){
  document.getElementById('imagenes').src="";
  document.getElementById('terra').innerHTML="Terra";
}
document.getElementById('orcabici').addEventListener('mouseover', orcabici);
function orcabici(){
  document.getElementById('imagenes').src="img/menu/personalizar-menu-orca.png"
}
document.getElementById('orcabici').addEventListener('mouseout', orcabiciout);
function orcabiciout(){
  document.getElementById('imagenes').src="";
}

document.getElementById('orcabici2').addEventListener('mouseover', orcabici2);
function orcabici2(){
  document.getElementById('imagenes').src="img/menu/menu-personalizar-orcaaero.png"
}
document.getElementById('orcabici2').addEventListener('mouseout', orcabici2out);
function orcabici2out(){
  document.getElementById('imagenes').src="";
}

document.getElementById('terrabici').addEventListener('mouseover', terrabici);
function terrabici(){
  document.getElementById('imagenes').src="img/menu/menu-personalizar-terra.jpg"
}
document.getElementById('terrabici').addEventListener('mouseout', terrabiciout);
function terrabiciout(){
  document.getElementById('imagenes').src="";
}

/*++++++++++++++++++CAMBIAR IMAGEN CLICKANDO EL RATON+++++++++++++++++++*/

document.getElementById('boton1').addEventListener('click',cambio1);
function cambio1(){
  document.getElementById('foto').src="img/orcaero/ORCA_AREO_M21eTEAMB.jpg"
}
document.getElementById('boton2').addEventListener('click',cambio2);
function cambio2(){
  document.getElementById('foto').src="img/orcaero/ORCA_AREO_M21eTEAM.jpg"
}
document.getElementById('boton3').addEventListener('click',cambio3);
function cambio3(){
  document.getElementById('foto').src="img/orcaero/ORCA_AREO_M21eTEAMA.jpg"
}




