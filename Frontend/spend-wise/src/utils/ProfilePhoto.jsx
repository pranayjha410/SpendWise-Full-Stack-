// ProfilePhoto.jsx
import { useRef, useState } from "react";

const ProfilePhoto = ({ image, setImage }) => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    console.log("file in ProfilePhoto:", file);
    console.log("is File?", file instanceof File);

    setImage(file); // ← File object (for upload)
    setPreview(URL.createObjectURL(file)); // ← blob URL (just for preview)
  };

  return (
    <div onClick={() => inputRef.current.click()} className="cursor-pointer">
      {preview ? (
        <img
          src={preview}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Photo</span>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePhoto;
