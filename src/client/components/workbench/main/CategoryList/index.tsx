import React from 'react';
import DLSCategoryList from '@tamm/ui-lib-v2-category-list';

function CategoryList(props: any) {
  return (
    <DLSCategoryList
      {...props}
      items={props.items.map((item: any) => ({
        ...item,
        onAdgeClick: props.onAdgeClick,
        onPersonaClick: props.onPersonaClick,
      }))}
    />
  );
}

CategoryList.defaultProps = {
  items: [],
};

export default CategoryList;
