import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-pyatn-рейс-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-pyatn-инф-брон+пассажир':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'пассажир',
            projection: 'ПассажирL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
