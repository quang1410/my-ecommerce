import React, { useState } from "react";
import makeAnimated from "react-select/animated";

import FormItem from "./FormItem";
import Button from "../../user/Button";
import FormTextArea from "./FormTextArea";
import FormSelect from "./FormSelect";
import FormQuantity from "./FormQuantity";

const optionSizes = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
];

const optionColors = [
  { value: "white", label: "White" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const optionCategories = [
  { value: "ao-thun", label: "Áo Thun" },
  { value: "quan-jean", label: "Quần Jean" },
  { value: "ao-khoac", label: "Áo Khoác" },
];

const animatedComponents = makeAnimated();

const Form = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image01: "",
    image02: "",
    categorySlug: "",
    description: "",
    colors: "",
    sizes: "",
    quantitySizeOfEachColor: "",
    slug: "",
  });

  const [show, setShow] = useState({
    color: false,
    size: false,
  });

  const productFormHandler = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(product);
  };
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
      <FormTextArea
        title="Mô tả sản phẩm"
        id="description"
        value={product.description}
        onChange={(inputValue) =>
          setProduct({
            ...product,
            description: inputValue,
          })
        }
      />
      <FormSelect
        title="Danh mục sản phẩm"
        id="category-product"
        options={optionCategories}
        components={animatedComponents}
        onChange={(newValue) => {
          setProduct({
            ...product,
            categorySlug: newValue.value,
          });
        }}
      />
      <FormSelect
        title="Màu sản phẩm"
        id="color-product"
        options={optionColors}
        components={animatedComponents}
        isMulti
        onChange={(newValue) => {
          setShow({
            ...show,
            color: true,
          });
          if (newValue.length === 0) {
            setShow({
              ...show,
              color: false,
            });
          }
          setProduct({
            ...product,
            colors: newValue.map((item) => item.value),
          });
        }}
        closeMenuOnSelect={false}
      />
      <FormSelect
        title="Kích thước sản phẩm"
        id="size-product"
        options={optionSizes}
        components={animatedComponents}
        isMulti
        onChange={(newValue) => {
          setShow({
            ...show,
            size: true,
          });
          if (newValue.length === 0) {
            setShow({
              ...show,
              size: false,
            });
          }
          setProduct({
            ...product,
            sizes: newValue.map((item) => item.value),
          });
        }}
        closeMenuOnSelect={false}
      />
      {/* <FormItem
          title="Số lượng sản phẩm cho mỗi màu"
          type="text"
          id="quantitySizeOfEachColor-product"
          name="quantitySizeOfEachColor"
          placeholder="Số lượng sản Phẩm cho mỗi màu"
          value={product.quantitySizeOfEachColor}
          onChange={productFormHandler}
        /> */}

      {show.color && show.size && (
        <FormQuantity colors={product.colors} sizes={product.sizes} />
      )}

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
  );
};

export default Form;
