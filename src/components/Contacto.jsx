export default function Contacto() {
    return (
        <>
            <div className="mb-3 text-center">
                <label for="exampleFormControlInput1" className="form-label"> Correo:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 text-center">
                <label for="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="button">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </>
    )
}