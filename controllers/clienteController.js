const Cliente = require('../models/Cliente')

// funcion agregar clientes

exports.agregarClientes = async (req, res) =>
{
  try
  {
    let clientes
    clientes = new Cliente(req.body)
    await clientes.save()
    res.json(clientes)

  } catch (error){
    console.log(error)
    res.status(500).send("hubo un error al agregar un cliente")
  }
}


// funcion buscar clientes 
exports.mostrarClientes = async (req, res) =>{
  try{
    const clientes = await Cliente.find()
    res.json(clientes)
  } catch (error)
  {
    console.log(error)
    res.status(500).send("hubo un error al mostrar los clientes");
  }
}


