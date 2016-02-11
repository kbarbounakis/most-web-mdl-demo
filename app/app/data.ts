/**
 * Created by kbarbounakis on 2/10/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ClientDataContext} from "angular2-most/client";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'most-data',
    template:``,
    inputs:["model","filter","order","group","expand","select","target","top","skip"],
    outputs:["items"]
})
export class MostDataComponent {
    public items:EventEmitter = new EventEmitter();
    public model:string;
    public target:string;
    public filter:string;
    public top:number;
    public skip:number;
    public order:string;
    public group:string;
    public select:string;
    public expand:string;
    ngOnInit() {
        this.next();
    }
    private next() {
        let self = this;
        let q = self.context.model(this.model).asQueryable();
        q.setParam("filter", this.filter)
            .setParam("select",this.select)
            .setParam("order",this.order)
            .setParam("expand",this.expand)
            .setParam("group",this.group)
            .setParam("top",this.top)
            .setParam("skip",this.skip);
        q.list().subscribe(
            data => {
                var res = { };
                this.target = this.target || "items";
                res[this.target] = data.records;
                this.items.emit(res);
            },
            err => {
                console.log(err);
            }
        );
    }
    constructor(private context: ClientDataContext) { }
}

export interface MostDataComponentHandler {
    data(any);
}
