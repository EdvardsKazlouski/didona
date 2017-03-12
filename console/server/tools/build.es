import ChildProcess from 'child_process';
import { ncp } from 'ncp';
import path from 'path';

const babelCompilation = './node_modules/.bin/babel src/ -d dist';

ChildProcess.exec(babelCompilation, (error/*, stdout, stderr*/) => {
    if (error) {
        console.log(error);
    } else {
        ncp(path.join(__dirname, '../src/templates'), path.join(__dirname, '../dist/templates'), (error) => {
            if (error) {
                return console.error(error);
            }

            ncp(path.join(__dirname, '../../client/dist'), path.join(__dirname, '../dist/client'), (error) => {
                if (error) {
                    return console.error(error);
                }

                console.log('Server build success');
            });
        });
    }
});

