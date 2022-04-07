
import { Request, Response } from 'express';

import { Interactor } from './Interactor';

export class Controller<T>{
    interactor: Interactor<T>
    constructor(interactor: Interactor<T>){
        this.interactor = interactor
    }
     getAll = async (req: Request, res: Response) =>{
         const data = await this.interactor.findAll(req.query)

         res.json(data)
     }
    getOne = async (req: Request, res: Response) =>{
        const data = await this.interactor.findOne(req.params.id, { ...req.query })

        res.json(data)
    }
    create = async (req: Request, res: Response) =>{
        const data = await this.interactor.create(req.body)

        res.json(data)
    }
    update = async (req: Request, res: Response) =>{
        const data = await this.interactor.update(req.params.id, req.body)

        res.json(data)
    }
    remove = async (req: Request, res: Response) =>{
        const data = await this.interactor.remove(req.params.id)

        res.json(data)
    }
}
