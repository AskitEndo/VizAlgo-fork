import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex-1 bg-[#BDE8CA] py-12">
      <div className="container mx-auto px-4">
        
        {/* Quote Section */}
        <div className="text-center my-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <blockquote className="text-2xl font-extrabold text-[#0D7C66]">
            "Learning is enhanced when visualized, not just observed."
          </blockquote>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
  {[
    { src: '/images/image1.jpg', algorithm: 'Bubble Sort' },
    { src: '/images/image2.jpg', algorithm: 'Breadth First Search (BFS)' },
    { src: '/images/image3.jpg', algorithm: "Dijkstra's Algorithm" },
    { src: '/images/image4.jpg', algorithm: 'Merge Sort' },
  ].map(({ src, algorithm }, i) => (
    <Link
      key={i}
      to={`/algorithm?name=${encodeURIComponent(algorithm)}`} // Add algorithm as a query parameter
      className="aspect-[4/3] bg-[#41B3A2] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 p-2 border-4 border-white"
    >
      <div className="w-full h-full rounded-lg overflow-hidden">
        <img
          src={src}
          alt={`Algorithm ${algorithm}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </Link>
  ))}
</div>


        {/* View More Button */}
        <div className="text-center mt-8">
          <Link to="/algorithm">
            <button className="bg-[#495464] text-white py-2 px-6 rounded-full hover:bg-[#BBBFCA] transition-colors duration-300">
              View More
            </button>
          </Link>
        </div>

        {/* New Section for Algorithm Visualization */}
        <div className="bg-white mt-16 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#0D7C66] mb-6">
            We Help You Visualize Algorithms
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore and understand complex algorithms with ease. From sorting algorithms to graph algorithms and many more, we provide interactive visualizations to help you learn better.
          </p>

          {/* Visualization Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sorting Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Sorting Algorithms</h3>
              <p className="text-sm">
                Learn how popular sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort work step by step with visual guides.
              </p>
            </div>

            {/* Graph Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Graph Algorithms</h3>
              <p className="text-sm">
                Visualize graph traversal techniques like BFS, DFS, and shortest path algorithms like Dijkstra and A* in action.
              </p>
            </div>

            {/* More Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">And Many More</h3>
              <p className="text-sm">
                From dynamic programming to backtracking, dive deep into the world of algorithms with our interactive visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
