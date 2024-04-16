import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
const routes = [
  ["Inicio", "/"],
  ["Crear Plan", "/create"],
  ["Nosotros", "/About"],
];
export function Navbar() {
  return (
    <header
      key="1"
      className="flex items-center h-14 px-4 md:px-6 w-full shrink-0"
    >
      <NavLink className="mr-6" to="/">
        <SunIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </NavLink>
      <div className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium">
        {routes.map(([title, url]) => (
          <NavLink to={url} key={title} className="nav-link">
            {title}
          </NavLink>
        ))}
      </div>
      <div className="ml-auto">
        <Button
          className="w-8 h-8 rounded-full border-2 border-gray-100 mt-8"
          size="icon"
          variant="outline"
        >
          <Avatar >
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhIcaHgkKj0FOr7h97-jpDe205Uwx-9SIDRIKOANtpg&s" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
