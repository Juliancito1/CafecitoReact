import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { consultaEditarProducto, obtenerProducto } from "../../helpers/queries";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EditarProducto = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if(respuesta)
      {
        setValue("nombreProducto", respuesta.nombreProducto);
        setValue("precio", respuesta.precio);
        setValue("categoria", respuesta.categoria);
        setValue("imagen", respuesta.imagen);
        setValue("descripcion", respuesta.descripcion);
      }
      else{
        Swal.fire(
          'Se produjo un error al intentar cargar los datos',
          `Intente realizar esta operacion mas tarde`,
          'error');
      }
        //todo: agregar el resto de los setValue
    });
  }, []);
  const onSubmit = (productoEditado) => {
    console.log("mi submit");
    consultaEditarProducto(productoEditado,id).then((respuesta) => {
      if(respuesta && respuesta.status === 200)
      {
        Swal.fire(
          'Producto actualizado',
          `El producto : ${productoEditado.nombreProducto} fue actualizado correctamente`,
          'success'
        )
        navegacion('/administrador')
      }else{
        Swal.fire(
          'Se produjo un error al intentar actualizar los datos',
          `El producto: ${productoEditado.nombreProducto} no fue actualizado, intente esta operacion mas tarde`,
          'error');
      }
    })
  };

  return (
    <Container className="mainPage mt-5">
      <h2 className="display-4">Editar Producto</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required:
                "El nombre del producto es obligatorio y debe comenzar con mayúscula",
              minLength: {
                value: 2,
                message:
                  "El nombre del Producto debe contener como mínimo 5 carácteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del Producto debe contener como máximo 100 carácteres",
              },
              pattern: {
                value: /^[A-Z][A-Za-z\s0-9]{1,99}$/,
                message:
                  "El nombre del producto solo puede contener letras y debe comenzar con mayúscula",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.producto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 50"
            {...register("precio", {
              required:
                "El precio del producto es obligatorio y debe contener solo numeros (precio mínimo: 50)",
              minLength: {
                value: 1,
                message:
                  "El precio del Producto debe contener como mínimo 2 digitos (mínimo 50)",
              },
              maxLength: {
                value: 4,
                message:
                  "El precio del Producto debe contener como máximo 4 digitos (máximo 9999)",
              },
              pattern: {
                value: /^([5-9][0-9]{1,2}|[1-9][0-9]{2,3}|9999)$/,
                message:
                  "El precio del producto solo puede contener numeros desde 50 hasta 9999",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.clarin.com/img/2013/10/13/las-medialunas-un-clasico-que___r1mfUtu3mg_1256x620.jpg"
            {...register("imagen", {
              required:
                "La URL de la Imagen es obligatoria y debe terminar con .jpg/.png/.svg",
              minLength: {
                value: 1,
                message:
                  "El precio del Producto debe contener como mínimo 2 digitos (mínimo 50)",
              },
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|svg)$/,
                message: "La URL de la Imagen debe terminar con .jpg/.png/.svg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            aria-label="Categoria"
            {...register("categoria", { required: "Debe elegir una opcion" })}
          >
            <option value="">Seleccione una Categoria</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Bebida Caliente">Bebida Caliente</option>
            <option value="Bebida Fria">Bebida Fria</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("descripcion", {
              required: "La Descripcion del producto es obligatoria",
              minLength: {
                value: 5,
                message:
                  "La Descripcion del Producto debe contener como mínimo 5 carácteres debe empezar con la primera letra mayúscula",
              },
              maxLength: {
                value: 200,
                message:
                  "La Descripcion del Producto debe contener como mínimo 200 carácteres",
              },
              pattern: {
                value: /^(?=.*[A-Z])[A-Za-z0-9:,.\s]{4,199}$/,
                message:
                  "La descripcion debe comenzar con mayuscula (puede usar minusculas, coma, puntos o dos puntos y usar espacio)",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarProducto;
