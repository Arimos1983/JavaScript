import Pregled from "./Pregled"
import Pacijent from "./Pacijent"
import Loger from "./Loger";
export default class NivoSecera extends Pregled{
    vrednost: number;
    vremePoslednjegObroka: string;
    constructor(vreme: string, datum: string){
        super(vreme, datum);
    }
    odradiPregled(pacijent: Pacijent){
        this.vrednost = 0.10;
        this.vremePoslednjegObroka = "22:30"
        Loger.logovanje(`${pacijent.ime} je odradio pregled za nivo secera, 
        vrednost je ${this.vrednost}
        poslednji obrok je bio u ${this.vremePoslednjegObroka}`);
    }
}