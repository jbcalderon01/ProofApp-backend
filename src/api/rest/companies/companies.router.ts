
import { Router } from 'express'

import { CompanyInteractor } from '../../../core/companies/companies.interactor'
import CompaniesDS from '../../../data/companies/datasources/companies.datasource'

import { CompaniesController } from './companies.controller'

const companiesRouter = Router()

const companiesDataSource = new CompaniesDS()
const companiesInteractor = new CompanyInteractor(companiesDataSource)
const companiesController = new CompaniesController(companiesInteractor)

companiesRouter.get('/:id', companiesController.getOne)
companiesRouter.get('/', companiesController.getAll)
companiesRouter.post('/', companiesController.create)
companiesRouter.put('/:id', companiesController.update)
companiesRouter.delete('/:id', companiesController.remove)

export default companiesRouter
