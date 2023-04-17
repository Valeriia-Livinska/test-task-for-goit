import { toast } from "react-toastify";

const notifyErr = () => {
  toast.error("Sorry, an error occurred, please try again...", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default notifyErr;
