import { AxiosError } from 'axios';
import { toast } from 'sonner';

export function errorHandler(err: any) {
  if (err instanceof AxiosError) {
    return toast.error(err?.response?.data?.message || err.message);
  }
  return toast.error(err.message);
}
