
/**
 * Created by kbarbounakis on 2/10/16.
 */
import {Component, Input} from 'angular2/core';
import {ClientDataContext, DataComponent, DataComponentWatcher} from "angular2-most/angular2-most";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'latest-orders',
    styles: [],
    templateUrl: "/app/templates/latest.orders.html",
    directives:[ROUTER_DIRECTIVES, DataComponent]
})
export class LatestOrdersComponent extends DataComponentWatcher {
    public items:Array<any>;
}

@Component({
    selector: 'orders-home',
    styles: [],
    templateUrl: "/app/templates/orders.home.html",
    directives: [LatestOrdersComponent, DataComponent]
})
export class OrdersHome {

    constructor(private context: ClientDataContext) { }
}

export class OrderComponent {

}

@Component({
    selector: 'products',
    styles: [],
    templateUrl: "/app/templates/products.home.html"
})
export class ProductsHomeComponent {

}