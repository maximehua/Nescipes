import React from 'react';

const DB = (props) => {
  var options = {
  database: 'heroku_8dfwxvpz',
  collectionName: 'recipes',
  query: '{ "key": "value" }'
  };
  return (
    mLab.listDocuments(options, function (err, data) {
      console.log(data); //=> [ { _id: 1234, ...  } ]
    })
  )
}
