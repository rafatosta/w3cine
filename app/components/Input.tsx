import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: String;
  alertLabel: String;
  useFormRegisterReturn: UseFormRegisterReturn;
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
        className="border p-2 rounded-lg"
        type={props.type}
        {...props.useFormRegisterReturn}
      />
    </div>
  );
}

export default Input;
