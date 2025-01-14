export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
        <div className="flex items-center space-x-2 text-white text-3xl font-semibold animate-pulse">
          <div>Loading</div>
          <div className="animate-ping">...</div>
        </div>
        <div className="mt-4 text-white text-lg">
          Please wait while we prepare everything for you!
        </div>
      </div>
    );
  }
  