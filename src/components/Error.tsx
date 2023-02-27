import StaticHeader from "./StaticHeader";

interface ErrorData {
  error: Error;
}

const Error: React.FunctionComponent<ErrorData> = (props: ErrorData) => {
  const { error } = props;
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
