import './fisioterapia.css'
import foto from '../../../img/fisioterapia1.jpg'
export default function Fisioterapia() {
    return (
        <>
            <div className='FisioterapiaTitulo'>
                <span className='FisioterapiaTituloStyle'>CLÍNICA MUNICIPAL DE FISIOTERAPIA</span>
            </div>

            <div className='InforFisioterapia'>

                <p className='TextoFisioterapia'>   A Clínica Municipal de Fisioterapia fica localizada na Rua Prof Getulio Cesar Rodrigues Guedes, 30, Centro, Pedras De Fogo - PB.
                    Com funcionamento de segunda a sexta  das 8h até as 11h da manhã e das 13h até as 16h da tarde.
                    Nela, a população da cidade encontra tratamentos fisioterapêuticos  através de especialistas médicos Fisioterapeutas.
                    Para poder fazer tratamentos na Clínica Municipal de Fisioterapia da cidade o paciente deve primeiro passar pelo médico de sua UBS para pegar um encaminhamento,
                    após isso o paciente deve ir até a  Clínica Municipal de Fisioterapia com o encaminhamento e cartão do SUS para marcar o dia de fazer seu tratamento fisioterapêutico.

                </p>


            </div>

            <div className='FisioterapiaConteudo'>
                <div className='FisioterapiaCaixaConteudo'>
                    <ul>
                        <li>CLÍNICA MUNICIPAL DE FISIOTERAPIA</li>
                        <li>ENDEREÇO: Rua Prof Getulio Cesar Rodrigues Guedes, 30, Centro, Pedras De Fogo - PB</li>
                        <li>HORÁRIOS: segunda a sexta  das 8h as 11h da manhã e 13h as 16h da tarde</li>
                    </ul>

                </div>
                <img
                    className='FisioterapiaImagem'
                    src={foto}
                />
            </div>



        </>
    )
}