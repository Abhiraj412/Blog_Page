// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  const blogPosts = [
    { id: 1, title: 'Travel Blog', excerpt: 'Travel experience around the world', category: 'Travel' },
    { id: 2, title: 'Food Blog', excerpt: 'Food taste of the world', category: 'Food' },
    { id: 3, title: 'Educational Blog', excerpt: 'Live the various Educational practices of the world.', category: 'Education' }
  ];

  // Mapping between categories and image URLs
  const categoryImageMapping = {
    Travel: 'https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg',
    Food: 'https://t3.ftcdn.net/jpg/05/94/82/16/360_F_594821637_Rzb8t6sMmPQBylvBX1Kme9sgB0pcoeyi.jpg',
    Education: 'https://www.brookings.edu/wp-content/uploads/2022/01/CUE_international-day-of-ed2.jpg?w=1500'
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map(post => (
          <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
            <figure><img src={categoryImageMapping[post.category]} alt={post.title} /></figure>
            <Link to={`/post/${post.id}`} className="btn btn-ghost">Read More</Link>
          </div>
        ))}
      </div>
      <Footer /> 
    </div>
  );
};

export default HomePage;
