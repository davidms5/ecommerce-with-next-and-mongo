export default class apiFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    //lo de abajo es basicamente el autocompletado de una barra de busqueda
    //buscar mas info en como arreglarlo en https://stackoverflow.com/questions/35152310/mongoose-text-search-with-partial-string
    search(){
        const keyword = this.queryString.keyword ?{
            "name": {
                "$regex": this.queryString.keyword,
                $options: 'i'
            }
        } : {}

        this.query = this.query.find({...keyword});
        return this
    }
}

