"use strict";
// implements = should realise all methods specified in the interfaces
class FileClient {
    write(data) {
        console.log(`write ${data}`);
    }
    read(url) {
        console.log(`read ${url}`);
    }
}
