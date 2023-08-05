import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "src/entity/store";
import { Repository } from "typeorm";


@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>
    ) { }

    createStore(store: Store) {
        return this.storeRepository.save(store);
    }

    findAll(): Promise<Store[]> {
        return this.storeRepository.find({
            relations: {
                account: true
            }
        })
    }
}