import '../index.css';
import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="w-full bg-white h-16 border-0 shadow flex items-center">
      <div className="ml-8 flex grow">icon</div>
      <div className="mr-8 flex space-x-2">
        <Button variant="navbarPrimary">Become a provider</Button>
        <Button variant="navbarPrimary">Make an appointment</Button>
        <Button variant="navbarPrimary">Services</Button>
        <Button variant="callToAction">LOG IN</Button>
      </div>
    </div>
  );
};

export default Header;
