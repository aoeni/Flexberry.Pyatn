import { Serializer as РейсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-рейс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РейсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
