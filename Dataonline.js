class Dataonline {
    tenlogin;
    passlogin;

    constructor(tenlogin, passlogin) {
        this.tenlogin = tenlogin;
        this.passlogin = passlogin;
    }
    setTenlogin(tenlogin){
        this.tenlogin=tenlogin
    }
    getTenlogin(){
        return this.tenlogin
    }
    setPasslogin(passlogin){
        this.passlogin=passlogin
    }
    getPasslogin(){
        return this.passlogin
    }
}