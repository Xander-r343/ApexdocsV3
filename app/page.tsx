import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Apex Pathing Documentation</h1>
      <p className="text-lg text-gray-600 mb-8">Comprehensive guide to running Apex Pathing for FTC.</p>
      <div className="flex space-x-4">
        <a href="/docs" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Get Started</a>
        <a href="" className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300">GitHub</a>
      </div>
    </div>
  );
}
