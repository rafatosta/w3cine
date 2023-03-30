"use client";

import Input from "@/app/components/Input";
import { useState } from "react";

function CreateMovie() {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      //const { data } = await axios.post("/api/image", formData);
      //console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
  return (
    <div className="w-screen md:h-screen flex flex-col justify-start md:justify-center items-center mt-8">
      <form
        className="w-full flex flex-col gap-4 justify-center items-center "
        action=""
      >
        <p className="w-4/5 text-4xl md:text-6xl font-bold pb-4">
          Novo filme
        </p>

        <div className="w-4/5 lg:w-2/3 flex flex-col justify-center md:flex-row items-start gap-6">
          <div className="w-full flex flex-col justify-center items-center">
            <Input label="Nome do filme" />
            <Input label="Gênero" />

            <div className="w-full">
              <label className="font-bold"> Sinopse</label>
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>

            <Input label="Classificaçao" />
            <Input label="Duração" />
            <Input label="Trailer" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="cover-photo" className="font-bold">
              Foto de capa
            </label>

            <label>
              <input
                type="file"
                hidden
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                    setSelectedFile(file);
                  }
                }}
              />
              <div className="flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 w-[200px] h-[295px] sm:w-[270px] sm:h-[380px] cursor-pointer">
                {selectedImage ? (
                  <img className="rounded-lg" src={selectedImage} alt="" />
                ) : (
                  <span className="font-semibold text-indigo-600 text-center">
                    Selecione a imagem
                    <p className="text-xs font-semibold leading-5 text-gray-600">
                      Tamanho: 640 x 940 pixels
                    </p>
                    <p className="text-xs font-normal leading-5 text-gray-600">
                      PNG, JPG, GIF até 10MB
                    </p>
                  </span>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="w-4/5 flex md:flex-row flex-col-reverse justify-between items-center pt-12">
          <button className="border rounded-lg font-semibold border-[#c20c0c] p-2 px-4 mt-4 w-full md:w-1/3">
            Voltar
          </button>
          <button
            type="submit"
            className="border rounded-lg font-semibold bg-[#c20c0c] text-white p-2 px-4 mt-4 w-full md:w-1/3"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateMovie;
