import Pool from "./Database.ts"

const execute = (Query: string, BindValues: string | number | (string | number)[] | undefined) => {
    return new Promise((resolve, reject) => {
        Pool.query(Query, BindValues, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        })
    })
};

export default execute;