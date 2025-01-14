import { Link } from "react-router-dom"; // Correct import for internal links

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D7C66] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} VizAlgo. All rights reserved.</p>
        </div>

        {/* Made by GitHub Profile Button */}
<div className="mt-4 text-center">
  <p className="text-sm">
    Made with ❤️ by{" "}
    <a
      href="https://github.com/nothingADSR123"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center mt-2 py-2 px-6 text-sm font-medium text-white bg-[#24292F] hover:bg-[#1F4529] rounded-full transition-all duration-300"
    >
      <span className="mr-2">nothingADSR123</span> 😎
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="currentColor"
      >
        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0Zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6ZM8 7.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-3Zm0-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V6.5Zm-.5 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2Z" />
      </svg>
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}
