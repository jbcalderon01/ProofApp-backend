
import { Controller, Interactor } from '@common/generic';
import { CompanyEntity } from '@core/companies/companies.entity';

export class CompaniesController extends Controller<CompanyEntity>{
    interactor: Interactor<CompanyEntity>
    constructor(interactor: Interactor<CompanyEntity>) {
        super(interactor)
        this.interactor = interactor
    }
}
