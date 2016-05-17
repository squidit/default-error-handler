const boom = require('boom');

module.exports = (req, reply, includePayload) => {
  return err => {
    const wrappedError = boom.wrap(err);
    if (process.env.NODE_ENV !== 'test') {
      if (includePayload) {
        wrappedError.requestPayload = req.payload;
      }

      req.log.error(wrappedError);
    }
    reply(wrappedError);
  };
};
