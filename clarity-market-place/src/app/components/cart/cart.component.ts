import { Component, OnInit } from "@angular/core";
import { Iteamlist } from "../../models/Itemlist";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: Iteamlist[];
  total: number;
  emptyArray: boolean = false;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItemList();
    this.getTotal(this.items);
  }

  //get cart total
  getTotal(itemArray) {
    this.total = itemArray
      .reduce((acc, current) => acc + current.count * current.cost, 0)
      .toFixed(2);
    if (itemArray.length <= 0) {
      this.emptyArray = true;
    }
  }

  //update cart item count and update total
  changeCount(item: Iteamlist) {
    this.items[item.id - 1] = item;
    this.getTotal(this.items);
  }

  //delete cart item and update total
  deleteItem(id: number) {
    this.items = this.items.filter((element, index, arr) => {
      return element.id != id;
    });
    this.getTotal(this.items);
  }

  checkOut(total) {
    console.log(total);
  }
}
