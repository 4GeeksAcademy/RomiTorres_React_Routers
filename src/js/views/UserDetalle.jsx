import React from "react";
import { Link, useParams } from "react-router-dom";

export const UserDetalle = () => {

    const params = useParams();
    const id = params.userId - 1;
    const userView = JSON.parse(localStorage.getItem('usersLocal'))
    console.log(userView)


    return (
        <> 
        <div className="card container fluid rounded"   style={{width: "30rem"}}>
            <div className="card-body">
                <h6>User #: {id + 1}</h6>
                <h1 className="card-text bg-secondary"><strong>Nombre: </strong>{userView[id].name}</h1>
                <p className="card-text bg-light"><strong>Usuario: </strong> {userView[id].username}</p>
                <p className="card-text ms-6 bg-light">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-envelope-at" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg> {userView[id].email}
                    </div></p>
                <p className="card-text bg-light">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>{userView[id].address.city}
                    </div>
                </p>
            </div>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle">
            <Link to={`/getusers/`}>
            <button type="button" className="btn btn-primary p">Return</button>
         </Link> 
        </div>
        
        
        </>
    )
}