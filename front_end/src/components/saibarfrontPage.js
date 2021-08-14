import category from '../api/categories'

const saibarFont = {
    async render() {
        const { data: cate } = await category.getAll();
        return /*html*/`
            <div class="front-category">
                <h5 class="titel-category"> Danh Mục</h5>
                <ul class="menu-category">
                    ${cate.map(item => {
                        return /*html*/`
                            <li><a href="/#/categories/${item._id}">${item.name} </a></li>
                        `
                    }).join("")}
                </ul>
            </div>
        `
    }
}
export default saibarFont