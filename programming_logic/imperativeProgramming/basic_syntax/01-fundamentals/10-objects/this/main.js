// Adicionando Métodos

let user = {
  name: "Thiago",
  age: 39,
  email: "thiago@gmail.com",
  city: "Sorocaba",
  blogPost: ["Pizza de Calabresa", "4 receitas de purê de mandioquinha"],
  login: function () {
    console.log("Usuário logado");
  },
  logout: function () {
    console.log("Usuário deslogado");
  },
};

user.login();

user.logout();
