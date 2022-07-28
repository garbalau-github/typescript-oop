interface Reader {
  read(url: string): void;
}

interface Writer {
  write(data: string): void;
}

// implements = should realise all methods specified in the interfaces
class FileClient implements Reader, Writer {
  write(data: string) {
    console.log(`write ${data}`);
  }
  read(url: string) {
    console.log(`read ${url}`);
  }
}
