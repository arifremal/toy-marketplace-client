import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const AddaToy = () => {
  const { visitor } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const toyPost = (data) => {
    fetch('http://localhost:5000/toysend',{
      method:"POST",
      headers: {"content-type": "application/json"},
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then ((result=>{
      console.log(result);
      alert('added')
    }))

  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Add a <span className="text-green-500"> Toy </span>
      </h1>
      <div className="items-center p-10 mx-auto ">
      <form onSubmit={ handleSubmit(toyPost)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="border w-1/2  p-1"
            {...register("name")}
            placeholder="Toy Name"
          />
          <input
            className="border p-1  w-1/2 "
            {...register("picture_url", { required: true })}
            placeholder="Photo url"
          />
          <input
            className="border p-1  w-1/2 "
            {...register("seller_name", { required: true })}
            placeholder="Your Name"
          />
          <input
            className="border p-1  w-1/2 my-2  "
            value={visitor?.email}
            {...register("seller_email")}
            placeholder="your email"
            type="email"
          />{" "}
          <br />
          <input
            className="border w-1/2  p-1"
            {...register("price")}
            placeholder="Price"
          />
          <input
            className="border w-1/2  p-1"
            {...register("rating")}
            placeholder="Rating"
          />
          <input
            className="border w-full p-1 my-1"
            {...register("available_quantity")}
            type="number"
            placeholder="Available Quantity"
          />
          <p className="py-2">Sub-Category</p>
          <select className="border p-1 w-full  " {...register("sub_category")}>
            <option value="Art & Craft">Art & Craft</option>
            <option value="Musical Instrument">Musical Instrument</option>
            <option value="Construction Toy">Construction Toy</option>
          </select>
          <input
            className="w-full p-8 border mb-5"
            {...register("detail_description")}
            placeholder="description"
          />{" "}
          <br />
          <input
            className="btn bg-green-500 border-none"
            value="Add toy"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddaToy;
