/**
 * Created by kbarbounakis on 2/10/16.
 */
import {Component, Input} from 'angular2/core';
import {ClientDataContext} from "angular2-most/client";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MostDataComponent,MostDataComponentHandler} from "./data";

@Component({
    selector: 'latest-orders',
    styles: [],
    templateUrl: "/app/templates/latest.orders.html",
    directives:[ROUTER_DIRECTIVES, MostDataComponent]
})
export class LatestOrdersComponent extends MostDataComponentHandler {
    public items:Array;
}

@Component({
    selector: 'orders-home',
    styles: [],
    templateUrl: "/app/templates/orders.home.html",
    directives: [LatestOrdersComponent, MostDataComponent]
})
export class OrdersHome {

    ngOnInit() {
        //
    }

    constructor(private context: ClientDataContext) { }
}

export class OrderComponent {

}