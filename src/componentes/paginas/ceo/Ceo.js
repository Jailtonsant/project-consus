import './ceo.css'
import foto from '../../../img/Ceo.jpg'
export default function Ceo() {
    return (
        <>
            <div className='FisioterapiaTitulo'>
                <span className='FisioterapiaTituloStyle'>CENTRO DE ESPECIALIDADE ODONTOLÓGICA</span>
            </div>

            <div className='InforFisioterapia'>

                <p className='TextoFisioterapia'>    O CEO fica localizado na R. Prof. Getúlio César Rodrigues Guedes, 39 - Planalto, Pedras de Fogo - PB. Com funcionamento de segunda a sexta  das 8h até as 11h da manhã e das 13h até as 16h da tarde.
                                neste centro a população da cidade tem acesso a tratamentos odontológicos mais complexos que não são realizados nas UBS, como cirurgias e diagnóstico bucal com ênfase no diagnóstico de câncer de boca, tratamento de canal e gengiva, extrações de siso, próteses dentárias além de também atender pessoas portadoras de necessidades especiais.
                                Para poder ser atendido no CEO o paciente deve primeiro ser avaliado pelo médico odontológico de sua UBS que é quem vai encaminhá-lo, após ser encaminhado a equipe da  UBS fica encarregada de fazer a marcação da consulta do paciente para o CEO.

                </p>


            </div>

            <div className='FisioterapiaConteudo'>
                <div className='FisioterapiaCaixaConteudo'>
                    <ul>
                        <li>CLÍNICA MUNICIPAL DE FISIOTERAPIA</li>
                        <li>ENDEREÇO: R. Prof. Getúlio César Rodrigues Guedes, 39 - Planalto, Pedras de Fogo - PB</li>
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