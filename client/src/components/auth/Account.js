
import userController from "../../controllers/userController";

export default function Account() {

    
    const uController = userController();
    //const navigate = useNavigate();
    const handleAccountUpdate = async (e) => {
        e.preventDefault();
        await uController.updateAccount();
        //navigate("/account")
    }

    return (
        
    <div className="App">
        <div className="row">
    <div className="nav justify-content-center">
        <div className="col-sm-6">
            <h2>Account Info</h2>
        <form onSubmit={handleAccountUpdate}> 
        <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
            <input className="form-control is-valid" placeholder="First Name"
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.firstName}
                type="string"
                name="firstName"
            />
            </div></div>
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <input className="form-control is-valid" placeholder="Last Name"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.lastName}
                        type="string"
                        name="lastName"
                    />
            </div></div>
                    
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <input className="form-control is-valid" placeholder="Email"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.email}
                        type="email"
                        name="email"
                    />
            </div></div>
            
            <button className="btn btn-primary mb-2" type="submit">Update</button>
            
        </form>
        
    
        </div>

        
    </div></div></div>
    );
}