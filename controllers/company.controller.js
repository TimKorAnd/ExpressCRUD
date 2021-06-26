let companyes = [
    {id: 0, name: "ONIX", employers: 301},
    {id: 1, name: "BANDA PIXEL", employers: 150},
    {id: 3, name: "EVNE", employers: 50},
];

exports.list = async(req, res, next)  => {
    console.log('list');
    res.status(200);
    res.json(companyes);
}

exports.findById = async(req, res, next) => {
    const id = +req.params.id;
    console.log(id);
    const obj = companyes.find(company => company.id === id );
    console.log(obj);
    res.status(200);
    res.json(obj);
}

exports.deleteById = async(req, res, next) => {
    const id = +req.params.id;
    companyes = companyes.filter((company) => company.id !== id );
    res.status(200);
    res.json(companyes);
}

exports.create = async(req, res, next) => {
    const newCompany = req.body;
    newCompany.id = companyes.length + 1;
    companyes.push(newCompany)
    res.status(201);
    res.json(companyes);
}

// update
