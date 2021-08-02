import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { BounteousService } from './bounteous.service';
import * as BounteousActions from './bounteous.action';
import { switchMap, catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
@Injectable({
    providedIn: 'root'
})

export class BounteousEffects {
    constructor(private actions$: Actions, private _service: BounteousService) { }

    @Effect()
    loadRoutes$: Observable<Action> = this.actions$.pipe(
        ofType<BounteousActions.LoadRoutes>(
            BounteousActions.BounteousAction.LOAD_ROUTES
        ),
        mergeMap((action: BounteousActions.LoadRoutes) =>
            this._service.getInitialData().pipe(
                map(
                    (routes: any) =>
                        new BounteousActions.LoadRoutesSuccess(routes)
                ),
                catchError(err => of(new BounteousActions.LoadRoutesFailed()))
            )
        )
    );

    @Effect()
    loadSelectedData$: Observable<Action> = this.actions$.pipe(
        ofType<BounteousActions.LoadSelectedRoute>(
            BounteousActions.BounteousAction.LOAD_SELECTED_ROUTE
        ),
        mergeMap((action: BounteousActions.LoadSelectedRoute) =>
            this._service.getSelectedRouteData(action.payload).pipe(
                map(
                    (routes: any) =>
                        new BounteousActions.LoadSelectedRouteSuccess(routes)
                ),
                catchError(err => of(new BounteousActions.LoadRoutesFailed()))
            )
        )
    );


}