import './areapostagem.css'
import foto from '../../img/doctor.jpg'
export default function AreaPostagem({ post }) {

    return (
        <>
         <div className='GeralAreaPostagem'>
                <div className='BarraEsquerda'></div>
                <div className='BarraCentro'>

                    <h1>Hospital Distrital Dr. José Souza Maciel</h1>
                    <div className='ImgAreaPostagem'>
                        <img
                            className='ImagemAreaPostagem'
                            src={post.foto}
                        />
                        <span>{post.span}</span>
                        
                        <div className='InforAreaPostagem'>
                            <h1>INFORMAÇÕES</h1>
                            <p className='TextoAreaPostagem'>{post.texto}</p>
                        </div>
                    </div>
                </div>
                <div className='BarraDireita'></div>
            </div>
            
        </>
    )
}