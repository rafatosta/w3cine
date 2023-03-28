"use client";

import Input from "@/app/components/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface ISignUp {
  name: String;
  email: String;
  cpf: String;
  username: String;
  password: String;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUp>();

  async function onFormSubmit(data: ISignUp) {
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center w-[300px] sm:w-[450px] gap-y-6">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-2xl">Criar uma conta</p>
        <p className="text-sm text-gray-500">
          Possui uma conta?{" "}
          <Link className="text-blue-500 font-bold underline" href="/login">
            Entrar
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col justify-center items-center w-full gap-2 text-primary "
      >
        <Input
          id="name"
          label="Nome"
          type="text"
          alertLabel="Campo obrigatório"
          errorRequered={errors.name?.type === "required"}
          useFormRegisterReturn={{
            ...register("name", { required: true }),
          }}
        />
        <Input
          id="name"
          label="Email"
          type="email"
          alertLabel="Campo obrigatório"
          errorRequered={errors.name?.type === "required"}
          useFormRegisterReturn={{
            ...register("name", { required: true }),
          }}
        />
        <Input
          id="name"
          label="CPF"
          type="text"
          alertLabel="Campo obrigatório"
          errorRequered={errors.name?.type === "required"}
          useFormRegisterReturn={{
            ...register("name", { required: true }),
          }}
        />
        {"..."}
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
          Criar
        </button>
      </form>
    </div>
  );
}

export default Signup;
