  
  
  import {i18n} from './i18n'
  
  export const validationRules = {
    required:'required',
    requiredNotZero:'requiredNotZero',
    email:'email',
    number:'number',
    emiratesID:'emiratesID',
    any_phone:'any_phone',
    phone:'phone',
    shortPhone:'shortPhone',
    alpha:'alpha',
    date:'date',
    digits:'digits',
    file:'file',
    fileType:'fileType',
    

  }

  
  export const isFieldHasValue = (fieldValue: any) => {
    if (Array.isArray(fieldValue)) {
      return fieldValue.length > 0;
    }
  
    return !(
      fieldValue === undefined ||
      !(
        (fieldValue && fieldValue !== '') ||
        fieldValue === 0 ||
        fieldValue === false ||
        fieldValue === true
      )
    );
  };
  



  /**
   * validateRule
   * @param {string} rule
   * @param {string} fieldValue
   * @param {string} field
   * @returns {Object}
   */
  export const validateRule = (rule: any, fieldValue: any) => {
    let ruleResult;

    if (typeof rule === 'function') {
      ruleResult = rule(fieldValue);
    } else {
      const ruleName = rule.rule ? rule.rule : rule;
      switch (ruleName) {
        case 'required':
          if (!isFieldHasValue(fieldValue)) {
            ruleResult = {
              message: i18n('form.error.required'),
            };
          }
          break;
        case 'requiredNotZero':
          if (!(fieldValue && fieldValue !== '')) {
            ruleResult = {
              message: i18n('form.error.required'),
            };
          }
          break;
        default:
          ruleResult = false;
      }

      if (fieldValue && !ruleResult) {
        switch (ruleName) {
          case 'email': {
            // eslint-disable-next-line no-useless-escape
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.email'),
              };
            }
            break;
          }
          case 'number':
            // eslint-disable-next-line no-restricted-globals
            if (isNaN(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.number'),
              };
            }
            break;
          case 'emiratesID': {
            if (
              !/^784-*[12]{1}[0-9]{3}-*[0-9]{7}-*[0-9]{1}$/.test(fieldValue)
            ) {
              ruleResult = {
                message: i18n('form.error.emiratesId'),
              };
            }
            break;
          }
          case 'any_phone': {
            if (!/^[0-9\s- +]{8,15}$/i.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.phone'),
              };
            }
            break;
          }
          case 'phone': {
            if (!/^((\+|0+)?(97105|9715)\d{8}|05\d{8})$/.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.phone'),
              };
            }
            break;
          }
          case 'shortPhone': {
            if (!/^(\+|05)\d{8}$/.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.phone'),
              };
            }
            break;
          }
          case 'alpha': {
            if (!/^([\u0621-\u064A\040]|[a-zA-Z])+$/i.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.alpha'),
              };
            }
            break;
          }
          /*
          case 'date': {
            const dateValueObject = moment(fieldValue, rule.dateFormat);
            if (dateValueObject.isValid()) {
              if (rule.before && !dateValueObject.isBefore(rule.before)) {
                ruleResult = {
                  message: rule.message,
                };
              }

              if (rule.after && !dateValueObject.isAfter(rule.after)) {
                ruleResult = {
                  message: rule.message,
                };
              }
            } else {
              ruleResult = {
                message: i18n('form.error.date'),
              };
            }
            break;
          }
          */
          case 'digits': {
            if (!/^[0-9]+$/.test(fieldValue)) {
              ruleResult = {
                message: i18n('form.error.digits'),
              };
            }
            break;
          }
          case 'file': {
            if (fieldValue.uid && fieldValue.size > 0) {
              if (rule.maxSize) {
                if (fieldValue.size > 1000000 * rule.maxSize) {
                  ruleResult = {
                    message: i18n('form.error.fileMaxSize'),
                  };
                }
              }
            } else {
              ruleResult = {
                message: i18n('form.error.file'),
              };
            }
            break;
          }
          case 'fileType': {
            if (fieldValue.length > 0) {
              const isValid = fieldValue.every(
                (file: any) =>
                  file.name &&
                  file.size > 0 &&
                  rule.accept.indexOf(file.type) > -1
              );
              if (!isValid) {
                ruleResult = {
                  message: i18n('form.error.invalidFileType'),
                };
              }
            }
            break;
          }
          default:
            ruleResult = false;
        }
      }
    }

    return ruleResult;
  };


  