const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const stars = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'},
    {color: 'yellow'},
    {color: 'black'},
];

const width = canvas.width; /** Ширина канваса*/
const height = canvas.height; /** Высота канваса*/

console.log(width, height)

!(() => {
    /** Ширина области в которой у нас будет находиться звезда, а так как высота у нас равна ширине то и высота */
    const starsArea = width / stars.length;

    /** Получаем радиус от центра до крайней точки области*/
    const radius = starsArea / 2;

    /** Рисуем */
   for (let i = 0; i <= stars.length; i++) {
       const x = radius * i + starsArea
       const y = 60
       drawStar(ctx, x, y, radius, stars[i].color);
   }



    console.log(starsArea)
})()


// drawStar(ctx, 70, 70, 5, 60, 'mediumseagreen');
// drawStar(ctx, 70, 70, 5, 50, 'mediumseagreen');
// drawStar(ctx,100,100,5,50,25,'mediumseagreen',9);
// drawStar(ctx,150,200,8,50,25,'skyblue', 3);
// drawStar(ctx,225,75,16,50,20,'coral', 0);
// drawStar(ctx,300,200,16,50,40,'gold',3);


function drawStar(ctx, x, y, radius, color, line) {
    // define the star
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    for (let i = 0; i < 10; i++) { // 5 * 2 потому что у 5 конечной звезды 10 углов
        const r = (i % 2 === 0) ? radius : (radius / 2);
        const a = Math.PI * i / 5;
        ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
    }
    ;
    ctx.closePath();
    // draw
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = line;
    ctx.stroke()
}