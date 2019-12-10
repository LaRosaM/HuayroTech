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
        req.flash('error_msg', 'Por favor, complete todos los campos');
    } else if (!validEmail) {
        req.flash('error_msg', 'Por favor, ingrese un email válido');
    } else if (duplicateEmail.length > 0 && newUser.email != req.user.email) {
        req.flash('error_msg', 'Este email ya se encuentra registrado. Por favor, ingrese otro email');
    } else if (!validPhone) {
        req.flash('error_msg', 'El número de celular debe empezar con 9 y contener 8 dígitos');
    } else {
        await User.findByIdAndUpdate(userId, newUser);
        req.flash('success_msg', 'Datos guardados satisfactoriamente');
        res.redirect('/');
    }
}

async function register(req, res, next) {
    const { firstName, lastName, email, password, gender, phone, birthday, creationDate } = req.body;
    const validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    const duplicateEmail = await User.find({ email: email.trim() });
    const validPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);
    const validPhone = /^[9][0-9]{8}$/.test(phone);
    if (firstName.trim().length == 0 || lastName.trim().length == 0 || email.trim().length == 0 || password.trim().length == 0 || phone.trim().length == 0) {
        req.flash('error_msg', 'Por favor, complete todos los campos');
    } else if (!validEmail) {
        req.flash('error_msg', 'Por favor, ingrese un email válido');
    } else if (duplicateEmail.length > 0) {
        req.flash('error_msg', 'Este email ya se encuentra registrado. Por favor, ingrese otro email');
    } else if (!validPassword) {
        req.flash('error_msg', 'La contraseña debe contener al menos una mayúscula, una minúscula y un caracter numérico');
    } else if (!validPhone) {
        req.flash('error_msg', 'El número de celular debe empezar con 9 y contener 8 dígitos');
    } else {
        const newUser = new User({ firstName, lastName, email, password, gender, phone, birthday, creationDate });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Registrado satisfactoriamente');
        res.redirect('/');
    }
}

/* async function login(req, res, next) {
    res.status(200).json({ text: `${req.user.firstName} ${req.user.lastName}`, id: req.user._id });
} */

async function logout(req, res, next) {
    req.logout();
    req.flash('success_msg', 'Usted ha cerrado sesión correctamente');
    res.redirect('/');
}

async function deleteUser(req, res, next) {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    req.flash('success_msg', 'Usuario eliminado satisfactoriamente');
    res.redirect('/');
}

module.exports = {
    getUser,
    getUsers,
    editUser,
    //login,
    register,
    logout,
    deleteUser
}