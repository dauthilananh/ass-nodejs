const about = {
    async render() {
        window.scrollTo(0, 0);
        return /*html*/`
        <div className="container">
        <div className="title-about" style="paddingTop: 90; paddingBottom: 35px ">
        </div>
        <div className="title-about-new row">
          <h5>Bánh bèo Nghệ An</h5>
          <div className="col-md-4">
            <img src="https://dulichbiencualo.org/view/at_banh-beo-nghe-an_d9db5c97d3d5ccc6b53a2238c424bf83.jpg" alt width="350px" height="450px" />
          </div>
          <div className="col-md-6">
            <p>
              Bánh bèo thì cũng chỉ mới xuất hiện ở Vinh trong khoảng chục năm trở lại đây nhưng đã trở thành một món ăn quen thuộc, khoái khẩu của nhiều người nhất là giới học trò ở Vinh. Khác với Bánh bèo Huế, bánh bèo Nghệ mang một sắc thái ẩm thực khác. 
              Bánh bèo Nghệ An được làm từ bột lọc với nhân tôm thịt, xào lên cùng hành mỡ và ăn với rau mùi.
  
              Nếu như bánh bèo Huế được làm từ bột gạo thì bánh bèo Nghệ được làm từ bột lọc. Người ta phải 
              nhào bột nhiều lần cho kỹ thì mới có thể có một mẻ bánh ngon. Bột bánh sau khi được nhào trộn kỹ sẽ được 
              vắt thành từng cục bột nhỏ cho vừa tay nặn. Rồi người ta sẽ tán cục bột thành hình tròn dẹt dẹt trong lòng bàn 
              tay, cho nhân vào và khéo léo kéo bột phủ hết nhân. Để bánh trông đẹp hơn, người bán hàng thường nặn bánh cho 
              giống cánh bèo...
            </p>
          </div>
        </div>
      </div>
        `
    },
}
export default about