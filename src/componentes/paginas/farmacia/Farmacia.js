import './farmacia.css'
import foto from '../../../img/farmacia (3).jpg'
export default function Farmacia() {
    return (
        <>
            <div className='FarmaciaTitulo'>
                <span className='FarmaciaTituloStyle'>FARMACIA MUNICIPAL</span>
            </div>

            <div className='InforFarmacia'>

                <p className='TextoFarmacia'>   A farmácia municipal fica localizada na Rua Prof. Getúlio César Rodrigues Guedes, Pedras De Fogo-PB, Com funcionamento de segunda a sexta  das 8h até as 11h da manhã e das 13h até as 16h da tarde.
                                A mesma facilita o acesso da população a medicamentos que são fornecidos pelo SUS e outros que são custeados pelo município para diversos tipos de tratamento, sendo básicos, psicotrópicos (controlados) e injetáveis.
                                Para  poder ter acesso a esses medicamentos o usuário  deve  ir até a farmácia municipal e apresentar receita, carteira de saúde e cartão do SUS.

                </p>


            </div>

            <div className='FarmaciaConteudo'>
                <div className='FarmaciaCaixaConteudo'>
                    <ul>
                        <li>FARMACIA MUNICIPAL</li>
                        <li>ENDEREÇO: Rua 24 de outubro Centro, Pedras De Fogo - PB</li>
                        <li>HORÁRIOS: 8h as 16h de segunda a sexta</li>
                    </ul>

                </div>
                <img
                    className='FarmaciaImagem'
                    src={foto}
                />
            </div>



           
        </>
    )
}