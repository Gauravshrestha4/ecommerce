const env = process.env || 'development'

if((env === 'test') || (env === 'development')){
    const config = require('./config.json')
    config_env = config[env]

    Object.keys(config_env).forEach((key) => {
        process.env[key] = config_env[key]
    })
}
