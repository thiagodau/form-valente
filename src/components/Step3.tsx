import { useFormContext } from "react-hook-form";

export function Step3() {
  const { getValues } = useFormContext();

  const values = getValues();

  return (
    <>
      <h2>Etapa 3 - Revisão dos Dados</h2>
      <p>Confira abaixo todas as informações antes de enviar:</p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20, textAlign: 'left' }}>
        <li>
          <strong>Nome:</strong> {values.name}
        </li>
        <li>
          <strong>Email:</strong> {values.email}
        </li>
        <li>
          <strong>Whatsapp:</strong> {values.whatsapp}
        </li>
        <li>
          <strong>Sobre a simulação de financiamento:</strong>{" "}
          {values.sobreFinanciamento === "sozinho"
            ? "Quero financiar sozinho"
            : "Quero financiar com mais alguém"}
        </li>
        <li>
          <strong>Você tem o nome limpo?</strong>{" "}
          {values.nomeLimpo === "sim"
            ? "Sim"
            : values.nomeLimpo === "nao"
            ? "Não"
            : "Não tenho certeza"}
        </li>
        <li>
          <strong>Você já possui um imóvel financiado?</strong>{" "}
          {values.imovelFinanciado === "sim" ? "Sim" : "Não"}
        </li>
        <li>
          <strong>Qual a sua renda?</strong>{" "}
          {(() => {
            switch (values.renda) {
              case "1000-2000":
                return "R$1.000,00 a R$2.000,00";
              case "2000-3000":
                return "R$2.000,00 a R$3.000,00";
              case "3000-4000":
                return "R$3.000,00 a R$4.000,00";
              case "4000-5000":
                return "R$4.000,00 a R$5.000,00";
              case "5000-6000":
                return "R$5.000,00 a R$6.000,00";
              case "6000-7000":
                return "R$6.000,00 a R$7.000,00";
              case "7000-8000":
                return "R$7.000,00 a R$8.000,00";
              case "acima-8000":
                return "Acima de R$8.000,00";
              default:
                return "";
            }
          })()}
        </li>
        <li>
          <strong>Tem como comprovar sua renda?</strong>{" "}
          {values.comprovarRenda === "sim" ? "Sim" : "Não"}
        </li>
        <li>
          <strong>Você possui qual valor de entrada?</strong>{" "}
          {(() => {
            switch (values.valorEntrada) {
              case "naoTenho":
                return "Não tenho";
              case "R$10.000,00":
              case "R$20.000,00":
              case "R$30.000,00":
              case "R$40.000,00":
              case "R$50.000,00":
              case "R$60.000,00":
              case "R$70.000,00":
              case "R$80.000,00":
              case "R$90.000,00":
              case "R$100.000,00":
                return values.valorEntrada;
              case "acima-100000":
                return "Acima de R$100.000,00";
              case "automovel":
                return "Tenho um automóvel";
              case "automovel+dinheiro":
                return "Tenho um automóvel mais valor em dinheiro";
              default:
                return "";
            }
          })()}
        </li>
      </ul>

      <p style={{ marginTop: 20 }}>
        Se estiver tudo correto, clique em <strong>Enviar</strong>.
      </p>
    </>
  );
}
