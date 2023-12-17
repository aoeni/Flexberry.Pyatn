import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-pyatn-код-брони.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КодБрониE', 'i-i-s-pyatn-код-брони', {
    код: attr('Код', { index: 0 })
  });

  modelClass.defineProjection('КодБрониL', 'i-i-s-pyatn-код-брони', {
    код: attr('Код', { index: 0 })
  });
};
