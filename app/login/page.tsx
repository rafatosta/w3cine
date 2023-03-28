"use client";
/**
 * O react-hook-form precisa ser renderizado no cliente, logo funcionará ao executar ao lado do servidor.
 * Para indicar que o componente precisa ser renderizado no cliente usa-se 'use client' no início do componente.
 *
 * Para mais: https://beta.nextjs.org/docs/rendering/server-and-client-components#context
 */

import Link from "next/link";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

interface ILogin {
  username: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>();

  async function onFormSubmit(data: ILogin) {
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center w-[250px] sm:w-[350px] lg:w-[450px] gap-y-8 ">
      <p className="font-bold text-2xl">Entrar no W3Cine</p>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col justify-center items-center w-full gap-2 text-primary "
      >
        <Input
          id="username"
          label="Usuário"
          type="text"
          alertLabel="Campo obrigatório"
          errorRequered={errors.username?.type === "required"}
          useFormRegisterReturn={{
            ...register("username", { required: true }),
          }}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          alertLabel="Campo obrigatório"
          errorRequered={errors.password?.type === "required"}
          useFormRegisterReturn={{
            ...register("password", { required: true }),
          }}
        />

        <button
          type="submit"
          className="border rounded-lg font-semibold bg-[#c20c0c] text-white p-2 px-4 mt-4 w-full"
        >
          Acessar
        </button>
      </form>

      <p>
        Não tem uma conta?{" "}
        <Link className="text-blue-700 font-bold" href="/login/signup">
          Criar conta
        </Link>
      </p>
    </div>
  );
}

export default Login;
