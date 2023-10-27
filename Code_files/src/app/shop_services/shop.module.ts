import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { BookshopComponent } from '../shop_books-page/bookshop.component';
import { ShopRoutingModule } from "./shop-routing.module";


@NgModule({
    declarations: [
        BookshopComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ShopRoutingModule,
    ],
    exports:[
        MaterialModule
    ]
})
export class ShopModule {}