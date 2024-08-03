import Text "mo:base/Text";
import Bool "mo:base/Bool";

actor Login {

  var username : Text = "Gabriel";
  var password : Text = "1234";

  public func log(u : Text, p : Text) : async Bool {
    if (u == username) {
      if (p == password) {
        return true;
      } else {
        return false;
      };
    } else {
      return false;
    };
  };

  // public query func greet(name : Text) : async Text {
  //   return "Hello, " # name # "!";
  // };
};
