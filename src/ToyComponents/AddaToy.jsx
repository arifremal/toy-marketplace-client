import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../Components/AuthProvide/AuthProvider";
import usePath from "../hooks/usePath";
import Swal from "sweetalert2";

const AddaToy = () => {
  const { visitor } = useContext(AuthContext);
  usePath('Add a toy')

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
      
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Well Done added',
        showConfirmButton: false,
        timer: 1500
      })
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
            <option value="Baby Dolls"> Baby Dolls</option>
            <option value="American Girl">American girl</option>
            <option value="Barbie">Barbie</option>
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
