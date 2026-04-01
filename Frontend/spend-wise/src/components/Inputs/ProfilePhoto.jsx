import React from "react";

import { FaCamera, FaTrash } from "react-icons/fa";



const ProfilePhoto = ({ image, setImage }) => {



  const handleImageChange = (e) => {

    const file = e.target.files[0];



    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setImage(imageUrl);

    }

  };



  const handleImageRemove = () => {

    setImage(null);

  };



  return (

    <div className="mb-6 flex justify-center">



      {image ? (

        <div className="relative w-24 h-24">



          {/* Image */}

          <img

            src={image}

            alt="profile"

            className="w-full h-full rounded-full object-cover border-2 border-gray-300"

          />



          {/* Remove Button */}

          <button

            onClick={handleImageRemove}

            className="absolute bottom-0 right-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md"

          >

            <FaTrash size={12} />

          </button>



        </div>

      ) : (

        <label className="flex flex-col items-center justify-center w-24 h-24 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">



          <FaCamera className="text-gray-600 text-lg mb-1" />

          <span className="text-xs text-gray-600">Upload</span>



          <input

            type="file"

            className="hidden"

            onChange={handleImageChange}

          />

        </label>

      )}



    </div>

  );

};

export default ProfilePhoto;