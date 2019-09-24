import * as fromRouter from '@ngrx/router-store';
import {Params, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';





export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}



export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
serialize(routerState: RouterStateSnapshot) {
    const {url, root: {queryParams}} = routerState;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
        state = state.firstChild;
    }
    const{params} = state;
    return{url, queryParams, params};
}
}
