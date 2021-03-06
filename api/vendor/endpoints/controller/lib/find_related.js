module.exports = function (relation, subRelations) {
  if (subRelations) {
    subRelations = {withRelated:subRelations};
  }
  return function (req, res, next) {
    req.model.related(relation).fetch(subRelations).then(function (result) {
      res.data = result;
      next();
    }).catch(function (e) {
      res.code = 400;
      res.data = {
        errors: [
          { message : e, status : "Bad Request" }
        ]
      };
      next();
    });
  };
};
