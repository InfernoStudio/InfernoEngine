var playerModule = require('../models/player');
var userProto = require('../proto_source/User_pb');
var requestProto = require('../proto_source/Request_pb');
var SharedEnums = require('../proto_source/SharedEnums_pb');
var uuidGenerator = require('../../encryption/UuidGenerator');


async function processRequest(request, responses) {

    var userCreateObject = userProto.UserCreate.deserializeBinary(request.getPayload());
    var requestId = request.getId();
    var response = new requestProto.Response();
    var userCreateResponse = new userProto.CreateUserResponseProto();

    var name = userCreateObject.getName();
    var fb_id = userCreateObject.getFbId();
    var udid = userCreateObject.getUdid();
    var platform = userCreateObject.getPlatform();

    response.setId(requestId);
    response.setType(SharedEnums.ResponseType.CREATE_NEW_USER_RESPONSE);
    response.setStatus(SharedEnums.ResponseStatus.FAIL);

    var players = null;
    var found = false;

    try {
        players = await playerModule.findPlayer({ $or: [{ fb_id: fb_id }, { udid: udid }] });
    }
    catch (error) {
        throw (error);
    }

    if (players != undefined && players.length > 0) {
        player = players[0]
        console.log("Player found : " + player);
        found = true;
        response.setStatus(SharedEnums.ResponseStatus.USER_EXIST);
        userCreateResponse.setMessage(`Player with facebookid : ${fb_id} or ${udid} already exist`);
        userCreateResponse.setStatus(SharedEnums.ResponseStatus.USER_EXIST);
        userCreateObject.setPayload(null);
        response.setPayload(userCreateResponse.serializeBinary())
        responses.addGameResponse(response.serializeBinary())//callback(error, response.serializeBinary());
    }
    else {
        console.log("Creating player : " + name);
        var userId = uuidGenerator.getUuid();
        var record = await playerModule.createPlayer({
            uid: userId,
            name: name,
            fb_id: fb_id,
            udid: udid,
            xp: 100,
            gold: 1000,
            last_login: new Date(),
            platform: platform
        })
        .catch(reason => console.log("Error occured while creating player : " + reason));

        console.log("Creating player success with player: " + record);
        var user = new userProto.User();
        user.setId(record.uid);
        user.setName(record.name);
        user.setFbId(record.fb_id);
        user.setUdid(record.udid);
        user.setPlatform(record.platform);
        response.setStatus(SharedEnums.ResponseStatus.SUCCESS);
        userCreateResponse.setMessage(`Player with facebookid : ${fb_id} or ${udid} successfully created`);
        userCreateResponse.setStatus(SharedEnums.ResponseStatus.SUCCESS);
        userCreateResponse.setPayload(user.serializeBinary());
        response.setPayload(userCreateResponse.serializeBinary());
        responses.addGameResponse(response.serializeBinary());

    }
    console.log("Finished creating player");
    return responses;
}

module.exports = {
    processRequest,
}