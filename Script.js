const frameworks =[
{
name:"Comunidad Primitiva",
title:"Época: Prehistoria y épocas tempranas.",
description:"Características: Economía de subsistencia, propiedad comunal, producción centrada en la satisfacción de necesidades básicas, ausencia de estratificación social.",
Image: src="Imagen/primitivo.jpg"
},{
name:"Esclavismo",
title:"Época: Civilizaciones antiguas (aprox. 3000 a.C. - 500 d.C.)",
description:"Características: Propiedad de esclavos, trabajo esclavo como base de producción, estratificación social entre propietarios y esclavos.",
Image: src="Imagen/esclavismo.jpg"
},{
name:"Feudalismo",
title:"Época: Edad Media (aprox. 5to al 15to siglo).",
description:"Características: Propiedad de la tierra como fuente de poder, relaciones de vasallaje, producción basada en la agricultura y autoconsumo, estratificación jerárquica.",
Image: src="Imagen/feudalismo.jpg"
},{
name:"Modelo Asiático",
title:"Época: Diversos momentos en la historia, especialmente en Asia (varios siglos).",
description:"Características: Fuerte control estatal, asignación centralizada de recursos y tierras, producción para satisfacer las necesidades del Estado y la élite.",
Image: src="Imagen/asiatico.jpg"
},{
name:"Capitalismo",
title:"Época: Revolución Industrial y en adelante (siglo XVIII - presente).",
description:"Características: Propiedad privada de los medios de producción, competencia en mercados libres, búsqueda de ganancias, distribución desigual de la riqueza.",
Image: src="Imagen/capitalismo.jpg"
},{
name:"Socialismo",
title:"Época: Siglo XIX - presente.",
description:"Características: Propiedad colectiva o estatal de los medios de producción, planificación económica centralizada, énfasis en la igualdad y la eliminación de desigualdades.",
Image: src="Imagen/socialismo.jpg"
},{
name:"Comunismo (etapa superior del socialismo)",
title:"Época: Teóricamente, en una etapa futura.",
description:"Características: Propiedad común de todos los medios de producción, distribución según necesidades, ausencia de clases y dinero.",
Image: src="Imagen/comunismo.jpg"
}
]
//Render
var html = "";
frameworks.forEach(e=>{
    html +="<div class= 'child' ><div class='content'><img src="+e.Image+"><h1>"+e.name+"</h1><h4>"+e.title+"</h4><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html
//Animation
var _items = document.querySelectorAll(".child")
_items.forEach(element=>{
    if(element.offsetTop < 300)
    element.classList.add('_show')
})
window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elemt=>{
        if(elemt.offsetTop - window.innerHeight/2 < scroll){
            elemt.classList.remove('_hide')
            elemt.classList.add('_show')
        }else{
            elemt.classList.remove('_show')
            elemt.classList.add('_hide')
        }
    })
})
