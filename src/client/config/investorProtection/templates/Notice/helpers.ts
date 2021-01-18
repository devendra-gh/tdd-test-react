import { IVariables } from '@tamm/app-composer';

export const getButtons = (props: IVariables) => {
  return (
    props.buttons &&
    props.buttons.map((button: IVariables) => {
      return {
        label: props.i18n(button.label),
        onClick: () => {
          button.onClick(props);
        },
        withArrow: button.withArrow,
        alignIcon: button.alignIcon,
      };
    })
  );
};
