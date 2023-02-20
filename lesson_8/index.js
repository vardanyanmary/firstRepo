//---------homework---------

const entries = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam tempore delectus quibusdam magnam, soluta cum obcaecati aspernatur maxime cumque excepturi deleniti ducimus corporis eius consectetur nostrum incidunt nihil. Harum!'
const map = new Map();

for (let i = 0; i < entries.length; i++) {
  
  const el = entries[i]
  if(/[a-z]/.test(el.toLowerCase())) {
    if (map.has(el)) {
      let count = map.get(el);
      map.set(el, count + 1);
    } else {
      map.set(el, 1);
    }
  }
}
// console.log(map);
let maxCount = 0;
let letter = null
map.forEach((value,key)=> {
  // console.log(key);
if(value > maxCount){
  maxCount = value
  letter = key
}
// console.log(el);
})

console.log(letter)


// wrong ones

/*---------------------------------

function countOfLetters(entries) {
    const map = new Map();

    const count = 0;

    for (const number of object) {
        map.set(number, count);
    }
    for (const key of entries) {
        const count = map.get(key);
        map.set(key, count + 1);
    }


    for (const [key, value] of map) {
        console.log(key, value);
    }
} */

// function countOfLetters(entries){
// const calcLength = array => {
//     const map = new Map(entries)
//     const count = 0
//     console.log(Object.fromEntries(entries))

//     console.log(map.has('lorem'));

//     // console.log(
//     //     Object.entries(entries).map(([key, value]) => [
//     //         // value.split('').forEach(){

//     //         // }
//     //     ]
//     //     ));
// }
// }

// const entries = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam tempore delectus quibusdam magnam, soluta cum obcaecati aspernatur maxime cumque excepturi deleniti ducimus corporis eius consectetur nostrum incidunt nihil. Harum!']

// const map = new Map();
// const count = 0;

// for (const key of str) {
//   if (map.has(el)) {
//     map.set(key, count);
//     let count = map.get(key);
//     map.set(key, count + 1);
//   }else{
//     console.log(key, value);
//   }
// }


