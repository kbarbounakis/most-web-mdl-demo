/**
 * Created by kbarbounakis on 2/12/16.
 */
import {bootstrap} from 'angular2/platform/browser';
import {provide, Component} from 'angular2/core';
import {ClientDataContext} from 'angular2-most/angular2-most'
import {Http,HTTP_PROVIDERS,RequestOptions,BaseRequestOptions,Headers} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {OrdersHome,ProductsHomeComponent,OrderComponent} from './components';

//class RemoteDataContext extends ClientDataContext {
//    constructor(private http:Http) {
//        this.setBase("http://localhost:8100/");
//        super(http);
//    }
//}
//
//class MyBaseRequestOptions extends BaseRequestOptions {
//    headers: Headers = new Headers({
//        'X-Requested-With': 'XMLHttpRequest'
//    });
//    withCredentials: boolean = true;
//}
//bootstrap(TodoApp,[HTTP_PROVIDERS,provide(RequestOptions, {useClass: MyBaseRequestOptions}), provide(ClientDataContext, { useClass:RemoteDataContext })]);

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

export class App {
    constructor(private context: ClientDataContext) {

    }
}

bootstrap(App,[ HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    ClientDataContext]);