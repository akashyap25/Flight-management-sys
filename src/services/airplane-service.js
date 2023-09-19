const {AirplaneRepository} = require('../repositories');
const {Logger } = require("../config");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
        
    } catch (error) {
        Logger.error("Error at createAirplane service: ", error);
        throw error;
    }
}

module.exports = {createAirplane}