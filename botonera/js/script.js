$('body').ready('a.disabled', function() {
  this.preventDefault();
});


$('audio').on('play', function () { //cuando un audio empieza a reproducirse
    var current=this;
    $('audio').each(function() { 
      if (this!== current) { //todos los demás
        this.pause();  //los pausamos
        this.currentTime=0;
    }
     });
  });



$(document).ready(function(){

   $("#viejo").click(function() {$("audio")[0].play();});
   $("#rotwaili").click(function() {$("audio")[1].play();});
   $("#plata").click(function() {$("audio")[2].play();});
   $("#pero").click(function() {$("audio")[3].play();});
   $("#anoche").click(function() {$("audio")[4].play();});
   $("#otario").click(function() {$("audio")[5].play();});
   $("#afeminado").click(function() {$("audio")[6].play();});
   $("#hermana").click(function() {$("audio")[7].play();});
   $("#mañana").click(function() {$("audio")[8].play();});
   $("#voca").click(function() {$("audio")[9].play();});
   $("#putazo").click(function() {$("audio")[10].play();});
   $("#gallina").click(function() {$("audio")[11].play();});
   $("#aprendiste").click(function() {$("audio")[12].play();});
   $("#putitos").click(function() {$("audio")[13].play();});
   $("#chascomus").click(function() {$("audio")[14].play();});
   $("#diez").click(function() {$("audio")[15].play();});
   $("#anio").click(function() {$("audio")[16].play();});
   $("#navidad").click(function() {$("audio")[17].play();});
   $("#paja").click(function() {$("audio")[18].play();});
   $("#bostero").click(function() {$("audio")[19].play();});
   $("#novia").click(function() {$("audio")[20].play();});
   $("#viajando").click(function() {$("audio")[21].play();});
   $("#botella").click(function() {$("audio")[22].play();});
   $("#fuerte").click(function() {$("audio")[23].play();});
   $("#cholo").click(function() {$("audio")[24].play();});
   $("#si").click(function() {$("audio")[25].play();});
   $("#guampudo").click(function() {$("audio")[26].play();});
   $("#mear").click(function() {$("audio")[27].play();});
   $("#señora").click(function() {$("audio")[28].play();});
   $("#fernet").click(function() {$("audio")[29].play();});
   $("#sera").click(function() {$("audio")[30].play();});
   $("#siempre").click(function() {$("audio")[31].play();});
   $("#gancia").click(function() {$("audio")[32].play();});
   $("#desu").click(function() {$("audio")[33].play();});

});


 







