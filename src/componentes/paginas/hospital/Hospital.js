import './hospital.css'
import foto from '../../../img/Hospital.jpg'


export default function Hospital() {

    return (
        <>
            <div className='HospitalTitulo'>
                <span className='HospitalTituloStyle'>Hospital</span>
            </div>

            <div className='InforHospital'>

                <p className='TextoHospital'>  O Hospital Distrital Dr. José de Souza Maciel fica localizado na  R. Prof.
                    Getúlio César Rodrigues Guedes,
                    12 - Centro, Pedras de Fogo - PB.
                    Nele, a população da cidade encontra serviços de:
                </p>
                <ul className='TextoHospitalLista'>

                    <li className='HospitalLista'> Urgência e Emergência 24h</li>
                    <li className='HospitalLista'>sala de observação</li>
                    <li className='HospitalLista'>sala vermelha</li>
                    <li className='HospitalLista'>sala de internação</li>
                    <li className='HospitalLista'>sala de parto</li>
                    <li className='HospitalLista'>sala de raio-x com funcionamento das 8h da manhã até às 20h da noite</li>
                    <li className='HospitalLista'>farmácia</li>
                    <li className='HospitalLista'>2 ambulâncias e bloco cirúrgico onde são realizadas cirurgias de pequeno porte nas terças e quinta-feiras e médio porte nas segunda-feiras</li>

                </ul>
                <p className='TextoHospital'>
                    Essas cirurgias são encaminhadas pela Policlínica Municipal da Cidade.
                    No hospital também são realizados exames laboratoriais através da Policlínica.Os serviços de saúde conta com uma equipe bem preparada formada por médicos, enfermeiros, técnicos de enfermagem,
                    técnicos de radiologia, nutricionistas, parteiras, cozinheiros, maqueiros, vigilantes, recepcionistas, auxiliares de limpeza, costureira e condutores de ambulância.
                </p>
            </div>

            <div className='HospitalConteudo'>
                <div className='HospitalCaixaConteudo'>
                    <ul>
                        <li>HOSPITAL DE PEDRAS DE FOGO</li>
                        <li>ENDEREÇO: R. Prof.
                            Getúlio César Rodrigues Guedes,
                            12 - Centro, Pedras de Fogo - PB</li>
                        <li>imagem do hospital de pedras de fogo</li>
                    </ul>

                </div>
                <img
                    className='HospitalImagem'
                    src={foto}
                />
            </div>


        </>
    )
}