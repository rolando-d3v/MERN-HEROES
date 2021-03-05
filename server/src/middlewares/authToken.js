import jwt from 'jsonwebtoken'
import '../config'

export const verifyToken = async (req, res, next) => {

    const token = req.get('Authorization')
    // const token = req.headers['x-token']

    if (!token) return res.json({ok: false, message: 'not token'})
   
    const tokenx = jwt.verify(token, process.env.SECRET) 
    console.log(tokenx);
    next()

} 