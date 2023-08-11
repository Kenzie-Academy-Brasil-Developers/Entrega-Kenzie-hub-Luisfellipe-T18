import {z} from "zod";

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é Obrigatório"),

    email: z.string().nonempty("O e-mail é Obrigatório").email("Cadastre um e-mail válido"),

    password: z
    .string()
    .nonempty("A senha é Obrigatória")
    .min(8, "São necessários pelo menos oito caracteres")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
    .regex(/[a-z]+/, "É necessário conter pelo menos uma letra ninúscula")
    .regex(/[0-9]+/, "É necessário conter pelo menos um número"),

    comfirmPassword: z.string().nonempty("Confimação de senha obrigatório"),

    bio: z.string().nonempty("Descrição é obrigatória"),

    contact: z.string().nonempty("Contato é obrigatório"),

    course_module: z.string().nonempty("Selecionar um módulo é obrigatório"),


}).refine( ({password, comfirmPassword}) => password === comfirmPassword, {
    message: "As senhas não correspondem",
    path: ["comfirmPassword"]
})