import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pyatn-код-брони-l');
  this.route('i-i-s-pyatn-код-брони-e',
  { path: 'i-i-s-pyatn-код-брони-e/:id' });
  this.route('i-i-s-pyatn-код-брони-e.new',
  { path: 'i-i-s-pyatn-код-брони-e/new' });
  this.route('i-i-s-pyatn-место-на-рейс-l');
  this.route('i-i-s-pyatn-место-на-рейс-e',
  { path: 'i-i-s-pyatn-место-на-рейс-e/:id' });
  this.route('i-i-s-pyatn-место-на-рейс-e.new',
  { path: 'i-i-s-pyatn-место-на-рейс-e/new' });
  this.route('i-i-s-pyatn-оператор-l');
  this.route('i-i-s-pyatn-оператор-e',
  { path: 'i-i-s-pyatn-оператор-e/:id' });
  this.route('i-i-s-pyatn-оператор-e.new',
  { path: 'i-i-s-pyatn-оператор-e/new' });
  this.route('i-i-s-pyatn-пассажир-l');
  this.route('i-i-s-pyatn-пассажир-e',
  { path: 'i-i-s-pyatn-пассажир-e/:id' });
  this.route('i-i-s-pyatn-пассажир-e.new',
  { path: 'i-i-s-pyatn-пассажир-e/new' });
  this.route('i-i-s-pyatn-посад-талон-l');
  this.route('i-i-s-pyatn-посад-талон-e',
  { path: 'i-i-s-pyatn-посад-талон-e/:id' });
  this.route('i-i-s-pyatn-посад-талон-e.new',
  { path: 'i-i-s-pyatn-посад-талон-e/new' });
  this.route('i-i-s-pyatn-проверка-l');
  this.route('i-i-s-pyatn-проверка-e',
  { path: 'i-i-s-pyatn-проверка-e/:id' });
  this.route('i-i-s-pyatn-проверка-e.new',
  { path: 'i-i-s-pyatn-проверка-e/new' });
  this.route('i-i-s-pyatn-рейс-l');
  this.route('i-i-s-pyatn-рейс-e',
  { path: 'i-i-s-pyatn-рейс-e/:id' });
  this.route('i-i-s-pyatn-рейс-e.new',
  { path: 'i-i-s-pyatn-рейс-e/new' });
  this.route('i-i-s-pyatn-терминал-l');
  this.route('i-i-s-pyatn-терминал-e',
  { path: 'i-i-s-pyatn-терминал-e/:id' });
  this.route('i-i-s-pyatn-терминал-e.new',
  { path: 'i-i-s-pyatn-терминал-e/new' });
});

export default Router;
