import {
  defineNamespace,
  defineProjections,
  Model as ПосадТалонMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-посад-талон';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПосадТалонMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
