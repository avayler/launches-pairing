import StaticHeader from "./StaticHeader";

interface IErrorProps {
  error: Error;
}

const Error: React.FC<IErrorProps> = ({ error }: IErrorProps) => {
  return (
    <div
      id="Error"
      className="font-head text-center h-screen uppercase md:text-6xl text-lg dark:text-slate-100"
    >
      Error... {error.message}
    </div>
  );
};

export default Error;
