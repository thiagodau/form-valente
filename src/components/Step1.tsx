import { useFormContext } from "react-hook-form";

export function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2>Etapa 1 - Informações Pessoais</h2>

      <div className="class-input">
        <label>Nome</label>
        <input
          {...register("name", { required: "O nome é obrigatório" })}
          style={{ width: "100%", padding: 8 }}
        />
        {errors.name && <span>{errors.name.message as string}</span>}
      </div>

      <div className="class-input">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email inválido",
            },
          })}
          style={{ width: "100%", padding: 8 }}
        />
        {errors.email && <span>{errors.email.message as string}</span>}
      </div>

      <div className="class-input">
        <label>Whatsapp</label>
        <input
          {...register("whatsapp", {
            required: "O WhatsApp é obrigatório",
            pattern: {
              value: /^\d{10,11}$/,
              message: "Digite apenas números válidos",
            },
          })}
          style={{ width: "100%", padding: 8 }}
        />
        {errors.whatsapp && (
          <span>{errors.whatsapp.message as string}</span>
        )}
      </div>
      <div className="class-input">
        <label>Sobre a simulação de financiamento:</label>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
          <label>
            <input
              type="radio"
              value="sozinho"
              {...register("sobreFinanciamento", {
                required: "Escolha uma opção",
              })}
            />
            &nbsp;Quero financiar sozinho
          </label>
          {/*
            <label>
            <input
              type="radio"
              value="comAlguem"
              {...register("sobreFinanciamento", {
                required: "Escolha uma opção",
              })}
              />
            Quero financiar com mais alguém
          </label>
          */}
        </div>
        {errors.sobreFinanciamento?.message && (
          <span>
            {String(errors.sobreFinanciamento.message)}
          </span>
        )}
      </div>
    </>
  );
}
