import { Component, OnInit, Input } from "@angular/core";
import { Iteamlist } from "../../models/Itemlist";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() item: Iteamlist;

  constructor() {}

  ngOnInit() {}
}
