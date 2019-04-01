import { Component, OnInit } from "@angular/core";
import { Iteamlist } from "../../models/Itemlist";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: Iteamlist[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        id: 1,
        title: "Product One",
        cost: 12.99,
        imageUrl:
          "https://www.jabra.com/-/media/Images/Frontpage/LetUsHelpYou/Product-Series/engage_series.png",
        count: 4
      },
      {
        id: 2,
        title: "Product Two",
        cost: 13.99,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1876/4703/products/amped-af-black-cherry-sherbet-4307305300037_300x.png?v=1553010885",
        count: 2
      },
      {
        id: 3,
        title: "Product Three",
        cost: 14,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/31b1ZbUK9QL._SY300_QL70_.jpg",
        count: 3
      },
      {
        id: 4,
        title: "Product Four",
        cost: 15,
        imageUrl:
          "https://www.walgreens.com/images/adaptive/share/images/categoryImages/359436_175.jpg",
        count: 6
      },
      {
        id: 5,
        title: "Product Five",
        cost: 19,
        imageUrl:
          "http://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t100/img/shared/pic_ogp_01.jpg",
        count: 8
      },
      {
        id: 6,
        title: "Product Six",
        cost: 20,
        imageUrl:
          "https://www.jabra.com/-/media/Images/Frontpage/LetUsHelpYou/Product-Series/evolve_series.png",
        count: 1
      }
    ];
  }
}
