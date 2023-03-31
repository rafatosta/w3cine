interface LogoProps {
  color?: String;
}

function LogoW3Cine(props: LogoProps) {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-x-2 ${
        props.color ? props.color : "text-red-700"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 96 960 960"
        width="36"
      >
        <path
          fill="currentColor"
          d="m140 256 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42V316q0-24 18-42t42-18Zm0 212v368h680V468H140Zm0 0v368-368Z"
        />
      </svg>

      <p className="text-2xl font-bold">W3Cine</p>
    </div>
  );
}

export default LogoW3Cine;
