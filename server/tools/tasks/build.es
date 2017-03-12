import ChildProcess from 'child_process';
import CLC from 'cli-color';
import { ncp } from 'ncp';
import path from 'path';

const babelCompilation = './node_modules/.bin/babel src/ -d dist';

ChildProcess.exec(babelCompilation, (error/*, stdout, stderr*/) => {
    if (error) {
        console.log(CLC.red(error));
    } else {
        ncp(path.join(__dirname, '../../src/static'), path.join(__dirname, '../../dist/static'), (error) => {
            if (error) {
                return console.error(error);
            }

            console.log(CLC.blue('\nServer build success\n'));
        });
    }
});
