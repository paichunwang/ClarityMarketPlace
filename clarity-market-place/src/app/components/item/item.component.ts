import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Iteamlist } from "../../models/Itemlist";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() item: Iteamlist;
  @Output() changeCount: EventEmitter<any> = new EventEmitter();
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChangeCount(item: any, value: any) {
    //setting new value to item to emit up to cart component
    item.count = parseInt(value);
    this.changeCount.emit(item);
  }

  onDeleteItem(id: any) {
    id = parseInt(id);
    this.deleteItem.emit(id);
  }
}
