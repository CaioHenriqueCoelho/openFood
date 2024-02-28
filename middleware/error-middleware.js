
function errorMiddleware(
  err,
  req,
  res,
  next
) {
  if (err instanceof Error) {
    res.status(400).json(err.message);
    next();
  }

}
module.exports = errorMiddleware;