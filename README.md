this readme copy and edit for dva-cli
# oni-cli
[![NPM version](https://img.shields.io/npm/v/oni-cli.svg?style=flat)](https://npmjs.org/package/oni-cli)
[![NPM downloads](http://img.shields.io/npm/dm/oni-cli.svg?style=flat)](https://npmjs.org/package/oni-cli)

CLI for [dva](https://github.com/dvajs/dva) [umi](https://github.com/umijs/umi).

## update
### 2018.03.24 
- 1.update umi1.1 
- 2.add Nested Route
## Getting Started

Install, create and start.

```bash
# Install
$ npm install oni-cli -g

# Create app
$ oni new myapp

# Start app
$ cd myapp
$ npm start
```

## Commands

We have 2 commands: `new`  and `generate`(alias `g`).

### oni new <appName>

Create app with new directory.

#### Usage Examples

```bash
$ oni new myapp

$ oni new myapp mobile ( create web app )
```


### oni generate <type> <name> <?pagename> (short-cut alias: "g")

Generate page and component.

#### Usage Examples

```bash
$ oni g page home
#generate component '/src/pages/home/components/Table.js'
$ oni g component Table home  
#generate component '/src/components/Table.js'
$ oni g component Table 
```

## Generated File Tree

```bash
.
├── mock                   # mock data
    ├── user.js            # the mock data test
├── public                 # index.html
├── src                    # Source directory
    ├── assets             # Store images, icons, ...
    ├── components         # UI components
    ├── layouts            # layouts
    ├── models             # Dva global models    
    ├── pages              # all pages (auto create Route)
    ├── plugins            # umi plugins
    ├── services           # Used for communicate with server
    └── utils              # Utils
        ├── request.js     # A util wrapped dva/fetch
        └── config.js      # global config (name,api...)
    
    ├── global.less        # global less
├── .editorconfig          #
├── .eslintrc              # Eslint config
├── .umirc.js              # umi
├── .umirc.mock.js         # umi mock
├── .webpackrc.js          # webpackrc extend(lick alias prexy)
├── .gitignore             #
└── package.json           #
```

## Configuration

oni-cli use [umi](https://github.com/umijs/umi) for build and server

## License

[MIT](https://tldrlegal.com/license/mit-license)
