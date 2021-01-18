export async function init(props: any) {
  props.actions.showSideBar.update(false);
  if (props.loggedIn) {
    props.history.push('/selectlicences');
  } else {
    props.history.push('/login');
  }
}
export async function onPageInit(props: any) {}
