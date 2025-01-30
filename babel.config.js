module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: { node: 'current' },
            modules: 'auto'
        }],
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ],
    // Add any plugins you need
    plugins: []
};