// Objetos em Arrays

let user = {
  name: "Thiago",
  age: 39,
  email: "thiago@gmail.com",
  city: "Sorocaba",
  blogPosts: [
    { title: "Pizza de Calabresa", likes: 30 },
    { title: "4 receitas de purê de mandioquinha", likes: 50 },
  ],
  login() {
    console.log("Usuário logado");
  },
  logout() {
    console.log("Usuário deslogado");
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts:`);

    this.blogPosts.forEach((post) => {
      console.log(post.title, post.likes);
    });
  },
};

user.logBlogPosts();

console.log(this);
