import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductFormPage from './pages/ProductFormPage/ProductFormPage'

const routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>    
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=><ProductFormPage history={history}/>
    },
    {
        path:'/product/edit/:id',
        exact:false,
        main:({match, history})=><ProductFormPage match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoundPage/>
    },
    
];

export default routes;