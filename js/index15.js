async function str(){
  // 실행
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const result = await response.text();
    console.log(result)
  }
  // error 
  catch(error){
    console.log('에러입니다.')
  }
  // 마감
  finally{
    console.log('작업끝났습니다.')
  }
}
str();