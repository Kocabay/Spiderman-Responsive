const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieList[i].querySelectorAll("img").length;
  console.log(imageItem);
  if (imageItem - (4 + clickCounter) >= 0) {
    arrow.addEventListener("click", function () {
      clickCounter++;
      movieList[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    });
  }else{movieList[i].style.transform = "translex(0)"

  }
});
