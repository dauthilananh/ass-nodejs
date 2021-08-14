import express from 'express';
import {addCategory ,list,categorId,categorydetails, remove,updateCategory} from '../controllers/categorys'; // gọi hàm 
import {isAdmin , isAuth ,requireSignin } from '../controllers/auth'
import {userId} from '../controllers/admin'
const router = express.Router();

router.post('/categories/:userId',requireSignin,isAuth, isAdmin,addCategory) // thêm vào
router.get('/categories' , list )
router.get('/categories/:categoriesId' , categorydetails) // chi tiêt danh mục 

router.put('/categories/:userId/:categoriesId', requireSignin,isAuth, isAdmin, updateCategory)  // cập nhật danh mục 
router.delete('/categories/:userId/:categoriesId' ,requireSignin,isAuth, isAdmin, remove) // xóa danh mục 
router.param('categoriesId' , categorId)  // id categori 
router.param("userId" , userId)

module.exports = router