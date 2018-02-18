/* const Ejercicio = require('../models/ejercicio.model');

module.exports.index = (req, res, next) => {
  Ejercicio.find({}).then((ejercicios) => {
    res.render('ejercicios/index', {
      ejercicios: ejercicios
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('ejercicios/new', {
    ejercicios: new Ejercicio()
  });
};

module.exports.create = (req, res, next) => {
  const ejercicioData = req.body;

  const newEjercicio = new Ejercicio(ejercicioData);

  newEjercicio.save().then((ejercicio) => {
    res.redirect('/ejercicios');
  })
};


module.exports.edit = (req, res, next) => {
  Ejercicio.findById(req.params.id).then((ejercicio) => {
    res.render('ejercicios/new', {
      ejercicios: ejercicio
    });
  });
};

module.exports.update = (req, res, next) => {
  const ejercicioId = req.params.id;
  const updates = {
      name: req.body.name,
      modulo: req.body.modulo,
      iteraciones: req.body.iteraciones,
      enlace: req.body.enlace,
  };
  Ejercicio.findByIdAndUpdate(ejercicioId, updates).then((ejercicio) => {
    res.redirect('/ejercicios');
  });
};

module.exports.delete = (req, res, next) => {
  const ejercicioId = req.params.id;

  Ejercicio.findByIdAndRemove(ejercicioId).then((ejercicio) => {
    return res.redirect('/ejercicios');
  });
};

*/