import { PlantInfoType } from "@/types/types";

export function parsePlantInfo(text: string): PlantInfoType {
  try {
    const jsonString = text.match(/```json\n([\s\S]*)\n```/)?.[1] || "{}";
    const info = JSON.parse(jsonString);
    return {
      name: info["Plant name"] || "Unknown Plant",
      scientificName: info["Scientific name"] || "",
      family: info["Plant family"] || "",
      nativeRegion: info["Native region"] || "",
      description: info["Brief description"] || "",
      careInstructions: info["Care instructions"] || "",
      medicianValue: info["Medicinal value"] || "",
    };
  } catch (error) {
    console.error("Error parsing plant info:", error);
    return {
      name: "Unknown Plant",
      scientificName: "",
      family: "",
      nativeRegion: "",
      description: "Unable to parse plant information.",
      careInstructions: "",
      medicianValue: "",
    };
  }
}
