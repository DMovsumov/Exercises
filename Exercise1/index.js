const canvas = document.getElementById('canvas1')
const canvas2 = document.getElementById('canvas2')
const ctx = canvas.getContext('2d')

canvas.addEventListener('click', (e) => {
    /** Получаем кординаты клика*/
    const x = e.offsetX;
    const y = e.offsetY;

    /** Получаем пиксельные данные области canvas и вытаскиваем цвет через деструктуризацию и создаем переменную */
    const { data: [red, green, blue, alpha] } = ctx.getImageData(x, y, 1, 1);
    const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    canvas2.style.backgroundColor = color;
})

/** Количество звезд и их цвет*/
const stars = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'},
    {color: 'yellow'},
    {color: 'black'},
];

!(() => {
    const width = canvas.width;
    /** Ширина области в которой у нас будет находиться звезда, а так как высота у нас равна ширине то и высота */
    const starsArea = width / stars.length;

    /** Получаем радиус от центра до крайней точки границы*/
    const radius = starsArea / 2;

    /** Рисуем */
   for (let i = 0; i <= stars.length - 1; i++) {
       const x = radius + starsArea * i /** Для того чтобы звезды не слипались */
       const y = radius
       createStar(x, y, radius, stars[i].color);
   }
})()

function createStar(x, y, radius, color) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    /** 5 * 2 потому что у 5 конечной звезды 10 углов */
    for (let i = 0; i < 10; i++) {
        const r = (i % 2 === 0) ? radius : (radius / 2);
        const a = Math.PI * i / 5;
        ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
    };
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fill();
    ctx.stroke();
}