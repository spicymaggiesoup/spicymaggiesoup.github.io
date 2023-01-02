
import React from 'react';
import GlobalLayout from './pages/_layout';

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicProductsIndex = React.lazy(() => import('./pages/products/index'));
const DynamicProductsID = React.lazy(() => import('./pages/products/[id]'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/products', element: <DynamicProductsIndex />, index: true},
      { path: '/products/:id', element: <DynamicProductsID />, },
    ]
  }
];

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
];
