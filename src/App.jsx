import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffecard from "./components/Coffecard";

const App = () => {
  const loaderdata = useLoaderData();
  const [coffes, setcoffes] = useState(loaderdata);
  return (
    <div className="container mx-auto px-8 py-8">
      <h2>hello</h2>
      <div className="grid grid-cols-2 gap-4">
        {coffes.map((coffe) => (
          <Coffecard
            key={coffe._id}
            coffes={coffe}
            setcoffes={setcoffes}
            allcoffes={coffes}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
