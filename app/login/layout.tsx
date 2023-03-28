import LogoW3Cine from "../components/logo";
import Image from "next/image";
import Link from "next/link";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-auto h-screen flex flex-col justify-start items-start bg-[url('/bgLogin.png')] bg-cover bg-center">
      <div className="m-8 p-2 px-4 bg-white/90 rounded-xl">
        <Link href="/">
          <LogoW3Cine />
        </Link>
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border rounded-lg shadow-2xl bg-white p-8">
          {children}
        </div>
      </div>

      <span className="text-gray-300 italic">
        <a
          className="text-blue-500"
          href="https://www.freepik.com/free-photo/rows-red-seats-theater_3532061.htm#query=cinema%20background&position=3&from_view=keyword&track=ais"
        >
          Image by rawpixel.com
        </a>{" "}
        on Freepik
      </span>
    </div>
  );
}
