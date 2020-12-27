// https://hangman-be.herokuapp.com/api/words

import axios from 'axios';
//const axios = require('axios')


const apiGetNewWord = (user) => {
    return axios
    .get(`https://hangman-be.herokuapp.com/api/word/${user}`)
    .then(({data}) => {
        return(data)
    })
}

// let newWord = newWordJSON.word
// let newHint = newWordJSON.hint

// console.log(newWordJSON.word)

export default apiGetNewWord;
