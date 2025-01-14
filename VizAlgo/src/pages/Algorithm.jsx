import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

// Import Visualizer Components
import BubbleSortVisualizer from "../components/BubbleSortVisualizer";
import BubbleSortDescription from "../components/BubbleSortDescription";
import SelectionSortVisualizer from "../components/SelectionSortVisualizer";
import SelectionSortDescription from "../components/SelectionSortDescription";
import QuickSortVisualizer from "../components/QuickSortVisualizer";
import QuickSortDescription from "../components/QuickSortDescription";
import InsertionSortVisualizer from "../components/InsertionSortVisualizer";
import InsertionSortDescription from "../components/InsertionSortDescription";
import MergeSortVisualizer from "../components/MergeSortVisualizer";
import MergeSortDescription from "../components/MergeSortDescription";
import HeapSortVisualizer from "../components/HeapSortVisualizer";
import HeapSortDescription from "../components/HeapSortDescription";
import CountingSortVisualizer from "../components/CountingSortVisualizer";
import CountingSortDescription from "../components/CountingSortDescription";
import DFSVisualizer from "../components/DFSVisualizer";
import DepthFirstSearchDescription from "../components/DFSDescription";
import BFSGridVisualizer from "../components/BFSVisualizer";
import BreadthFirstSearchDescription from "../components/BFSDescription";
import AStarGridVisualizer from "../components/A-starVisualizer";
import AStarAlgorithmDescription from "../components/A-starDescription";
import LinearSearchVisualizer from "../components/LinearSearchVisualizer";
import LinearSearchDescription from "../components/LinearSearchDescription";
import DijkstraGridVisualizer from "../components/Djikstra'sVisualizer";
import DijkstraAlgorithmDescription from "../components/Djikstra'sDescription";
import BinarySearchVisualizer from "../components/BinarySearchVisualizer";
import BinarySearchDescription from "../components/BinarySearchDescription";
import KnapsackVisualizer from "../components/KnapsackVisualizer";
import KnapsackProblemDescription from "../components/KnapsackDescription";
import TowerOfHanoi from "../components/TowerOfHanoi";
import TowerOfHanoiDescription from "../components/TowerOfHanoiDescription";
import KMPStringMatchingVisualizer from "../components/KMPvisualizer";
import KMPStringMatchingDescription from "../components/KMPDescription";

// Algorithm Categories
const algorithms = {
  "Sorting Algorithms": [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort",
    "Counting Sort",
  ],
  "Pathfinding Algorithms": [
    "Depth First Search (DFS)",
    "Breadth First Search (BFS)",
    "Dijkstra's Algorithm",
    "A* Algorithm",
  ],

  "Search Algorithms": ["Linear Search", "Binary Search"],
  "Other Algorithms": [
    "Knapsack Problem",
    "Tower of Hanoi",
    "KMP String Matching Algorithm",
  ],
};

const Algorithm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const algorithmFromQuery = queryParams.get('name') || "Select an algorithm to visualize";

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmFromQuery);

  // Scroll to the top when the selected algorithm changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedAlgorithm]);

  

  // Rest of the component logic



  // Function to render the selected visualizer
  const renderVisualizer = () => {
    switch (selectedAlgorithm) {
      case "Bubble Sort":
        return <BubbleSortVisualizer />;
      case "Selection Sort":
        return <SelectionSortVisualizer />;
      case "Quick Sort":
        return <QuickSortVisualizer />;
      case "Insertion Sort":
        return <InsertionSortVisualizer />;
      case "Merge Sort":
        return <MergeSortVisualizer />;
      case "Heap Sort":
        return <HeapSortVisualizer />;
      case "Counting Sort":
        return <CountingSortVisualizer />;
      case "Depth First Search (DFS)":
        return <DFSVisualizer />;
      case "Breadth First Search (BFS)":
        return <BFSGridVisualizer />;
      case "Dijkstra's Algorithm":
        return <DijkstraGridVisualizer />;
      case "A* Algorithm":
        return <AStarGridVisualizer />;
      case "Linear Search":
        return <LinearSearchVisualizer />;
      case "Binary Search":
        return <BinarySearchVisualizer />;
      case "Knapsack Problem":
        return <KnapsackVisualizer />;
      case "Tower of Hanoi":
        return <TowerOfHanoi />;
      case "KMP String Matching Algorithm":
        return <KMPStringMatchingVisualizer />;
      default:
        return (
          <p className="text-[#41B3A2] text-lg">
            Select an algorithm to visualize!
          </p>
        );
    }
  };

  // Function to render the description
  const renderDescription = () => {
    switch (selectedAlgorithm) {
      case "Bubble Sort":
        return <BubbleSortDescription />;
      case "Insertion Sort":
        return <InsertionSortDescription />;
      case "Selection Sort":
        return <SelectionSortDescription />;
      case "Merge Sort":
        return <MergeSortDescription />;
      case "Quick Sort":
        return <QuickSortDescription />;
      case "Heap Sort":
        return <HeapSortDescription />;
      case "Counting Sort":
        return <CountingSortDescription />;
      case "Depth First Search (DFS)":
        return <DepthFirstSearchDescription />;
      case "Breadth First Search (BFS)":
        return <BreadthFirstSearchDescription />;
      case "Dijkstra's Algorithm":
        return <DijkstraAlgorithmDescription />;
      case "A* Algorithm":
        return <AStarAlgorithmDescription />;
      case "Linear Search":
        return <LinearSearchDescription />;
      case "Binary Search":
        return <BinarySearchDescription />;
      case "Knapsack Problem":
        return <KnapsackProblemDescription />;
      case "Tower of Hanoi":
        return <TowerOfHanoiDescription />;
      case "KMP String Matching Algorithm":
        return <KMPStringMatchingDescription />;

      default:
        return (
          <div className="w-full mt-1 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
              Description
            </h3>
            <p className="text-lg text-gray-700">
              Select an algorithm to see its description.
            </p>
          </div>
        );
    }
  };

  const handleAlgorithmClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-1/3 bg-[#BDE8CA] p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#0D7C66] mb-4">Algorithms</h2>

        {Object.keys(algorithms).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-[#0D7C66]">{category}</h3>
            <ul className="space-y-2">
              {algorithms[category].map((algorithm, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-3 rounded-md hover:bg-[#0D7C66] ${
                    selectedAlgorithm === algorithm
                      ? "bg-[#0D7C66] text-white"
                      : "bg-[#41B3A2] text-white"
                  }`}
                  onClick={() => handleAlgorithmClick(algorithm)}
                >
                  {algorithm}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-2/3 relative bg-[#ece8f2] p-8 gap-10 flex flex-col items-center">
        {/* Visualization Section */}
        <div
          className="w-3/4 h-auto relative bg-[#D7C3F1] rounded-lg shadow-md flex items-center justify-center"
          style={{
            border: "4px solid #0D7C66",
            minHeight: "400px",
            maxHeight: "400px",
          }}
        >
          {renderVisualizer()}
        </div>

        {/* Description Section */}
        <div
          className="w-full bg-white rounded-lg shadow-md p-4"
          style={{
            border: "4px solid #0D7C66",
          }}
        >
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
