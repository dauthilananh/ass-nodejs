import  header  from './components/header.js';
document.querySelector('.header').innerHTML  = header.headerPage();
header.afterRender()

import { ParesRequestURl, $ } from './pages/untils.js';
import err404 from './pages/error404Page.js';
import homepage from './pages/homePage.js';
import ProductsPage  from './pages/ProductsPage.js' //sp
import ProductDetailPage from './pages/ProductDetail.js'; // chi tiết sp
import productCategory  from './pages/productDategory.js'; //hiển thị sp theo danh mục
import contact from './pages/contactPage.js'; // liên hệ
import about from './pages/about.js'; //tin tức
import registration from './pages/registration.js'; // đăng ký
import login from './pages/login.js'// đăng nhập
import adminPage from './pages/adminPage.js'; //hiển thị sp theo danh mục
import ListProduct from './pages/listProduct.js'; //list sản phẩm
import addProduct from './pages/addProduct.js'; //THÊM SP
import updateProduct from './pages/updateProductPage.js'; //sửa sp
import listCatetogory from './pages/listCatetogory.js'; // list danh mục
import addmenu from './pages/addmenuPage.js';//thêm danh mục
import updateMenu from './pages/updateMenu.js'; // sửa danh mục 

const routes = {
    '/': homepage,
    '/products': ProductsPage,//sp
    '/products/:id': ProductDetailPage,// chi tiết sp
    '/categories/:id': productCategory,//hiển thị sp theo danh mục
    '/contact': contact, // liên hệ 
    '/about': about, // tin tức
    '/registration': registration,// đăng ký
    '/login': login,//đăng nhập
    '/admin': adminPage,//hiển thị menu dashboard
    '/listproduct': ListProduct, //list sản phẩm
    '/addproduct': addProduct, // thêm sản phẩm
    '/updateproduct/:id' :updateProduct, //sửa sp

    '/listcatetogory': listCatetogory, //list danh mục
    '/addmenu': addmenu,// thêm danh mục
    '/updatemenu/:id': updateMenu,//sửa danh mục

}

const router = async () => {
    const { recource, id, action } = ParesRequestURl();
    const praseUrl = (recource ? `/${recource}` : '/') + (id ? '/:id' : '');
    const page = routes[praseUrl] ? routes[praseUrl] : err404;

    $('.content-main').innerHTML = await page.render();
    
    if (page.afterRender) {
        await page.afterRender();
    }
}

window.scrollTo(0,0)
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);