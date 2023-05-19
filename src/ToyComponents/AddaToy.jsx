import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const AddaToy = () => {
    const {  visitor } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-2 uppercase ">
        Add a <span className="text-green-500"> Toy </span>
      </h1>
      <div className="items-center p-10 mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}   >
            {errors.exampleRequired && <span>This field is required</span>}
      
             <input
             className="border w-1/2  p-1" 
              {...register("title")}
              placeholder="Name"
             
            /> 
            

            <input
              className="border p-1  w-1/2 " 
              {...register("salary", { required: true })}
              placeholder="Photo url"
              
            /> 
            <input
   className="border p-1  w-1/2 " 
              {...register("salary", { required: true })}
              placeholder="Your Name"
              
            /> 
            <input
          className="border p-1  w-1/2 my-2  " 
              value={visitor?.email}
              {...register("postedBy")}
              placeholder="your email"
              type="email"
            /> <br />

<p className="py-2">Sub-Category</p>
            <select    className="border p-1 w-full   "      {...register("category")}>
                
            
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
           
    
            <p className="py-2">Image Url</p>
            <input
            className="border p-1 w-full my-2"  
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            /> <br />
        
            
        
            <input
             className="w-full p-8 border mb-5"
              {...register("description")}
              placeholder="description"
            /> <br />
            <input className="btn bg-green-500 border-none" value="Add toy" type="submit" />
          </form>
      </div>
    </div>
  );
};

export default AddaToy;
