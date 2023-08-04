function errorHandler(err, req, res, next) {
  let status;
  let message;

  switch (err.name) {
    case "UsernameRequired":
      status = 400;
      message = "Username is required";
      break;

    case "EmailRequired":
      status = 400;
      message = "Email is required";
      break;

    case "PasswordRequired":
      status = 400;
      message = "Password is required";
      break;

    case "EmailPasswordInvalid":
      status = 401;
      message = "Invalid email / password";
      break;

    case "InvalidToken":
      status = 401;
      message = "Login required";
      break;

    case "NotFound":
      status = 404;
      message = "Not found";
      break;

    case 'Forbidden':
      status = 403
      message = 'You are not authorized'
      break;

    case 'Duplicated':
        status = 409
        message = 'Already existed'
        break;

    case 'BookmarkDuplicated':
        status = 409
        message = 'Already bookmarked'
        break;

    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;

    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.errors[0].message;
      break;

    default:
      status = 500;
      message = "Internal server error";
      break;
  }

  return res.status(status).json({ message });
  next();
}

module.exports = errorHandler;
