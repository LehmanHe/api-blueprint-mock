# Api-blueprint-mock

## Project Structure

Run `grunt` to start server, port `3333`.

### Api

Interface definition in the `apis/` directory.
When the files suffixed by `.md` changes the server will restart to add new interface.

### Get Files

Now I use http 302 with header including location to realize getting file.
It is not a good way as we destroy the api doc, maybe some day we can resolve this problem.

### Static Files

For example we can get file by `http://127.0.0.1:3333/allthethings.png` .
We use this for the last section.

### Example

In `Example` directory.

## Language

[apiBluePrint](https://apiblueprint.org/)

[apiBluePrint Github](https://github.com/apiaryio/api-blueprint)

[Language specification](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md)


**[More Examples](https://github.com/apiaryio/api-blueprint/tree/master/examples)**

## Mock Framework

[Drakov](https://github.com/Aconex/drakov)
