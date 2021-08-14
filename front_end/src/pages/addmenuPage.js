import saibarMenuAdmin from '../components/saibarMenuAdmin.js';
import { $, comeBack } from './untils.js'
import category from '../api/categories.js';

const addmenu = {
    async render() {
        return /*html*/`
            <div class="bluer">
                <div class="container-fulid admin">
                    ${await saibarMenuAdmin.render()}
                    <div class="list">
                        <h4 class="title"> Thêm danh mục</h4>
                        <div class="from">
                            <form action="" class="form-addMenu">
                                <div class="from-grup">
                                    <label for=""> Name  </label> 
                                    <input type="text" class="nameMenu" placeholder="tên danh mục">
                                </div>
                                    
                                <div class="from-grup"> 
                                        <button type="submit" class="btn btn-success">ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  
            </div>  
        `
    },

    async afterRender() {
        document.querySelector('.form-addMenu').addEventListener('submit', async e => {
            e.preventDefault();
            const nameMenu = $('.nameMenu');
            if (nameMenu.value == "") {
                nameMenu.focus();
                nameMenu.classList.add('err');
                return false;
            }
            nameMenu.classList.remove('err');

            const newMenu = {
                name: nameMenu.value,
            }
            await category.add(newMenu);
            await comeBack(addmenu, '#content-main')
            window.location.hash = "/listcatetogory"
        })
    }
}
export default addmenu;