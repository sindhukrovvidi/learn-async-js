const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


async function sumRow(row) {
    if (!Array.isArray(row)) {
        throw new Error('BAD INPUT: Expected array as input');
    }
    
    const rowSum = row.reduce((acc, curr) => acc + curr, 0);
    return rowSum;
}

async function sumAllRows(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('BAD INPUT: Expected array as input');
    }

    let totalSum = 0;

    for (const row of arr) {
        try {
            const rowSum = await sumRow(row);
            totalSum += rowSum;
        } catch (error) {
            console.error('Error in sumRow:', error);
        }
    }

    return totalSum;
}


async function main() {
    try {
        const sum = await sumAllRows(array2D);
        console.log('Total sum:', sum);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();