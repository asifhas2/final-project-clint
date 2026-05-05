import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelSendParcel = (data) => {
    console.log(data);

    const isDocuments = data.type === "document";
    const isSameDistrict = data.senderDistrict === data.reciverDistrict;
    let weight = Number(data.weight);
      console.log(weight);
    let cost = 0;
    if (isDocuments) {
      cost = isSameDistrict ? 60 : 80;
    } else {
        if(weight <=3){
            cost = isSameDistrict?110 : 150 ;

        }
        else{
            let overCost = (weight - 3)*40;
           cost = isSameDistrict ? (110 + overCost) : (150 + overCost + 40);

        }
    }
    Swal.fire({
  title: "Are you agree with our cost?",
  text:` your final cost is ${cost} taka !`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, agree with you!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});
    console.log(cost);
  };

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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Enter your parcel details</h1>

      <form onSubmit={handleSubmit(handelSendParcel)}>
        {/* 🔘 Parcel Type */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("type")}
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("type")}
              className="radio"
            />
            Not-Document
          </label>
        </div>

        {/* 📦 Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            placeholder="Parcel Name"
            {...register("parcelName")}
            className="input input-bordered w-full"
          />

          <input
            type="number"
            placeholder="Parcel Weight (KG)"
            {...register("weight")}
            className="input input-bordered w-full"
          />
        </div>

        {/* 📍 দুই পাশে Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 🟢 Sender */}
          <div>
            <h2 className="font-bold mb-4">Sender Details</h2>

            <input
              type="text"
              placeholder="Sender Name"
              {...register("senderName")}
              className="input input-bordered w-full mb-3"
            />
            <input
              type="email"
              placeholder="Sender email"
              {...register("senderEmail")}
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

          {/* 🔵 Receiver */}
          <div>
            <h2 className="font-bold mb-4">Receiver Details</h2>

            <input
              type="text"
              placeholder="Receiver Name"
              {...register("receiverName")}
              className="input input-bordered w-full mb-3"
            />
            <input
              type="email"
              placeholder="Receiver email"
              {...register("receiverEmail")}
              className="input input-bordered w-full mb-3"
            />

            <input
              type="text"
              placeholder="Address"
              {...register("receiverAddress")}
              className="input input-bordered w-full mb-3"
            />

            <input
              type="text"
              placeholder="Receiver Contact No"
              {...register("receiverPhone")}
              className="input input-bordered w-full mb-3"
            />

            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Region name:</legend>
              <select
                {...register("reciverRegion")}
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
                {...register("reciverDistrict")}
                defaultValue="Pick a district"
                className="select w-full mb-3"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(reciverRegions).map((data, i) => (
                  <option value={data} key={i}>
                    {data}
                  </option>
                ))}
              </select>
            </fieldset>

            <textarea
              placeholder="Delivery Instruction"
              {...register("deliveryInstruction")}
              className="textarea textarea-bordered w-full"
            ></textarea>
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

export default SendPercel;
