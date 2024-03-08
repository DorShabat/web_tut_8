import React, { useState } from 'react';
import './App.css';
import './index.css';

const ImageGallery = () => {
  const imageIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [selectedImageId, setSelectedImageId] = useState(imageIds[0]);

  const selectImage = (id) => {
    setSelectedImageId(id);
  };

  const selectPreviousImage = () => {
    const currentIndex = imageIds.indexOf(selectedImageId);
    if (currentIndex > 0) {
      setSelectedImageId(imageIds[currentIndex - 1]);
    }
  };

  const selectNextImage = () => {
    const currentIndex = imageIds.indexOf(selectedImageId);
    if (currentIndex < imageIds.length - 1) {
      setSelectedImageId(imageIds[currentIndex + 1]);
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-center">
        {imageIds.map((id) => (
          <div className="thumbnail" key={id} onClick={() => selectImage(id)}>
            <img className={`cursor-pointer max-w-none w-s h-12 m-1 ${id === selectedImageId ? 'selected' : 'dim'}`} src={`https://picsum.photos/id/${id}/50/50`} alt="Thumbnail" />
          </div>
        ))}
      </div>

      <div className="my-5 flex justify-center items-center">
        <button onClick={selectPreviousImage} className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300">
          {'< Prev'}
        </button>
        
        <img className="max-w-full h-auto" src={`https://picsum.photos/id/${selectedImageId}/350/350`} alt="Large Image" />
        
        <button onClick={selectNextImage} className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300">
          {'Next >'}
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
