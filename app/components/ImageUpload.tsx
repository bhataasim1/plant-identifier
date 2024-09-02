"use client";

import { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ImageUploadProps } from "@/types/types";
import { parsePlantInfo } from "@/libs/parseInfoText";
import toast from "react-hot-toast";
import { Icons } from "./common/Icons";
import { PROMPT } from "@/constants/prompt";
import { MODEL } from "@/constants/model";
import { fileToGenerativePart } from "@/libs/generateFileAI";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!
);

export default function ImageUpload({
  setPlantInfo,
  setImageUrl,
}: ImageUploadProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      const imageData = await fileToGenerativePart(file);
      const model = genAI.getGenerativeModel({ model: MODEL });

      const result = await model.generateContent([PROMPT, imageData]);
      const response = result.response;
      const text = response.text();
      // console.log("Identified plant:", text);
      setPlantInfo(parsePlantInfo(text));
      toast.success("Plant identified successfully!");
    } catch (error) {
      console.error("Error identifying plant:", error);
      toast.error("Error identifying plant. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => fileInputRef.current?.click()}
          className={`px-4 py-2 text-white rounded-lg transition duration-300 flex items-center ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading}
        >
          <Icons.uploadIcon />
          Upload Image
        </button>
        <button
          onClick={() => cameraInputRef.current?.click()}
          className={`px-4 py-2 text-white rounded-lg transition duration-300 flex items-center ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          <Icons.cameraIcon />
          Take Photo
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageUpload}
        className="hidden"
      />
      {loading && (
        <div className="mt-4 text-center text-white font-semibold animate-pulse">
          Hold on, Identifying plant...
        </div>
      )}
    </div>
  );
}
