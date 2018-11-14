import Osoba from "./Osoba"
import Doktor from "./Doctor"
import Loger from "./Loger"
import Pregled from "./Pregled";
export default class Pacijent extends Osoba {
    jmbg: number;
    brojZdravstvenogKartona: number;
    izabraniLekar: Doktor;
    listaPregleda: Array<Pregled> = [];
    constructor(ime: string, prezime: string, jmbg: number, brojZdravstvenogKartona: number){
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojZdravstvenogKartona = brojZdravstvenogKartona;
        Loger.logovanje(`Kreiran pacijent ${ime}`);
    }
    izaberiDoktora(doktor: Doktor){
        this.izabraniLekar = doktor;
        doktor.dodajPacijenta(this);
        Loger.logovanje(`Pacijent ${this.ime} izabrao je Dr.${doktor.ime} za svog doktora.`)
    }
    dodajPregled(pregled: Pregled){
        this.listaPregleda.push(pregled)
    }
    obaviPregled(){
        if(this.listaPregleda.length === 0)
        { console.log("Nema zakazanih pregleda")}
        else{
        this.listaPregleda.forEach(value =>{
            value.odradiPregled(this);
            })
        }
    }
}