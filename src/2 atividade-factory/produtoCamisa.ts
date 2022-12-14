import { Type } from "./produto";

export default class Camisa {
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number
    private marca: String
    private valor: Number

    constructor(tamanho:Number, cor:String, quantidade:Number, id:Number, marca:String, valor: Number) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id
        this.marca = marca
        this.valor = valor
    }

    public type(): Type {
        return Type.CAMISA
    }
    
}