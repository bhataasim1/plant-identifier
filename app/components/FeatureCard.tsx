import { Icons } from "./common/Icons";

const FeatureCard = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-white text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icons.uploadIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Upload Image
          </h3>
          <p className="text-gray-300">
            Take a photo or upload an existing image of a plant you want to
            identify.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icons.AiAnalysisIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">AI Analysis</h3>
          <p className="text-gray-300">
            Our advanced AI analyzes the image to identify the plant species.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icons.InfoIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Get Information
          </h3>
          <p className="text-gray-300">
            Receive detailed information about the plant, including its name,
            scientific name, and characteristics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
