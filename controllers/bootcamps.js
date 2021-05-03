const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// @route GET /api/v1/bootcamps
// @desc Get all bootcamps
// @access Public 
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });
    next(err);
    
});

// @route GET /api/v1/bootcamps/:id
// @desc Get single bootcamps
// @access Public 
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    
    const bootcamp = await Bootcamp.findById(req.params.id);
    if(!bootcamp)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));

    res.status(200).json({
        success: true,
        data: bootcamp
    });
    next(err);

});

// @route POST /api/v1/bootcamps
// @desc Create new bootcamps
// @access Private 
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    
    const bootcamp = await Bootcamp.create(req.body); // se nao tiver um paraemtro no model, ele eh ignorado
    res.status(201).json({
        success: true,
        data: bootcamp
    });
    next(err);
    
});

// @route PUT /api/v1/bootcamps/:id
// @desc Update single bootcamps
// @access Private 
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!bootcamp)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    
    res.status(200).json({ success: true, data: bootcamp });
    next(err);
});

// @route DELETE /api/v1/bootcamps/:id
// @desc Delete bootcamps
// @access Private 
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    
    res.status(200).json({ success: true, data: {} });
    next(err);
        
});