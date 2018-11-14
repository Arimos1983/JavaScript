import Pacijent from "./Pacijent"
export default abstract class Pregled {
    vreme: string;
    datum: string;
    constructor(vreme: string, datum: string){
        this.vreme = vreme;
        this.datum = datum;
    }
    abstract odradiPregled(pacijent: Pacijent): void;
}