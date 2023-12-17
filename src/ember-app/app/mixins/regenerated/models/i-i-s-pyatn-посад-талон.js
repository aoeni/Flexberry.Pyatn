import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыд: DS.attr('date', { defaultValue() { return new Date(); } }),
  пассажир: DS.belongsTo('i-i-s-pyatn-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-pyatn-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВыд: {
    descriptionKey: 'models.i-i-s-pyatn-посад-талон.validations.датаВыд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пассажир: {
    descriptionKey: 'models.i-i-s-pyatn-посад-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-pyatn-посад-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'i-i-s-pyatn-посад-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 }),
    пассажир: belongsTo('i-i-s-pyatn-пассажир', 'Пассажир', {
      кодБрони: belongsTo('i-i-s-pyatn-код-брони', '', {
        код: attr('Код бронирования', { index: 2 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 3, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-pyatn-место-на-рейс', '', {
        класс: attr('Класс', { index: 4 }),
        место: attr('Место', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    рейс: belongsTo('i-i-s-pyatn-рейс', 'Рейс', {
      дата: attr('Дата', { index: 7 }),
      откуда: attr('Откуда', { index: 8 }),
      куда: attr('Куда', { index: 9, hidden: true }),
      времяОтпр: attr('Время отправления', { index: 10 }),
      начПосад: attr('Начало посадки', { index: 11 }),
      конецПосад: attr('Конец посадки', { index: 12 }),
      выход: attr('Выход', { index: 13 })
    }, { index: 6, displayMemberPath: 'куда' })
  });

  modelClass.defineProjection('ПосадТалонL', 'i-i-s-pyatn-посад-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 }),
    пассажир: belongsTo('i-i-s-pyatn-пассажир', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    рейс: belongsTo('i-i-s-pyatn-рейс', 'Куда', {
      куда: attr('Куда', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
