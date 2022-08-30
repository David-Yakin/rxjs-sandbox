import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './root/app.component';
import { RxjsObservableComponent } from './components/rxjs-observable/rxjs-observable.component';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { TakePipeOperatorComponent } from './components/take-pipe-operator/take-pipe-operator.component';
import { TakeWhileOperatorComponent } from './components/take-while-operator/take-while-operator.component';
import { TakeLastOperatorComponent } from './components/take-last-operator/take-last-operator.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubjectComponent } from './components/subject/subject.component';
import { RangeOperatorComponent } from './components/range-operator/range-operator.component';
import { FromEventOperatorComponent } from './components/from-event-operator/from-event-operator.component';

@NgModule({
  declarations: [AppComponent, RxjsObservableComponent, OfOperatorComponent, FromOperatorComponent, TakePipeOperatorComponent, TakeWhileOperatorComponent, TakeLastOperatorComponent, FilterOperatorComponent, MapOperatorComponent, SubscriptionComponent, SubjectComponent, RangeOperatorComponent, FromEventOperatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
