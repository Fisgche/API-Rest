

function Insere(){

}

function Lista(params, callback){
    const objFake = [{"id":1,"nome":"Fulano","email": "teste@email.com", "telefone": "9921-0909", "organizacao": null, "tags": ["cinema", "trabalho"]},
        {"id":2,"nome":"Ciclano","email": "teste2@email.com", "telefone": "9921-0910", "organizacao": null, "tags": ["praia", "esporte"]}];

    const err = null;
    const lista = objFake;
    callback(err, lista);
}
function Atualiza(){

}
function Remove(){

}   

export default {Insere, Lista, Atualiza, Remove};