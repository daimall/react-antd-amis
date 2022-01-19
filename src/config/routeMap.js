import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Clients = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/clients'),loading: Loading});

export default [
  { path: "/curorder", component: Clients },
];
