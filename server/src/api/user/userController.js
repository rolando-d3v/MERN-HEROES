import userModel from './userModel'


//==============================
//_* OBTENER ALL USERS
//==============================
export const getUsers = async (req, res) => {
    try {
        const user = await userModel.find().populate('roles')
        res.status(200).json({ok: true, user})
     } catch (err) {
        console.log(err);
    }
} 