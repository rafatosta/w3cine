import Link from "next/link";
import LogoW3Cine from "./logo";

export const navigation = [
  { name: "Filmes", href: "/dashboard/movie" },
  { name: "Sessões", href: "/dashboard" },
  { name: "Usuários", href: "/dashboard/" },
  { name: "Clientes", href: "/dashboard/" },
];

function NavBarAdm() {
  return (
    <nav className="w-full h-24 px-4 flex flex-row justify-between items-start backdrop-blur-md bg-black">
      <Link className="h-full w-full flex flex-col justify-center items-start" href="/dashboard">
        <LogoW3Cine color={"text-white"}/>
        <p className="text-white font-semibold">Painel do Administrador</p>
      </Link>

      <div className="w-full h-full flex flex-row justify-center items-center gap-6">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="font-semibold text-lg hover:font-black hover:text-2xl text-white hover:scale-110 transition duration-150 ease-out hover:ease-in">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBarAdm;
