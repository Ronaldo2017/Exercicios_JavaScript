function operacao() {
    let v1 = Number(document.getElementById('valor1').value)
    let v2 = Number(document.getElementById('valor2').value)
    let v3 = Number(document.getElementById('valor3').value)

    let valor = (v1 + v2 + v3) / 3

    document.getElementById('media').value = valor

    // let media = document.getElementById('media')
    
    // media.addEventListener('keypress', function (event) {        
    //     Event.preventDefault()
    //     if (event.key  === 13) {
    //         document.getElementById('calc').click()
    //     }
    // })   
}