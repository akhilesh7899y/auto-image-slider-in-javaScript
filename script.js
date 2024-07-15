const button = document.querySelector("#button");
let multiplier = 1;

setInterval(() => {
  if (multiplier <5) {
    document.querySelector(".slider").style.transform = `translate(-${
      multiplier * 800
    }px)`;
    multiplier++;
  } else {
    multiplier = 0;
    document.querySelector(".slider").style.transform = `translate(${
      multiplier * 800
    }px)`;
    multiplier = 1;
  }
}, 2000);
