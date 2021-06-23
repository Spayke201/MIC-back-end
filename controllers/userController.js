const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middleware/async');
const Motorista = require('../models/Motorista');
const Analista = require('../models/Analista');
const Admin = require('../models/Admin');
const Usuario = require('../models/Usuario');
const Carga = require('../models/Carga');
const Caminhao = require('../models/Caminhao');
const Deposito = require('../models/Deposito');
const Agendamento = require('../models/Agendamento');


// POST - insere algum user
// /api/inserirUser
exports.createUser = asyncHandler(async (req, res, next) => {
    console.log(req.body.data)
    if (req.body.data.cpf === ""
    || req.body.data.telefone === ""
    || req.body.data.imgUrl ===""
    || req.body.data.email ==="") {
        console.log('ENTROU AQUI')
        return next(new ErrorResponse(`Precisa preencher todos os campos`, 403));
    }

    const user = await Usuario.create(req.body.user); // se nao tiver um paraemtro no model, ele eh ignorado
    req.body.data.idUsuario = user._id;

    //console.log(req.body);
    //console.log(user);

    const user_id = user._id;

    if (req.body.user.tipoUsuario === 'Motorista'){
        const typeUser = await Motorista.create(req.body.data);
        const user = await Usuario.findByIdAndUpdate(user_id, {
            idUsuario: typeUser._id
        }, 
        {
            new: true,
            runValidators: true
        });
        console.log(user);
        res.status(201).json({
            success: true,
            user: user,
            data: typeUser
        });
    }
    else if (req.body.user.tipoUsuario === 'Analista'){
        const typeUser = await Analista.create(req.body.data);
        const user = await Usuario.findByIdAndUpdate(user_id, {
            idUsuario: typeUser._id
        }, 
        {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            success: true,
            user: user,
            data: typeUser
        });
    }
    else if (req.body.user.tipoUsuario === 'Admin'){
        const typeUser = await Admin.create(req.body.data);
        const user = await Usuario.findByIdAndUpdate(user_id, {
            idUsuario: typeUser._id
        }, 
        {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            success: true,
            user: user,
            data: typeUser
        });
    }
    else {
        return next(new ErrorResponse(`Invalid create parameters`, 404));
    }
    // usar error response
    //next(err);
    
});

// POST - inserir carga
// /api/inserirCarga
exports.createCarga = asyncHandler(async (req, res, next) => {
    
    const carga = await Carga.create(req.body); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        data: carga
    });

    // usar error response
    //next(err);
    
});

// POST -> criar deposito
// /api/inserirDeposito
exports.createDepositos = asyncHandler(async (req, res, next) => {
    
    const deposito = await Deposito.create(req.body); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        data: deposito
    });

    // usar error response
    //next(err);
    
});

// POST - inserir caminhao
// /api/inserirCaminhao
exports.createCaminhao = asyncHandler(async (req, res, next) => {
    
    const caminhao = await Caminhao.create(req.body); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        data: caminhao
    });

    // usar error response
    //next(err);
    
});

