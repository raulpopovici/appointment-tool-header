import { HeaderProps } from 'src/App';
import '../index.css';
import { Button } from './ui/button';

const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <div className="w-full bg-white h-16 border-0 shadow flex items-center">
      <div className="ml-8 flex grow">icon</div>
      <div className="mr-8 flex space-x-2">
        <Button
          variant="navbarPrimary"
          onClick={() => onButtonClick('become-a-provider')}
        >
          Become a provider
        </Button>
        <Button
          variant="navbarPrimary"
          onClick={() => onButtonClick('make-an-appointment')}
        >
          Make an appointment
        </Button>
        <Button
          variant="navbarPrimary"
          onClick={() => onButtonClick('services')}
        >
          Services
        </Button>
        <Button variant="callToAction" onClick={() => onButtonClick('login')}>
          LOG IN
        </Button>
      </div>
    </div>
  );
};

export default Header;
