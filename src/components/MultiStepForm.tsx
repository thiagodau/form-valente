import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

import './Steps.css'

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  sobreFinanciamento: "sozinho" | "comAlguem";
  nomeLimpo?: "sim" | "nao" | "naoTenhoCerteza";
  imovelFinanciado?: "sim" | "nao";
  renda?: "1000-2000" | "2000-3000" | "3000-4000" | "4000-5000" | "5000-6000" | "6000-7000" | "7000-8000" | "acima-8000";
  comprovarRenda?: "sim" | "nao";
  valorEntrada?: "naoTenho" | "R$10.000,00" | "R$20.000,00" | "R$30.000,00" | "R$40.000,00" | "R$50.000,00" | "R$60.000,00" | "R$70.000,00" | "R$80.000,00" | "R$90.000,00" | "R$100.000,00" | "acima-100000" | "automovel" | "automovel+dinheiro";
};

export function MultiStepForm() {
  const methods = useForm<FormData>();
  const [step, setStep] = useState(1);

  const nextStep = async () => {
    const isValid = await methods.trigger();

    if (isValid) {
      const financiamento = methods.getValues("sobreFinanciamento");

      if (step === 1) {
        // NOVO FLUXO:
        // "sozinho" → Step 2
        // "comAlguem" → Step 3
        if (financiamento === "sozinho") {
          setStep(2);
          return;
        }
        if (financiamento === "comAlguem") {
          setStep(3);
          return;
        }
      }

      setStep((prev) => prev + 1);
    }
  };


  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log("Formulário completo:", data);
    setStep(4); // Mostra tela de agradecimento
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

        {step < 4 && (
          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            {step > 1 && (
              <button type="button" onClick={prevStep}>
                Voltar
              </button>
            )}

            {step < 3 && (
              <button type="button" onClick={nextStep}>
                Próximo
              </button>
            )}

            {step === 3 && <button type="submit">Enviar</button>}
          </div>
        )}
      </form>
    </FormProvider>
  );
}