// POST - inserir agendamento
// /api/inserirAgendamento
exports.createAgendamento = asyncHandler(async (req, res, next) => {
    
    const agendamento = await Agendamento.create(req.body); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        data: agendamento
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar todos agendamentos
// /api/agendamentos
exports.getAgendamentos = asyncHandler(async (req, res, next) => {
    
    const agendamentos = await Agendamento.find(); // se nao tiver um paraemtro no model, ele eh ignorado

    res.status(201).json({
        success: true,
        agendamentos: agendamentos
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar agendamentos do motorista
// /api/agendamento/:id
exports.getAgendamento = asyncHandler(async (req, res, next) => {
    
    const agendamento = await Agendamento.find({
        idMotorista: req.params.id,
        finalizado: true
    }); // se nao tiver um paraemtro no model, ele eh ignorado

    res.status(201).json({
        success: true,
        agendamentos: agendamento
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar 1 USUARIO
// /api/users
exports.getUserInicial = asyncHandler(async (req, res, next) => {
    
    const usuario = await Usuario.findById(req.params.id);

    res.status(201).json({
        success: true,
        usuario: usuario
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar todos usuarios
// /api/users
exports.getUsers = asyncHandler(async (req, res, next) => {
    
    const motoristas = await Motorista.find(); // se nao tiver um paraemtro no model, ele eh ignorado
    const analistas = await Analista.find();

    res.status(201).json({
        success: true,
        motoristas: motoristas,
        analistas: analistas
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar um usuario
// /api/user/:id
exports.getUser = asyncHandler(async (req, res, next) => {
    if (req.params.type === 'motorista'){
        const user = await Motorista.findById(req.params.id);
        res.status(201).json({
            success: true,
            user: user
        });
    }
    else if (req.params.type === 'admin'){
        const user = await Admin.findById(req.params.id);
        res.status(201).json({
            success: true,
            user: user
        });
    }
    else if (req.params.type === 'analista'){
        const user = await Analista.findById(req.params.id);
        res.status(201).json({
            success: true,
            user: user
        });
    }
    else {
        return next(new ErrorResponse(`Invalid get user parameters`, 404));
    }

    // usar error response
    //next(err);
    
});

// GET -> pegar um usuario
// /api/userPosition/:id
exports.getUserPosition = asyncHandler(async (req, res, next) => {
    console.log(req.params.id);
    const user = await Motorista.findById(req.params.id);
    let idUser = user.idUsuario;
    let imgUrl = user.imgUrl;
    const usuario = await Usuario.findById(idUser);

    const carga = await Agendamento.find({ idMotorista: req.params.id,
                                            status: true,
                                            finalizado: false });

    //console.log(carga)

    const data = {
        imgUrl,
        coords: usuario.coords,
        cargoCoords: carga[0].coords
    }

    console.log(data);

    res.status(201).json({
        success: true,
        usuario: data
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar todos depositos
// /api/depositos
exports.getDepositos = asyncHandler(async (req, res, next) => {
    
    const depositos = await Deposito.find(); // se nao tiver um paraemtro no model, ele eh ignorado
    res.status(201).json({
        success: true,
        count: depositos.length,
        data: depositos
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar todos as cargas
// /api/cargas
exports.getCargas = asyncHandler(async (req, res, next) => {
    
    const carga = await Carga.find(); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        count: carga.length,
        data: carga
    });

    // usar error response
    //next(err);
    
});

// GET -> pegar todos os caminhoes
// /api/caminhoes
exports.getCaminhao = asyncHandler(async (req, res, next) => {
    
    const caminhao = await Caminhao.find(); // se nao tiver um paraemtro no model, ele eh ignorado
    
    res.status(201).json({
        success: true,
        count: caminhao.length,
        data: caminhao
    });

    // usar error response
    //next(err);
    
});

// GET - efetua login
// /api/login
exports.login = asyncHandler(async (req, res, next) => {
    
    const user = await Usuario.find({ login: req.body.login }); // se nao tiver um paraemtro no model, ele eh ignorado
    
    if  (user[0].senha != req.body.senha){
        return next(new ErrorResponse(`Invalid username or password`, 403));
    }

    res.status(201).json({
        success: true,
        type: user[0].tipoUsuario,
        id: user[0]._id,
        idUsuario: user[0].idUsuario
        
    });
});

// PUT -> alterar o agendamento
// /api/agendamento/:id
exports.updateAgendamentos = asyncHandler(async (req, res, next) => {
    
    const agendamentos = await Agendamento.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }); // se nao tiver um paraemtro no model, ele eh ignorado

    res.status(201).json({
        success: true,
        agendamentos: agendamentos
    });

    // usar error response
    //next(err);
    
});

// PUT -> alterar status e posicao usuario
// /api/user/:id
exports.updateUser = asyncHandler(async (req, res, next) => {
    
    const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }); // se nao tiver um paraemtro no model, ele eh ignorado

    res.status(201).json({
        success: true,
        user: user
    });

    // usar error response
    //next(err);
    
});