import { Body, Controller, Get, Post } from "@nestjs/common";
import { Store } from "src/entity/store";
import { StoreService } from "src/service/store.service";

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) { }

    @Post()
    createController(@Body() store: Store) {
        return this.storeService.createStore(store);
    }

    @Get()
    findAllController(): Promise<Store[]> {
        return this.storeService.findAll();
    }
}