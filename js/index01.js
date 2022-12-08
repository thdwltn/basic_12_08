fetch('https://jsonplaceholder.typicode.com/todos/1').
// then((response) => {return response.text})
then(response =>  response.text()).
then(result => {console.log(result)})
// text(): string데이터
// json(): promise 데이터 -> 파싱에러
