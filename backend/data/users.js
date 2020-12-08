import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        isWholesaler: false
    },
    {
        name: 'Donna',
        email: 'donna@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
        isWholesaler: false
    },
    {
        name: 'Sally',
        email: 'Sally@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
        isWholesaler: true
    }
]

export default users