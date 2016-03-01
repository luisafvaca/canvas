var canvas = document.querySelector('.my_canvas').getContext("2d"),
    colors = ['#6D7737', '#FFFF99', '#A98BB2', '#FF1962', '#FFF'];

  setInterval(function(){
    var c = {
      x : Math.floor((Math.random() * 200) + 1),
      y : Math.floor((Math.random() * 200) + 1),
      radius : 5
    }

      canvas.beginPath();
      canvas.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
      canvas.fillStyle = '#FFFF99';
      canvas.moveTo(100,100);
      canvas.clearRect(0,0,600,400);
      canvas.fill();
      canvas.closePath();
  }, 1000);

// function randomColor(colors){
//   colors.map(function(color){
//     return color;
//   });
// }

console.log(canvas);
