import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import riderImg from '../../assets/agent-pending.png'

const Raider = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

    const servisCenter = useLoaderData();
  const regionDuplicat = servisCenter.map((c) => c.region);
  const region = [...new Set(regionDuplicat)];
  // console.log(region);
  const senderRegions = watch("senderRegion");
  const reciverRegions = watch("reciverRegion");
  const districtByRegion = (region) => {
    const regionDistrict = servisCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handelRider=(data)=>{

  }

  return (
    <div className="p-10">
  <h1 className="text-2xl font-bold">Rider details</h1>
      <form onSubmit={handleSubmit(handelRider)}>
        {/* 🔘 Parcel Type */}
  

     

        {/* 📍 দুই পাশে Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 🟢 Sender */}
          <div>

            <input
              type="text"
              placeholder="Sender Name"
              defaultValue={user.displayName}
              {...register("senderName")}
              className="input input-bordered w-full mb-3"
            />
            <input
              type="email"
              placeholder="Sender email"
              {...register("senderEmail")}
              defaultValue={user.email}
              className="input input-bordered w-full mb-3"
            />

            <input
              type="text"
              placeholder="Address"
              {...register("senderAddress")}
              className="input input-bordered w-full mb-3"
            />

            <input
              type="text"
              placeholder="Sender Phone No"
              {...register("senderPhone")}
              className="input input-bordered w-full mb-3"
            />

            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Region name:</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select w-full mb-3"
              >
                <option disabled={true}>Pick a region</option>
                {region.map((data, i) => (
                  <option value={data} key={i}>
                    {data}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">district name:</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select w-full mb-3"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(senderRegions).map((data, i) => (
                  <option value={data} key={i}>
                    {data}
                  </option>
                ))}
              </select>
            </fieldset>

            <textarea
              placeholder="Pickup Instruction"
              {...register("pickupInstruction")}
              className="textarea textarea-bordered w-full"
            ></textarea>

            <p className="text-sm mt-2">* PickUp Time 4pm-7pm Approx.</p>
          </div>
        <div className="flex justify-end">
                    <img src={riderImg} alt="" />
        </div>
            
        </div>

        {/* 🚀 Button */}
        <div className="mt-8">
          <button className="btn bg-lime-400 text-black w-full md:w-1/3">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Raider;
