import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "../app/components/cart/cart.component";
import { CheckoutComponent } from "../app/components/checkout/checkout.component";

const routes: Routes = [
  {
    path: "",
    component: CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
