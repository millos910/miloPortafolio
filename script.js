function seleccionar(link){
    let opciones =document.querySelectorAll('#links a');
    opciones[0].className='';
    opciones[1].className='';
    opciones[2].className='';
    opciones[3].className='';
    link.className='seleccionado';
    let x=document.getElementById('nav')
    x.className=''
}

function responsiveMenu(){
    var x =document.getElementById('nav');
    if(x.className ===""){
        x.className ='responsive'
    }else{
        x.className ="";
    }
}
window.onscroll=function(){
    efectoHabilidades()
};
function efectoHabilidades(){
    let skills=document.getElementById('skills')
    let distancia_skills=window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById('html').classList.add('barra-progreso1');
        document.getElementById('js').classList.add('barra-progreso2');
        document.getElementById('bd').classList.add('barra-progreso3');
        document.getElementById('fs').classList.add('barra-progreso4');
    }
}