import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import imageUploader from '../../../utils/imageUploader';
import { addPost, getPost } from '../../../actions/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPost = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const notify = () => toast.success('Posted Successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const error = (text: string) => toast.warn(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const handleCaptionChange = (e: any) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("assd")
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform your logic here to handle the form submission



    if (selectedImage !== null || caption !== "") {

      console.log('Caption:', caption);
      console.log('Image:', selectedImage);
      let imageUrl
      if (selectedImage !== null) {
        imageUrl = await imageUploader(selectedImage)
      }

      setLoading(true)
      const res = await addPost({ image: imageUrl ? imageUrl : "", caption })
      await getPost()
      if (res.data.success === true) {
        notify()
        setLoading(false)
        setCaption('')
        setSelectedImage(null)
        setImagePreview(null)
      } else {
        setLoading(false)
        error(res.data.error)
      }
    } else {
      error('Post Must have Text or Image')
    }


  };

  return (
    <div className=" bg-gray-900 shadow-lg mt-6 p-6 rounded-md w-full max-w-[52vw] min-w-[52vw]  ">
      <ToastContainer
      />
      <h2 className="text-2xl font-medium mb-4 text-white">Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="caption">
            Caption
          </label>
          <input
            className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            type="text"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2 cursor-pointer" htmlFor="image">
            Select Image
            <input
              className='hidden'
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" className="w-full" />
            </div>
          )}
        </div>


        <button disabled={loading} className=" w-full bg-gray-700 disabled:hover:bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">
          {loading ? "Posting ..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
