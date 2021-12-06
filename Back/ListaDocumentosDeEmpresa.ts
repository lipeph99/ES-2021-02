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
    "x": 6.048,
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
            "id": "3219424b-994d-4527-baa5-f401c2c16463",
            "pieceId": "9248bad0-0af9-40d5-ae88-e21c54ba5482",
            "inputId": "aec51b0a-450f-4506-bec4-6070ec3a0ca0"
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
    "x": 1362.7319,
    "y": 202.5746,
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
    "x": 86.9211,
    "y": 191.117,
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
            "id": "4cacb2ea-4bf1-4312-82fc-40e15bd46836",
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
    "x": 409.0285,
    "y": 143.1095,
    "input": [
      {
        "id": "44ea191b-15a2-4384-b013-5a18890b9f60",
        "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": {
            "$op": "$and",
            "kind": "1",
            "userid": "output:bfb68212-1c1c-48a5-88ea-925ba94982da:id"
          },
          "model": "6fb9f3ce-e5a5-41a6-9e0b-80a9a546f39f",
          "config": {
            "raw": false,
            "include": [],
            "allowWhere": true,
            "allowInclude": false
          }
        }
      }
    ],
    "output": [
      {
        "id": "0924e131-d535-41bf-87c7-19bbb6b8ff69",
        "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
        "name": "isUsuario",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": [
            {
              "valueA": "output:0924e131-d535-41bf-87c7-19bbb6b8ff69:data",
              "valueB": "2",
              "conditionKind": 1,
              "valueA_metadata": {
                "portId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
                "outputId": "0924e131-d535-41bf-87c7-19bbb6b8ff69",
                "portName": "Info Usuario",
                "customPath": "data",
                "outputName": "isEmpresa",
                "isCustomValue": false
              },
              "valueB_metadata": {
                "customPath": "2",
                "isCustomValue": true
              }
            }
          ]
        },
        "to": [
          {
            "id": "b2ec473a-7805-4c7b-aa46-418868f4305e",
            "pieceId": "eeb2ae6f-9d11-4667-99d0-c872fdf58efe",
            "inputId": "96e50bab-81ae-452b-90c1-5617dde1bbad"
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
            "id": "99427247-9cf1-46ba-9ce7-004ab6f1d3e7",
            "pieceId": "d461e313-a0aa-4e92-a4ad-d3fda0407722",
            "inputId": "cddc7e04-3c58-4090-9fe1-cb83a06e25b4"
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
      "title": "Nao Eh Empresa",
      "hookName": "Throw",
      "template": {}
    },
    "hookId": "f4dcc6e7-e881-45c5-9219-199af40af7c2",
    "x": 742.1521,
    "y": 271.234,
    "input": [
      {
        "id": "cddc7e04-3c58-4090-9fe1-cb83a06e25b4",
        "parentId": "d461e313-a0aa-4e92-a4ad-d3fda0407722",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": "Sem autorização para adicionar usuarios nesse documento"
        }
      }
    ],
    "output": []
  },
  {
    "id": "eeb2ae6f-9d11-4667-99d0-c872fdf58efe",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Find All Contratos",
      "hookName": "Find All",
      "template": {
        "data": {
          "$op": "$and",
          "usuarioId": "output:0924e131-d535-41bf-87c7-19bbb6b8ff69:id"
        },
        "model": "885a1bf5-cb5f-4b78-8b8f-7fbdc820674f",
        "config": {
          "raw": false,
          "include": [],
          "allowWhere": true
        }
      }
    },
    "hookId": "d3aaa6ff-9718-43a6-97b1-ee690c402d3d",
    "x": 742.7283,
    "y": 192.3266,
    "input": [
      {
        "id": "96e50bab-81ae-452b-90c1-5617dde1bbad",
        "parentId": "eeb2ae6f-9d11-4667-99d0-c872fdf58efe",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": {
            "$op": "$and",
            "responsavelid": "output:0924e131-d535-41bf-87c7-19bbb6b8ff69:data.id"
          },
          "model": "2ec32c29-19e2-42f3-a73f-85234bc5e5f0",
          "config": {
            "raw": false,
            "include": [],
            "allowWhere": true,
            "allowInclude": false
          }
        }
      }
    ],
    "output": [
      {
        "id": "e9cbe947-db7a-44c5-93d3-40441c5027bb",
        "parentId": "eeb2ae6f-9d11-4667-99d0-c872fdf58efe",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "34900283-6606-4a33-a091-e61dff0816cb",
            "pieceId": "fa436069-cf7d-4c4d-bfcd-bf7750ff96e7",
            "inputId": "ff555b4a-a1fb-4605-9519-36cd58fb29e9"
          }
        ]
      }
    ]
  },
  {
    "id": "fa436069-cf7d-4c4d-bfcd-bf7750ff96e7",
    "template": "default",
    "kind": 1,
    "info": {
      "title": "Filtra Dados",
      "hookName": "Dummy",
      "template": {}
    },
    "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
    "x": 1053.4954,
    "y": 193.2966,
    "input": [
      {
        "id": "ff555b4a-a1fb-4605-9519-36cd58fb29e9",
        "parentId": "fa436069-cf7d-4c4d-bfcd-bf7750ff96e7",
        "name": "default",
        "__ignoreParser": true,
        "object": {
          "data": "output:e9cbe947-db7a-44c5-93d3-40441c5027bb:data"
        }
      }
    ],
    "output": [
      {
        "id": "56d5c384-9282-4cbb-bd01-f4b4e1de9487",
        "parentId": "fa436069-cf7d-4c4d-bfcd-bf7750ff96e7",
        "name": "default",
        "__ignoreParser": true,
        "condition": {
          "$op": "$and",
          "conditions": []
        },
        "to": [
          {
            "id": "b0d6cf05-2cec-4051-9b71-f9be0e293bd5",
            "pieceId": "a2a90c5a-9e7d-4dd3-8d73-a35f1cfd7238",
            "inputId": "d4aa3164-a0fa-4a35-bdfa-b673a4b34633"
          }
        ]
      }
    ]
  }
]