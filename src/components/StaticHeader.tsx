import { ReactComponent as Logo } from "../assets/svg/spacex.svg";
import Switcher from "./Switcher";
const StaticHeader: React.FC = () => {
  return (
    <div>
      <Logo className="w-full h-20 sm:h-52 p-2 stroke-slate-800  dark:stroke-slate-100  stroke-1 opacity-90"></Logo>
      <div className="container mx-auto">
        <Switcher />
      </div>
    </div>
  );
};

export default StaticHeader;
