import './caps.css'
import foto from '../../../img/Caps.jpg'
export default function Caps() {

    return (
        <>
            <div className='CapsTitulo'>
                <span className='CapsTituloStyle'>CAPS</span>
            </div>

            <div className='InforCaps'>

                <p className='TextoCaps'>
                    O Centro de Atenção Psicossocial Antônia Lins Borba fica localizado em R. Primeiro de Maio, Bairro Mangabeira, Pedras de Fogo - PB. Com funcionamento de segunda a sexta  das 8h até as 11h da manhã e das 13h até as 16h da tarde.
                    Neste centro a população da cidade encontra serviços de oficinas terapêuticas, psicoterapia individual ou em grupo, atividades artísticas, atividades comunitárias, orientação e acompanhamento do uso de medicamentos, além de atendimento domiciliar aos familiares.
                    Estes serviços são prestados através de uma excelente equipe de profissionais formada por psicólogos, psiquiatras, assistente social, enfermeiros, técnicos de enfermagem, cozinheira, auxiliar de limpeza e vigilante.
                    Para poder ter acesso a esses serviços que o CAPS oferece o paciente deve primeiro ser avaliado pelo médico de sua UBS que é quem vai encaminhá-lo, após ser encaminhado a equipe da  UBS fica encarregada de fazer a marcação da consulta do paciente para o CAPS.


                </p>


            </div>

            <div className='CapsConteudo'>
                <div className='CapsCaixaConteudo'>
                    <ul>
                        <li>CAPS</li>
                        <li>ENDEREÇO:  R. Primeiro de Maio, Bairro Mangabeira, Pedras de Fogo - PB</li>
                        <li>HORÁRIOS: segunda a sexta  das 8h as 11h da manhã e 13h as 16h da tarde</li>
                    </ul>

                </div>
                <img
                    className='CapsImagem'
                    src={foto}
                />
            </div>



       
        </>
    )
}