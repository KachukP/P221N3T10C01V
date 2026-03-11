export default function (req,res){
    const MiName:string="© 2026 - (КП) : [Pablo Kachuk]";
    console.log("Soy la API de: ",MiName);
    res.send(MiName);
};