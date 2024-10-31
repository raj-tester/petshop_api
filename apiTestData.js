//we will use this as a data repository to store different types of data as per our business requirements


exports.createPet = {
    "id": 90,
    "category": {
      "id": 10,
      "name": ""
    },
    "name": "big dog",
    "photoUrls": [
      "www.str.com"
    ],
    "tags": [
      {
        "id": 11,
        "name": "p1"
      }
    ],
    "status": "available"
  }

  exports.invalidinput = {
    "id": "abccc",
    "category": {
      "id": "xx",
      "name": 12233
    },
    "name": "big dog",
    "photoUrls": [
      "www.str.com"
    ],
    "tags": [
      {
        "id": 11,
        "name": "p1"
      }
    ],
    "status": ""
  }

  exports.editPet = {
    "id": 90,
    "category": {
      "id": 10,
      "name": ""
    },
    "name": "big dog",
    "photoUrls": [
      "www.str.com"
    ],
    "tags": [
      {
        "id": 11,
        "name": "p1"
      }
    ],
    "status": "pending"
  }