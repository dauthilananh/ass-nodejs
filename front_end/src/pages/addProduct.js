import category from '../api/categories.js';
import { ParesRequestURl, $, comeBack } from './untils.js';
import ProductApi from '../api/productApi.js'
// import { uploadFile } from './../firebase/index.js';
import saibarMenuAdmin from '../components/saibarMenuAdmin.js';
import swal from 'sweetalert';

const addProduct = {
    async render() {
        const { data: cate } = await category.getAll();
        return /*html*/`
            <div class="bluer">
                <div class="container-fulid admin">
                    ${await saibarMenuAdmin.render()}
                    <div class="list">
                        <h4 class="title"> Thêm Sản Phẩm </h4>
                        <div class="from">
                            <form  form action=" " method ="POST" class="form-addProduct">
                                <div class="from-grup">
                                    <label for=""> Tên Sản Phẩm </label>
                                    <input type="text" id="namePro" placeholder=" Tên sản Phẩm ">
                                </div>
                                <div class="from-grup">
                                    <label for=""> Ảnh Sản Phẩm </label>
                                    <input type="file"  id="imgPro" required>
                                </div>
                                <div class="from-grup">
                                    <label for=""> Giá Sản Phẩm </label>
                                    <input type="text"  id="price" placeholder=" Price product " >
                                </div>
                                <div class="from-grup">
                                    <label for=""> Danh mục</label>
                                    <select name="giong" id="giong" class="chon">
                                        <option value=""> ...  </option>
                                        ${cate.map(category => {
                                            return /*html*/`
                                                <option value="${category._id}"> ${category.name} </option>
                                            `
                                        }).join('')}
                                    </select>
                                </div>
                                <div class="from-grup">
                                    <label for="" class="decoration"> Mô tả</label>
                                    <textarea name="" id="description" cols="55" rows="2"></textarea>
                                </div>
                                <div class="from-grup">
                                    <button class="btn btn-success addProduct" type="submit">ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    async afterRender() {
        $('.form-addProduct').addEventListener('submit', async e => {
            e.preventDefault();
            const productImage = $('#imgPro').files[0];
            let nameproduct = $('#namePro');
            let categoryId = $('#giong');
            let price = $('#price');
            let description = $('#description');

            
            let fromAddProduct = new FormData();
            fromAddProduct.append('name', nameproduct.value);
            fromAddProduct.append('description', description.value);
            fromAddProduct.append('price', price.value);
            fromAddProduct.append('photo', productImage);
            fromAddProduct.append('categoryId', categoryId.value);
            try {
                let { data } = await ProductApi.add(fromAddProduct)
                if (data) {
                    swal({
                        title: "Thêm Sản Phẩm Thành Công ",
                        icon: "success"
                    })
                    await comeBack(addProduct, '#content-product');
                    window.location.hash = '/listproduct'
                }
            }catch (error) {
                console.log(error);
            }
        })
    },
}
export default addProduct
