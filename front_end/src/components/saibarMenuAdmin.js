import admin from '../localstoget'

const saibarMenuAdmin = {
  async render() {
    let acc = admin.getId();
    if (!acc) {
      alert('Không có quyền truy cập')
      window.location.hash = '/'
    } else {
      if (acc.user.role != 1) {
        alert('Không phải quản trị ')
        window.location.hash = '#'
      } else {
        return /*html*/`
          <div class="category">
            <h2>Dashboard</h2>
            <ul class="menu-admin">
              <li><a href="/#/">Home</a> </li>
              <li><a href="/#/listproduct"> Sản Phẩm </a> </li>
              <li><a href="/#/listcatetogory"> Danh Mục</a></li>
            </ul>
          </div>
        `
      }
    }
  }
}
export default saibarMenuAdmin;