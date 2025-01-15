import React from "react";
import { Link } from "react-router-dom";

// Import images from the images folder
import bubbleSortImg from "../../images/image1.jpg";
import bfsImg from "../../images/image2.jpg";
import dijkstraImg from "../../images/image3.jpg";
import mergeSortImg from "../../images/image4.jpg";

// Add logo path
const logoPath = "/logo.png"; // Assuming the logo is named logo.png in public folder

const algorithms = [
  {
    title: "Sorting Algorithms",
    description:
      "Visualize popular sorting algorithms like Bubble Sort, Merge Sort, and more.",
    image: bubbleSortImg,
    algorithms: ["Bubble Sort", "Merge Sort", "Heap Sort", "Counting Sort"],
    link: "/algorithm#sorting",
  },
  {
    title: "Graph Algorithms",
    description:
      "Explore graph algorithms like DFS, BFS, and pathfinding algorithms.",
    image: bfsImg,
    algorithms: ["DFS", "BFS", "Dijkstra's", "A*"],
    link: "/algorithm#graph",
  },
  {
    title: "Pathfinding Algorithms",
    description:
      "Learn about pathfinding algorithms through interactive visualizations.",
    image: dijkstraImg,
    algorithms: ["Dijkstra's", "A*"],
    link: "/algorithm#pathfinding",
  },
  {
    title: "More Sorting Algorithms",
    description:
      "Discover advanced sorting techniques and their implementations.",
    image: mergeSortImg,
    algorithms: ["Merge Sort", "Quick Sort"],
    link: "/algorithm#advanced-sorting",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#D7C3F1] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0D7C66] mb-4">
            Welcome to VizAlgo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn algorithms through interactive visualizations
          </p>
        </div>

        {/* Algorithm Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {algorithms.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-40">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#0D7C66] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.algorithms.map((algo, i) => (
                    <span
                      key={i}
                      className="bg-[#BDE8CA] text-[#0D7C66] px-2 py-1 rounded-full text-xs"
                    >
                      {algo}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Link
            to="/algorithm"
            className="inline-block bg-[#0D7C66] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#41B3A2] transition duration-300 shadow-lg hover:shadow-xl"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}
