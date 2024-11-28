addEventListener("DomContentLeaded",() => {
 var numtel = localStorage.getItem("telefone")
 document.getElementById("recebetelefone").value = numtel;
})


document.getElementById("cep").textContent = localStorage.getItem("cep")

addEventListener("DomContentLeaded",() => {
 var numtel = localStorage.getItem("cep")
 document.getElementById("cep").value = numtel;
})


document.getElementById("cpf").textContent = localStorage.getItem("cpf")

addEventListener("DomContentLeaded",() => {
 var numtel = localStorage.getItem("cpf")
 document.getElementById("recebecpf").value = numtel;
})


document.getElementById("cnpj").textContent = localStorage.getItem("cnpj")

addEventListener("DomContentLeaded",() => {
 var numtel = localStorage.getItem("cnpj")
 document.getElementById("recebecnpj").value = numtel;
})


document.getElementById("codigo").textContent = localStorage.getItem("codigo")

addEventListener("DomContentLeaded",() => {
 var numtel = localStorage.getItem("codigo")
 document.getElementById("recebecodigo").value = numtel;
})
















