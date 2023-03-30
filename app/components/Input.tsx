import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: String;
  alertLabel?: String;
  useFormRegisterReturn?: UseFormRegisterReturn;
  errorRequered?: boolean;
  children?: React.ReactNode;
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
        <label className="font-bold">{props.label}</label>

        <span className="font-normal text-red-600 text-sm">
          {props.errorRequered && props.alertLabel}
        </span>
      </div>

      <input
        className="p-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:py-1.5 sm:text-sm sm:leading-6"
        type={props.type}
        {...props.useFormRegisterReturn}
      />
    </div>
  );
}

export default Input;
