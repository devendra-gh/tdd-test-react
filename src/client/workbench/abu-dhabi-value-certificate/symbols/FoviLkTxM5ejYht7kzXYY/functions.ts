export async function f1_onFocus(props: any) {}
export async function f2_onClick(props: any) {}
export function call_f3_onChange(props: any) {
  return (value: boolean) => {
    const { isUndertakingChecked } = props;
    props.actions.isUndertakingChecked.update(!isUndertakingChecked);
  };
}
