const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('./middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const userController = require('../api/controller/userController');
const { jwtSecret } = require('../../config/default');

const User = require('./models/User');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
router.route('/totaluser').get(function(req, res){
  User.countDocuments({ }, function(err, result) {
     if (err) {
       res.send(err);
     } else {
       res.json(result);
     }
   });
 });
<<<<<<< HEAD
=======

router.get('/displayevent', auth, async (req, res) => {
    //const user = jwt.verify(req.body.token, jwtSecret);
    const userId = req.user.id;
    console.log(req.user.id);
   User.findById(
      {_id: userId},
  ).then((founduser) => {
    res.json({event: founduser.registeredEvents});
    //req.user = user;
    //console.log(founduser);
    //res.redirect("http://localhost:3000/EmailVerified"); });

})
});
>>>>>>> f46e77cf9ffd78b2f274fa30e903712d2e216f3f

router.get('/displayevent', auth, async (req, res) => {
    //const user = jwt.verify(req.body.token, jwtSecret);
    const userId = req.user.id;
    console.log(req.user.id);
   User.findById(
      {_id: userId},
  ).then((founduser) => {
    res.json({event: founduser.registeredEvents});
    //req.user = user;
    //console.log(founduser);
    //res.redirect("http://localhost:3000/EmailVerified"); });

})
});

router.get('/verify/:token',async(req,res)=> {
  try {
    const user = jwt.verify(req.params.token, jwtSecret);
    //console.log(user);
    User.findOneAndUpdate(
      { _id: user.user.id },
      { isVerified: true }
    ).then((founduser) => {
      req.user = user;
      //console.log(founduser);
      res.redirect("http://localhost:3000/EmailVerified"); });

  } catch (e) {
    console.log(e);
  }

});

//desc authenticate user and get token

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    //try {
      //see if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid User' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid User' }] });
      }
       // Make sure the user has been verified
      //  if (!user.isVerified){ 
      //   return res.status(401).send({ type: 'not-verified', msg: 'Your account has not been verified' });
      //  }

       //res.send({ token: generateToken(user), user: user.toJSON() });
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    //} catch (err) {
      //console.error(err.message);
      //res.status(500).send('Server error');
    //}
  }
);
router.get('/confirmation', userController.confirmationPost);
router.get('/resend', userController.resendTokenPost);
module.exports = router;