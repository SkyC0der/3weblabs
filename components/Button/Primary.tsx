import React from "react";
// import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: any;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button(props: ButtonProps): any {
  const classes: any =  `bg-primary text-white mx-2 bg-green-700 rounded-l-lg rounded-r-lg p-3 font-light flex items-center justify-center ${
      props.className || ""
    }`
  return (
    <button
      {...props}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.loading && <Spinner />}
      {props.children}
    </button>
  );
}

export const Spinner = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};