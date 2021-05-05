const express = require('express');
const {
    updateAgendamentos,
    updateUser, 
    createUser,
    createCarga,
    createDepositos,
    createCaminhao,
    createAgendamento,
    getAgendamentos,
    getAgendamento,
    getUsers,
    getUser,
    getUserInicial,
    getCargas,
    getDepositos,
    getCaminhao,
    login } = require('../controllers/userController');

const router = express.Router();

/*
router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);
    */

router.route('/inserirUser').post(createUser);
router.route('/inserirCarga').post(createCarga);
router.route('/inserirDeposito').post(createDepositos);
router.route('/inserirCaminhao').post(createCaminhao);
router.route('/inserirAgendamento').post(createAgendamento);

router.route('/user/:id').get(getUserInicial);
router.route('/agendamento/:id').get(getAgendamento);
router.route('/agendamentos').get(getAgendamentos);
router.route('/users').get(getUsers);
router.route('/depositos').get(getDepositos);
router.route('/cargas').get(getCargas);
router.route('/caminhoes').get(getCaminhao);
router.route('/user/:type/:id').get(getUser);

router.route('/login').post(login);

router.route('/agendamento/:id').put(updateAgendamentos);
router.route('/user/:id').put(updateUser);

module.exports = router;