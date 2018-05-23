/**
 * Neutron Doppler Listener 
 * Doppler Field Error Schema
 */
 
import DopplerApiCli from '../DopplerApiCli';

/**
* Doppler Field Error Schema Module
* @module schema/DopplerFieldErr
* @version 1.0.0
*/
export default class FieldError {
    /**
    * Constructs a new <code>FieldError</code>.
    * @alias module:model/FieldError
    * @class
    */

    constructor() {
    /// need to write the constructor for field errors.       
    }

    /**
    * Constructs a <code>DopplerFieldErr</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:schemes/DopplerFieldErr} obj Optional instance to populate.
    * @return {module:schemes/DopplerFieldErr} The populated <code>FieldError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldError();

            if (data.hasOwnProperty('field')) {
                obj['field'] = DopplerApiCli.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = DopplerApiCli.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = DopplerApiCli.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} field
    */
    field = undefined;
    /**
    * @member {String} code
    */
    code = undefined;
    /**
    * @member {String} message
    */
    message = undefined;

}
