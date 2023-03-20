import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonCustom, CheckCustom, InputCustom, SelectCustom, TextAreaCustom, Title } from './styled';

type FormData = {
  meta_name: string;
  meta_phone: string;
  meta_email: string;
  meta_segmento: string;
  meta_areaDeInteresse: string;
  meta_observacao: string;
  meta_autorizoWhatsApp: string;
};

const schema = yup.object().shape({
  meta_name: yup.string().trim().required(),
  meta_phone: yup.string().required(),
  meta_email: yup.string().trim().email().required(),
  meta_segmento: yup.string(),
  meta_areaDeInteresseDeInteresse: yup.string(),
  meta_observacao: yup.string(),
  meta_autorizoWhatsApp: yup.boolean(),
});

const areaOptions = [
  { value: 'Geraçãode Leads', label: 'Geraçãode Leads' },
  { value: 'Redes Sociais', label: 'Redes Sociais' },
  { value: 'Campanhas no Google', label: 'Campanhas no Google' },
  { value: 'Plataforma de WhatsApp', label: 'Campanhas no Google' },
  { value: 'Bi', label: 'Campanhas no Google' },
  { value: 'Notificações via WhatsApp', label: 'Notificações via WhatsApp' },
  { value: 'Desenvolvimentode Hotsites', label: 'Desenvolvimentode Hotsites' },
  { value: 'Mídia Programática', label: 'Mídia Programática' },
  { value: 'Outro', label: 'Outro' },
];


export function Form(){

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('https://brasil.leadsolution.com.br/leads', {
        name: data.meta_name,
        email: data.meta_email,
        phone_number: data.meta_phone,
        meta_segmento: data.meta_segmento,
        meta_areaDeInteresse: data.meta_areaDeInteresse,
        meta_observacao: data.meta_observacao,
        meta_autorizoWhatsApp: data.meta_autorizoWhatsApp.toString()
      });
      reset();
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Title>Entre em contato conosco</Title>

      <InputCustom>
        <label htmlFor="name">Nome completo*</label>
        <input {...register('meta_name')} id="name" type="text" />
        {errors.meta_name && <span>{errors.meta_name.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="phone">Telefone*</label>
        <input {...register('meta_phone')} id="phone" type="text" />
        {errors.meta_phone && <span>{errors.meta_phone.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="email">E-mail*</label>
        <input {...register('meta_email')} id="email" type="email" />
        {errors.meta_email && <span>{errors.meta_email.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="segmento">Segmento de Atuação</label>
        <input {...register('meta_segmento')} id="segmento" type="text" />
        {errors.meta_segmento && <span>{errors.meta_segmento.message}</span>}
      </InputCustom>

      <SelectCustom>
        <label htmlFor="area">Área de Interesse</label>
        <select {...register('meta_areaDeInteresse')} id="area">
          {areaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.meta_areaDeInteresse && <span>{errors.meta_areaDeInteresse.message}</span>}
      </SelectCustom>

      <TextAreaCustom>
        <label htmlFor="message">Mensagem</label>
        <textarea {...register('meta_observacao')} id="message" />
        {errors.meta_observacao && <span>{errors.meta_observacao.message}</span>}
      </TextAreaCustom>

      <CheckCustom>
        <input
          type="checkbox"
          {...register('meta_autorizoWhatsApp')}
          onChange={(e) =>
            setValue('meta_autorizoWhatsApp', e.target.checked.toString())
          }
        />
        <label>Autorizo receber informações pelo WhatsApp</label>
        {errors.meta_autorizoWhatsApp && <span>{errors.meta_autorizoWhatsApp.message}</span>}
      </CheckCustom>

      <ButtonCustom type="submit"  disabled={!isValid}>
        Enviar
      </ButtonCustom>

    </form>
  );
}
