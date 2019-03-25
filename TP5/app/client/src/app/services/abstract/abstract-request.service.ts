import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ServerHost } from "@common/hosts/server-host";
import { Endpoints } from "@common/endpoints";

import { Query } from "./query";

@Injectable()
export abstract class AbstractRequestService {

    protected http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    protected getRequest<T>(serverEndpoint: Endpoints, pathParam?: string | null, ...queryParams: Array<Query>): Observable<T> {
        return this.http.get<T>(this.getUrl(serverEndpoint, pathParam, ...queryParams)).pipe(
            catchError(this.handleError)
        );
    }

    protected postRequest<T>(serverEndpoint: Endpoints, body: T): Observable<void> {
        const options: {} = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.post<void>(this.getUrl(serverEndpoint), body, options).pipe(
            tap(),
            catchError(this.handleError)
        );
    }

    protected putRequest<T>(serverEndpoint: Endpoints, body: T, pathParam?: string | null): Observable<void> {
        const options: {} = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.put<void>(this.getUrl(serverEndpoint, pathParam), body, options).pipe(
            catchError(this.handleError)
        );
    }

    protected deleteRequest<T>(serverEndpoint: Endpoints, pathParam?: string | null): Observable<T> {
        const options: {} = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
        };

        return this.http.delete<T>(this.getUrl(serverEndpoint, pathParam), options).pipe(
            catchError(this.handleError)
        );
    }

    protected handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // tslint:disable-next-line:no-console
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            // tslint:disable-next-line:no-console
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError("Something bad happened; please try again later.");
    }

    protected getUrl(serverEndpoint: Endpoints, pathParam?: string | null, ...queryParams: Array<Query>): string {
        let url: string = this.appendEndpoint(serverEndpoint);
        url += this.formatPathParam(pathParam);
        url += this.formatQueryParams(...queryParams);

        return url;
    }

    private appendEndpoint(serverEndpoint: Endpoints): string {
        return `${ServerHost.Address}/${serverEndpoint}`;
    }

    private formatPathParam(pathParam?: string | null): string {
        return pathParam ? `/${pathParam}` : "";
    }

    private formatQueryParams(...queryParams: Array<Query>): string {
        let query: string = "";

        if (queryParams.length > 0) {
            query += `?${queryParams[0].tag}=${queryParams[0].value}`;

            for (let i: number = 1; i < queryParams.length; i++) {
                query += `&${queryParams[i].tag}=${queryParams[i].value}`;
            }
        }

        return query;
    }

}
