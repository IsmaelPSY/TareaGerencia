import * as controller from "./activity.controller.js";
import {toPromise} from "../utils/toPromise.js"

export const getMain = async (req, res) => {   
        
    try {
        res.render("main");
      } catch (err) {
        res.status(500).send(err.message);
      }    
}

export const getInfo = async (req, res) => {   
        
  try {
      const data = await controller.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }    
}
