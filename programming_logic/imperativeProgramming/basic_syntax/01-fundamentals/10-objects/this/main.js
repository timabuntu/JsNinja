// A palavra chave this

let user = {
  name: "Thiago",
  age: 39,
  email: "thiago@gmail.com",
  city: "Sorocaba",
  blogPosts: ["Pizza de Calabresa", "4 receitas de purê de mandioquinha"],
  login () {
    console.log("Usuário logado");
  },
  logout () {
    console.log("Usuário deslogado");
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`);

    this.blogPosts.forEach((post) => {
      console.log(post);
    });
  },
};

user.logBlogPosts();

console.log(this);
