
import { Interactor } from '@common/generic'

import { CompanyEntity } from './companies.entity'
import { CompaniesRepository } from './companies.repository'

export class CompanyInteractor extends Interactor<CompanyEntity> {
  repository: CompaniesRepository
  constructor (repository: CompaniesRepository) {
      super(repository)
      this.repository = repository
  }
}
