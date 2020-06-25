import React from "react";
import { Link } from "react-router-dom";

import Heading from "./interface/Heading";

function Dashboard() {
  return (
    <div className={`w-full max-w-sm m-auto mt-20`}>
      <Heading text="Dashboard" />

      <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        dashboard
        <div className={`mt-6`}>
          <Link to="/" className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}>Sign out</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
