const passport = require('../config/passport');
const User = require('../models/user');

async function getUser(req, res, next) {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
}

async function getUsers(req, res, next) {
    const users = await User.find({});
    res.status(200).json(users);
}

async function editUser(req, res, next) {
    const newUser = req.body;
    const validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(newUser.email);
    const duplicateEmail = await User.find({ email: newUser.email.trim() });
    const validPhone = /^[9][0-9]{8}$/.test(newUser.phone);
    const { userId } = req.params;
    if (newUser.firstName.trim().length == 0 || newUser.lastName.trim().length == 0 || newUser.email.trim().length == 0 || newUser.gender.trim().length == 0 || newUser.phone.trim().length == 0 || newUser.birthday == null) {
        res.status(500).json({ text: 'Complete todos los campos' });
    } else if (!validEmail) {
        res.status(500).json({ text: 'Ingrese un email válido' });
    } else if (duplicateEmail.length > 0 && newUser.email != req.user.email) {
        res.status(500).json({ text: 'Ya se encuentra registrado este email' });
    } else if (!validPhone) {
        res.status(500).json({ text: 'Ingrese un celular válido' });
    } else {
        await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ text: 'Usuario actualizado correctamente' });
    }
}

async function register(req, res, next) {
    const { firstName, lastName, email, password, gender, phone, birthday, creationDate } = req.body;
    const validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    const duplicateEmail = await User.find({ email: email.trim() });
    const validPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);
    const validPhone = /^[9][0-9]{8}$/.test(phone);
    if (firstName.trim().length == 0 || lastName.trim().length == 0 || email.trim().length == 0 || password.trim().length == 0 || phone.trim().length == 0) {
        res.status(500).json({ text: 'Complete todos los campos' });
    } else if (!validEmail) {
        res.status(500).json({ text: 'Ingrese un email válido' });
    } else if (duplicateEmail.length > 0) {
        res.status(500).json({ text: 'Ya se encuentra registrado este email' });
    } else if (!validPassword) {
        res.status(500).json({ text: 'Ingrese una contraseña válida' });
    } else if (!validPhone) {
        res.status(500).json({ text: 'Ingrese un celular válido' });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            res.status(500).json({ text: 'Email ya registrado' });
        }
        const newUser = new User({ firstName, lastName, email, password, gender, phone, birthday, creationDate });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.status(200).json({ text: 'Usuario registrado satisfactoriamente' });
    }
}

async function login(req, res, next) {
    res.status(200).json({ text: `${req.user.firstName} ${req.user.lastName}`, id: req.user._id });
}

async function logout(req, res, next) {
    req.logout();
    res.status(200).json({ text: 'Sesión terminada' });
}

async function deleteUser(req, res, next) {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ success: true });
}

module.exports = {
    getUser,
    getUsers,
    editUser,
    login,
    register,
    logout,
    deleteUser
}