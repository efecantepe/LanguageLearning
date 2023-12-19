class User {

    userInstance = undefined

    constructor(id, name, surname, email ){

        if(this.userInstance !== undefined){
            return
        }

        this.id = id
        this.name = name
        this.surname = surname
        this.email = email

        this.userInstance = this
    }

    getInstance(){
        return this.userInstance
    }

}

export default User