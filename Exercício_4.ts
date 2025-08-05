interface Usuario {
    nome: string;
    email: string;
    exibirInfo: () => string;
}

const usuario: Usuario = {
    nome: "Lucas",
    email: "lucas17@email.com",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};

console.log(usuario.exibirInfo());


