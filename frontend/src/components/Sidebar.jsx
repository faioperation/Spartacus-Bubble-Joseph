import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/S Logo.png";
import LogoText from "../assets/images/logoText.png";
import {
  Home,
  List,
  BarChart2,
  Settings,
  HelpCircle,
  Users,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Home", path: "/home", icon: Home },      
  { name: "Interaction List", path: "/interactions", icon: List },
  { name: "Dashboards", path: "/dashboard", icon: BarChart2 },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "FAQ", path: "/faq", icon: HelpCircle },
  { name: "Employee Info", path: "/employees", icon: Users },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="bg-[#8BC43D] text-white flex flex-col h-full">
      {/* Logo */}
      <div 
        onClick={() => navigate("/home")}
        className="flex flex-col items-center justify-center py-6 gap-2 cursor-pointer">
        <img src={Logo} alt="Logo" className="w-26 h-26 object-contain" />
        <img src={LogoText} alt="Spartacus Bubble" className="w-50 object-contain" />
      </div>

      {/* Menu */}
      <nav className="flex-1 px-6 text-xl space-y-3">
        {menu.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${isActive ? "bg-white text-[#8BC53F]" : "hover:bg-white/20"}`
            }
          >
            <Icon size={24} />
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-10 py-4 text-xl hover:bg-white/20 cursor-pointer"
      >
        <LogOut size={24} />
        Logout
      </button>
    </aside>
  );
}
