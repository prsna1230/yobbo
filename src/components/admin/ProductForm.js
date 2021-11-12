import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";

const ProductForm = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // for redux performance
  let dispatch = useDispatch();

  let [file, setFile] = useState(null);

  const onFileSelect = (e) => {
    setFile([...e.target.files]);
  };

  // create form data
  let formData = new FormData();

  // on form submit
  const productSumbission = (productObj) => {
    // append image to it
    file.forEach((element, index) => {
      let temp = `productImg`;
      formData.append(temp, element, element.name);
    });

    // append product Obj
    formData.append("productObj", JSON.stringify(productObj));

    dispatch(addProduct(formData));
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit(productSumbission)}>
        {/* product form */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="productname"
            placeholder="productname"
            {...register("productname", { required: true })}
          />
          {errors.productname?.type === "required" ? (
            <label className="text text-danger">Product Name is Required</label>
          ) : (
            <label for="fname">Product Name</label>
          )}
        </div>
        {/* price */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="price"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" ? (
            <label className="text text-danger">price is Required</label>
          ) : (
            <label for="price">Price</label>
          )}
        </div>
        {/* category */}
        <div class="form-check-inline mb-3">
          <input
            {...register("category", { required: true })}
            type="radio"
            value="men"
            id="men"
            className="form-check-input"
          />
          <label class="form-check-label" for="men">
            MEN
          </label>
        </div>
        <div class="form-check-inline mb-3">
          <input
            {...register("category", { required: true })}
            type="radio"
            value="women"
            id="women"
            className="form-check-input"
          />
          <label class="form-check-label" for="women">
            WOMEN
          </label>
        </div>
        {errors.category?.type === "required" && (
          <p className="text text-danger">Category is Required</p>
        )}

        {/* product description */}
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            id="description"
            placeholder="package description"
            rows="15"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" ? (
            <label className="text text-danger">Descrption is Required</label>
          ) : (
            <label for="description">Product description</label>
          )}
        </div>

        {/* Specification */}
        <h2>Specifications</h2>
        {/* occasion */}
        <div>
          <select
            name="occasion"
            id="occasion"
            className="form-select drpdown"
            {...register("occasion", { required: true })}
          >
            <option value="" disabled>
              Occasion
            </option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
          </select>
          {errors.occasion?.type === "required" && (
            <p className="text text-danger">occasion is required</p>
          )}
        </div>

        {/* pattern*/}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="pattern"
            placeholder="pattern"
            {...register("pattern", { required: true })}
          />
          {errors.pattern?.type === "required" ? (
            <label className="text text-danger">Pattern is Required</label>
          ) : (
            <label for="fname">Pattern(eg:Stripped, checked..)</label>
          )}
        </div>

        {/* length*/}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="length"
            placeholder="length"
            {...register("length", { required: true })}
          />
          {errors.length?.type === "required" ? (
            <label className="text text-danger">Length is Required</label>
          ) : (
            <label for="fname">Length(eg:Maxi, Regular..)</label>
          )}
        </div>

        {/* Collar Type */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="collartype"
            placeholder="collartype"
            {...register("collartype", { required: true })}
          />
          {errors.collartype?.type === "required" ? (
            <label className="text text-danger">collartype is Required</label>
          ) : (
            <label for="fname">collartype(eg:roundneck, shirtcollar..)</label>
          )}
        </div>

        {/* Sizes and fabric type */}
        {/* Size */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="size"
            placeholder="size"
            {...register("size", { required: true })}
          />
          {errors.size?.type === "required" ? (
            <label className="text text-danger">Size is Required</label>
          ) : (
            <label for="size">Size(Eg: XS, S, M, L, XL, XXL)</label>
          )}
        </div>

        {/* fabric type */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="fabrictype"
            placeholder="fabrictype"
            {...register("fabrictype", { required: true })}
          />
          {errors.fabrictype?.type === "required" ? (
            <label className="text text-danger">fabrictype is Required</label>
          ) : (
            <label for="size">Fabric type</label>
          )}
        </div>

        {/* Material care */}
        <h2>Material Care</h2>
        <div>
          <select
            name="materialcare"
            id="materialcare"
            className="form-select drpdown"
            {...register("materialcare", { required: true })}
          >
            <option value="" disabled>
              Material care
            </option>
            <option value="handwash">Hand wash</option>
            <option value="machinewash">Machine wash</option>
          </select>
          {errors.materialcare?.type === "required" && (
            <p className="text text-danger">materialcare is required</p>
          )}
        </div>

        {/* size and fit */}
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="sizeandtype"
            placeholder="sizeandtype"
            {...register("sizeandtype", { required: true })}
          />
          {errors.sizeandtype?.type === "required" ? (
            <label className="text text-danger">sizeandtype is Required</label>
          ) : (
            <label for="size">
              Size and type(eg:The model (height 5'8") is wearing a size S)
            </label>
          )}
        </div>

        {/* images */}
        <div className="form-floating mb-3">
          <input
            type="file"
            className="form-control"
            id="himage"
            name="himage"
            onChange={onFileSelect}
            accept="image/*"
            multiple
          />
        </div>

        <button className="btn btn-success rounded-pill mb-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
