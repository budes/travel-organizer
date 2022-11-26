var secao1 = document.querySelector("#dica")
var secao2 = document.querySelector("#segundo")

function MouseEmCima() {
	secao2.style.width = "16rem"

	secao2.innerHTML = "\n \
		<h2> Custo para a viagem </h2>\n \
		\n \
		<p> Consumo: 17,7km/l <br> \n \
			Capacidade: 44 litros \n \
	    </p>\n \
	    <p class='espacamento'> \n \
			Percorre " + (44 * 17.7) + "km na estrada <br> \n \
			e até " + (44 * 13.7) + "km na cidade. </p>\n \
	 	\n \
	 	<p id='resultado'> (156 + 162) / 17,7 + 74,16 / 13,7 ≅ "+ Math.ceil((156 + 162) / 17.7 + 74.16 / 13.7) + "L\n \
	 	</p>\n \
		\n \
		<p>	O tempo necessário: </p> \n \
		<p id='resultado' class='tempo'> Ida: 2h 24min <br> Volta: 2h 45min </p>\n \
		\n \
	"
	secao1.innerText = "PREÇO: R$ 120,00"
	
	secao1.style.color = "black"

	secao1.style.fontSize = "1.5rem"
	secao1.style.border = "0.15rem solid rgb(180, 30, 30)" 

}

function MouseSai() {
	secao2.style.width = "0rem"

	secao2.innerHTML = ""
	secao1.innerText = "Mouse em cima para mais detalhes"

	secao1.style.color = "rgb(140, 140, 140)"

	secao1.style.fontSize = "1.2rem"
	secao1.style.border = "0" 
}