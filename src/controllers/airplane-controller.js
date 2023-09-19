const {StatusCodes} = require("http-status-codes");

const {AirplaneService} = require("../services");
const { AirplaneController } = require(".");

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
            .status(StatusCodes.CREATED)
            .json({
                sucess:true,
                message:"Airplane created successfully",
                data:airplane,
                error: {}
            })
    } catch (error) {
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({
                    sucess:false,
                    message:"Something went wrong",
                    data:{},
                    error: error
                  })
        
    }
}

module.exports = {createAirplane};