const inputHandler = (e) => {
  if (e.type === "focus") {
    e.target.style.backgroundColor = "yellow";
  }
  if (e.type === "blur") {
    e.target.style.backgroundColor = "white";
  }
};

let inputTag = document
  .querySelectorAll('input:not([type="submit"])')
  .forEach((el) => {
    el.addEventListener("focus", inputHandler);
    el.addEventListener("blur", inputHandler);
  });

const buttonHandlerEnter = (e) => {
  e.target.style.backgroundColor = "lightblue";
};

const buttonHandlerLeave = (e) => {
  e.target.style.backgroundColor = "white";
};

let buttonTag = document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("mouseenter", buttonHandlerEnter);
  el.addEventListener("mouseleave", buttonHandlerLeave);
});

const customButtonTag = document.querySelectorAll(".btn").forEach((el) => {
  el.addEventListener("mouseenter", buttonHandlerEnter);
  el.addEventListener("mouseleave", buttonHandlerLeave);
});

const customInputTag = document
  .querySelectorAll("input[type='submit']")
  .forEach((el) => {
    el.addEventListener("mouseenter", buttonHandlerEnter);
    el.addEventListener("mouseleave", buttonHandlerLeave);
  });
