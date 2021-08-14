import { ParesRequestURl, $, comBack } from './untils.js';
import ProductApi from '../api/productApi.js';
import category from '../api/categories.js'
import saibarMenuAdmin from "../components/saibarMenuAdmin";

const updateProduct = {
    async render() {
        const { id } = await ParesRequestURl();
        const { data: product } = await ProductApi.get(id);

        const { data: cate } = await category.getAll();
        const { data: cateDetails } = await category.get(product.categoryId);

        return /*html*/`
            <div class="bluer">
                <div class="container-fulid admin">
                    ${await saibarMenuAdmin.render()}
                    <div class="list">
                        <h4 class="title">Sửa Sản Phẩm</h4>
                        <div class="from">
                            <form action="" method ="POST" class="updatedProduct" id="content-product">
                                <div class="from-grup">
                                    <label for=""> Tên Sản Phẩm </label> 
                                    <input type="text" id="namePro" placeholder="name product" value="${product.name}" />
                                </div>
                                <div class="from-grup">
                                    <label for=""> Ảnh Sản Phẩm </label> 
                                    <input type="file" id="imgPro" >
                                    <img width="100px" src="http://localhost:4000/api/products/readPhoto/${product._id}" />
                                </div>
                                <div class="from-grup">
                                    <label for=""> Giá Sản Phẩm </label>
                                    <input type="text" id="price" placeholder="Price product" value="${product.price}">
                                </div>
                                <div class="from-grup">
                                    <label for=""> Danh mục
                                        <select name="giong" id="giong" class="chon">
                                            <option value="${cateDetails._id}">${cateDetails.name}</option>
                                            ${cate.map(category => {
                                                return /*html*/`
                                                    <option value="${category._id}"> ${category.name} </option>
                                                `
                                            }).join('')}
                                        </select>
                                    </label>
                                </div>
                                <hr class="hrr">

                                <div class="from-grup">
                                        <label for="" class="decoration"> Mô tả</label>
                                        <textarea name="" id="description" cols="55" rows="2"> ${product.description}</textarea>
                                </div>
                                <div class="from-grup">
                                        <button class="btn btn-primary" type="submit" >UPDATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    async afterRender() {
        const { id } = await ParesRequestURl();
        const updatePro = document.querySelector('.updatedProduct')
        updatePro.addEventListener("submit", async e => {
            e.preventDefault();
            let productImage = $('#imgPro').files[0];

            let nameproduct = $('#namePro').value;
            let categoryId = $('#giong').value;
            let price = $('#price').value;
            let description = $('#description').value;

            let fromUpdateProduct = new FormData();
            fromUpdateProduct.append('name', nameproduct);
            fromUpdateProduct.append('description', description);
            fromUpdateProduct.append('price', price);
            if (productImage) {
                fromUpdateProduct.append('photo', productImage);
            }

            fromUpdateProduct.append('categoryId', categoryId);
            try {
                const { data } = await ProductApi.update(id, fromUpdateProduct)
                if (data) {
                    window.location.hash = '/listproduct'
                }
                console.log(error.response.data.err);
            } catch (error) {
                console.log(error.response.data.err);
            }
        })
    }
}
export default updateProduct;