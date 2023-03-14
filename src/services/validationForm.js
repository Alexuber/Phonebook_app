import { toast } from 'react-toastify';

export const validateInputs = data => {
  if (
    !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      data.email
    )
  ) {
    toast.error(`Invalid email format!`, {
      position: 'bottom-right',
      autoClose: 3000,
    });
    return false;
  }
  if (
    !/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(data.name)
  ) {
    return toast.error(`Invalid name format!`, {
      position: 'bottom-right',
      autoClose: 3000,
    });
  }
  return true;
};
