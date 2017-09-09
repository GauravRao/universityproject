import { Injectable }                     from '@angular/core';
import { Http, Response }                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';
import { Observable }                     from 'rxjs/Observable';
import { Keepalive }                      from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Router, ActivatedRoute }         from '@angular/router';
import { Logger, Options }                from "angular2-logger/core";
import { CustomLoggerOptions }            from '../../utils';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  idleState = 'Not started.';
  log: any;
  time: any;
  options: any;
  private customLoggerOptions: CustomLoggerOptions = new CustomLoggerOptions(); //to customize and store log info

  // Change the baseUrl depends on the backend input
  // private baseUrl = '';
  private baseUrl = '/api/';
  // private baseUrl = 'http://sample-env-1.cmmstegqmt.eu-west-2.elasticbeanstalk.com/';

  private headers = new Headers();

  constructor(private http: Http, private idle: Idle,
    private keepalive: Keepalive,
    private route: ActivatedRoute,
    private router: Router,
    private _logger: Logger,
  ) {

    // sets an idle timeout of 30 min, for testing purposes.
    idle.setIdle(1800);

    // sets a timeout period of 30min. after 1hr of inactivity, the user will be considered timed out.
    idle.setTimeout(1800);

    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');

    //on idle-timeout due to inactivity of the user, then logout from the session
    idle.onTimeout.subscribe(() => {
      this.logout();
    });

    // sets the ping interval to 30mins
    keepalive.interval(1800);

    this.reset();
  }

  //Reset the idle timer and reset the watch function back to it
  reset() {
    this.idle.watch();
  }

  //General get method for http call using AJAX method using Observables
  get(q: any): Observable<any> {
    this.create();
    return this.http.get(this.baseUrl + q, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(q: any, obj: any): Observable<any> {
    this.create();
    return this.http.post(this.baseUrl + q, obj, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body;
    let status: number;
    try {
      body = res.text() ? res.json() : {};
    }
    catch (e) {
      body = res.text();
    }
    finally {
      status = res.status;
    }
    return { body, status };
  }

  private create() {
    let headers = new Headers();
    const getSessionToken = localStorage.getItem('sessionId');
    const getUserId = localStorage.getItem('userId');
    const getCsrfToken = localStorage.getItem('csrfToken');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic dXNlcjo2NDYwMDI1OC1kN2JiLTQ0OGQtYjE4Mi1lODdmZjJlZjA3ZDY=');
    headers.append('userId', getUserId);
    headers.append('sessionToken', getSessionToken);
    headers.append('csrfToken', getCsrfToken);
    this.options = new RequestOptions({ headers: headers });
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

  //logout function to terminate the session of the logged in user and delete the corresponding session details
  logout() {
    this.time = new Date();;
    this.time = this.time.toLocaleString("en-US");
    localStorage.setItem('logout', this.time);
    let username = localStorage.getItem('username');
    this.log = this.customLoggerOptions.logInfo(username + ' Logged Out of application due to Session Termination');
    this._logger.info(this.log);
    this.post("/ums/logout", '');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('userName');
    localStorage.removeItem('mail');
    localStorage.removeItem('userId');
    localStorage.removeItem('logout');
    localStorage.removeItem('csrfToken');
    this.router.navigate(['/login']);
  }
}
