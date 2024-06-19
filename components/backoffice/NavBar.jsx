import React from "react";
import { Sun, Bell, User, Menu } from "lucide-react";
export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <button>
        <Menu />
      </button>

      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
