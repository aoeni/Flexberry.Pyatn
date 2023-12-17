import { Serializer as ИнфБронSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-инф-брон';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфБронSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
