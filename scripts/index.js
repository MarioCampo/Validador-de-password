let comprobar = (frm) => {
    var password = frm.inputPass.value
    var longitud = password.length
    validarReglas(longitud, password)
    limpiar(frm)
}
let caracterMinimo = (longitud) => {
    var cumple = longitud > 4 ? 1 : 0
    return cumple
}
let caracterMaximo = (longitud) => {
    var cumple = longitud < 11 ? 1 : 0
    return cumple
}
let contieneMayuscula = (password) => {
    var mayuscula = /[A-Z]/
    var evaluar = mayuscula.test(password)
    return evaluar
}
let contieneNumero = (password) => {
    var numero = /[0-9]/
    var evaluar = numero.test(password)
    return evaluar
}
let contieneEspecial = (password) => {
    var caracterEspecial = /[^a-z0-9\x20]/i
    var evaluar = caracterEspecial.test(password)
    return evaluar
}
let sinEspacio = (password) => {
    var espacio = /\s/
    var evaluar = espacio.test(password)
    return evaluar
}
let validarReglas = (longitud, password) => {
    var flag = 0
    if(caracterMinimo(longitud) != 1) {
        flag++
        alert("Su password no cumple con la primera regla")
    }
    if(caracterMaximo(longitud) != 1) {
        flag++
        alert("Su password no cumple con la segunda regla")
    }
    if(contieneMayuscula(password) == false) {
        flag++
        alert("Su password no cumple con la tercera regla")
    }
    if(contieneNumero(password) == false) {
        flag++
        alert("Su password no cumple con la cuarta regla")
    }
    if(contieneEspecial(password) == false) {
        flag++
        alert("Su password no cumple con la quinta regla")
    }
    if (sinEspacio(password)) {
        flag++
        alert("Su password no cumple con la sexta regla")
    }
    flag == 0 ? alert("Su password cumple con todas las reglas") : ""
}
let limpiar = (frm) => {frm.reset()}