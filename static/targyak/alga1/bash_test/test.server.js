// eslint-disable-next-line @typescript-eslint/no-var-requires
import { exec } from 'node:child_process'

exec('./test.bash', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`)
        return
    }
    if (stderr) {
        console.error(`exec error: ${err}`)
        return
    }
    if (stdout.split("\n")[1]=="0") {
        console.log("\x1b[33mMinden teszt sikeres.\x1b[30m");
        return
    } 
    console.warn("\x1b[31mVan hibás teszteset.\x1b[30m");
})