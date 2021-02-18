const main = () => {
    const queenCounts = 8;
    const genRow = () => new Array(queenCounts).fill('.');
    const genPlate = () => {
        const plate = genRow();
        return plate.map((row) => {
            row = genRow();
            return row;
        });
    };
    let answers = genRow().map((col, i) => {
        col = genPlate();
        col[0][i] = 'Q';
        return col;
    });
    const clone = (a) => {
        return JSON.parse(JSON.stringify(a));
    }
    const checkPositionSafe = (plate, x, y) => {
        let safe = true;
        for (let i = 0; i < queenCounts; i++) {
            if (plate[x + i] !== void 0 && plate[x + i][y] === 'Q') {
                safe = false;
                break;
            } else if (plate[x - i] !== void 0 && plate[x - i][y] === 'Q') {
                safe = false;
                break;
            } else if (plate[x] !== void 0 && plate[x][y + i] === 'Q') {
                safe = false;
                break;
            } else if (plate[x] !== void 0 && plate[x][y - i] === 'Q') {
                safe = false;
                break;
            } else if (plate[x + i] !== void 0 && plate[x + i][y + i] === 'Q') {
                safe = false;
                break;
            } else if (plate[x - i] !== void 0 && plate[x - i][y - i] === 'Q') {
                safe = false;
                break;
            } else if (plate[x + i] !== void 0 && plate[x + i][y - i] === 'Q') {
                safe = false;
                break;
            } else if (plate[x - i] !== void 0 && plate[x - i][y + i] === 'Q') {
                safe = false;
                break;
            }
        }
        return safe;
    }
    const check = () => {
        for (let x = 1; x < queenCounts; x++) {
            for (let y = 0; y < queenCounts; y++) {
                const tryTimes = answers.length;
                for (let i = 0; i < tryTimes; i++) {
                    const plate = answers[i];
                    const status = checkPositionSafe(plate, x, y);
                    if (status) {
                        answers.push(clone(plate));
                        plate[x][y] = 'Q';
                    }
                }
            }
        }
    }
    check();
    answers = answers.filter((answer) => {
        const re = /Q/g;
        const flatAnswer = answer.flat();
        const str = flatAnswer.join('');
        const counts = ((str || '').match(re) || []).length;
        return counts === queenCounts;
    }).map((answer) => {
        return answer.flat().join('');
    });
    return answers;
}

console.log(main().length);
