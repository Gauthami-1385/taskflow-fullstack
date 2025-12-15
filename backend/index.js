console.log('start')


setTimeout(() => {
    console.log('Timer')
}, 2000)

Promise.resolve().then(() => { console.log('Promise') })
console.log('End')

