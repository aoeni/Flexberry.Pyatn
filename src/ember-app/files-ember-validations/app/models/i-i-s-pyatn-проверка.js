import {
  defineNamespace,
  defineProjections,
  Model as ПроверкаMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-проверка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
