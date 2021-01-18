export async function init(props: any) {
  props.actions.showSideBar.update(false);
  if (props.loggedIn) {
    props.history.push('/select-licence');
  } else {
    props.history.push('/login');
  }
}
export async function f1_onClick(props: any) {
  props.history.push('/select-licence');
}
