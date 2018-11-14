export default class Loger{
    
   static logovanje(poruka: string){
        let date = new Date();
        console.log(`[${date.getDay()}.${date.getMonth()}.${date.getFullYear()}] ${date.getHours()}:${date.getMinutes()} ${poruka}`)
    }
}