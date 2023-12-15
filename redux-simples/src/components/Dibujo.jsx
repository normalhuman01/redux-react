import Card from './Card';

const Dibujar = props => {
    return (
        <Card title="Dibujo de un Numero" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Dibujo;