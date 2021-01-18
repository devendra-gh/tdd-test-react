import React from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Select from '@tamm/ui-lib-v2-select';
import Container from 'client/containers';
import './Test.less';

/**
 * Login template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Test(props: IVariables) {
  return (
    <Container>
      <div className="test-wrapper">
        <div className="select-wrapper">
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            <option value="volvo">Super Item</option>
            <option value="saab">Item 1</option>
            <option value="mercedes">Item 2</option>
            <option value="audi">Item 3</option>
          </select>
        </div>
        <div>
          <Select
            disabled={false}
            help=""
            i18n={props.i18n}
            isOpen={false}
            isStatic={false}
            items={[
              {
                id: 'select.0',
                label: 'Super Item',
              },
              {
                id: 'select.1',
                label: 'Item 1',
              },
              {
                id: 'select.2',
                label: 'Item 2 superrr megaaa loooooooong text goes here',
              },
              {
                id: 'select.3',
                label: 'Error',
              },
              {
                id: 'select.4',
                label: 'Item 3',
              },
              {
                disabled: true,
                id: 'select.5',
                label: 'Disabled',
              },
            ]}
            label="Single Select"
            multi={false}
            // onBlur={function noRefCheck() {}}
            // onChange={function noRefCheck() {}}
            // onFocus={function noRefCheck() {}}
            // onOpenChange={function noRefCheck() {}}
            placeholder="Select something"
            showSearch
            size="default"
            // validateStatus={null}
            value={null}
          />
        </div>
      </div>
      <div style={{ height: 100 }} />
    </Container>
  );
}

Test.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Test);

// style={{ height: '5rem', width: '10rem' }}
