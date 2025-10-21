import { useFormContext } from "react-hook-form";

export function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // gerar opções de entrada de 10k a 100k
  const entradas = [];
  for (let i = 10; i <= 100; i += 10) {
    entradas.push(`R$${i}.000,00`);
  }

  return (
    <>
      <h2>Etapa 2 - Informações Financeiras</h2>

      {/* Nome Limpo */}
      <div className="class-input">
        <label>Você tem o nome limpo?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("nomeLimpo", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("nomeLimpo", { required: "Escolha uma opção" })} />
            Não
          </label>
          <label>
            <input type="radio" value="naoTenhoCerteza" {...register("nomeLimpo", { required: "Escolha uma opção" })} />
            Não tenho certeza
          </label>
        </div>
        {errors.nomeLimpo?.message && (
          <span>{String(errors.nomeLimpo.message)}</span>
        )}
      </div>

      {/* Imóvel financiado */}
      <div className="class-input">
        <label>Você já possui um imóvel financiado no seu nome?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("imovelFinanciado", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("imovelFinanciado", { required: "Escolha uma opção" })} />
            Não
          </label>
        </div>
        {errors.imovelFinanciado?.message && (
          <span>{String(errors.imovelFinanciado.message)}</span>
        )}
      </div>

      {/* Renda */}
      <div className="class-input">
        <label>Qual a sua renda?</label>
        <select {...register("renda", { required: "Escolha uma opção" })} style={{ width: "100%", padding: 8, marginTop: 8 }}>
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
        {errors.renda?.message && <span>{String(errors.renda.message)}</span>}
      </div>

      {/* Comprovação de renda */}
      <div className="class-input">
        <label>Tem como comprovar sua renda oficialmente (holerite, IR, extrato bancário)?</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input type="radio" value="sim" {...register("comprovarRenda", { required: "Escolha uma opção" })} />
            Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register("comprovarRenda", { required: "Escolha uma opção" })} />
            Não
          </label>
        </div>
        {errors.comprovarRenda?.message && (
          <span>{String(errors.comprovarRenda.message)}</span>
        )}
      </div>

      {/* Valor de entrada */}
      <div className="class-input">
        <label>Você possui qual valor de entrada?</label>
        <select {...register("valorEntrada", { required: "Escolha uma opção" })} style={{ width: "100%", padding: 8, marginTop: 8 }}>
          <option value="">Selecione...</option>
          <option value="naoTenho">Não tenho</option>
          {entradas.map((valor) => (
            <option key={valor} value={valor}>
              {valor}
            </option>
          ))}
          <option value="acima-100000">Acima de R$100.000,00</option>
          <option value="automovel">Tenho um automóvel</option>
          <option value="automovel+dinheiro">Tenho um automóvel mais valor em dinheiro</option>
        </select>
        {errors.valorEntrada?.message && <span>{String(errors.valorEntrada.message)}</span>}
      </div>
    </>
  );
}
