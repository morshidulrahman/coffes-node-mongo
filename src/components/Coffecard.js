import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffecard = ({ coffes, setcoffes, allcoffes }) => {
  const { name, chef, details, supplier, category, price, photourl } = coffes;

  const handledelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaingcoffe = allcoffes.filter((coffe) => coffe._id !== id);
            setcoffes(remaingcoffe);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl px-4 py-2">
      <figure>
        <img src={photourl} alt={name} />
      </figure>
      <div className="flex justify-between  gap-2">
        <div>
          <p className="text-semibold mb-1">{name}</p>
          <p className="text-semibold mb-1">{chef}</p>
          <span className="text-semibold mb-1">{details}</span>
          <p className="text-semibold mb-1">{price} g</p>
        </div>
        <div className="btn-group btn-group-vertical">
          <button className="btn btn-active mb-2">
            <Link to={`/coffe/${coffes._id}`}>View</Link>
          </button>
          <Link to={`/updatecoffe/${coffes._id}`}>
            {" "}
            <button className="btn mb-2 w-full">edit</button>
          </Link>
          <button className="btn mb-2" onClick={() => handledelet(coffes._id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffecard;
