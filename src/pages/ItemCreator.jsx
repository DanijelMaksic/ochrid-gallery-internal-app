import Row from '../ui/Row';
import CreateItemForm from '../features/items/CreateItemForm';

function NewItem() {
   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">
               Add new icon
            </h1>
         </Row>

         <CreateItemForm />
      </>
   );
}

export default NewItem;
