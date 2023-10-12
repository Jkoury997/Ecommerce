module.exports = {
    home: (req, res) => {
      res.render("frontend/home")
    },
    showLogin: (req, res) => {
      const errors = req.session.errors;
      const oldData = req.session.oldData;
      req.session.errors = null;
      req.session.oldData = null;
      res.render("frontend/auth/login",{
        errors: errors ? errors : null,
        oldData: oldData ? oldData : null,
        userData: req.session.userData ? req.session.userData : null
      });
    },
    login:(req, res) => {
      console.log(req.body)
      res.render("frontend/auth/login")
    },
    showRegister: (req, res) => {
      const errors = req.session.errors;
      const oldData = req.session.oldData;
      req.session.errors = null;
      req.session.oldData = null;
      res.render("frontend/auth/register",{
        errors: errors ? errors : null,
        oldData: oldData ? oldData : null,
        userData: req.session.userData ? req.session.userData : null
      });
    },
    register: (req, res) => {
      console.log(req.body)
      res.render("frontend/auth/register")
    },
  };
