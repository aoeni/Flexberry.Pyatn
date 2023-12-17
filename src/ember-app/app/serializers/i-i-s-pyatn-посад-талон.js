import { Serializer as ПосадТалонSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pyatn-посад-талон';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПосадТалонSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
