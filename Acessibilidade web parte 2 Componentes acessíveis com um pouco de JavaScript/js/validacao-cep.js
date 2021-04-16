var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function(){

    if(!this.validity.valid){
        this.setCustomValidity("Ops! Tem algo errado nesse campo!");
        this.parentNode.classList.add('contatoCampo--erro');
    }
}