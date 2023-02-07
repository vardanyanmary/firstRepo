// console.log('hello');

// ---------- Promises ----------

// go to uni
//resolve - finally at uni 
//reject - something happened wrong

// const wakeUp = ((resolve, reject) => {
//     if (resolve) {
//         takeAShower((resolve, reject) => {
//             if (resolve) {
//                 makeCoffee((resolve, reject) => {
//                     if (resolve) {
//                         getOutFromHome((resolve, reject) => {
//                             if (resolve) {
//                                 console.log('apres')
//                             } else {
//                                 console.log('oops')
//                             }
//                         })
//                     }
//                     else {
//                         console.log('oops')
//                     }
//                 })
//             }
//             else {
//                 console.log('oops')
//             }
//         })
//     }
//     else {
//         wakeUp()
//     }
// })


// ----------- Mine -------------
// const startANewDay = ((resolve, reject) => {
//     if (resolve) {
//         washTeeth((resolve, reject) => {
//             if (resolve) {
//                 makeABreakfast((resolve, reject) => {
//                     if (resolve) {
//                                 getOutFromHome((resolve, reject) => {
//                                     if (resolve) {
//                                         console.log('Gooood')
//                                     } else {
//                                         console.log('we have a problem')
//                                     }
//                                 })
//                             }
//                             else {
//                                 console.log('we have a problem')
//                             }
//                         })
//             } else {
//                 console.log('we have a problem')
//             }
//         })
//     } else {
//         startANewDay()
//     }
// })

const washTeeth = () => {
    console.log("keep your teeth cleaned");
    console.log('loading 30% ...');
}

const makeABreakfast = () => {
    throw new Error('we dont have bread')
    console.log("make a good breakfast");
    console.log('loading 70% ...');
}

const getReadyForWork = () => {
    console.log(true)
    console.log('loading 100%');
}

let isLoad = true;

const startANewDay = () => {
    console.log(' loading ...%');
    Promise.resolve('Waked up')
        .then(washTeeth)
        .then(makeABreakfast)
        .then(getReadyForWork)
        .catch(console.warn)
        .finally(() => { isLoad = false })
}

startANewDay()

setTimeout(() => { console.log( isLoad )}, 2000 )