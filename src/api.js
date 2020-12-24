// https://hangman-be.herokuapp.com/api/words

import axios from 'axios';
//const axios = require('axios')


const apiGetNewWord = () => {
    return axios
    .get('https://hangman-be.herokuapp.com/api/words')
    .then(({data}) => {
        return(data)
    })
}

// let newWord = newWordJSON.word
// let newHint = newWordJSON.hint

// console.log(newWordJSON.word)

export default apiGetNewWord;
