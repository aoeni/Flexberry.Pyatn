import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КодБрониMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-код-брони';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КодБрониMixin, Validations, {
});

defineProjections(Model);

export default Model;
