import { useForm } from "react-hook-form";
import FormWithSelect from "../components/Form";
import fieldList from "./utils/fieldList";
import useAuth from "../../../hooks/useAuth";
import { useAccountStore } from "../../../stores/accountStore";
import { useNavigate } from "react-router-dom";
import { Register } from "../../../api/account";

export default function RegisterForm() {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const navigate = useNavigate();

  const { login } = useAuth();
  const { account } = useAccountStore();
  const onSubmit = (data) => {
    console.log("rEgister", data);
    
    Register(data)
      .then((response) => {
        if (account.role === "ROLE_ADMIN") {
          navigate("/user/dashboard"); // ✅ navigation sans rechargement
        }
      })
      .catch((error) => {
        // Traitement en cas d'erreur
        console.error("Erreur de connexion :", error);
        // Afficher un message d'erreur ici
      });
  };
  return (
    <>
      <FormWithSelect
        fieldList={fieldList}
        direction={"column"}
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        setValue={setValue}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
}
