import { IVariables } from "@tamm/app-composer";

/**
 * @param {IVariables} state
 * @returns {Object}
 */
const getStep = (state: IVariables) => state.withoutNameSteps;

export default { getStep };