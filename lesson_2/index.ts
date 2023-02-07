// // console.log(1)

// // setTimeout(() => {
// //     console.log(2);
// // }, 0)

// // console.log(3)
// // console.log(4)

// // setTimeout(() => alert("timeout"),0);
// // setTimeout(() => alert("timeout"),1);

// // Promise.resolve()
// //   .then(() => alert("promise"));

// // alert("global ex. context");

// function task(message) {
//     // emulate time consuming task
//     let n = 100;
//     while (n > 0) {
//         console.log(`loaded ${100-n}%`);
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');

// setTimeout(() => {
//     task('Download a file.');
// }, 1000);

// console.log('Done!');

function main(): void {
	console.log('A')
	setTimeout(() => console.log('B'), 0)
	runWhileLoopForNSeconds(3)

	console.log('C')
	Promise.resolve().then(() => console.log('D'))
}

main()

function runWhileLoopForNSeconds(sec: number) {
	// :never
	// throw new Error('this is my error')
	let start = Date.now(),
		now = start
	while (now - start < sec * 1000) {
		now = Date.now()
	}
}

// string, number, undefined,null,boolean, void, any, never
