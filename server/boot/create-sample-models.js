
module.exports = function(app) {
  app.dataSources.testdb.automigrate('template', function(err) {
    if (err) throw err;
    app.models.template.create([{  
      "idnum": "10",
      "text": "wappy",
      "created-by": "a",
      "created-at": "20",
      "updated-at": "2023"
      }, 
      {
      
          "idnum": "12",
          "text": "no-pro",
          "created-by": "b",
          "created-at": "202",
          "updated-at": "2023"
      }
    ], 
    function(err, templates) {
      if (err) throw err;

      console.log('Models created: \n', templates);
    });
  });
};