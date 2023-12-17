import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pyatn-рейс', 'Unit | Serializer | i-i-s-pyatn-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pyatn-рейс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-pyatn-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
