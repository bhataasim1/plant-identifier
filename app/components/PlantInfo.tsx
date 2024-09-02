import { PlantInfoProps } from "@/types/types";
import Image from "next/image";
import Table from "./common/Table";

export default function PlantInfo({ info, imageUrl }: PlantInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        {imageUrl && (
          <div className="md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt="Uploaded plant"
                className="object-cover w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        )}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">
            {info.name || "Plant Information"}
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {info.description}
          </p>
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <Table info={info} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Care Instructions
        </h3>
        <p className="text-gray-700 leading-relaxed">{info.careInstructions}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Medicinal Value
        </h3>
        <p className="text-gray-700 leading-relaxed">{info.medicianValue}</p>
      </div>
    </div>
  );
}
