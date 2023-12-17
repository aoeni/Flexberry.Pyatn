import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МестоНаРейсMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-место-на-рейс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МестоНаРейсMixin, Validations, {
});

defineProjections(Model);

export default Model;
