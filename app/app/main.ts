import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {OmsApp}   from './oms_app';
import {ClientDataContext} from 'angular2-most/client'
import {Http,HTTP_PROVIDERS,RequestOptions,BaseRequestOptions,Headers} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

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

bootstrap(OmsApp,[ HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    ClientDataContext]);