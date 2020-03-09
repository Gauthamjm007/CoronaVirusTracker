import React from "react";
import CompleteDetails from "./CompleteDetails";
import VirusIcon from "../components/icons/virus-icon";

export default function Home() {
  return (
    <div>
      <h1>Corona Virus Tracker</h1>
      <VirusIcon />
      <CompleteDetails />
    </div>
  );
}
