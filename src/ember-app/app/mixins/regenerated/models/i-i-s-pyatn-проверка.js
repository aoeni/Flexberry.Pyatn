import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  лентаПечати: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-pyatn-оператор', { inverse: null, async: false }),
  терминал: DS.belongsTo('i-i-s-pyatn-терминал', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-pyatn-проверка.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-pyatn-проверка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  лентаПечати: {
    descriptionKey: 'models.i-i-s-pyatn-проверка.validations.лентаПечати.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-pyatn-проверка.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-pyatn-проверка.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаE', 'i-i-s-pyatn-проверка', {
    дата: attr('Дата', { index: 0 }),
    время: attr('Время', { index: 1 }),
    лентаПечати: attr('Лента печати', { index: 2 }),
    терминал: belongsTo('i-i-s-pyatn-терминал', 'Терминал', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    оператор: belongsTo('i-i-s-pyatn-оператор', 'Оператор', {
      iD: attr('ID', { index: 6 }),
      кодДоступа: attr('Код доступа', { index: 7 }),
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПроверкаL', 'i-i-s-pyatn-проверка', {
    дата: attr('Дата', { index: 0 }),
    время: attr('Время', { index: 1 }),
    лентаПечати: attr('Лента печати', { index: 2 }),
    терминал: belongsTo('i-i-s-pyatn-терминал', 'Номер', {
      номер: attr('Номер', { index: 3 })
    }, { index: -1, hidden: true }),
    оператор: belongsTo('i-i-s-pyatn-оператор', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
