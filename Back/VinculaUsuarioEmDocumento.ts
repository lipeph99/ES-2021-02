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
      "x": 0,
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
              "id": "fcaeff00-17fb-4937-b0e9-4b3cd2684884",
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
      "x": 1068.9473,
      "y": 200,
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
      "x": 84.5019,
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
              "id": "c5c5d6b6-75fa-402a-9d8e-86213f862631",
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
              "id": "output:1be40c36-897a-45eb-8c39-93c68d825c53:docId",
              "$op": "$and"
            },
            "model": "2ec32c29-19e2-42f3-a73f-85234bc5e5f0",
            "config": {
              "raw": false,
              "include": [
                {
                  "as": "responsavel",
                  "where": {
                    "userId": "output:bfb68212-1c1c-48a5-88ea-925ba94982da:id"
                  },
                  "required": true,
                  "tableName": "usuario"
                }
              ],
              "allowWhere": true,
              "allowInclude": true
            }
          }
        }
      ],
      "output": [
        {
          "id": "0924e131-d535-41bf-87c7-19bbb6b8ff69",
          "parentId": "82df5cf0-1db4-48b0-b921-f1374dfbfd58",
          "name": "isResponsavel",
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
                  "outputName": "isResponsavel",
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
              "id": "d1777a7e-ac48-4152-b7f5-23aeff8b1db5",
              "pieceId": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
              "inputId": "e6ff54bb-8def-4bb3-af55-976b7fc0f6c4"
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
              "id": "99067c45-e2eb-4e08-9bd4-0f042a3fa9ab",
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
        "title": "Create AssinaturaDocumento",
        "hookName": "Create or Update",
        "template": {
          "data": {
            "corpo": "output::corpo",
            "titulo": "output::titulo",
            "responsavel": "output::id"
          },
          "model": "2ec32c29-19e2-42f3-a73f-85234bc5e5f0",
          "config": {
            "raw": false,
            "include": []
          }
        }
      },
      "hookId": "086edb82-9697-4522-875d-73001a1ee931",
      "x": 741.4949,
      "y": 191.0742,
      "input": [
        {
          "id": "e6ff54bb-8def-4bb3-af55-976b7fc0f6c4",
          "parentId": "6ce23038-764a-4266-b2e3-b7ef72bf3638",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "data": {
              "status": "0",
              "usuarioId": "output:1be40c36-897a-45eb-8c39-93c68d825c53:usuarioId",
              "documentoId": "output:1be40c36-897a-45eb-8c39-93c68d825c53:documentoId"
            },
            "model": "885a1bf5-cb5f-4b78-8b8f-7fbdc820674f",
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
              "id": "4c3414ca-a40b-43f8-b1cc-3db9c252b9ad",
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
        "title": "Sem Autorizacao no Documento",
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
    }
  ]