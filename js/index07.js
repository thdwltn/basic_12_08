// 동기실행
console.log('start1')
console.log('start2')
// 비동기실행 = response
fetch('https://jsonplaceholder.typicode.com/todos/3').
then(item => item.text()).
then(result => console.log(result)) // result 내보내기
console.log('start3')
console.log('start4')
console.log('start5')

