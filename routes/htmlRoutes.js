const path = require("path");

module.exports = function(app) {
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  app.get("/exercise" , function(req,res){
      res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });


};
