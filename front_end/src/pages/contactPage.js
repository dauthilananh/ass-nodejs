// import swal from 'sweetalert';
// import contacts from '../api/contactApi.js'
// import { comeBack } from './untils.js';
const contact = {
    async render() {
        window.scrollTo(0, 0);
        return /*html*/`
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881403!2d105.74459841440749!3d21.038132792835363
                    !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVja
                    G5pYw!5e0!3m2!1svi!2s!4v1614849169686!5m2!1svi!2s" width="100%" height="400" style="border:0;"
                    allowfullscreen="" loading="">
                </iframe>
            </div>
        `
    },
}
export default contact