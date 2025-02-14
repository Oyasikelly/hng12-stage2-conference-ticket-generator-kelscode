import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";

export default function AttendeeDetails({
  setFormData,
  formData,
  handleImageUpload,
  onStep,
  isLoading,
}) {
  const [errormssg, setErrorMssg] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorimage, setErrorImage] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);

  function removeBorderLine() {
    setTimeout(() => {
      setErrorName(false);
      setErrorEmail(false);
      setErrorImage(false);
      setErrorRequest(false);
      setErrorMssg("");
    }, 1000);
  }
  const validateForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (
    //   formData.name == "" ||
    //   emailRegex.test(formData.email) === false ||
    //   formData.avatarUrl === ""
    // ) {
    //   return false;
    // } else {
    //   return true;
    // }
    if (formData.avatarUrl === "") {
      setErrorMssg("image should not be empty");
      setErrorImage(true);
      removeBorderLine();
      return false;
    }
    if (formData.name == "") {
      setErrorMssg("Name should not be empty");
      setErrorName(true);
      removeBorderLine();
      return false;
    }
    if (emailRegex.test(formData.email) === false) {
      setErrorMssg("Invalid email!, enter a valid email");
      setErrorEmail(true);
      removeBorderLine();
      return false;
    }
    if (formData.email === "") {
      setErrorMssg("email should not be empty");
      setErrorEmail(true);
      removeBorderLine();

      return false;
    }
    if (formData.specialRequest === "") {
      setErrorMssg("Request should not be empty");
      setErrorRequest(true);
      removeBorderLine();
      return false;
    }

    return true;
  };

  return (
    <form
      onSubmit={(e) => validateForm(e) && onStep(3)}
      className="w-full lg:w-4/6  border border-teal-700 p-4 rounded-xl shadow-lg bg-[#11262b]"
    >
      <div className="mb-4">
        <div
          className={`border-2  ${
            errorimage === true ? "border-red-500" : ""
          } flex flex-col  mb-6 border-teal-900 p-4 rounded-xl `}
        >
          <div className="relative">
            <label className=" block text-sm font-medium mb-4  ">
              Upload Profile Photo
            </label>
            <input
              type="file"
              className="bg-red-200 h-full w-[150px]  absolute top-0 left-0 right-0 inset-0 w-full h-full opacity-0  cursor-pointer z-20 "
              id="file-upload"
              onChange={handleImageUpload}
            />
          </div>
          <div className="relative bg-gray-900 rounded-xl h-40 cursor-pointer my-4 ">
            <div className="border-2 border-cyan-500  hover:bg-cyan-700 transition w-[80%] lg:w-1/2 left-[10%] lg:left-[25%] right-[25%] h-[120%] -top-4 z-20 bg-cyan-900 rounded-lg absolute flex flex-col items-center justify-center">
              {isLoading && (
                <div className="absolute flex flex-col items-center justify-center w-full h-full bg-cyan-400 top-0 left-0 right-0">
                  processing...
                </div>
              )}
              {formData.avatarUrl ? (
                <img
                  src={formData.avatarUrl}
                  alt="Profile"
                  className="w-full h-full rounded-lg object-cover"
                />
              ) : (
                <>
                  <input
                    type="file"
                    className="bg-transparent h-full w-full  absolute inset-0 w-full h-full opacity-0 cursor-pointer "
                    id="file-upload"
                    onChange={handleImageUpload}
                  />
                  <IoMdCloudUpload className="text-3xl" />
                  <p className="text-gray-400 text-center max-w-md px-6">
                    Drag & drop or click to upload
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-teal-700 mb-4"></div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Enter your name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={`w-full p-2 rounded-xl bg-transparent border ${
            errorName == true ? "border-red-500" : ""
          } border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-600`}
        />
      </div>
      <div className="mb-4  ">
        <label className="block text-sm font-medium mb-1">
          Enter your email*
        </label>
        <div
          className={`hover:ring-2 hover:ring-teal-600 flex items-center bg-transparent border ${
            errorEmail == true ? "border-red-500" : ""
          } border-teal-700 p-2 rounded-xl`}
        >
          <span className="text-teal-400 mr-2">
            <MdOutlineEmail className="text-white" />
          </span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Special request?
        </label>
        <textarea
          value={formData.specialRequest}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              specialRequest: e.target.value,
            }))
          }
          className={`w-full p-2 resize-none scrollbar-hide overflow-auto rounded-xl bg-transparent border ${
            errorRequest == true ? "border-red-500" : ""
          } border-teal-700 text-white  focus:outline-none focus:ring-2 focus:ring-teal-500`}
        ></textarea>
        <p className="text-xs lg:text-md text-red-500">{errormssg}</p>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <button
          onClick={() => onStep(1)}
          type="button"
          className="px-4 py-2 text-sm lg:text-md w-full rounded-xl border border-teal-500 text-teal-500 hover:bg-cyan-500 hover:text-white transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-full px-4 py-2 text-[10px] lg:text-md rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition"
        >
          Get My Free Ticket
        </button>
      </div>
    </form>
  );
}
