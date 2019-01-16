module.exports = {
    "extends": "airbnb-base",
    "plugins" : [
        "import"
    ],
    "env" : {
        "browser" : true
    },
    "rules":{
        'linebreak-style': ['error', 'windows'],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
    }
}