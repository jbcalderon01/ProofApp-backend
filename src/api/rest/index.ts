
import { Router } from 'express'

import clientRouter from './clients/clients.router'
import companiesRouter from './companies/companies.router'

const router = Router()

router.get('', (req, res) => {
    res.send('Bienvenido a mi API')
})

// Client EndPoints
router.use('/clients', clientRouter)

// Companies EndPoints
router.use('/companies', companiesRouter)

export default router
