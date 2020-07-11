//Observables are the most widely used functionality provided by Rxjs. It contains two parts. One is Observable, which acts as a consumer, and the other one is the Observer, which is used to feed the Observable.

import { Observable} from 'rxjs';

const observable = new Observable(observer => {
    observer.next("1st messsage from the Observable");
    setTimeout(() => observer.next('2nd messsage from the Observable after 2 seconds'), 2000);
    setTimeout(() => observer.next('3rd messsage from the Observable after 3 seconds'), 3000);
});

observable.subscribe(value => console.log(value));


//The Subject implements both the Observable and the Observer interfaces. Think of it as a combination of consumer and feeder.

import { Subject } from 'rxjs';

const subject = new Subject();

subject.next('1st messsage from the Subject!');

subject.subscribe(value => console.log(value));

subject.next('2nd messsage from the Subject!');

subject.next('3nd messsage from the Subject!');

//Notice that BehaviouSubject provides the initial value after subscription. Now, look at the following code.

import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject('1st message which is an initial value from the BehaviorSubject');

behaviorSubject.next('I am between 1st message and 2nd message');

behaviorSubject.subscribe(value => console.log(value));

behaviorSubject.next('2nd message from the BehaviorSubject');

behaviorSubject.next('3rd message from the BehaviorSubject');


//Now, what if you don’t want only the current value but instead you want all values at the subscription. This is where ReplaySubject comes into action.

import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject();

replaySubject.next('1st message from the ReplaySubject!');

replaySubject.next('2nd message from the ReplaySubject!');

replaySubject.next('3rd message from the ReplaySubject!');

replaySubject.next('4th message from the ReplaySubject!');

replaySubject.subscribe(value => console.log(value));

replaySubject.next('5th message from the ReplaySubject!');

replaySubject.next('6th message from the ReplaySubject!');


//As you can see, it emits only the last value on its completion.

import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject();

asyncSubject.next('1st message from the AsyncSubject');

asyncSubject.subscribe(value => console.log(value));

asyncSubject.next('2nd message from the AsyncSubject'); //nothing logged

asyncSubject.subscribe(value => console.log(value));

asyncSubject.next('3rd message from the AsyncSubject'); //nothing logged

asyncSubject.complete();

