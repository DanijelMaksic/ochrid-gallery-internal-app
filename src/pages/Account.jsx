import Row from '../ui/Row';
import UpdatePassword from '../features/authentication/UpdatePassword';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

function Account() {
   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">
               Update your account
            </h1>
         </Row>

         <Row>
            <h3 className="text-2xl font-semibold">Update user info</h3>
            <UpdateUserDataForm />
         </Row>

         <Row>
            <h3 className="text-2xl font-semibold">Update password</h3>
            <UpdatePassword />
         </Row>
      </>
   );
}

export default Account;
