import React, { useState } from "react";
import ProductForm from "./ProductForm";

const Admindashboard = () => {
  // for edit
  let [ed, seted] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 col-sm-12 col-md-5 card g-3">
          <h4 className="text-center">Enter Product Details</h4>
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
