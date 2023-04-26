import { toast } from "react-toastify";

const notifyErr = () => {
  toast.error("Sorry, something went wrong , please try again...", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default notifyErr;
