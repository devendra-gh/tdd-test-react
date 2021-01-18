import { connect } from 'react-redux';
import { IVariables } from '@tamm/app-composer';
import Sidebar from './Sidebar.component';

/* istanbul ignore file */

export default connect((state: IVariables) => ({
  steps: state.steps || [],
}))(Sidebar);
