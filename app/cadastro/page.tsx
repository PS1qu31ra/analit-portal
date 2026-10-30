import type {
    Metadata,
  } from "next";
  
  import CadastroForm from "@/components/cadastro/CadastroForm";
  
  
  export const metadata: Metadata = {
    title:
      "Cadastro | Analit",
  
    description:
      "Cadastro no ecossistema Analit.",
  };
  
  
  export default function CadastroPage() {
    return <CadastroForm />;
  }