# Book Notes API

API for the Book Notes application.

## Configuration

Rename the file **config/config.env.env** to **config.env** and put your configuration.

```
# The port to use
PORT=5000

# The running environment: dev or prod
NODE_ENV=dev

# The database configuration
DB_USER=thedatabaseuser
DB_HOST=thedatabasehost
DB_DATABASE=thedatabasename
DB_PASSWORD=thedatabasepassword
DB_PORT=thedatabaseport
```

## Install dependencies

```
npm i
```

## Run App

```
# Run in dev mode
./run dev

# Or run in prod mode
./run
```

# Generate documentation

```
./docgen
```

The documentation files will be created in the **public** folder.

- Version: 1.0.0
- License: MIT
- Author: Raphaël Ragoomundun
