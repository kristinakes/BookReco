import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshopComponent } from "../shop_books-page/bookshop.component";

const routes: Routes = [
    { path: '', component: BookshopComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShopRoutingModule {}