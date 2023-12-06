import axios from 'axios' 

//const axios = require("axios")
//const urlList = require("./urllist")

const sendRequest = async (url, method = 'get', data = null) => {
 
    try{
        
        console.log(url)

        const response = await axios({
            method,
            url,
            data
        })
        return response.data
    
    
    }catch(error){

        console.log(error)
        return ["error"]
    }


}


export default sendRequest