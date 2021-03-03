import {Router} from 'express'
import * as productoCtrl from './productoController'

const router = Router()

router.post('/', productoCtrl.createProductos)
router.get('/', productoCtrl.getProductos )
router.get('/:productoId', productoCtrl.getProductoId )
router.put('/:productoId', productoCtrl.updateProductos)
router.delete('/productoId', productoCtrl.deleteProductos )


export default router