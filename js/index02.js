fetch('https://jsonplaceholder.typicode.com/todos')
.then(response =>  response.text()) // text화
.then(result => {
  //  console.log(result);
  const level = JSON.parse(result);
  //  console.log(level);
  const basic = level.filter((item)=> item.userId === 4);
  // 받을 화일 for in 문으로 내보내기
  for(let i in basic){
   document.write(`${basic[i].id} : ${basic[i].title} <br>`); 
   }
  //  console.log(basic);
})

// text화
// level <- result.parse() json-> js로 바뀌는 과정.
// 다시 선언 basic <= albumId === 1 
// filter -> 배열
// for of figure scr에 thumbnailUrl alt = title
// figcaption <- title 