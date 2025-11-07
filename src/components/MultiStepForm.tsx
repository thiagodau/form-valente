import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step2b } from "./Step2b";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

import './Steps.css'

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  sobreFinanciamento: "sozinho" | "comAlguem";
  nomeLimpo?: string;
  imovelFinanciado?: string;
  renda?: string;
  comprovarRenda?: string;
  valorEntrada?: string;
  consentimentoLGPD?: boolean

  // segundo financiador
  nomeLimpo2?: string;
  imovelFinanciado2?: string;
  renda2?: string;
  comprovarRenda2?: string;
};

export function MultiStepForm() {
  const methods = useForm<FormData>({
    mode: "onBlur", defaultValues: {
      sobreFinanciamento: "sozinho", // opção já marcada
    },
  });
  const { handleSubmit, watch, trigger } = methods;

  const sobreFinanciamento = watch("sobreFinanciamento");

  const [flow, setFlow] = useState<number[]>([1, 2, 3, 4]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // fluxo condicional
    if (sobreFinanciamento === "comAlguem") {
      setFlow([1, 2, 2.5, 3, 4]);
    } else {
      setFlow([1, 2, 3, 4]);
    }
    setCurrentIndex(0);
  }, [sobreFinanciamento]);

  const currentStep = flow[currentIndex];

  const nextStep = async () => {
    // campos a validar dependendo do step
    let fieldsToValidate: (keyof FormData)[] = [];

    // dentro de nextStep
switch (currentStep) {
  case 1:
    fieldsToValidate = [
      "name",
      "email",
      "whatsapp",
      "sobreFinanciamento",
      "consentimentoLGPD" // <-- adicionado aqui
    ];
    break;
  case 2:
    fieldsToValidate = [
      "nomeLimpo",
      "imovelFinanciado",
      "renda",
      "comprovarRenda",
      "valorEntrada"
    ];
    break;
  case 2.5:
    fieldsToValidate = [
      "nomeLimpo2",
      "imovelFinanciado2",
      "renda2",
      "comprovarRenda2"
    ];
    break;
  case 3:
    fieldsToValidate = []; // Step3 é só revisão
    break;
}


    // dispara validação dos campos da etapa
    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentIndex < flow.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Enviando dados...");
      await addDoc(collection(db, "formularios"), {
        ...data,
        createdAt: Timestamp.now(), // data e hora da inserção
      });
      const agradecimentoIndex = flow.indexOf(4);
      setCurrentIndex(agradecimentoIndex !== -1 ? agradecimentoIndex : flow.length - 1);
      console.log("Enviado com sucesso.", data);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 2.5:
        return <Step2b />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()}

        <div style={{ marginTop: 20 }}>
          {currentStep !== 1 && currentStep !== 4 && (
            <button type="button" onClick={prevStep} style={{ marginRight: 10 }}>
              Voltar
            </button>
          )}

          {currentStep !== 3 && currentStep !== 4 && (
            <button type="button" onClick={nextStep}>
              Próximo
            </button>
          )}

          {currentStep === 3 && <button type="submit">Enviar</button>}
        </div>
      </form>
    </FormProvider>
  );
}
