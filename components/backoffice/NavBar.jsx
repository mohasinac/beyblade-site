import React from "react";
import { Sun, Bell, User, AlignJustify } from "lucide-react";
export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 min-w-full left-60">
      <button>
        <AlignJustify />
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
