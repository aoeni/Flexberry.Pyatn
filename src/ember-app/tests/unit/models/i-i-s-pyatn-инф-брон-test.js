import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pyatn-инф-брон', 'Unit | Model | i-i-s-pyatn-инф-брон', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-pyatn-инф-брон',
    'model:i-i-s-pyatn-код-брони',
    'model:i-i-s-pyatn-место-на-рейс',
    'model:i-i-s-pyatn-оператор',
    'model:i-i-s-pyatn-пассажир',
    'model:i-i-s-pyatn-посад-талон',
    'model:i-i-s-pyatn-проверка',
    'model:i-i-s-pyatn-рейс',
    'model:i-i-s-pyatn-терминал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
