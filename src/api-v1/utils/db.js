import Datasore from "nedb";
const pessoaDb = new Datasore();
const organizacoesDb = new Datasore();

export default{ pessoaDb, organizacoesDb };