function User(spec) {
  var self = {
    firstName: spec.firstName;
  }
  return self;
}

//  error
console.log('hello');

function Error(spec) {
  var self = {
    message: spec.message,
    toString: function() {
      return spec.message;
    }
  };

  return self;
}

function User(spec) {
  if(!spec) {
    throw Error({ message: 'spec is undefined' });
  }

  var self = {
    firstName: spec.firstName
  };

  return self;
}

 // error

try {

} catch(ex) {
  // ex will catch whatever error you throw


} finally {
  // this will run whether there was an exception whether or not it runs

}



// var u = User();

// the above throws an error... this belongs particularly in entry
// positions where you receive data from a user or database
