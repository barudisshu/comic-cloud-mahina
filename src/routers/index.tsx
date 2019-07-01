import HelloComponent from '../pages/hello';

export const routerConfig = [
  {
    component: HelloComponent,
    icon: 'mail',
    key: 'hello',
    name: 'hello',
    path: '/hello',
  },
];
export const allRoutes = routerConfig.reduce((acc: any, cur: any) => {
  if (cur.routes) {
    return acc.concat(cur.routes);
  } else {
    return acc.concat(cur);
  }
}, []);
