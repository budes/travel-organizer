
/*
var link_hotel_E = "https://goo.gl/maps/M1MfgveFD6yGJn626"
var link_hotel_L = "https://www.trivago.com.br/?aDateRange%5Barr%5D=2021-05-31&aDateRange%5Bdep%5D=2021-06-01&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=2277224%2F100&hasList=1&hasMap=0&sharedcid=2277224&tab=overview&ra="

var mensagem_hotel = "<p>\n \
<b> Hotel (E) </b>: <a href='" + link_hotel_E + "'> Lara Hotel </a> </p>\n \
<img src='imagem/lara hotel.jpg'> \n \
<p> <b> Preço </b>: R$280,00 <br> </p>\n \
<p> <b> Hotel (L)</b>: <a href='" + link_hotel_L + "'> Pousada Iguarape </a> \n \
<img id='seg' src='imagem/iguarape.jpg'> \n \
<p> <b> Preço </b>: R$ 185,00 </p>"
*/

var link_hotel = "https://www.jrhoteljpa.com/"
var link_restaurante = "https://www.tripadvisor.com.br/Restaurant_Review-g303428-d5339809-Reviews-Acacia_Restaurante_e_Eventos-Joao_Pessoa_State_of_Paraiba.html"

var mensagem_hotel = "\n \
<p> <b> Hotel </b>: <a href='" + link_hotel + "'> JR Hotel </a> \n \
<img id='seg' src='imagem/JR Hotel.jpg'> \n \
<p> <b> Preço </b>: R$ 85,00+10/pessoa <br> <br> </p> \n \
<ul> \n \
   <li> Cada quarto acomoda <br> até 3 pessoas </li>\n \
   <li> Café da manhã incluído </li>\n \
</ul> \n \
\n \
<p> <br> <b> Restaurante (</b>Anexo<b>)</b>: <br> <a href='" + link_restaurante + "'> Acácia Restaurante </a> \n \
<br> <b> Preço </b>: R$ 29,00/kg\n \
</p>"


var estados = [
   "Alagoas",
   "Bahia", 
   "Ceará", 
   "Maranhão",
   "Paraíba",
   "Pernambuco", 
   "Piauí",
   "Rio Grande do Norte", 
   "Sergipe"
]

var destinos = [
   "", 
   "", 
   "",  
   "\n \
   <h1> Parque Nacional dos Lençóis Maranhenses </h1> \n \
   \n \
   <img src='imagem/praia das dunas.jpg'> \n \
   <p> <b> Distância </b>: 1280km <br> </p> \n \
   <div id='hotel' \n \
      onmouseover='CriaTabelaHotel()' \n \
      onmouseleave='DesfazTabelaHotel()' \n \
   > \n \
      <section id='hamburger'> \n \
         \n \
         <div class='desenho'> </div>\n \
         <div class='desenho'> </div>\n \
         <div class='desenho'> </div>\n \
      </section> Hotéis </div>\n \
      \n \
      <aside class='hoteis'> </aside> \n \
   <a href='opcoes.html'> <button> Calcular custo </button> </a>",
   
   "\n \
   <h1> Centro Histórico de João Pessoa </h1> \n \
   \n \
   <img src='imagem/centro historico.jpg'> \n \
   <p> <b> Distância </b>: 156km <br> </p> \n \
   <div id='hotel' \n \
      onmouseover='CriaTabelaHotel()' \n \
      onmouseleave='DesfazTabelaHotel()' \n \
   > \n \
      <section id='hamburger'> \n \
         \n \
         <div class='desenho'> </div>\n \
         <div class='desenho'> </div>\n \
         <div class='desenho'> </div>\n \
      </section> Hospedagem </div>\n \
      \n \
      <aside class='hoteis'> </aside> \n \
   <a href='opcoes.html'> <button> Calcular custo </button> </a>", 
   "",
   "", 
   "",
   ""
]


function SelecionaEstado(ID, Nome) {
	var tag_titulo = document.querySelector("header h1");
	var tag_painel = document.querySelector("section aside");
	
	tag_titulo.innerText = Nome;
	
	for (var i = 0; i < estados.length; i++) {

      if (estados[i] == Nome) {
	      tag_painel.innerHTML = destinos[i];

         tag_painel.style.width = "27.5rem"
         document.querySelector(".mapa").style.width = "calc(100vw - 27.5rem)"
      }
   }
}


function CriaTabelaHotel() {
   var tag_hoteis = document.querySelector(".hoteis")

   tag_hoteis.style.transform = "translateX(-100%) translateY(-85%)"
   tag_hoteis.style.borderRight = "0.5rem double rgb(180, 30, 30)"
   tag_hoteis.style.width = "15rem"

   tag_hoteis.innerHTML = mensagem_hotel

   document.querySelector(".hoteis img").style.width = "65%"
}


function DesfazTabelaHotel() {
   var tag_hoteis = document.querySelector(".hoteis")
   
   tag_hoteis.style.width = "0"
   tag_hoteis.style.borderRight = "0"
   tag_hoteis.style.transform = "translateX(-100%) translateY(-85%)"
   
   document.querySelector(".hoteis img").style.width = "0%"

   tag_hoteis.innerHTML = ""
}
