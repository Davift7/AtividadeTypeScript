type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: StatusRequisicao) {
    if (status === "carregando") {
        return "Aguarde... carregando dados.";
    } else if (status === "sucesso") {
        return "Os dados foram carregados com sucesso!";
    } else if (status === "erro") {
        return "Erro ao carregar os seus dados.";
    }
}

console.log(mostrarMensagemStatus("carregando")); 

