import axiosClient from './axiosClient.js';
import user from '../localstoget';
let acc = user.getId();
 const category ={
    getAll(ofset){
        const url =`/categories`
        return axiosClient.get(url)
    },
    get(id){
        const url = `/categories/${id}`; // lấy chi tiết 1 cái j đó 
        return axiosClient.get(url)
    },
    add(data){ // thêm 
        const url = `/categories/${acc.user._id}`;
        return axiosClient.post(url,data,{ headers: {"Authorization" : `Bearer ${acc.token}`} })
    },
    remove(id){ // xóa 
        const url = `/categories/${acc.user._id}/${id}`;
        return axiosClient.delete(url,{ headers: {"Authorization" : `Bearer ${acc.token}`} })
    },
    update(id,data){ // cập nhật 
        console.log(id,data);
        const url = `/categories/${acc.user._id}/${id}`;
        return axiosClient.put(url,data,{ headers: {"Authorization" : `Bearer ${acc.token}`} })
    }
}
export default  category