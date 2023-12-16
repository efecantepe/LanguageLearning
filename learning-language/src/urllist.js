

function createQuery(url, data){
    url += ("?")
    Object.keys(data).forEach(k => {
        url += k + "=" + data[k] + "&"
    })
    return url
}



const urlList = {
    learnerLanguages : "http://localhost:3000/learner/myProfile/myLanguages",
    getLanguages: "http://localhost:3000/learner/requests/getLanguages"
        

}

export default {urlList, createQuery}