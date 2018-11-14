import Osoba from "./Osoba"
import Pacijent from "./Pacijent"
import KrvniPritisak from "./KrvniPritisak"
import NivoSecera from "./NivoSecera"
import NivoHolesterola from "./NivoHolesterola"
import Loger from "./Loger";
import { Pregled } from "./Enum"
export default class Doktor extends Osoba {
    specijalnost: string;
    listaPacijenata: Array<Pacijent> = [];
    constructor(ime: string, prezime: string, specijalnost: string){
        super(ime, prezime);
        this.specijalnost = specijalnost;
        Loger.logovanje(`Kreiran doktor ${ime}`);
    }
    dodajPacijenta(pacijent: Pacijent){
        this.listaPacijenata.push(pacijent);
    }
    zakaziPregled(vrstaPregleda: string, datum: string , vreme: string, pacijent: Pacijent){
        if(vrstaPregleda === Pregled.krvni){
            pacijent.dodajPregled(new KrvniPritisak(vreme, datum))
        }else if(vrstaPregleda === Pregled.secer){
            pacijent.dodajPregled(new NivoSecera(vreme, datum))
        }else if(vrstaPregleda === Pregled.holesterol){
            pacijent.dodajPregled(new NivoHolesterola(vreme, datum))
        }else{
            console.log("Nepostojeci pregled");
        }
    }
}