import React from 'react';
import { useParams } from 'react-router-dom';

const BlogInfoPage = () => {
  const { id } = useParams();
  let category;

  // Determine the category based on the id
  switch (parseInt(id)) {
    case 1:
      category = 'Travel';
      break;
    case 2:
      category = 'Food';
      break;
    case 3:
      category = 'Education';
      break;
    default:
      category = 'Unknown';
  }

  return (
    <div className="flex flex-col">
      <h5 className="text-2xl text-gray-200  mb-4">Blog Information for Post {category}</h5>
      <p className="text-gray-400">This is some information about {category}.</p>
    </div>
  );
};

export default BlogInfoPage;
