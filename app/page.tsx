"use client";

import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PlantInfo from "./components/PlantInfo";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import { PlantInfoType } from "@/types/types";

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<PlantInfoType | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-white drop-shadow-md">
          Plant Identifier
        </h1>
        <p className="text-center mb-8 text-gray-200 text-lg">
          Discover the secrets of nature! Upload a photo or take a picture of
          any plant, and our AI will identify it and provide valuable
          information.
        </p>
        <ImageUpload setPlantInfo={setPlantInfo} setImageUrl={setImageUrl} />
        {plantInfo && <PlantInfo info={plantInfo} imageUrl={imageUrl} />}
        <FeatureCard />
      </div>
      <Footer />
    </main>
  );
}
