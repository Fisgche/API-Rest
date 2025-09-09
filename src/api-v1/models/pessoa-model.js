
import db from '../utils/db.js';

function Insere(obj, callback){
    db.pessoaDb.insert(obj, callback);

}

function Lista(params, callback){
    db.pessoaDb.find({}, callback);
    
}
function Atualiza(){

}
function Remove(){

}   

export default {Insere, Lista, Atualiza, Remove};