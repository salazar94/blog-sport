const $swap = document.querySelector("#swipe");
const $container = document.querySelector("#s");
$container.addEventListener("touchmove", dragWithTouch);

function dragWithTouch(ev) {
  const x = ev.targetTouches[0].pageX - 10;
  var m = getComputedStyle($container, "width");
  var s = m.width.replace("px", "") - 0;
  var dg = m.left.replace("px", "") - 0;
  const isInsideDimension = () => x > dg && x < s - 75;

  $swap.style.left = isInsideDimension()
    ? `${ev.targetTouches[0].pageX - 10}px`
    : $swap.style.left;
}
// const $swap = document.querySelector("#swap");
// $container.addEventListener("dragend", drag);
// $container.addEventListener("drag", drag);

// function drag(ev) {
//   ev.dataTransfer.setData("text/plain", ev.target.id);
//   // ev.dataTransfer.setData("text", ev.targe
//   //   ev.dataTransfer.setImage("", 0, 0);
//   //   ev.target.style.display = "none";
//   //   ev.dataTransfer.setDragImage($swap, 0, 0);
//   var crt = this.cloneNode(true);
//   crt.style.backgroundColor = "red";
// //   crt.style.display = "none"; /* or visibility: hidden, or any of the above */
// //   document.body.appendChild(crt);
//   //   e.dataTransfer.setDragImage(crt, 0, 0);
//   ev.dataTransfer.setDragImage(crt, 0, 0);
//   console.log(ev.targetTouches[0]);
//   $container.style.left = `${ev.targetTouches[0].pageX - 20}px`;
// }
