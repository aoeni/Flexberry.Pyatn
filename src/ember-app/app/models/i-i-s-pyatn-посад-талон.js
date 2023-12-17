import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПосадТалонMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-посад-талон';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПосадТалонMixin, Validations, {
});

defineProjections(Model);

export default Model;
