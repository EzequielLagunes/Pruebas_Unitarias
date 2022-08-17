const palindromo = (palabra) => {
    let palabraInvertida = palabra.split('').reverse().join('');
    if (palabraInvertida === palabra) {
        return true;
    } else {
        return false;
    }
}
const funcionPalindromo = {
    palindromo,
}

//2.- Exportar
module.exports = funcionPalindromo;