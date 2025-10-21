import { useFormContext } from "react-hook-form";

export function Step2b() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2>Etapa 2b - Informações do Segundo Financiador</h2>

      {/* Nome Limpo */}
      <div className="class-input">
        <label>O segundo financiador tem o nome limpo?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("nomeLimpo2", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("nomeLimpo2", { required: "Escolha uma opção" })} />
            Não
          </label>
          <label>
            <input type="radio" value="naoTenhoCerteza" {...register("nomeLimpo2", { required: "Escolha uma opção" })} />
            Não tenho certeza
          </label>
        </div>
        {errors.nomeLimpo2?.message && (
          <span>{String(errors.nomeLimpo2.message)}</span>
        )}
      </div>

      {/* Imóvel financiado */}
      <div className="class-input">
        <label>O segundo financiador já possui um imóvel financiado?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("imovelFinanciado2", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("imovelFinanciado2", { required: "Escolha uma opção" })} />
            Não
          </label>
        </div>
        {errors.imovelFinanciado2?.message && (
          <span>{String(errors.imovelFinanciado2.message)}</span>
        )}
      </div>

      {/* Renda */}
      <div className="class-input">
        <label>Qual a renda do segundo financiador?</label>
        <select {...register("renda2", { required: "Escolha uma opção" })} style={{ width: "100%", padding: 8, marginTop: 8 }}>
          <option value="">Selecione...</option>
          <option value="1000-2000">R$1.000,00 a R$2.000,00</option>
          <option value="2000-3000">R$2.000,00 a R$3.000,00</option>
          <option value="3000-4000">R$3.000,00 a R$4.000,00</option>
          <option value="4000-5000">R$4.000,00 a R$5.000,00</option>
          <option value="5000-6000">R$5.000,00 a R$6.000,00</option>
          <option value="6000-7000">R$6.000,00 a R$7.000,00</option>
          <option value="7000-8000">R$7.000,00 a R$8.000,00</option>
          <option value="acima-8000">Acima de R$8.000,00</option>
        </select>
        {errors.renda2?.message && <span>{String(errors.renda2.message)}</span>}
      </div>

      {/* Comprovação de renda */}
      <div className="class-input">
        <label>O segundo financiador tem como comprovar renda oficialmente?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("comprovarRenda2", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("comprovarRenda2", { required: "Escolha uma opção" })} />
            Não
          </label>
        </div>
        {errors.comprovarRenda2?.message && (
          <span>{String(errors.comprovarRenda2.message)}</span>
        )}
      </div>
    </>
  );
}
