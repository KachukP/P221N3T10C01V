import { Test } from "./index";

export default function  HandLer(req,res){
    res.status(200).json({
        body:req.body,
        query:req.query,
        cookies:req.cookies,
        test:Test(),
    });
};