import { Action } from "@ngrx/store";

export enum BounteousAction {
    LOAD_ROUTES = "Load Routes",
    LOAD_ROUTES_SUCCESS = "Load Routes Success",
    LOAD_ROUTES_FAILED = "Load Routes Failed",
    LOAD_SELECTED_ROUTE = "Load Selected Route",
    LOAD_SELECTED_ROUTE_SUCCESS = "Load Selected Route Success"
}

export class LoadRoutes implements Action {
    readonly type = BounteousAction.LOAD_ROUTES;
}

export class LoadRoutesSuccess implements Action {
    readonly type = BounteousAction.LOAD_ROUTES_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadRoutesFailed implements Action {
    readonly type = BounteousAction.LOAD_ROUTES_FAILED;
}

export class LoadSelectedRoute implements Action {
    readonly type = BounteousAction.LOAD_SELECTED_ROUTE;
    constructor(public payload: any) { }
}

export class LoadSelectedRouteSuccess implements Action {
    readonly type = BounteousAction.LOAD_SELECTED_ROUTE_SUCCESS;
    constructor(public payload: any) { }
}

export type Action = LoadRoutes | LoadRoutesSuccess | LoadRoutesFailed | LoadSelectedRoute | LoadSelectedRouteSuccess;