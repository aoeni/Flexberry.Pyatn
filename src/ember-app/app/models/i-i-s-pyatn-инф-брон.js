import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнфБронMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-инф-брон';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнфБронMixin, Validations, {
});

defineProjections(Model);

export default Model;
