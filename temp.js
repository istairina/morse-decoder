const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        let temp = expr;
        let letter = expr.slice(i, i + 10);
        console.log(letter)
        if (letter == '**********') {
            res += ' ';
        } else {
            let letterDotDash = '';
            for (let k = 0; k < letter.length; k += 2) {
                let temp2 = letter;
                let binar = temp2.slice(k, k + 2);
                console.log(binar)
                switch (binar) {
                    case '10':
                        letterDotDash += '.';
                        break;
                    case '11':
                        letterDotDash += '-';
                        break;
                    default:
                        break;
                }
            }
            // console.log(letterDotDash);
            res += MORSE_TABLE[letterDotDash];
        }
    }
   return res;

}

console.log(decode('00000011110000000010'))