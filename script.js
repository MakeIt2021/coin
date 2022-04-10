btn = document.querySelector('#btn')
amount = document.querySelector('#amount')
loading = document.querySelector('.loading')

eagle = 0
tail = 0

btn.addEventListener('click', () => {
    

    for (let i = 0; i < 1000000; i++) {
        res = Math.round(Math.random())

        console.log(res)

        if (res == 0) {
            tail++
        }

        if (res == 1) {
            eagle++
        }
    }

    alert('Частота выпадения орла: ' + eagle / (eagle + tail))
    alert('Частота выпадения решки: ' + tail / (eagle + tail))
})

