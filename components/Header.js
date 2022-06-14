import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="flex justify-between items-center pt-4">
      <Logo />
      <Menu />
    </div>
  )
}