export const numberToInt = (n) => {
    if(n === 'uno' || n === '1'){
        return 1
    } else if(n === 'dos' || n === '2'){
        return 2
    } else if(n === 'tres' || n === '3'){
        return 3
    } else if(n === 'cuatro' || n === '4'){
        return 4
    } else if(n === 'cinco' || n === '5'){
        return 5
    } else if(n === 'seis' || n === '6'){
        return 6
    } else if(n === 'siete' || n === '7'){
        return 7
    } else if(n === 'ocho' || n === '8'){
        return 8
    } else if(n === 'nueve' || n === '9'){
        return 9
    } else if(n === 'diez' || n === '10'){
        return 10
    } else {
        return n
    }
}

export const textToVoice = (txt, speak) => {
    txt = txt.replace(/\r?\n/g," ") //Reemplazamos los saltos de linea por espacios
    txt = txt.replace(/[ ]+/g," ") //Reemplazamos los espacios seguidos por uno solo
	txt = txt.replace(/^ /,"") //Quitarmos los espacios del principio
    txt = txt.replace(/ $/,"") //Quitarmos los espacios del final

    const textClipped = txt.split(" ") //Cortamos el texto por los espacios
    const textCount = textClipped.length
    let n = 0
    let newText = ''

    textClipped.forEach((t, i) => {
        if(n >= 40){
            speak({ text: newText })
            n = 0
            newText = t
        } else if(textCount === (i+1)){
            newText = newText+' '+t
            //speak({ text: newText })
            setTimeout(speak({ text: newText }), 2000)
        } else {
            n = n + t.length
            newText = newText+' '+t
        }
    })
}
