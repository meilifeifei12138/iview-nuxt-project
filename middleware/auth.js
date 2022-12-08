export default function ({ redirect, store }) {
  if (store.state.token === '' || store.state.token === undefined) {
    return redirect('/login');
  }
}
