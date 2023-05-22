import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Addcoffe() {
  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const price = form.price.value;
    const photourl = form.photourl.value;

    const addcoffe = {
      name,
      chef,
      details,
      supplier,
      category,
      price,
      photourl,
    };

    fetch("http://localhost:5000/coffes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addcoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "success!",
            text: "coffe added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto bg-[#F4F3F0] mt-10">
      <div className="text-center ">
        <h1 className="font-bold text-2xl my-2">Add coffe</h1>
        <p className="mb-4">
          Coffee is a beverage prepared from roasted coffee beans. Darkly
          colored, bitter, and slightly acidic, coffee has a stimulating effect
          on humans,
        </p>
      </div>
      <form onSubmit={handlesubmit}>
        {/* flex row */}
        <div className="md:flex mb-8 px-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="coffe"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="chef"
                placeholder="sucoja"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 px-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="suchi"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="info@site"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 px-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="coffe"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="723"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 px-8 ">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photourl"
                placeholder="http://example.com"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block mb-8" type="submit">
          Add Coffe
        </button>
      </form>
    </div>
  );
}

export default Addcoffe;
