import Doktor from "./Doctor"
import Pacijent from "./Pacijent"


let Milan = new Doktor("Milan", "Peric", "Kardiolog");
let Dragan = new Pacijent("Dragan", "miric", 6895482 , 254658854);
Dragan.izaberiDoktora(Milan);
Milan.zakaziPregled("NivoSecera","21.11.2018","13:25",Dragan);
Milan.zakaziPregled("KrvniPritisak","03.02.2019","09:30",Dragan);
Dragan.obaviPregled();
