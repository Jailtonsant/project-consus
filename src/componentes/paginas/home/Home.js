import './home.css'
import foto from '../../../img/esse.jpg'
import foto1 from '../../../img/caneta.jpeg'
import foto2 from '../../../img/caneta.jpeg'
export default function Home() {

    return (
        <>
          

            <div className='HomeTitulo'>

                <span className='HomeTituloStyle'>home</span>

            </div>

            <div className='HomeCaixaInfor'>


                <p className='HomeTextoInfor'>A cidade de Pedras de Fogo oferece vários serviços de saúde para a população através do SUS,a mesma conta com:</p>
                <div className='HomeInfor'>
                    <ul className='HomeLista'>
                        <li className='HomeTextoLista'>1 Secretaria Municipal de Saúde</li>
                        <li className='HomeTextoLista'>12 Unidades Básicas de Saúde(UBS)</li>
                        <li className='HomeTextoLista'>1 Policlínica Municipal</li>
                        <li className='HomeTextoLista'>1 Clínica de Fisioterapia</li>
                        <li className='HomeTextoLista'> 1 Hospital</li>
                        <li className='HomeTextoLista'>1 Centro de Especialidades Odontológicas(CEO)</li>
                        <li className='HomeTextoLista'>1 Centro de Atenção Psicossocial(CAPS)</li>
                        <li className='HomeTextoLista'>1 Farmácia Municipal</li>
                        <li className='HomeTextoLista'>Serviço de Atendimento Móvel de Urgência(SAMU)</li>
                    </ul>
                </div>
            </div>
        </>
    )
}