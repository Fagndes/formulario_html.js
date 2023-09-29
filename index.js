const form = document.getElementById("cadastro-serie")

     function validaNome(nomeUsuario){
        const validaNome = nomeUsuario
        return validaNome.length > 2
     }  
form.addEventListener('submit', function(evento) {
    let formValido = false; 
    evento.preventDefault();
    const mensagemSucesso = "Informações enviadas com sucesso"
    const mensagemErro = "Acesso negado"
    const nomeUsuario = document.getElementById("nome-usuario");
    //obter os valores dos de A e B
    const valorAbonado = parseInt (document.getElementById("valorA").value);
    const valorDesconto = parseInt (document.getElementById("valorB").value);
    //validar se B é maior que A
    formValido = validaNome(nomeUsuario.value)
    if(valorAbonado < valorDesconto){
        const containerMesagemSucesso = document.querySelector(".mensagem-sucesso")
    containerMesagemSucesso.innerHTML = mensagemSucesso;
    containerMesagemSucesso.style.display = "block"
        //apagar as informções do formulário
        document.getElementById("mensagem-erro").reset("block");
    }else{
        
        document.querySelector(".mensagem-erro").style.display = "block"
       }
    
    
})
console.log(form)
