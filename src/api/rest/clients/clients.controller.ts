
import { Controller, Interactor } from '@common/generic';
import { ClientEntity } from '@core/clients/clients.entity';

export class ClientController extends Controller<ClientEntity>{
    interactor: Interactor<ClientEntity>
    constructor(interactor: Interactor<ClientEntity>) {
        super(interactor)
        this.interactor = interactor
    }
}
