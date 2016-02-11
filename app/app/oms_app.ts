/**
 * Created by kbarbounakis on 2/6/16.
 */
import {Component} from 'angular2/core';
import {RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Location,
    LocationStrategy,
    HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';
import {OrdersHome, OrderComponent} from './orders';
import {ProductsHomeComponent} from './products';
import {ClientDataContext} from "angular2-most/client";

@RouteConfig([
    {path:'/orders', name: 'Orders', component: OrdersHome},
    {path:'/products', name: 'Products', component: ProductsHomeComponent},
    {path:'/order/:id', name: 'Order', component: OrderComponent}
])

@Component({
    selector: 'oms-app',
    templateUrl: '/app/templates/oms.app.html',
    styles:['a { cursor: pointer; cursor: hand; }'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ provide(LocationStrategy, {useClass: HashLocationStrategy}) ]
})

export class OmsApp {

    ngOnInit() {
       //
    }

    constructor(private context: ClientDataContext) {

    }
    //getGroups() {
    //    return this.context.model("Group").asQueryable().items().subscribe(
    //        data => { this.groups = data },
    //        err => { console.log(err); }
    //    );
    //}
}
