let links = document.getElementsByClassName('nav-link');

links[0].style.color = "#fff";
links[0].style.setProperty("--opacity", 1);

for(let link of links){
  link.addEventListener("click", () => {
    for(let li of links) {
      li.style.color = "#fff";
      li.style.setProperty("--opacity", 0);
    }
    link.style.color = "#0fd83a";
    link.style.setProperty("--opacity", 1);
  })
}