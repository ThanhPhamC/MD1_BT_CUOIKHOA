class Friend {
    id;
    ten;
    sdt;
    fb;
    github;
    constructor(id, ten, sdt, fb, github) {
        this.id = id;
        this.ten = ten;
        this.sdt = sdt;
        this.fb = fb;
        this.github = github;
    }
    setId(id){
        this.id=id
    }
    getId(){
        return this.id
    }
    setTen(ten){
        this.ten= ten
    }
    getTen(){
        return this.ten
    }
    setSdt(){
        this.sdt=sdt
    }
    getSdt(){
        return this.sdt
    }
    setFb(){
        this.fb=fb
    }
    getFB(){
        return this.fb
    }
    setGithub(github){
        this.github=-github
    }
    getGithub(){
        return this.github
    }
}
