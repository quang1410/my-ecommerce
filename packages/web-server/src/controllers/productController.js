const Product = require('../models/product')

class ProductController {

  myApp(req, res, next) {
    res.send("hello world");
  }

  getProduct(req, res,next) {
      Product.find({})
        .then((product)=>{
            res.json({ success:true, message: 'Product saved',product});
        })
        .catch((error)=>{
            res.status(500).json({ success: false, message: error })
        })
  }

  async createProduct(req, res) {
    if(!req.body.title)
        return res
            .status(400)
            .json({ success: false, message: 'title is required'})

    try {
        const newProduct = new Product(req.body);
        await newProduct.save()
        res.json({ success:true, message: 'Product saved',product:newProduct})
    } catch (error) {
        console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
    }
  }

  async updateProduct(req, res){
    if(!req.body.title)
        return res
            .status(400)
            .json({ success: false, message: 'Title is required'})

    try {
        const data = await Product.findOneAndUpdate({_id:req.params.id},req.body,{ new: true })
        res.json({
			success: true,
			message: 'Excellent progress!',
			product: data
		})
    } catch (error) {
        console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
    }
  }

  async deleteProduct(req, res) {
    const productId = req.params.id
    try {
      const deleteProduct = await Product.findOneAndDelete(productId)
      
      if(!deleteProduct) {
        return res.status(401).json({
          success: false, message: 'Product not found'
        })
      }

      res.json({ success:true, message: 'Product deleted',product:deleteProduct})
    } catch (error) {
      console.log(error)
      res.status(500).json({success: false, message: 'Internal server error' })
    }
  }
}

module.exports = new ProductController()