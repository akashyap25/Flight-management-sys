const {StatusCodes} = require("http-status-codes");

const {AirplaneService} = require("../services");
const {ErrorResponse,SuccessResponse} = require("../utils/common");

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data= airplane;
        return res
            .status(StatusCodes.CREATED)
            .json(airplane);
    } catch (error) {
        ErrorResponse.error= error;
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
        
    }
}

module.exports = {createAirplane};