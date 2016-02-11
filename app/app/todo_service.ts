/**
 * Created by kbarbounakis on 2/7/16.
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http:Http) { }

    // Uses http.get() to load a single JSON file
    getGroups() {
        return this.http.get('/Group/index.json').map((res:Response) => res.json());
    }

}