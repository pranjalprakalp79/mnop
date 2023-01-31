require("dotenv").config();

module.exports = function(app) {
  app.dataSources.testdb.automigrate('template', function(err) {
    if (err) throw err;
    app.models.template.create([{  
      "idnum": "10",
      "text": "wappy",
      "created_by": "a",
      "created_at": "20",
      "updated_at": "2023"
      }, 
      {
      
          "idnum": "12",
          "text": "no-pro",
          "created_by": "b",
          "created_at": "202",
          "updated_at": "2023"
      }
    ], 
    function(err, templates) {
      if (err) throw err;

      console.log('Models created: \n', templates);
    });
  });
};