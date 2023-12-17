import { Serializer as ПассажирSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-пассажир';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПассажирSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
