export default abstract class Pregled {
    vreme: string;
    datum: string;
    constructor(vreme: string, datum: string){
        this.vreme = vreme;
        this.datum = datum;
    }
}