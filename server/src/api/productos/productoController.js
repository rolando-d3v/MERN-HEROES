import productoModel from "./productoModel";

//CREATED PRODUCTO
export const createProductos = async (req, res) => {
  try {
    const producto = new productoModel({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      imgUrl: req.body.imgUrl,
    });
    console.log(producto);
    await producto.save();
    res
      .status(201)
      .json({ ok: true, message: "producto created successfully" });
  } catch (err) {
    console.log(err);
  }
};

//GET PRODUCTOS
export const getProductos = async (req, res) => {
  try {
    const producto = await productoModel.find();
    res.status(200).json({ ok: true, producto });
  } catch (err) {
    console.log(err);
  }
};

//GET ONE PRODUCTO
export const getProductoId = async (req, res) => {
  res.json("hola mundo");
};


//UPDATE ONE PRODUCTO
export const updateProductos = async (req, res) => {
  res.json("hola mundo");
};


//DELETE ONE PRODUCTO
export const deleteProductos = async (req, res) => {
  res.json("hola mundo");
};
