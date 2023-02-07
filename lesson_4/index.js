// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     setTimeout(() => {
//     const applyForVisa = new Promise((resolve, reject) => {
//         if (Math.random() * 10 > 5) {
//             resolve('resolved')
//         }
//         else {
//             reject('rejected')
//         }

//     })
//     console.log(' requested ... ');
//         applyForVisa
//             .then((res) => console.log(res))
//             .catch(err => console.warn(err))
//     }, 1000)
// })

//------------------------------------------------

// async/await try/catch - homework

const btn = document.getElementById('btn')

// async chi lini , tak kak ete ira grac promisey hanenq
// to mer codey linuma synchrone , hetevabar et sxala , 
// chi kara async functiony veradardzni sync code

function washTeeth(hasAvailableBrush) {
    // console.log("keep your teeth cleaned")
    // console.log('loading 30%')
    return new Promise((resolve, reject) => {
        if (hasAvailableBrush) {
            resolve('keep your teeth cleaned')
        } else {
            reject('oops !!')
        }
    })

}

function makeABreakfast(hasAvailableBread) {
    // throw new Error('we dont have bread')
    // console.log("make a good breakfast")
    // console.log('loading 70% ...')

    return new Promise((resolve, reject) => {
        if (hasAvailableBread) {
            resolve('make a good breakfast')
        } else {
            reject('oops !!')
        }
    })

}

async function getReadyForWork() {
    throw new Error('we dont have shoes')
    console.log(true)
    console.log('loading 100%')
}

const startANewDay = async () => {
    try {
        const res =  await washTeeth(true)
        console.log(res)
        const res2 = await makeABreakfast(true)
        console.log(res2)
        const res3 = await getReadyForWork()


    } catch (error) {
        console.log(error, 'error');
    }
}

btn.addEventListener('click', startANewDay)