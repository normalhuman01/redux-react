import Card from './Card';

const Dibujar = props => {
    return (
        <Card title="Dibujar un numero" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Dibujar;