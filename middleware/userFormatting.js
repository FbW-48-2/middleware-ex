
export const capitalizeUserName = (req, res, next) => {
  let { firstName, lastName } = req.body
  req.body.firstName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}`;
  req.body.lastName = `${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
  next();
};
export const sortFavBands = (req, res, next) => {
  let sort = req.body.favoriteBands.sort();
  req.body.favoriteBands = sort;
  next();
};
export const numsToNumber = (req, res, next) => {
  let { fbw, age } = req.body;
  req.body.fbw = +fbw;
  req.body.age = +age;
  res.json(req.body);
};