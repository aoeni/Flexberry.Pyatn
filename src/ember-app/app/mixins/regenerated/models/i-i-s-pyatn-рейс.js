import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтпр: DS.attr('string'),
  выход: DS.attr('number'),
  дата: DS.attr('date'),
  конецПосад: DS.attr('string'),
  куда: DS.attr('string'),
  начПосад: DS.attr('string'),
  откуда: DS.attr('string'),
  инфБрон: DS.hasMany('i-i-s-pyatn-инф-брон', { inverse: 'рейс', async: false })
});

export let ValidationRules = {
  времяОтпр: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.времяОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выход: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.выход.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  конецПосад: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.конецПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  куда: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.куда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начПосад: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.начПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  откуда: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.откуда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инфБрон: {
    descriptionKey: 'models.i-i-s-pyatn-рейс.validations.инфБрон.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РейсE', 'i-i-s-pyatn-рейс', {
    куда: attr('Куда', { index: 0 }),
    откуда: attr('Откуда', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    времяОтпр: attr('Время отправления', { index: 3 }),
    начПосад: attr('Начало посадки', { index: 4 }),
    конецПосад: attr('Конец посадки', { index: 5 }),
    выход: attr('Выход', { index: 6 }),
    инфБрон: hasMany('i-i-s-pyatn-инф-брон', 'Информация бронирования', {
      пассажир: belongsTo('i-i-s-pyatn-пассажир', 'Пассажир', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РейсL', 'i-i-s-pyatn-рейс', {
    куда: attr('Куда', { index: 0 }),
    откуда: attr('Откуда', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    времяОтпр: attr('Время отправления', { index: 3 }),
    начПосад: attr('Начало посадки', { index: 4 }),
    конецПосад: attr('Конец посадки', { index: 5 }),
    выход: attr('Выход', { index: 6 })
  });
};
