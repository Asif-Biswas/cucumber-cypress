
module.exports = {
    elements: {
        loginButton: {
            selector: '//*[@id="login-button"]',
            locateStrategy: 'xpath'
        },
        username: {
            selector: '//*[@id="username"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//*[@id="password"]',
            locateStrategy: 'xpath'
        }
    },
    value: {
        username: 'admin',
        password: 'admin'
    },
    url: {
        homepage: 'https://cart.com'
    },
    welcomeTitle: 'Welcome to Cart.com',
}