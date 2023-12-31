import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-pyatn-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-pyatn-рейс', { inverse: 'инфБрон', async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-pyatn-инф-брон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-pyatn-инф-брон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфБронE', 'i-i-s-pyatn-инф-брон', {
    пассажир: belongsTo('i-i-s-pyatn-пассажир', 'Пассажир', {
      кодБрони: belongsTo('i-i-s-pyatn-код-брони', '', {
        код: attr('Код бронирования', { index: 1 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 2, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-pyatn-место-на-рейс', '', {
        место: attr('Место', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
