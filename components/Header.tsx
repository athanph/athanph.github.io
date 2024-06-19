import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex w-full py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav direction="row" />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
