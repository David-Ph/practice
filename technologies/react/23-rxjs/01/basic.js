/* 
  basically, RxJS Observables is like an event listener
  rxjs observables is more powerful than regular event listener because we can chain a lot of stuff
  where as with normal event listener we can mostly do it in a single block

  subscribe is a function to tell the app to listen/observes for an event

  the basic flow is, Observer(listener) will subscribe to an Observable(event), that Observable will respond with either a next(), error(), or complete()
*/

var button = document.querySelector("button");

// normal way
button.addEventListener("click", (event) => console.log(event));

// observables way
Rx.Observable.fromEvent(button, "click")
  .throttleTime(1000) // throttle the listener to only be active once per 1000 second
  .map((data) => data.clientY) // we map the data and return it to the next chain, data is an event object and we return the clientY object from it
  .subscribe(
    // subscribe is the final chain, coordinate is the clientY object we get from the previous object and then we just log it
    (coordinate) => console.log(coordinate), // first argument if it completes
    (error) => console.log(error) // second argument if there's an error
  );

var observer = {
  next: function (val) {
    console.log(val);
  },
  error: function (val) {
    console.log(val);
  },
  complete: function (val) {
    console.log(val);
  },
};

// Rx.Observable.fromEvent(button, "click")
Rx.Observable.create(function (obs) {
  // this anon func will receive a observer object from RxJS
  // basically, the flow is like this:
  // we subscribe to an observable by doing the
  obs.next("A value");
  obs.error("A value");
  obs.complete();

  setTimeout(function () {
    obs.complete();
    obs.next("A second value");
  }, 2000);

  button.onclick = function (event) {
    obs.next(event);
  };
}).subscribe(observer);

// to unsubscribe
setTimeout(function () {
  subscription.unsubscribe();
}, 5000);
