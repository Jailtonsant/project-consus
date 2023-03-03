import './policlinica.css'
import foto from '../../../img/POLICLINICA.jpg'
export default function Policlinica() {
    return (
        <>
            <div className='PoliclinicaTitulo'>
                <span className='PoliclinicaTituloStyle'>Policlinica</span>
            </div>

            <div className='InforPoliclinica'>

                <p className='TextoPoliclinica'>  A policlínica Municipal Dr.Manoel Alves da Silva fica localizada em R. Dr. Manoel Alves Planalto, Pedras de Fogo - PB. A mesma conta com diversos especialistas médicos, serviços de enfermagem e laboratório para realização de exames.
                    Os especialistas Médicos que atendem na Policlínica são:

                </p>
                <ul className='TextoPoliclinicaLista'>

                    <li className='PoliclinicaLista'> Nutricionistas</li>
                    <li className='PoliclinicaLista'>Psicólogos</li>
                    <li className='PoliclinicaLista'>Psiquiatras</li>
                    <li className='PoliclinicaLista'>Fonoaudióloga</li>
                    <li className='PoliclinicaLista'>Ginecologistas</li>
                    <li className='PoliclinicaLista'>Cardiologista</li>
                    <li className='PoliclinicaLista'>Pediatra</li>
                    <li className='PoliclinicaLista'> Reumatologista</li>
                    <li className='PoliclinicaLista'>Urologista</li>
                    <li className='PoliclinicaLista'> Dermatologista</li>
                    <li className='PoliclinicaLista'> Otorrino</li>

                </ul>
                <p className='TextoPoliclinica'>Para que a população possa se consultar com esses especialistas,
                    primeiramente devem passar na sua Unidade Básica de Saúde para pegar um encaminhamento com o médico que atende na unidade,
                    para assim dar início ao processo de marcação da consulta para determinado especialista médico.
                    Esse mesmo processo é necessário para que a população realize exames na policlínica.
                </p>
            </div>
            <div className='TituloPoliclinica'>
                <h2>TIPOS DE EXAMES REALIZADOS NA POLICLÍNICA</h2>
            </div>
            <div  className='InforPoliclinica'>
                <ul className='TextoPoliclinicaLista'>
                    <li className='ListaPoliclinica'>HEMOGRAMA GLICOSE (JEJUM)</li>
                    <li className='ListaPoliclinica'>GLICOSE PÓS-PRANDIAL (2H POS</li>
                    <li className='ListaPoliclinica'> ALMOÇO) HEMOGLOBINA GLICADA (HbA1c) VHS</li>
                    <li className='ListaPoliclinica'>COLESTEROL TOTAL E FRACOES</li>
                    <li className='ListaPoliclinica'>TRIGLICERIDEOS COLESTEROL</li>
                    <li className='ListaPoliclinica'> UREIA</li>
                    <li className='ListaPoliclinica'>CREATININA</li>
                    <li className='ListaPoliclinica'>TGO (AST) TGP (ALT)</li>
                    <li className='ListaPoliclinica'>PCR</li>
                    <li className='ListaPoliclinica'>GAMA GT</li>
                    <li className='ListaPoliclinica'>FOSFATASE ALCALINA FATOR REUMATOIDE</li>
                    <li className='ListaPoliclinica'>ASLO</li>
                    <li className='ListaPoliclinica'>ALBUMINA</li>
                    <li className='ListaPoliclinica'>CALCIO</li>
                    <li className='ListaPoliclinica'>MAGNESIO</li>
                    <li className='ListaPoliclinica'>BILIRRUBINA TOTAL E FRACOES PROTEINAS TOTAIS E FRACOES</li>
                    <li className='ListaPoliclinica'>ACIDO URICO</li>
                    <li className='ListaPoliclinica'>PSA</li>
                    <li className='ListaPoliclinica'>BETA HCG</li>
                    <li className='ListaPoliclinica'>COAGULOGRAMA</li>
                    <li className='ListaPoliclinica'>COAGULOGRAMA P/ Hospital</li>
                    <li className='ListaPoliclinica'>ABO-RH VDRL</li>
                    <li className='ListaPoliclinica'>CPK</li>
                    <li className='ListaPoliclinica'>CKMB</li>
                    <li className='ListaPoliclinica'>TROPONINA</li>
                    <li className='ListaPoliclinica'>AMILASE</li>
                    <li className='ListaPoliclinica'>SUMARIO DE URINA (EAS) PARASITOLOGICO DE FEZES</li>
                    <li className='ListaPoliclinica'>CITOMEGALOVIRUS (CMV)</li>
                    <li className='ListaPoliclinica'>TOXOPLASMOSE (TOXO) RUBEOLA</li>
                    <li className='ListaPoliclinica'> DENGUE</li>
                    <li className='ListaPoliclinica'>ZIKA</li>
                    <li className='ListaPoliclinica'>CHIKUNGUNYA</li>
                    <li className='ListaPoliclinica'>BAHA BACI</li>
                    <li className='ListaPoliclinica'>MAGNÉSIO</li>
                    <li className='ListaPoliclinica'>COAGULOGRAMA P/ Hospital</li>
                    <li className='ListaPoliclinica'> VDRL</li>
                    <li className='ListaPoliclinica'>CITOMEGALOVÍRUS (CMV)</li>
                    <li className='ListaPoliclinica'>TOXOPLASMOSE (TOXO)</li>
                    <li className='ListaPoliclinica'>RUBÉOLA</li>
                    <li className='ListaPoliclinica'>DENGUE</li>
                    <li className='ListaPoliclinica'>ZIKA</li>
                    <li className='ListaPoliclinica'> CHIKUNGUNYA</li>
                    <li className='ListaPoliclinica'> HANSENÍASE</li>
                    <li className='ListaPoliclinica'>BACILOSCOPIA</li>
                    <li className='ListaPoliclinica'>TESTE DO PEZINHO</li>
                    <li className='ListaPoliclinica'>CITOLÓGICO</li>
                    <li className='ListaPoliclinica'>ULTRASSONOGRAFIA</li>
                    <li className='ListaPoliclinica'> ELETROCARDIOGRAMA</li>
                    <li className='ListaPoliclinica'>COLPOSCOPIA</li>
                    <li className='ListaPoliclinica'>ULTRASSOM TRANSVAGINAL</li>



                </ul>
            </div>
            <div className='PoliclinicaConteudo'>
                <div className='PoliclinicaCaixaConteudo'>
                    <ul>
                        <li>POLICLINICA DE PEDRAS DE FOGO</li>
                        <li>R. Dr. Manoel Alves Planalto, Pedras de Fogo - PB.</li>
                        <li>imagem do Policlinica de pedras de fogo</li>
                    </ul>

                </div>
                <img
                    className='PoliclinicaImagem'
                    src={foto}
                />
            </div>

        </>
    )
}