let wordList : string[]= ['Привет', 'Hello','你好','مرحباً','Hallo','Hola','Ciao','Привіт','こんにちは'];
let prevWord : string = 'Привет';

export function WordGenerator() : string {
    const word : string = wordList[Math.floor(Math.random() * wordList.length)];
    if(word != prevWord){
        prevWord = word;
        return word;
    }
    else{
        return WordGenerator();
    }
}