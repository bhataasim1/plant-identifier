import { PlantInfoType } from "@/types/types";
import React from "react";

type TableProps = {
  info: PlantInfoType;
};

const Table = ({ info }: TableProps) => {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <td className="font-semibold pr-4 py-2 text-green-800">
            Scientific Name:
          </td>
          <td className="text-gray-700">{info.scientificName}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-4 py-2 text-green-800">Family:</td>
          <td className="text-gray-700">{info.family}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-4 py-2 text-green-800">
            Native Region:
          </td>
          <td className="text-gray-700">{info.nativeRegion}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
