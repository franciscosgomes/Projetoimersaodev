function pesquisar (){
  //Obtém a seçao HTM onde os resultados serão 
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value
  
  //se campoPesquisa for uma string sem nada 
  if (campoPesquisa == ""){
    section.innerHTML = "Nem um evento foi encontrado"
    return
  }
  
  //Inicializa uma string vazia para armazenar os resultados 
let resultados = ""

//Itera sobre cada dado da lista de dados
for (let dado of dados) {
  //se o titulo includes campoPesquisa 
 if (dado.titulo.includes(campoPesquisa)){
   // cria um novo elemento
   resultados += `
  <div class="item-resultado">
     <h2>
       <a href="#" target="_blank">${dado.titulo}</a>
       </h2>
       
       <img src="${dado.imagem}"https://instagram.fthe25-1.fna.fbcdn.net/v/t39.30808-6/452280514_18445839316028388_8542361000031615829_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ3eDE2Nzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fthe25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5xbjXin4p6gQ7kNvgHWbmbk&_nc_gid=c09c8fee47f240c494f57caba781bfd1&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQxNzI4MTk3OTYyMjIxNzg4Nw%3D%3D.2-ccb7-5&oh=00_AYCCKY7haRa1zg1xsVHBjKfZ4Bg_3d6XeIDu2ivIrtwAGg&oe=66DE2934&_nc_si=10d13b">
   
     <p class="descricao-meta">${dado.descricao}</p>
  <a href="#" target="_blank">Mais informações</a> 
  </div>
`;
   
 }

}

section.innerHTML = resultados
  
}

