const axios = require('axios');

class Usuario {
    #id 
    #name
    #password
    #email
    #teste

    constructor(id, name, password, email, teste){
        this.#id = id; 
        this.#name = name; 
        this.#password = password; 
        this.#email = email; 
        this.#teste = teste;
    }

    getName(name){
        return name = this.#name
    }

    setName(name){
        this.#name = name
    }

    getEmail(email){
        return email = this.#email
    }

    setEmail(email){
        this.#email = email
    }

    setPassword(password){
        this.#password = password
    }
}

module.exports = {Usuario}