export default function  HandLer(req,res){
    res.status(200).json({
        body:req.body,
        query:req.query,
        cookies:req.cookies,
        index:true,
    });
};

export function Test(){
    return "Hola soy la Función Test()"
};