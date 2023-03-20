import { Header } from '@/components/Header';
import {

  HomeContainer,
  HomeForm,

} from './styled';
import imageHome3 from '../../assets/ImageHome3.png';
import { TextSlide } from '@/utils/TextSlide';
import { useState } from 'react';
import { Form } from '@/components/FormSu';

export function Home() {
  const [textArray, setTextArray] = useState([
    'Leads com 100% de contato efetivo.',
    'Conquiste novos clientes e venda em dois cliques.',
    'Geração de leads por WhatsApp!',
    'Conheça o novo produto da Leadsolution.'
  ]);
  const updateTextArray = (newTextArray: string[]) => {
    setTextArray(newTextArray);
  };

  return (
    <>
      <HomeContainer id="home">
        <Header />

        <HomeForm>
          <div className="left">
            <TextSlide
              textArray={textArray}
              updateTextArray={updateTextArray}
            />
            <img src={imageHome3} alt="" />
          </div>

          <div className="formulario">
            <Form />
          </div>
        </HomeForm>
      </HomeContainer>
    </>
  );
}
