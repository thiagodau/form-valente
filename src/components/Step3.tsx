import { useFormContext } from "react-hook-form";

export function Step3() {
  const { getValues } = useFormContext();
  const values = getValues();

  const showSecondFinanciador = values.sobreFinanciamento === "comAlguem";

  return (
    <>
      <h2>Etapa 3 - Revisão dos Dados</h2>
      <p>Confira abaixo todas as informações antes de enviar:</p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {/* Primeiro financiador */}
        <li><strong>Nome:</strong> {values.name}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Whatsapp:</strong> {values.whatsapp}</li>
        <li>
          <strong>Sobre a simulação de financiamento:</strong>{" "}
          {values.sobreFinanciamento === "sozinho" ? "Quero financiar sozinho" : "Quero financiar com mais alguém"}
        </li>
        <li>
          <strong>Você tem o nome limpo?</strong> {values.nomeLimpo}
        </li>
        <li>
          <strong>Você já possui um imóvel financiado?</strong> {values.imovelFinanciado}
        </li>
        <li>
          <strong>Qual a sua renda?</strong> {values.renda}
        </li>
        <li>
          <strong>Tem como comprovar sua renda?</strong> {values.comprovarRenda}
        </li>
        <li>
          <strong>Você possui qual valor de entrada?</strong> {values.valorEntrada}
        </li>

        {/* Segundo financiador, se existir */}
        {showSecondFinanciador && (
          <>
            <h3 style={{ marginTop: 20 }}>Segundo Financiador</h3>
            <li>
              <strong>O segundo financiador tem o nome limpo?</strong> {values.nomeLimpo2}
            </li>
            <li>
              <strong>O segundo financiador já possui um imóvel financiado?</strong> {values.imovelFinanciado2}
            </li>
            <li>
              <strong>Qual a renda do segundo financiador?</strong> {values.renda2}
            </li>
            <li>
              <strong>Tem como comprovar a renda do segundo financiador?</strong> {values.comprovarRenda2}
            </li>
          </>
        )}
      </ul>

      <p style={{ marginTop: 20 }}>
        Se estiver tudo correto, clique em <strong>Enviar</strong>.
      </p>
    </>
  );
}
