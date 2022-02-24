var observable = Rx.Observable.interval(1000); //https://rxjs.dev/api/index/function/interval
var observer = {
  next: function (value) {
    console.log(value);
  },
};

observable
  .map(function (value) {
    return "Number: " + value;
  })
  .throttleTime(1900)
  .subscribe(observer);
