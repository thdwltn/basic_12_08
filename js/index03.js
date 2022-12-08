fetch('https://jsonplaceholder.typicode.com/photos')
.then(response =>  response.text()) // text화
.then(result => {
  // console.log(result);
  const level = JSON.parse(result);
  // console.log(level);
  const basic = level.filter(item => item.albumId === 1);
  // console.log(basic);
  for(let i of basic){
   document.write(`
   <figure>
   <img src="${i.thumbnailUrl}" alt="${i.title}">
   <figcaption>${i.title}</figcaption>
   </figure>
   <br>`); 
   }
})

// text화
// level <- result.parse() json-> js로 바뀌는 과정.
// 다시 선언 basic <= albumId === 1 
// filter -> 배열
// for of figure scr에 thumbnailUrl alt = title
// figcaption <- title 

