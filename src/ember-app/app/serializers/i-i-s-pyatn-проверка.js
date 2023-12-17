import { Serializer as ПроверкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-проверка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроверкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
