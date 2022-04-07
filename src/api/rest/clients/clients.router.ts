
import { Router } from 'express'
import ClientDS from '@data/clients/datasources/clients/clients.datasource'
import { ClientInteractor } from '@core/clients/clients.interactor'

import { ClientController } from './clients.controller'

const clientRouter = Router()

const clientDataSource = new ClientDS()
const clientInteractor = new ClientInteractor(clientDataSource)
const clientController = new ClientController(clientInteractor)

clientRouter.get('/:id', clientController.getOne)
clientRouter.get('/', clientController.getAll)
clientRouter.post('/', clientController.create)
clientRouter.put('/:id', clientController.update)
clientRouter.delete('/:id', clientController.remove)

export default clientRouter
