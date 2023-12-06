//import axios from 'axios' 

//import { response } from "express"

const axios = require("axios")
//const urlList = require("./urllist")

const sendRequest = async (url, method = 'get', data = null) => {
 
    try{
        
        const response = await axios({
            method,
            url,
            data
        })
        return response.data
    
    
    }catch(error){

        console.log(error)
        return ["asdjklasd"]
    }


}

sendRequest("http://localhost:3000/learner/requests/getLanguages", 'get').then((response) => {

    console.log(response)

})

//console.log()

//sexport default sendRequest