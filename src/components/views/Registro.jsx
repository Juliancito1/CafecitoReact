import { Form , Button , Container } from "react-bootstrap";
import { useForm } from 'react-hook-form'
const Registro = () => {
  const {register,handleSubmit,formState: { errors },reset} = useForm()

  const onSubmit = () => {
    console.log("mi submit");
    reset();
  };
    return (
        <Container className="mainPage mt-5">
      <h3 className="text-center">Registro</h3>
      <section className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
              {...register("usuario",{
                required: 'El nombre de usuario es obligatorio',
                minLength:{
                  value: 5,
                  message: 'El nombre de Usuario debe contener como mínimo 5 carácteres'
                },
                maxLength:{
                  value: 20,
                  message: 'El nombre de Usuario debe contener como máximo 20 carácteres'
                },
                pattern:{
                  value: /^[A-Za-z][A-Za-z0-9]{4,19}$/,
                  message: 'El Usuario solo puede contener letras y numeros pero debe empezar con letras'
                }
              })}/>
              <Form.Text className="text-danger">
            {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control placeholder="Ingrese un email" 
              {...register("email", {
                required: "El email es obligatorio",
                pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'El email debe contener @ y terminar . com/es/com.ar u otra terminacion'
                }
              })}/>
              <Form.Text className="text-danger">
            {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" 
              {...register("password", {
                required: "El password es obligatorio",
                pattern:{
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: 'El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                }
              })}/>
              <Form.Text className="text-danger">
            {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </section>
        </Container>
    );
};

export default Registro;