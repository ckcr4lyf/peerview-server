const { execSync } = require('child_process');

const re = /[0-9A-Fa-f]{40}/;

module.exports = (req, res) => {

    const hash = req.params.hash;
    if (hash.length != 40){
        // console.log(`Hahs received: ${hash} of length ${hash.length}`)
        res.status(400).send();
        return;
    }

    if (!re.test(hash)){
        res.status(400).send();
        return;
    }

    const command = process.env.TS_PATH + ' ' + hash + ' -a | sort | uniq';
    console.log(`Executing query ${hash} for ${req.ip}`);

    try {
        const result = execSync(command);
        // console.log(result)
        res.status(200).send(result.toString());
    } catch (error){
        res.status(500).send();
    }

}