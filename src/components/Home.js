import React from "react";
import CompleteDetails from "./CompleteDetails";
import VirusIcon from "../components/icons/virus-icon";

export default function Home() {
  return (
    <div align="right">
      <span>
        <h1 align="center">Corona Virus Live Tracker</h1>
      </span>

      <VirusIcon />
      <CompleteDetails />
    </div>
  );
}
