export type CustomAlert = {
  label: string;
  variant: string;
  className: string;
  onClick?: () => void;
};

export const CUSTOM_ALERT = {
  noHouses: {
    label: "We couldn't find more available houses, please at a later time!",
    variant: 'info',
    className: 'noHouses'
  },
  timeout: {
    label:
      'Something unusual has happened in our server and it is taking longer than expected to load more houses. Click me to try again!',
    variant: 'warning',
    className: 'timeout'
  }
};
