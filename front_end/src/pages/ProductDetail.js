import { $, ParesRequestURl, comeBack } from './untils.js'
import ProductApi from '../api/ProductApi.js';
import category from '../api/categories.js';
// import addCart from '../components/addCart.js';
// import comment from '../api/commentApi.js';
// import acc from "../localstoget/index";
// import swal from 'sweetalert'
import userComent from '../api/accountApi.js'


const ProductDetailPage = {
    async render() {
        const { id } = ParesRequestURl();
        const { data: product } = await ProductApi.get(id); // id sản phẩm
        const { data: catego } = await category.getAll();
        const loai = catego.filter(cate => cate._id == product.categoryId);
       

        let { data: acc } = await userComent.userComent(); // tất cả user  
        
        return /*html*/`
            <div class=" detail" id="">
                <div class="row">
                    <div class="col-6">
                        <img src="http://localhost:4000/api/products/readPhoto/${product._id}" alt="${product.name}">
                    </div>
                    <div class="col-6 contentDetail">
                        <h4 class="name-product"> ${product.name} </h4>
                        <hr>

                        <label>
                            <b>Giá: </b>
                        </label>
                        <p id="org" class="priceProduct">${product.price}.000 VNĐ</p>
                        <hr>

                        ${loai.map((item => {
                            return /*html*/`
                                <label>
                                    <b>Danh mục: </b>
                                </label>
                                <p id="org">  ${item.name}</p>
                            `
                        })).join(',')}
                        <hr>

                        <label>
                            <b>Mô tả: </b>
                        </label>
                        <span style="display: block;opacity: 80%">${product.description}</span>
                        <hr>

                        <button class="btn btn-primar addtoCart" data-id="${product._id}"> Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
        
         
        `
    },
}
export default ProductDetailPage;