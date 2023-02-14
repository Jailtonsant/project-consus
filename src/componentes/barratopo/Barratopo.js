import './barratopo.css'

import foto1 from '../../img/teste2.jpg'
import foto from '../../img/logo.png'
import { Link } from 'react-router-dom'
export default function BarraTopo() {

    return (
        <>
            <div className='BarraTopoGeral'>
                <div className='BarraTopoBarra'>
                    <div className='BarraTopoTitulo'>

                        <h1 className='LogoH1'>CONSUS</h1>
                        <img
                        className='LogoImg'
                        src={foto}
                        />
                    </div>
                    <div className='BarraTopoNavegador'>
                        <ul className='BarraTopoAtalhos'>

                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>HOME</li>
                            </Link>

                            <Link to='hospital' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>HOSPITAL</li>
                            </Link>
                            <Link to='policlinica' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>POLICLINICA</li>
                            </Link>
                            <Link to='fisioterapia' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>FISIOTERAPIA</li>
                            </Link>
                            <Link to='ceo' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>CEO</li>
                            </Link>
                            <Link to='ubs' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>UBS</li>
                            </Link>
                            <Link to='transporte' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>TRANSPORTE</li>
                            </Link>
                            <Link to='farmacia' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>FARMACIA</li>
                            </Link>
                            <Link to='caps' style={{ textDecoration: 'none' }}>
                                <li className='AtalhosStyle'>CAPS</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='BarraTopoAdd'>
                    <div className='BarraTopoImg'>
                        <img
                            className='BarraTopoImagem'
                            src={foto1}
                        />
                    </div>


                    <div className='SpanMensagem'>
                        <span className='Mensagem'>BEM-VINDO AO BLOG DA SAÚDE</span>
                    </div>
                </div>
            </div>
        </>
    )
}