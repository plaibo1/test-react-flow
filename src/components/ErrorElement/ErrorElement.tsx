import { Link, useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const error = useRouteError();

  if (error && typeof error === "object" && "status" in error) {
    if (error.status === 404) {
      return <ErrorWrapper messge="404: Page not found" />;
    }
  }

  return <ErrorWrapper messge="Error: Something wrong happened :(" />;
};

const ErrorWrapper = ({ messge }: { messge: string }) => {
  return (
    <div className="m-10 bg-slate-100 border-2 border-red-300 p-10 rounded-2xl">
      <h1 className="text-3xl font-black mb-4">{messge}</h1>

      <Link to="/">
        <button className="text-xl py-2 px-4 bg-indigo-500 rounded-md font-semibold text-white">
          {"<"} Go home
        </button>
      </Link>
    </div>
  );
};
