import {
  defineNamespace,
  defineProjections,
  Model as ИнфБронMixin
} from '../mixins/regenerated/models/i-i-s-pyatn-инф-брон';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфБронMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
