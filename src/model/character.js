export class Character {

    constructor({id, characteristics, appearance, description}) {
        this.id = id
        this.characteristics = characteristics
        this.appearance = appearance
        this.description = description
    }
    

    get getCharacteristics(){
        yield this.characteristics.name
        yield this.characteristics.alias
        yield this.characteristics.age
        yield this.characteristics.gender
        yield this.characteristics.status
    }

}
