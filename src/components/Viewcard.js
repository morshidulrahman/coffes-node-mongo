import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Viewcard = () => {
  const loadedata = useLoaderData();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={loadedata.photourl}
          alt={loadedata.name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{loadedata.name}</h2>
        <p> {loadedata.details}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to="/">View</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewcard;
