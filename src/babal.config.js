module.exports = {
    presets: [
        // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset',
    '@vue/app',
    ],
    env: {
        'development': {
            // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
            // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
            // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
            'plugins': ['dynamic-import-node']
        },
        test: {
            presets: [
                ['@babel/preset-env', { targets: { node: true } }],
                "stage-0"
            ],
            plugins: [
                "transform-class-properties",
                "transform-decorators",
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-object-assign',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};
