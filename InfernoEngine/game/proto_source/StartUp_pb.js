/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var SharedEnums_pb = require('./SharedEnums_pb.js');
goog.exportSymbol('proto.com.inferno.protos.StartUp', null, global);
goog.exportSymbol('proto.com.inferno.protos.StartUpResponse', null, global);
goog.exportSymbol('proto.com.inferno.protos.StartUpResponse.PlayerStatus', null, global);
goog.exportSymbol('proto.com.inferno.protos.StartUpResponse.StartupResponseStatus', null, global);
goog.exportSymbol('proto.com.inferno.protos.VersionProto', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.inferno.protos.VersionProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.inferno.protos.VersionProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.inferno.protos.VersionProto.displayName = 'proto.com.inferno.protos.VersionProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.inferno.protos.VersionProto.prototype.toObject = function(opt_includeInstance) {
  return proto.com.inferno.protos.VersionProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.inferno.protos.VersionProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.VersionProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    majornumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minornumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    patchnumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.inferno.protos.VersionProto}
 */
proto.com.inferno.protos.VersionProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.inferno.protos.VersionProto;
  return proto.com.inferno.protos.VersionProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.inferno.protos.VersionProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.inferno.protos.VersionProto}
 */
proto.com.inferno.protos.VersionProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajornumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinornumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPatchnumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.inferno.protos.VersionProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.inferno.protos.VersionProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.inferno.protos.VersionProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.VersionProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMajornumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinornumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPatchnumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 majorNumber = 1;
 * @return {number}
 */
proto.com.inferno.protos.VersionProto.prototype.getMajornumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.com.inferno.protos.VersionProto.prototype.setMajornumber = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 minorNumber = 2;
 * @return {number}
 */
proto.com.inferno.protos.VersionProto.prototype.getMinornumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.com.inferno.protos.VersionProto.prototype.setMinornumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 patchNumber = 3;
 * @return {number}
 */
proto.com.inferno.protos.VersionProto.prototype.getPatchnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.com.inferno.protos.VersionProto.prototype.setPatchnumber = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.inferno.protos.StartUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.inferno.protos.StartUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.inferno.protos.StartUp.displayName = 'proto.com.inferno.protos.StartUp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.inferno.protos.StartUp.prototype.toObject = function(opt_includeInstance) {
  return proto.com.inferno.protos.StartUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.inferno.protos.StartUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.StartUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    udid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fbid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: (f = msg.getVersion()) && proto.com.inferno.protos.VersionProto.toObject(includeInstance, f),
    staticdatahash: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.inferno.protos.StartUp}
 */
proto.com.inferno.protos.StartUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.inferno.protos.StartUp;
  return proto.com.inferno.protos.StartUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.inferno.protos.StartUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.inferno.protos.StartUp}
 */
proto.com.inferno.protos.StartUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUdid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFbid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 4:
      var value = new proto.com.inferno.protos.VersionProto;
      reader.readMessage(value,proto.com.inferno.protos.VersionProto.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStaticdatahash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.inferno.protos.StartUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.inferno.protos.StartUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.inferno.protos.StartUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.StartUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUdid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFbid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.inferno.protos.VersionProto.serializeBinaryToWriter
    );
  }
  f = message.getStaticdatahash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string udid = 1;
 * @return {string}
 */
proto.com.inferno.protos.StartUp.prototype.getUdid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUp.prototype.setUdid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fbid = 2;
 * @return {string}
 */
proto.com.inferno.protos.StartUp.prototype.getFbid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUp.prototype.setFbid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.com.inferno.protos.StartUp.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUp.prototype.setPlatform = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional VersionProto version = 4;
 * @return {?proto.com.inferno.protos.VersionProto}
 */
proto.com.inferno.protos.StartUp.prototype.getVersion = function() {
  return /** @type{?proto.com.inferno.protos.VersionProto} */ (
    jspb.Message.getWrapperField(this, proto.com.inferno.protos.VersionProto, 4));
};


/** @param {?proto.com.inferno.protos.VersionProto|undefined} value */
proto.com.inferno.protos.StartUp.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.com.inferno.protos.StartUp.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.com.inferno.protos.StartUp.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string staticDataHash = 5;
 * @return {string}
 */
proto.com.inferno.protos.StartUp.prototype.getStaticdatahash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUp.prototype.setStaticdatahash = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.inferno.protos.StartUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.inferno.protos.StartUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.inferno.protos.StartUpResponse.displayName = 'proto.com.inferno.protos.StartUpResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.inferno.protos.StartUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.inferno.protos.StartUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.inferno.protos.StartUpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.StartUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startupstatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.inferno.protos.StartUpResponse}
 */
proto.com.inferno.protos.StartUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.inferno.protos.StartUpResponse;
  return proto.com.inferno.protos.StartUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.inferno.protos.StartUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.inferno.protos.StartUpResponse}
 */
proto.com.inferno.protos.StartUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.com.inferno.protos.StartUpResponse.StartupResponseStatus} */ (reader.readEnum());
      msg.setStartupstatus(value);
      break;
    case 3:
      var value = /** @type {!proto.com.inferno.protos.StartUpResponse.PlayerStatus} */ (reader.readEnum());
      msg.setPlayerstatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.inferno.protos.StartUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.inferno.protos.StartUpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.inferno.protos.StartUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.inferno.protos.StartUpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartupstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlayerstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.com.inferno.protos.StartUpResponse.StartupResponseStatus = {
  STARTUP_STATUS_NONE: 0,
  MAJOR_UPDATE: 1,
  MINOR_UPDATE: 2,
  NO_UPDATE: 3,
  SUCCESS: 4,
  FAIL: 5
};

/**
 * @enum {number}
 */
proto.com.inferno.protos.StartUpResponse.PlayerStatus = {
  PLAYER_STATUS_NONE: 0,
  PLAYER_NOT_FOUND: 1,
  PLAYER_FOUND: 2,
  PLAYER_BANNED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.com.inferno.protos.StartUpResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUpResponse.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StartupResponseStatus startupStatus = 2;
 * @return {!proto.com.inferno.protos.StartUpResponse.StartupResponseStatus}
 */
proto.com.inferno.protos.StartUpResponse.prototype.getStartupstatus = function() {
  return /** @type {!proto.com.inferno.protos.StartUpResponse.StartupResponseStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.com.inferno.protos.StartUpResponse.StartupResponseStatus} value */
proto.com.inferno.protos.StartUpResponse.prototype.setStartupstatus = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional PlayerStatus playerStatus = 3;
 * @return {!proto.com.inferno.protos.StartUpResponse.PlayerStatus}
 */
proto.com.inferno.protos.StartUpResponse.prototype.getPlayerstatus = function() {
  return /** @type {!proto.com.inferno.protos.StartUpResponse.PlayerStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.com.inferno.protos.StartUpResponse.PlayerStatus} value */
proto.com.inferno.protos.StartUpResponse.prototype.setPlayerstatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.com.inferno.protos.StartUpResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.com.inferno.protos.StartUpResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.com.inferno.protos);
