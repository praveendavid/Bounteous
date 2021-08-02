import { Action } from '@ngrx/store';
import * as BounteousAction from './bounteous.action';
import { InitialState } from '@ngrx/store/src/models';
import { AppState } from './app.component';

export const initialState: AppState = {
    routes: {},
    selectedRouteData: []
}
export function BounteousReducer(state=initialState, action: BounteousAction.Action) {
    console.log(action.type, state);

    switch (action.type) {
        case BounteousAction.BounteousAction.LOAD_ROUTES_SUCCESS: {
            return { ...state, routes: action.payload };
        }
        case BounteousAction.BounteousAction.LOAD_SELECTED_ROUTE_SUCCESS: {
            return { ...state, selectedRouteData:action.payload };
        }
        default:
            return state;
    }
}