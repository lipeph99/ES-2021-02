[
  {
    "id": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
    "template": "start",
    "kind": 0,
    "info": {
      "title": "Start",
      "hookName": "Start",
      "parameters": []
    },
    "hookId": "2df01bb1-37f1-47c2-ae70-a08ba5af23fe",
    "x": -666.4903,
    "y": 200,
    "input": [],
    "output": [
      {
        "id": "1be40c36-897a-45eb-8c39-93c68d825c53",
        "parentId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
        "name": "default",
        "__ignoreParser": true,
        "to": [
          {
            "id": "f5c1aa69-c96f-4405-8ba1-d40c948a4bcd",
            "pieceId": "6bf59790-067d-4ae8-8578-4a6252f1b759",
            "inputId": "cac705a0-49ef-41bb-808c-c42c6c077f32"
          }
        ]
      }
    ]
  },
  {
    "id": "a2a90c5a-9e7d-4dd3-8d73-a35f1cfd7238",
    "template": "end",
    "kind": 2,
    "info": {
      "title": "End",
      "hookName": "End"
    },
    "hookId": "0253cc0d-1bb9-4c2c-abc3-4ae343301ad8",
    "x": 1376.3,
    "y": 231.5097,
    "input": [
      {
        "id": "d4aa3164-a0fa-4a35-bdfa-b673a4b34633",
        "parentId": "a2a90c5a-9e7d-4dd3-8d73-a35f1cfd7238",
        "name": "default",
        "__ignoreParser": true
      }
    ],
    "output": []
  },
  {
    "id": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "currentUser",
      "hookName": "currentUser",
      "template": {}
    },
    "hookId": "1cdf25af-af0e-48c4-b75c-1ba9f392bf11",
    "x": 72.4059,
    "y": 220.1474,
    "input": [
      {
        "id": "aec51b0a-450f-4506-bec4-6070ec3a0ca0",
        "parentId": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
        "name": "default",
        "__ignoreParser": true,
        "object": {}
      }
    ],
    "output": [
      {
        "id": "bfb68212-1c1c-48a5-88ea-925ba94982da",
        "parentId": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "25c83080-b7df-443f-9926-1ec6e13aaa84",
            "pieceId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
            "inputId": "44ea191b-15a2-4384-b013-5a18890b9f60"
          }
        ]
      }
    ]
  },
  {
    "id": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Info Usuario",
      "hookName": "Find One Where",
      "template": {
        "data": {
          "$op": "$and",
          "userId": "output:bfb68212-1c1c-48a5-88ea-925ba94982da:id"
        },
        "model": "6fb9f3ce-e5a5-41a6-9e0b-80a9a546f39f",
        "config": {
          "raw": false,
          "include": [],
          "allowWhere": true
        }
      }
    },
    "hookId": "930d2caa-65d7-4ced-96b7-268ce6f69ba0",
    "x": 411.4477,
    "y": 173.3495,
    "input": [
      {
        "id": "44ea191b-15a2-4384-b013-5a18890b9f60",
        "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": {
            "$op": "$and",
            "doc": "output:d334e5ff-a009-4312-bd8d-bcddb3aebbe7:doc",
            "userid": "output:bfb68212-1c1c-48a5-88ea-925ba94982da:id"
          },
          "model": "6fb9f3ce-e5a5-41a6-9e0b-80a9a546f39f",
          "config": {
            "raw": false,
            "include": [],
            "allowWhere": true
          }
        }
      }
    ],
    "output": [
      {
        "id": "0924e131-d535-41bf-87c7-19bbb6b8ff69",
        "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
        "name": "isAdmin",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": [
            {
              "valueA": "output:0924e131-d535-41bf-87c7-19bbb6b8ff69:data.kind",
              "valueB": "0",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
                "outputId": "0924e131-d535-41bf-87c7-19bbb6b8ff69",
                "portName": "Info Usuario",
                "customPath": "data.kind",
                "outputName": "isAdmin",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "0",
                "isCustomValue": true
              }
            }
          ]
        },
        "to": [
          {
            "id": "8959f206-e5aa-43c6-a66f-cc706b69e3c7",
            "pieceId": "41cf8d25-82d2-4ada-8cb5-b6f7623757d6",
            "inputId": "b5c2a5dd-f78b-4e14-b689-c36bbdde6de9"
          }
        ]
      },
      {
        "id": "4df28260-483c-4ea5-be7e-824ed995c02f",
        "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
        "name": "else",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": [
            {
              "conditionKind": 21
            }
          ]
        },
        "to": [
          {
            "id": "d47dac8a-534b-400e-886d-50ce29ee9fb2",
            "pieceId": "d461e313-a0aa-4e92-a4ad-d3fda0407722",
            "inputId": "cddc7e04-3c58-4090-9fe1-cb83a06e25b4"
          }
        ]
      }
    ]
  },
  {
    "id": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Create Usuario",
      "hookName": "Create or Update",
      "template": {
        "data": {
          "corpo": "output:1be40c36-897a-45eb-8c39-93c68d825c53:corpo",
          "titulo": "output:1be40c36-897a-45eb-8c39-93c68d825c53:titulo",
          "responsavel": "output:0924e131-d535-41bf-87c7-19bbb6b8ff69:id"
        },
        "model": "2ec32c29-19e2-42f3-a73f-85234bc5e5f0",
        "config": {
          "raw": false,
          "include": []
        }
      }
    },
    "hookId": "086edb82-9697-4522-875d-73001a1ee931",
    "x": 1059.6201,
    "y": 221.3142,
    "input": [
      {
        "id": "e6ff54bb-8def-4bb3-af55-976b7fc0f6c4",
        "parentId": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": {
            "kind": "output:1be40c36-897a-45eb-8c39-93c68d825c53:kind",
            "nome": "output:1be40c36-897a-45eb-8c39-93c68d825c53:nome",
            "email": "output:1be40c36-897a-45eb-8c39-93c68d825c53:email",
            "userid": "output:49bbaca8-19e6-462a-8fcd-d16b7e89a810:",
            "celular": "output:1be40c36-897a-45eb-8c39-93c68d825c53:tel",
            "document": "output:d334e5ff-a009-4312-bd8d-bcddb3aebbe7:doc"
          },
          "model": "6fb9f3ce-e5a5-41a6-9e0b-80a9a546f39f",
          "config": {
            "raw": false,
            "include": []
          }
        }
      }
    ],
    "output": [
      {
        "id": "ebd1c3df-b9b7-468f-98d2-68ad1228901a",
        "parentId": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "a7485ca6-2856-479f-a973-b4ff8f894467",
            "pieceId": "a2a90c5a-9e7d-4dd3-8d73-a35f1cfd7238",
            "inputId": "d4aa3164-a0fa-4a35-bdfa-b673a4b34633"
          }
        ]
      }
    ]
  },
  {
    "id": "d461e313-a0aa-4e92-a4ad-d3fda0407722",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Usuario Nao Eh Admin",
      "hookName": "Throw",
      "template": {}
    },
    "hookId": "f4dcc6e7-e881-45c5-9219-199af40af7c2",
    "x": 746.9905,
    "y": 305.1028,
    "input": [
      {
        "id": "cddc7e04-3c58-4090-9fe1-cb83a06e25b4",
        "parentId": "d461e313-a0aa-4e92-a4ad-d3fda0407722",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": "Apenas admins podem cadastrar novos usuarios"
        }
      }
    ],
    "output": []
  },
  {
    "id": "41cf8d25-82d2-4ada-8cb5-b6f7623757d6",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Register",
      "hookName": "Register",
      "template": {}
    },
    "hookId": "0ecd88d0-c7ed-4143-8b65-bdfde168e696",
    "x": 742.525,
    "y": 221.3569,
    "input": [
      {
        "id": "b5c2a5dd-f78b-4e14-b689-c36bbdde6de9",
        "parentId": "41cf8d25-82d2-4ada-8cb5-b6f7623757d6",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "kind": 0,
          "email": "output:1be40c36-897a-45eb-8c39-93c68d825c53:email",
          "active": true,
          "password": "output:1be40c36-897a-45eb-8c39-93c68d825c53:password",
          "username": "output:1be40c36-897a-45eb-8c39-93c68d825c53:email"
        }
      }
    ],
    "output": [
      {
        "id": "49bbaca8-19e6-462a-8fcd-d16b7e89a810",
        "parentId": "41cf8d25-82d2-4ada-8cb5-b6f7623757d6",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "37935e6d-9581-44c1-9546-11ef14c52ee7",
            "pieceId": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
            "inputId": "e6ff54bb-8def-4bb3-af55-976b7fc0f6c4"
          }
        ]
      }
    ]
  },
  {
    "id": "6bf59790-067d-4ae8-8578-4a6252f1b759",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Data not null",
      "hookName": "Dummy",
      "template": {}
    },
    "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
    "x": -563.8442,
    "y": 142.733,
    "input": [
      {
        "id": "cac705a0-49ef-41bb-808c-c42c6c077f32",
        "parentId": "6bf59790-067d-4ae8-8578-4a6252f1b759",
        "name": "default",
        "__ignoreParser": true,
        "object": {}
      }
    ],
    "output": [
      {
        "id": "160d614f-4180-46a2-86aa-93f19fb7c883",
        "parentId": "6bf59790-067d-4ae8-8578-4a6252f1b759",
        "name": "kind 1",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": [
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:kind",
              "valueB": "1",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "kind",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "\"1\"",
                "isCustomValue": true
              }
            }
          ]
        },
        "to": [
          {
            "id": "767fa186-b917-4f62-a14f-8a79a0874f49",
            "pieceId": "c9259908-4ece-43bc-8b64-04418a18fbd8",
            "inputId": "8075f193-c0df-42f3-80dd-26cdbaa0e403"
          }
        ]
      },
      {
        "id": "862d1e1f-e18c-4c6e-8169-77e1d1774c45",
        "parentId": "6bf59790-067d-4ae8-8578-4a6252f1b759",
        "name": "kind 2",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": [
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:kind",
              "valueB": "2",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "kind",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "\"2\"",
                "isCustomValue": true
              }
            }
          ]
        },
        "to": [
          {
            "id": "d34d3430-c67e-48c3-b869-50430e81f091",
            "pieceId": "6e6f774b-719f-4bae-a616-19532d216f10",
            "inputId": "e8203725-884d-4b29-bae9-ecdc35f51373"
          }
        ]
      },
      {
        "id": "9f463ab3-4c30-4519-84d9-85780b0946f9",
        "parentId": "6bf59790-067d-4ae8-8578-4a6252f1b759",
        "name": "else",
        "__ignoreParser": true,
        "condition": {
          "$op": "$or",
          "conditions": [
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:tel",
              "conditionKind": 2,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "tel",
                "outputName": "default",
                "isCustomValue": false
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:tel",
              "valueB": "",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "tel",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "trocar",
                "isCustomValue": true
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:kind",
              "conditionKind": 2,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "kind",
                "outputName": "default",
                "isCustomValue": false
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:kind",
              "valueB": "",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "kind",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "trocar",
                "isCustomValue": true
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:nome",
              "conditionKind": 2,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "nome",
                "outputName": "default",
                "isCustomValue": false
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:nome",
              "valueB": "",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "nome",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "trocar",
                "isCustomValue": true
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:email",
              "conditionKind": 2,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "email",
                "outputName": "default",
                "isCustomValue": false
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:email",
              "valueB": "",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "email",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "trocar",
                "isCustomValue": true
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:password",
              "conditionKind": 2,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "password",
                "outputName": "default",
                "isCustomValue": false
              }
            },
            {
              "valueA": "output:1be40c36-897a-45eb-8c39-93c68d825c53:",
              "valueB": "",
              "conditionKind": 3,
              "valueA_metadata": {
                "portId": "9b2a18d0-bdac-440d-8198-6a54b1eb26ea",
                "outputId": "1be40c36-897a-45eb-8c39-93c68d825c53",
                "portName": "Start",
                "customPath": "password",
                "outputName": "default",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "customaaa",
                "isCustomValue": true
              }
            }
          ]
        },
        "to": [
          {
            "id": "966ab8df-7ffc-4565-9d6a-98395f5299b2",
            "pieceId": "c4afa6ef-1606-45d2-b293-2570cd5d7afd",
            "inputId": "aafae74f-c8d2-49df-844d-bf641bf6d00f"
          }
        ]
      }
    ]
  },
  {
    "id": "c4afa6ef-1606-45d2-b293-2570cd5d7afd",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Missing Data",
      "hookName": "Throw",
      "template": {}
    },
    "hookId": "f4dcc6e7-e881-45c5-9219-199af40af7c2",
    "x": -248.1384,
    "y": 306.0292,
    "input": [
      {
        "id": "aafae74f-c8d2-49df-844d-bf641bf6d00f",
        "parentId": "c4afa6ef-1606-45d2-b293-2570cd5d7afd",
        "name": "default",
        "__ignoreParser": true
      }
    ],
    "output": []
  },
  {
    "id": "6e6f774b-719f-4bae-a616-19532d216f10",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "doc cpf",
      "hookName": "Dummy",
      "template": {}
    },
    "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
    "x": -248.8448,
    "y": 220.3646,
    "input": [
      {
        "id": "e8203725-884d-4b29-bae9-ecdc35f51373",
        "parentId": "6e6f774b-719f-4bae-a616-19532d216f10",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "doc": "output:1be40c36-897a-45eb-8c39-93c68d825c53:cpf"
        }
      }
    ],
    "output": [
      {
        "id": "e5e8f629-9e2c-495e-a764-d25eccdcabd2",
        "alias": "d334e5ff-a009-4312-bd8d-bcddb3aebbe7",
        "parentId": "6e6f774b-719f-4bae-a616-19532d216f10",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "64947c2f-de2a-4323-9b88-7a0b7e7cd355",
            "pieceId": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
            "inputId": "aec51b0a-450f-4506-bec4-6070ec3a0ca0"
          }
        ]
      }
    ]
  },
  {
    "id": "c9259908-4ece-43bc-8b64-04418a18fbd8",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "doc cnpj",
      "hookName": "Dummy",
      "template": {}
    },
    "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
    "x": -249.348,
    "y": 137.8944,
    "input": [
      {
        "id": "8075f193-c0df-42f3-80dd-26cdbaa0e403",
        "parentId": "c9259908-4ece-43bc-8b64-04418a18fbd8",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "doc": "output:1be40c36-897a-45eb-8c39-93c68d825c53:cnpj"
        }
      }
    ],
    "output": [
      {
        "id": "7ab3ebf1-21fc-48ba-8eb3-3a70c809688b",
        "alias": "d334e5ff-a009-4312-bd8d-bcddb3aebbe7",
        "parentId": "c9259908-4ece-43bc-8b64-04418a18fbd8",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "69b9ae28-ffc1-4e33-9a25-0bcad813454b",
            "pieceId": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
            "inputId": "aec51b0a-450f-4506-bec4-6070ec3a0ca0"
          }
        ]
      }
    ]
  }
]