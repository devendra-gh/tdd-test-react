import React from 'react';
import * as PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Grid from '@tamm/ui-lib-v2-grid';
import Table from '@tamm/ui-lib-v2-table';
import Pagination from '@tamm/ui-lib-v2-pagination';
import moment from 'moment';
import { spacer } from '../../../../utils';

export const noRefCheck = () => '';

const getRadioForTable = (id: string, list: any[], props: IVariables) => {
  let label = '';
  list.find((elem: any) => {
    if (elem.id === id) {
      label = elem.enName;
      return true;
    }
    return false;
  });
  return (
    <RadioGroup.Radio
      checked={props.goodsList.selectedGood === id}
      disabled={false}
      label={label}
      name={id}
      value={id}
      onChange={() => {
        props.handleGoodsRadioChange(id, props);
      }}
    />
  );
};

getRadioForTable.propTypes = {
  goodsList: PropTypes.shape({
    selectedGood: PropTypes.string.isRequired,
  }).isRequired,
  handleGoodsRadioChange: PropTypes.func.isRequired,
};

function SearchTable(props: IVariables) {
  const { Col, Row } = Grid;
  const { goodsList, i18n } = props;
  return (
    <>
      {goodsList.showTable && goodsList && !!goodsList.data.length && (
        <React.Fragment>
          <Row>
            <Col span={6}>
              <p>
                {i18n('global.displayingSearch', {
                  numberOfRecords: goodsList.data.length,
                  totalRecords: goodsList.totalCount,
                })}
              </p>
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}>
              <p>
                {i18n('cgp_prices_uploading_date')}
                {`: ${moment(goodsList.batchDate).format('ll')}`}
              </p>
            </Col>
          </Row>
          {spacer('15px')}
          <Table
            i18n={i18n}
            clickable
            columns={[
              {
                id: 'checkbox',
                title: i18n('global.englishName'),
                render: (_content: string, recordId: string) => {
                  return getRadioForTable(recordId, goodsList.data, props);
                },
              },
              {
                align: 'end',
                id: 'arName',
                title: i18n('global.arabicName'),
              },
            ]}
            headerHidden={false}
            items={goodsList.data}
            size="default"
            title={i18n('cgp_list_of_goods')}
          />
          {spacer('40px')}
          {goodsList.totalCount / goodsList.recInPage > 1 && (
            <>
              <Pagination
                current={props.goodsList.currentPage}
                disabled={false}
                i18n={noRefCheck}
                pageSize={props.goodsList.recInPage}
                total={props.goodsList.totalCount}
                onChange={(currentPage: number) =>
                  props.handlePageChange(currentPage, props)
                }
              />
            </>
          )}
        </React.Fragment>
      )}
    </>
  );
}

export default withTemplateHooks(SearchTable);
