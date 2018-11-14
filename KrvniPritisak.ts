import Pregled from "./Pregled"
import Pacijent from "./Pacijent"
import Loger from "./Loger";
export default class KrvniPritisak extends Pregled{
    gornjaVrednost: number;
    donjaVrednost: number;
    puls: number;
    constructor(vreme: string, datum: string){
        super(vreme, datum);
    }
    odradiPregled(pacijent: Pacijent){
        this.gornjaVrednost = 120;
        this.donjaVrednost = 90;
        this.puls = 75;
        Loger.logovanje(`${pacijent.ime} je odradio pregled za krvni pritisak, 
        gornja vrednos je ${this.gornjaVrednost}, 
        donja vrednost je ${this.donjaVrednost} i puls ${this.puls}`);
    }
}