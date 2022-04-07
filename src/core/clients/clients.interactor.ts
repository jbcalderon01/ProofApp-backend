
import { Interactor } from '../../common/generic'

import { ClientEntity } from './clients.entity'
import { ClientRepository } from './clients.repository'

export class ClientInteractor extends Interactor<ClientEntity> {
  repository: ClientRepository
  constructor (repository: ClientRepository) {
      super(repository)
      this.repository = repository
  }
}
