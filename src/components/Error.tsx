import StaticHeader from "./StaticHeader";

interface ErrorData {
  error: Error;
}

const Error: React.FunctionComponent<ErrorData> = (props: ErrorData) => {
  const { error } = props;
  return (
    <>
      <StaticHeader />
      <div
        id="Error"
        className="font-head absolute top-96 left-20 rotate-90 md:rotate-0 uppercase text-6xl dark:text-slate-100">
        Error... {error.message}
      </div>
    </>
  );
};

export default Error;
