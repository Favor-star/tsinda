const progress = document.querySelector("progress"),
  startNow = document.querySelector(".button");
startNow.addEventListener("click", (e) => {
    e.preventDefault();
    progress.value += 5;
    
});

