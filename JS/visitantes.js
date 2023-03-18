const btnPerfil = document.querySelector("#btn-perfil");
const visitantes = document.querySelector(".visitantes");


btnPerfil.onclick = async () => {
  const response = await fetch("https://reqres.in/api/users/")
  const {data, support} = await response.json()
   console.log(data);


  data.forEach(item => { 
  //criando os elementos

 const div = document.createElement("div")
  const img = document.createElement("img")
  // const IDspan = document.createElement("span")
  const h1 = document.createElement("h1")
  const h1Span = document.createElement("span")
  const p = document.createElement("p")
  // const a = document.createElement("a")
  //criar classes
  
  //div.setAttribute("class", "container")

  //Atribuir os filhos a divhttps://dummyjson.com/users
  visitantes.appendChild(div)
  div.appendChild(img)
  // div.appendChild(IDspan)
  div.appendChild(p)
  div.appendChild(h1Span)
  div.appendChild(p)
  // div.appendChild(a)

  //Setar os dados nos elementos

  img.setAttribute("src", `${item.avatar}`)
  // IDspan.textContent = item.id
  h1.textContent = `${item.first_name} ${item.last_name}`
  h1Span.textContent = item.email
  p.textContent = support.text
  // a.textContent = support.url
  
})
}
  