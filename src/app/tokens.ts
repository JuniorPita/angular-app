import { InjectionToken } from '@angular/core';

export const DOCUMENT = new InjectionToken<Document>('Document object');

export const SET_INTERVAL = new InjectionToken<typeof setInterval>(
    'setInterval function'
);