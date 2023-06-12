const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO
/*
    Peticion GET obtener un listado de elementos o un elemento
    Peticion POST crear un elemento
    Peticion PUT editar un elemento
    Peticion DELETE borrar un elemento
*/

export const login = async (usuario) => {
    console.log(usuario)

    try{
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        //buscar si en la listaUsuarios hay un usuario como el que recibi por parametro
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
        if(usuarioBuscado)
        {
            console.log('Email encontrado');
            //verificar el password
            if(usuarioBuscado.password === usuario.password)
            {
                console.log('Encontramos al usuario')
                return usuarioBuscado;
            }else{
                console.log('password incorrecto')
                return null
            }
        }else{
            console.log('Email incorrecto')
            return null
        }
    }catch(error)
    {
        console.log(error)
    }
}

export const obtenerProductos = async () => {
    try{
        const respuesta = await fetch(URL_PRODUCTO);
        const listaProductos = await respuesta.json();
        return listaProductos;

    }catch(error)
    {
        console.log(error)
    }
}
export const obtenerProducto = async (id) => {
    try{
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
        const productoEditar = await respuesta.json();
        return productoEditar;

    }catch(error)
    {
        console.log(error)
    }
}

export const eliminarProducto = async (id) => {
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`,{
            method: "DELETE"
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }

}
export const consultaCrearProducto = async (producto) => {
    try {
        const respuesta = await fetch(URL_PRODUCTO,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }

}