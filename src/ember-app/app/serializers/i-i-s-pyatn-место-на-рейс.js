import { Serializer as МестоНаРейсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-место-на-рейс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоНаРейсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
