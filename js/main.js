const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
var gifIndex = 0;
var gifArray = [
    'https://i.pinimg.com/236x/59/b0/33/59b0333e4af39a6c585d8328e30f9a0c.jpg',  // Default GIF
    'https://media4.giphy.com/media/9vrYJ4CLhuQfMpehLk/giphy.gif?cid=ecf05e476i4lspla6ykwj0fc9a5jye1phhik51x4eimhv6lp&ep=v1_gifs_search&rid=giphy.gif&ct=g',  // Replace with your second GIF
    'https://example.com/path/to/your/third-gif.gif'    // Replace with your third GIF
    // Add more URLs as needed
];

function changeGIF() {
    var gifImg = document.getElementById('gif-img');

    // Increment the index or reset to 0 if it exceeds the array length
    gifIndex = (gifIndex + 1) % gifArray.length;

    // Change the source of the image to the next GIF in the array
    gifImg.src = gifArray[gifIndex];
}