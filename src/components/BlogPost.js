import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  let post;

  // Define post content based on the id
  switch (parseInt(id)) {
    case 1:
      post = {
        title: 'Travel Blog',
        content: `Travel may be local, regional, national (domestic) or international. In some countries, non-local internal travel may require an internal passport, while international travel typically requires a passport and visa. Tours are a common type of travel. Examples of travel tours are expedition cruises, small group tours, and river cruises.`,
      };
      break;
    case 2:
      post = {
        title: 'Food Blog',
        content: `The geography of food is a field of human geography. It focuses on patterns of food production and consumption on the local to global scale. Tracing these complex patterns helps geographers understand the unequal relationships between developed and developing countries in relation to the innovation, production, transportation, retail and consumption of food. It is also a topic that is becoming increasingly charged in the public eye. The movement to reconnect the 'space' and 'place' in the food system is growing, spearheaded by the research of geographers.`,
      };
      break;
    case 3:
      post = {
        title: 'Educational Blog',
        content: `International differences in education systems are not solely a financial issue. The value placed on education, the amount of time devoted to it, and the distribution of education within a country also play a role in those differences. For example, students in South Korea spend 220 days a year in school, compared to the 180 days a year of their United States counterparts (Pellissier 2010). As of 2006, the United States ranked fifth among twenty-seven countries for college participation, but ranked sixteenth in the number of students who receive college degrees (National Center for Public Policy and Higher Education 2006). These statistics may be related to how much time is spent on education in the United States.`,
      };
      break;
    default:
      post = {
        title: `Blog Post ${id}`,
        content: `This is the content of Blog Post ${id}.`,
      };
  }

  return (
    <div className="flex flex-col text-gray-200"> {/* Set text color to dark gray */}
      <Link to="/" className="btn btn-outline text-md mb-2 w-1/6">Go Back</Link>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-400 mb-4">{post.content}</p> {/* Set text color to slightly lighter gray */}
      <Link to={`/post/${id}/about`} className="btn btn-outline text-md w-1/6">About the Blog</Link>
    </div>
  );
};

export default BlogPost;
