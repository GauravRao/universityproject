import { Injectable } from '@angular/core';
import { Logger, Options, Level } from "angular2-logger/core";

export class CustomLoggerOptions { // Customize class for  logger service

  store: boolean = true;    // if true, level will be stored in the localstorage.

  //storeAs:'' // The local storage key that will be used to save the level config if the store setting is true. Defaults to 'angular2.logger.level'

  level = Level.LOG; // Possible level of logging console Level.OFF, Level.ERROR,Level.WARN,Level.INFO,Level.DEBUG,Level.LOG

  global: boolean = false; //Whether or not you want the created logger object to be exposed in the global scope. Defaults to true.

  // globalAs:'' //The window's property name that will hold the logger object created. Defaults to 'logger'.

  logTypes: Array<string> = ['OFF', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'LOG']; // define types of log

  componentName: any; // it is saying current component name

  routerName: string; // it is saying current route name
  time: any;
  constructor() {
  }

  private getDateTime(): Date {
    let date = new Date();
    return date;
  }

  private getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      return 'Opera';
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
      return 'Chrome';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
      return 'Safari';
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
      return 'Firefox';
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1)) //IF IE > 10
    {
      return 'IE';
    }
    else {
      return 'unknown';
    }
  }

  private createLogObject(type: string, message: string, data?: string): string {
    let logObject: any = {};
    logObject.uid = localStorage['userId'];
    logObject.username = localStorage['username'];
    logObject.mail = localStorage['mail'];
    logObject.action = message;
    this.time = this.getDateTime();
    logObject.timestamp = this.time.toLocaleString("en-GB");
    logObject.browser = this.getBrowser();
    return (logObject);
  }

  private formatMessage(message: any): string {
    if (message) {
      return JSON.stringify(message);
    }
    else {
      return message;
    }
  }

  public logError(message: string, data: any): string {
    let log = this.createLogObject(this.logTypes[1], message, this.formatMessage(data));
    return log;
  }

  public logWarn(message: string): string {
    let log = this.createLogObject(this.logTypes[2], message);
    return log;
  }

  public logInfo(message: string): string {
    let log = this.createLogObject(this.logTypes[3], message);
    return log;
  }

  public logDebug(message: string, data: any): string {
    let log = this.createLogObject(this.logTypes[4], message, this.formatMessage(data));
    return log;
  }

  public logLog(message: string): string {
    let log = this.createLogObject(this.logTypes[5], message);
    return log;
  }

  public setInitialInfo(componentName: string, routerName: string): void {
    this.componentName = componentName;
    this.routerName = routerName;
  }
}
