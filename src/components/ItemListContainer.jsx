//?CSS
import './ItemListContainer.css'

//?BOOSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemListContainer = ({productsData}) => {
  
  /*const [isLoading, setIsLoading] = useState(true);

  // Simulamos la obtención de datos con useEffect
  useEffect(() => {
    if (productsData) {
      setIsLoading(false);
    }
  }, [productsData]);

  // Mientras los datos están cargando, mostramos un mensaje de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }
*/
  
  return (
    <div className='productos'>
      {productsData.map((products) =>{
        return(
     
          <Card className='carta' key={products.id}>
            <Link to={`/item/${products.id}`}> 
              <Card.Img variant="top" src={products.image} />
            </Link>
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
             
              </Card.Text>
             Price: {products.price}$
            </Card.Body>
          </Card>
        )
      })}
    </div>
  ) 
}

export default ItemListContainer


