import * as fastcsv from 'fast-csv';
import * as fs from 'fs';

const writeCSV = (data: object[]): void => {
    const ws = fs.createWriteStream("transaction.csv", { flags: 'w' });

    fastcsv
        .write(data, { headers: true })
        .pipe(ws);
}

export default writeCSV;
