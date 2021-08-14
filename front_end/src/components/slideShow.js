import banner from '../api/slideshowApi';

const listBanner = {
    async render() {
        const { data: item } = await banner.getAll();
        console.log(item)
        return /*html*/`            
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"  style="padding-bottom: 15px;">
        <div class="carousel-inner ">
            <div class="carousel-item active">
                <img width="100%" height="411"src="https://i.pinimg.com/originals/3f/8e/48/3f8e48a0b20f4dc0671a8e5e8dd861a4.jpg" alt="">
            </div>
            <div class="carousel-item ">
                <img width="100%" height="411"
                src="https://branding360.vn/wp-content/uploads/2019/09/Food_01-e1568696621331.jpg" alt="">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div> 
        `
    }
}
export default listBanner
