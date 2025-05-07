import { LoaderIcon } from "lucide-react";
import React from "react";

type Props = {
  children?: React.ReactNode;
  loading: boolean;
};

const Loader = ({ children, loading }: Props) => {
  return loading ? (
    <div className="flex justify-center w-full py-5">
      <LoaderIcon className="w-10 h-10 animate-spin" />
    </div>
  ) : (
    children
  );
};

export default Loader;
