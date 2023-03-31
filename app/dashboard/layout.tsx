import NavBarAdm from "../components/NavBarAdm";

export const metadata = {
  title: "Painel de Controle do ADM",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBarAdm />

      {children}
    </div>
  );
}
