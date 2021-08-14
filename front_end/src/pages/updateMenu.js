import saibarMenuAdmin from "../components/saibarMenuAdmin";
import category from '../api/categories.js';
import {ParesRequestURl,$, comeBack} from './untils';

const updateMenu={
    async  render(){
        const {id}= await ParesRequestURl();
        const {data:cate}=  await category.get(id);
        return /*html*/`
            <div class="bluer">
                <div class="container-fulid admin">
                    ${ await saibarMenuAdmin.render()}
                    <div class="list">
                        <h4 class="title">Sửa danh mục</h4>
                        <div class="from">
                            <form action="" class="form-updateCate">
                                <div class="from-grup">
                                    <label for="">Tên danh mục</label>
                                    <input type="text" id="nameCate" value="${cate.name}">
                                </div>
                                
                                <div class="from-grup">
                                    <button type="submit" class="btn btn-success">UPDATE</button>
                                </div>
                            </form>   
                        </div>  
                    </div>  
                </div>  
            </div>  
        `
    },

    async afterRender(){
        const {id}=  ParesRequestURl();
        $('.form-updateCate').addEventListener('submit',async e=>{
            e.preventDefault();
            console.log("chạy đi");
            const update={
                 name: $('#nameCate').value,
            }
            await  category.update(id, update)
            // await comeBack(updateMenu,'#content-account')
            window.location.hash ="/listcatetogory"
        })
    }
}
export default  updateMenu;