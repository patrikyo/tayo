import SpinnerProps from "@/app/models/interfaces/SpinnerProps";
import { ClipLoader } from "react-spinners";

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return (
    <>
      <ClipLoader size={size} color={color} />
    </>
  );
};

export default Spinner;
