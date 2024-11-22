import { toast } from "react-toastify";

const callToast = (toastMessage: string) => {
  toast(toastMessage);
  toast.clearWaitingQueue();
};

export default callToast;
