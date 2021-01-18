export async function init(props: any) {
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
}
export async function f1_onClick(props: any) {
  props.history.push('/');
}
