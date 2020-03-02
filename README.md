# News App

## Required Apps to install in your system/machine

Install `Yarn`

## To initialize/install fresh packages (after clone)

### `yarn`

**Run the `yarn` installation on root directory.**
It knows to distribute common package and put it to root `node_modules` so you don't have to install `node_modules` on each `packages/*`

## Available Scripts

In the project directory, you can run:

### `yarn start`

**Run the command in the root directory.**
Runs the server and client in the development mode.<br />
Open[http://localhost:1337](http://localhost:1337) to access the server endpoints in the browser
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

The server runs using `nodemon`
The client runs using `react-scripts`

### `yarn run bootstrap`

**Run the command in the root directory.**
Will remove and install `node_modules` on the `packages/*` directory and distributes common package into root `node_modules`
Note that this command will not remove root `node_modules`

### `yarn run raw`

**Run the command in the root directory.**

**Caution!** Will remove `node_modules` on the `packages/*` directory and root `node_modules`
