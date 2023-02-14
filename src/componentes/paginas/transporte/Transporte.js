import './transporte.css'
import foto from '../../../img/ambulancia.jpg'
import foto1 from '../../../img/samu.jpg'
export default function Transporte() {
    return (
        <>
            <div className='TransporteTitulo'>
                <span className='TransporteTituloStyle'>TRANSPORTE SANITARIO</span>
            </div>

            <div className='InforTransporte'>

                <p className='TextoTransporte'>
                    A cidade de Pedras de Fogo oferece transportes a população para uso no caso de necessidade de deslocamento para realização de procedimentos de saúde no município ou em outras cidades.
                </p>
                <p className='TextoTransporte'>
                    Para solicitar o acesso desses transportes é necessário que o paciente agende uma vaga com antecedência. Para agendar viagens para outras cidades, o paciente ou responsável deve ir até  a regulação da policlínica municipal com xerox do CPF, RG, Cartão do SUS, nome, data e localização do centro de saúde que o paciente precisa ir.
                </p>
                <p className='TextoTransporte'>
                    No caso dos pacientes que moram na zona rural e precisam se deslocar para zona urbana do próprio município para atendimento, os mesmos devem ir até a sua UBS com os documentos já citados para agendar a viagem.

                </p>
              
                <span className='TransporteTituloStyle'>SAMU</span>
           
                <p className='TextoTransporte'>    O SAMU de Pedras de Fogo está disponível durante os 7 dias da semana 24h por dia para atender a população da cidade.
                    Se o cidadão identificar uma situação de risco de vida ele pode ligar para o SAMU através do número 192.
                    Ao ligar para o SAMU  a pessoa deve:
                </p>



                <ul className='TextoTransporteLista'>

                    <li className='TransporteLista'>Informar endereço completo;</li>
                    <li className='TransporteLista'>Descrever a situação da vítima e responder calmamente às perguntas;</li>
                    <li className='TransporteLista'>Em casos de acidentes de trânsito informar o número de vítimas e se alguma está presa nas ferramentas;</li>
                </ul>


            </div>

            <div className='TransporteConteudo'>
                <div className='TransporteCaixaConteudo'>
                    <ul>
                        <li>CLÍNICA MUNICIPAL DE Transporte</li>
                        <li>ENDEREÇO: Rua Prof Getulio Cesar Rodrigues Guedes, 30, Centro, Pedras De Fogo - PB</li>
                        <li>HORÁRIOS: segunda a sexta  das 8h as 11h da manhã e 13h as 16h da tarde</li>
                    </ul>

                </div>
                <img
                    className='TransporteImagem'
                    src={foto}
                />
                <img
                    className='TransporteImagem'
                    src={foto1}
                />
            </div>



        </>
    )
}