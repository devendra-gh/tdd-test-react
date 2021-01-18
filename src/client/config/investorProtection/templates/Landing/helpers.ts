import { IVariables } from '@tamm/app-composer';

export const getTables = (props: IVariables) => {
  const tables = props.tables.map((table: Record<string, any>) => {
    const title = props.i18n(table.title);
    const columns = table.columns.map((column: Record<string, any>) => {
      return {
        id: column.id,
        title: props.i18n(column.title),
      };
    });
    const items = table.items.map((item: Record<string, any>) => {
      return {
        id: item.id,
        document: props.i18n(item.document),
        description: props.i18n(item.description),
      };
    });
    return {
      title,
      columns: [...columns],
      items: [...items],
    };
  });
  return tables;
};

export const getProcess = (props: IVariables) => {
  const process = props.process.steps.map((item: any) => ({
    label: props.i18n(item.label),
    description: props.i18n(item.description),
  }));
  return { steps: process };
};
