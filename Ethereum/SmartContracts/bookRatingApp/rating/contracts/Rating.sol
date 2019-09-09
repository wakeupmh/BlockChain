pragma solidity >=0.4.21 <0.6.0;
// We have to specify what version of compiler this code will compile with

contract Rating {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint8) public ratingsReceived;
  
  /* We will use an array of bytes32 to store the list of books
  */
  
  bytes32[] public bookList;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of books for which users will give ratings
  */
  constructor(bytes32[] memory bookNames) public {
    bookList = bookNames;
  }

  // This function returns the total ratings a book has received so far
  function totalVotesFor(bytes32 book) view public returns (uint8) {
    return ratingsReceived[book];
  }

  // This function increments the vote count for the specified book. Equivalent to upvoting
  function voteForBook(bytes32 book) public {
    ratingsReceived[book] += 1;
  }
}