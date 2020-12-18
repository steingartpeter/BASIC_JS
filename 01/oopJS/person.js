// Egy filból olvasható class
export default class Person{
    //Az osztály konstruktora - egy névként használható paraméterrel
    constructor(nm){
        // Hiányzó név esetén egy default érték
        if(nm == '' || nm === undefined){
            this.name = 'John Smith';
        }else{
            this.name = nm;
        }

        // További szokványos adatelemek
        this.age = 0;
        this.weitgh = 0;
        this.height = 0;
        this.title = 'Mr';
        this.children = ['Popp', 'Malo','Spaszu'];
        // Egy igazán extra elem
        this.idCard = {
            "cardId":"063065547",
            "persId":"16910157654",
            "color":'#050505',
            "bioMetrics":['183cm','110Kg','grey'],
            "show":function(){
                //console.log("My id is: "+this.persId);
                return `\nMy id is: \n${this.persId}\n my card id:\n${this.cardId}`;
            }
        }
    }
    
    // Egy alap függvény a kor beállításához
    setAge = function(a){
        this.age = a;
    }

}

