module.exports = (req, res) => res.render(req.params[0].replace(/\.html$/, ''));
