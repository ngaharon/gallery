var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://haronngaira:harondev06@cluster0.ik5rz0h.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://haronngaira:harondev06@cluster0.ik5rz0h.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://haronngaira:harondev06@cluster0.ik5rz0h.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    //mongodb+srv://haronngaira:harondev06@cluster0.ik5rz0h.mongodb.net/
}
module.exports = config;
