const colorPalette =
['#df72b5','#9be0a1','#ffe4c4','#cac4ff' ]

const color1 =
 colorPalette[Math.floor(Math.random() * colorPalette.length)];

const color2 =
 colorPalette[Math.floor(Math.random() * colorPalette.length)];

document.querySelector('.button1').style.setProperty('--color1', color1)
document.querySelector('.button2').style.setProperty('--color2', color2)