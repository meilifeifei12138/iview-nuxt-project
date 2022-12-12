import constant from '@/utils/constant';
export default function ({ $cookies, redirect }) {
  if (!$cookies.get(constant.TOKEN)) {
    return redirect('/login');
  }
}
