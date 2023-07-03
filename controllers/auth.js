// Dummy user data for testing
const users=[
    { id: 1, username: 'user12345', password: 'pass@1234' },
    { id: 2, username: 'user2', password: 'pass2@123456' }
];

export const login=async (req, res) => {
    const { username, password }=req.body;

    // Check username and password length
    if (username.length<6||username.length>12) {
        return res.status(400).json({ error: 'Username length should be between 6 and 12 characters' });
    }

    //checking password length
    if (password.length<6) {
        return res.status(400).json({ error: 'Password length should be at least 6 characters' });
    }

    // Check alphanumeric username
    if (!username.match(/^[a-zA-Z0-9]+$/)) {
        return res.status(400).json({ error: 'Username should be alphanumeric' });
    }

    // Authenticate user
    const user=users.find((user) => user.username===username&&user.password===password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // User logged in successfully
    return res.json({ message: 'Login successful' });
}