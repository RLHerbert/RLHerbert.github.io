let container = document.getElementById("container");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let teaching = document.getElementById("teaching");
let links = document.getElementById("links");

let articles = [about, projects, teaching, links];

window.onload = show_article("about");

function hide_articles() {
  for (i = 0; i < articles.length; i++) {
    articles[i].style.opacity = "0.0";
    articles[i].style.zIndex = -1;
    articles[i].style.position = "absolute";
  }
}

function show_article(article_name) {
  //console.log("Showing article: " + article_name);
  hide_articles();

  let article = document.getElementById(article_name);
  article.style.opacity = "1.0";
  article.style.zIndex = 3;
  article.style.position = "static";

  article.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
