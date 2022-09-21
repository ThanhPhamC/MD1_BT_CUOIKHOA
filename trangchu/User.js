class User {
    iduser;
    name;
    email;
    username;
    password;

    constructor(iduser, name, email, username, password) {
        this.iduser = iduser;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    setIduser(iduser){
        this.id=iduser
    }
    getIduser(){
        return this.id
    }
    setName(name){
        this.name= name
    }
    getName(){
        return this.name
    }
    setEmail(email){
        this.email=email
    }
    getEmail(){
        return this.email
    }
    setUsername(username){
        this.username=username
    }
    getUsername(){
        return this.username
    }
    setPassword(password){
        this.password=password
    }
    getPassword(){
        return this.password
    }

}