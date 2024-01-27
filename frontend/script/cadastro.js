const Usuario = require('../backend/src/models/anya.jpg')

class Cadastro extends Usuario {
    constructor(name, email, password){
        super(name, email, password)
        this.name = name;
        this.email = email;
        this.password = password
    }
}

function cadastrar(event){
    const inputPassword = document.querySelector('input#inputPassword').value;
    const repeatedPassword = document.querySelector('input#repeatedPassword').value;
    const inputName = document.querySelector('input#inputName').value;
    const inputEmail = document.querySelector('input#inputEmail').value;
    const message = document.querySelector('span.cadastroMessage')

    try {
        if(inputEmail === '' || inputName === '' || inputPassword === ''){
            throw new Error('Por favor, preencha todos os campos');
            
        } else if(inputPassword !== repeatedPassword ){
            throw new Error('As senhas precisam ser iguais');
        } else {
            message.innerHTML = `Cadastrado com sucesso`;
            message.style.color = 'green';

            
        }
    } catch (error) {
        message.innerHTML = error.message;
        message.style.color = 'red';
    }

    event.preventDefault()
}

let newUser = new Cadastro('Marta', 'nathalçia', '123')