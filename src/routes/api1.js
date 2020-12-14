const api = require('express').Router();

api.get('test', (req, res) => {
  res.json({
    code: 200,
    message: "接口测试成功"
  })
})

module.exports = api;
