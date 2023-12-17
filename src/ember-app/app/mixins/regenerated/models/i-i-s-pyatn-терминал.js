import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-pyatn-терминал.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТерминалE', 'i-i-s-pyatn-терминал', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('ТерминалL', 'i-i-s-pyatn-терминал', {
    номер: attr('Номер', { index: 0 })
  });
};
