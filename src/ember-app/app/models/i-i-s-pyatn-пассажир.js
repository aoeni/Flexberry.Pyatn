import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПассажирMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-пассажир';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПассажирMixin, Validations, {
});

defineProjections(Model);

export default Model;
