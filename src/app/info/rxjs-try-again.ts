
/*

// some-service.ts

listenForSomething(arg: string): Observable<string | Error> {
        
    return new Observable((subscriber: Observer<any>) => {

        const interval$ = interval(100);
        const timer$ = timer(3000);

        const intervalUnderTimer$ = interval$.pipe(takeUntil(timer$));

        const sub = intervalUnderTimer$.subscribe({
            next: () => {
                const item = this.sessionStorage.getItem(this.sessionStorageKey);

                if (item === 'success') {
                    sub.unsubscribe();
                    subscriber.next('success');
                    subscriber.complete();
                }

                if (item === 'error') {
                    sub.unsubscribe();
                    subscriber.error(new Error(this.errorMessage));
                }
            },
            complete: () => {
                // This callback will only run if interval has run its course without sub.unsubscribe above.
                subscriber.error(new Error(this.errorMessage));
            }
        });

    });

}


// some-other-service.ts

return this.http.get<ResponseModel>(url, httpOptions).pipe(
      map((response: ResponseModel) => {
        this.foo = response.foo;
        return this.foo;
      }),
      retryWhen((error) => {
        return error.pipe(
          flatMap((err) => {
            if (err instanceof HttpErrorResponse && err.status === 402) {
              return this.someServiceThatReturnsObservable.listenForSomething(err.headers.get('location'))
                .pipe(
                  catchError((r) => {
                    return throwError(r);
                  })
                );
            } else {
              return throwError(err);
            }
          })
        );
      })

    );
  }




*/
