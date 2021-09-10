import React,{ useState } from 'react'

import FormItem from './FormItem'
import Button from '../../user/Button'
import FormTextArea from './FormTextArea';

const Form = () => {
    const [product,setProduct]= useState({
        title: '',
        price:'',
        image01: '',
        image02: '',
        categorySlug:'',
        description:'',
        colors:'',
        sizes:'',
        quantitySizeOfEachColor: '',
        slug:''
    })

    const productFormHandler = (e) => {
        e.preventDefault()
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const submitFormHandler = (e) => {
        e.preventDefault()
        console.log(product);
    }
    return (
        <form onSubmit={submitFormHandler}>
            <h2>Tạo sản phẩm mới</h2>
            <FormItem 
                title="Tên sản phẩm"
                type="text"
                id="name-product" 
                name="title"
                placeholder="Tên sản phẩm"
                value={product.title}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Giá sản phẩm"
                type="number"
                id="price-product" 
                name="price"
                placeholder="Giá sản phẩm"
                value={product.price}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Ảnh sản phẩm - 1"
                type="text"
                id="image-product-1" 
                name="image01"
                placeholder="Ảnh sản phẩm"
                value={product.image01}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Ảnh sản phẩm - 2"
                type="text"
                id="image-product-2" 
                name="image02"
                placeholder="Ảnh sản phẩm"
                value={product.image02}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Danh mục sản phẩm"
                type="text"
                id="category-product" 
                name="categorySlug"
                placeholder="Danh mục sản phẩm"
                value={product.categorySlug}
                onChange={productFormHandler}
            />
            <FormTextArea 
                title="Mô tả sản phẩm"
                id="description"
                value={product.description}
                onChange={(inputValue) => setProduct({
                    ...product,
                    description: inputValue
                })} 
            />       
            <FormItem 
                title="Màu sản phẩm"
                type="text"
                id="color-product" 
                name="colors"
                placeholder="Màu sản phẩm"
                value={product.colors}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Kích thước sản phẩm"
                type="text"
                id="size-product" 
                name="sizes"
                placeholder="Kích thước sản phẩm"
                value={product.sizes}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Số lượng sản phẩm cho mỗi màu"
                type="text"
                id="quantitySizeOfEachColor-product" 
                name="quantitySizeOfEachColor"
                placeholder="Số lượng sản Phẩm cho mỗi màu"
                value={product.quantitySizeOfEachColor}
                onChange={productFormHandler}
            />
            <FormItem 
                title="Slug sản phẩm"
                type="text"
                id="slug-product" 
                name="slug"
                placeholder="Slug sản phẩm"
                value={product.slug}
                onChange={productFormHandler}
            />
            <Button
                backgroundColor="orange"
                animate={true}
                icon="bx bx-mouse"
                size="sm"
                type="submit"
            >
                Tạo Ngay
            </Button>
        </form>
    )
}

export default Form
