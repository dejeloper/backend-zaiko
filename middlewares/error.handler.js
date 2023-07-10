function logErrors(err, req, res, next) {
  // console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    // stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    const { payload, statusCode } = output;
    res.status(statusCode).json({
      success: false,
      data: [],
      message: payload.message,
      count: 0,
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
