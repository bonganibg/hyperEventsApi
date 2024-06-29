const { createDate, getDate, getDates, updateDate, deleteDate } = require("../services/date.service")

exports.createDate = async (req, res) => {
    const body = req.body;
    const result = await createDate(body);
    

    if (result.success){
        res.status(203).json({
            message: "Created date",
            id: result.id
        })
    } else{
        res.status(400).json({
            message: result.error
        })
    }
}

exports.getDate = async (req, res) => {
    const id = req.params.id;
    const result = await getDate(id);

    if (result.success){
        res.status(200).json(result.date)
    } else{
        res.status(400).json({
            message: result.error
        })
    }
}

exports.getDates = async (req, res) => {
    const result = await getDates();

    if (result.success){
        res.status(200).json(result.dates)
    } else{
        res.status(400).json({
            message: result.error 
        })
    }
}

exports.updateDate = async (req, res) => {
    const body = req.body;
    body.id = req.params.id;

    const result = await updateDate(body);

    if (result.success){
        res.status(200).json({
            message: "Upated Date"           
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}

exports.deleteDate = async (req, res) => {
    const id = req.params.id;
    const result = await deleteDate(id);

    if (result.success){
        res.status(200).json({
            message: "deleted date"
        })
    } else {
        res.status(400).json({
            message: result.error
        })
    }
}