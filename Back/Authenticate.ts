[
    {
      "id": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
      "template": "start",
      "kind": 0,
      "info": {
        "title": "Start",
        "hookName": "Start",
        "parameters": []
      },
      "hookId": "2df01bb1-37f1-47c2-ae70-a08ba5af23fe",
      "x": -747.5335,
      "y": 195.1616,
      "input": [],
      "output": [
        {
          "id": "e33f3d97-a3ca-4c6f-8940-1aed61b0216b",
          "parentId": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
          "name": "default",
          "__ignoreParser": true,
          "to": [
            {
              "id": "f5745e72-78e5-461f-8a25-dffe61e26871",
              "pieceId": "4ff3ed85-a63b-4269-9e42-e0721b854bf5",
              "inputId": "dc86712e-00c8-4c4c-9f02-cfeb2afc6ef8"
            }
          ]
        }
      ]
    },
    {
      "id": "c0cfa4c6-6c7b-406e-8212-8e0cffd7dbe7",
      "template": "end",
      "kind": 2,
      "info": {
        "title": "End",
        "hookName": "End"
      },
      "hookId": "0253cc0d-1bb9-4c2c-abc3-4ae343301ad8",
      "x": 691.5517,
      "y": 191.5328,
      "input": [
        {
          "id": "73ccc81b-3e91-4cb5-984b-1959d673e006",
          "parentId": "c0cfa4c6-6c7b-406e-8212-8e0cffd7dbe7",
          "name": "default",
          "__ignoreParser": true
        }
      ],
      "output": []
    },
    {
      "id": "91e5994e-b4a5-4a9c-a02d-cf7083475ea2",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Authenticate",
        "hookName": "Authenticate",
        "template": {}
      },
      "hookId": "9845b850-ce51-41e3-9071-f9397ae65192",
      "x": 72.4059,
      "y": 182.6498,
      "input": [
        {
          "id": "26c03b4d-e367-4131-a3fd-1affe54588cc",
          "parentId": "91e5994e-b4a5-4a9c-a02d-cf7083475ea2",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "password": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:password",
            "username": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:email"
          }
        }
      ],
      "output": [
        {
          "id": "7d748798-5d56-4528-8053-e59d58efe327",
          "parentId": "91e5994e-b4a5-4a9c-a02d-cf7083475ea2",
          "name": "default",
          "__ignoreParser": true,
          "condition": {
            "$op": "$and",
            "conditions": []
          },
          "to": [
            {
              "id": "14befc7c-6614-423d-86e3-dc845ceb4b34",
              "pieceId": "95f3e4c7-2241-4d71-8cf5-e57589b9d91b",
              "inputId": "b4502106-357d-4a29-aebc-3d151e4859b3"
            }
          ]
        }
      ]
    },
    {
      "id": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Find Email",
        "hookName": "Find One Where",
        "template": {
          "data": {
            "$op": "$and",
            "email": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:email"
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
      "x": -252.9768,
      "y": 135.4753,
      "input": [
        {
          "id": "9fefe08f-f30e-4d0d-91b5-435132873a7a",
          "parentId": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "data": {
              "$op": "$and",
              "email": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:email"
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
          "id": "4cd08f43-4b0c-456c-83f1-d684561914d0",
          "parentId": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
          "name": "emailOK",
          "__ignoreParser": true,
          "condition": {
            "$op": "$and",
            "conditions": [
              {
                "valueA": "output:4cd08f43-4b0c-456c-83f1-d684561914d0:data",
                "conditionKind": 1,
                "valueA_metadata": {
                  "portId": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
                  "outputId": "4cd08f43-4b0c-456c-83f1-d684561914d0",
                  "portName": "Find Email",
                  "customPath": "data",
                  "outputName": "emailOK",
                  "isCustomValue": false
                }
              }
            ]
          },
          "to": [
            {
              "id": "a6864373-e2c8-47b3-878a-f1166ac5625f",
              "pieceId": "91e5994e-b4a5-4a9c-a02d-cf7083475ea2",
              "inputId": "26c03b4d-e367-4131-a3fd-1affe54588cc"
            }
          ]
        },
        {
          "id": "6d5da915-ae44-4621-9bc7-073af09ea223",
          "parentId": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
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
              "id": "c1abc789-3ec2-453b-97ec-65e77077799b",
              "pieceId": "0ed6e280-9aef-4f6c-b139-53b57e3be3b0",
              "inputId": "5ae9bab7-618a-4eb1-a9bc-0b474b3fe1a4"
            }
          ]
        }
      ]
    },
    {
      "id": "0ed6e280-9aef-4f6c-b139-53b57e3be3b0",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Email not found",
        "hookName": "Throw",
        "template": {}
      },
      "hookId": "f4dcc6e7-e881-45c5-9219-199af40af7c2",
      "x": 72.406,
      "y": 258.8547,
      "input": [
        {
          "id": "5ae9bab7-618a-4eb1-a9bc-0b474b3fe1a4",
          "parentId": "0ed6e280-9aef-4f6c-b139-53b57e3be3b0",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "data": "Email não encontrado"
          }
        }
      ],
      "output": []
    },
    {
      "id": "4ff3ed85-a63b-4269-9e42-e0721b854bf5",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Data not null",
        "hookName": "Dummy",
        "template": {}
      },
      "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
      "x": -620.6955,
      "y": 136.685,
      "input": [
        {
          "id": "dc86712e-00c8-4c4c-9f02-cfeb2afc6ef8",
          "parentId": "4ff3ed85-a63b-4269-9e42-e0721b854bf5",
          "name": "default",
          "__ignoreParser": true,
          "object": {}
        }
      ],
      "output": [
        {
          "id": "2eb8194f-b719-45bb-80c8-45bd2dd91d63",
          "parentId": "4ff3ed85-a63b-4269-9e42-e0721b854bf5",
          "name": "default",
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
              "id": "af088bd0-4d17-4289-bf43-6fa4a2d189dc",
              "pieceId": "bbf5174b-7633-44d5-bd9f-533d50203fe3",
              "inputId": "9fefe08f-f30e-4d0d-91b5-435132873a7a"
            }
          ]
        },
        {
          "id": "31d25d4c-b13c-499d-bff3-c9c52bda68f3",
          "parentId": "4ff3ed85-a63b-4269-9e42-e0721b854bf5",
          "name": "missing data",
          "__ignoreParser": true,
          "condition": {
            "$op": "$or",
            "conditions": [
              {
                "valueA": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:email",
                "conditionKind": 2,
                "valueA_metadata": {
                  "portId": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
                  "outputId": "e33f3d97-a3ca-4c6f-8940-1aed61b0216b",
                  "portName": "Start",
                  "customPath": "email",
                  "outputName": "default",
                  "isCustomValue": false
                }
              },
              {
                "valueA": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:password",
                "conditionKind": 2,
                "valueA_metadata": {
                  "portId": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
                  "outputId": "e33f3d97-a3ca-4c6f-8940-1aed61b0216b",
                  "portName": "Start",
                  "customPath": "password",
                  "outputName": "default",
                  "isCustomValue": false
                }
              },
              {
                "valueA": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:email",
                "valueB": "",
                "conditionKind": 3,
                "valueA_metadata": {
                  "portId": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
                  "outputId": "e33f3d97-a3ca-4c6f-8940-1aed61b0216b",
                  "portName": "Start",
                  "customPath": "email",
                  "outputName": "default",
                  "isCustomValue": false
                },
                "valueB_metadata": {
                  "customPath": "editar",
                  "isCustomValue": true
                }
              },
              {
                "valueA": "output:e33f3d97-a3ca-4c6f-8940-1aed61b0216b:password",
                "valueB": "",
                "conditionKind": 3,
                "valueA_metadata": {
                  "portId": "3a548685-a601-479a-9f92-0ecddcd1a3fb",
                  "outputId": "e33f3d97-a3ca-4c6f-8940-1aed61b0216b",
                  "portName": "Start",
                  "customPath": "password",
                  "outputName": "default",
                  "isCustomValue": false
                },
                "valueB_metadata": {
                  "customPath": "editar",
                  "isCustomValue": true
                }
              }
            ]
          },
          "to": [
            {
              "id": "b1e7fae3-b997-4a1c-b656-70583a678451",
              "pieceId": "4c669ffd-bcc1-445f-8c38-6257ad810322",
              "inputId": "6c5c2e53-7a2e-43ce-af69-c0d6baab7aef"
            }
          ]
        }
      ]
    },
    {
      "id": "4c669ffd-bcc1-445f-8c38-6257ad810322",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Missing some data",
        "hookName": "Throw",
        "template": {}
      },
      "hookId": "f4dcc6e7-e881-45c5-9219-199af40af7c2",
      "x": -251.7671,
      "y": 287.8851,
      "input": [
        {
          "id": "6c5c2e53-7a2e-43ce-af69-c0d6baab7aef",
          "parentId": "4c669ffd-bcc1-445f-8c38-6257ad810322",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "data": "Falta preencher algum campo"
          }
        }
      ],
      "output": []
    },
    {
      "id": "95f3e4c7-2241-4d71-8cf5-e57589b9d91b",
      "template": "default",
      "kind": 1,
      "info": {
        "title": "Filter user data output",
        "hookName": "Dummy",
        "template": {}
      },
      "hookId": "5a60f96e-5be5-46f4-a9fc-500c2d7ca6b3",
      "x": 379.6446,
      "y": 182.6498,
      "input": [
        {
          "id": "b4502106-357d-4a29-aebc-3d151e4859b3",
          "parentId": "95f3e4c7-2241-4d71-8cf5-e57589b9d91b",
          "name": "default",
          "__ignoreParser": true,
          "object": {
            "data": "output:4cd08f43-4b0c-456c-83f1-d684561914d0:data",
            "token": "output:7d748798-5d56-4528-8053-e59d58efe327:"
          }
        }
      ],
      "output": [
        {
          "id": "b59651f1-076b-4cb8-98a4-84a36e881afa",
          "parentId": "95f3e4c7-2241-4d71-8cf5-e57589b9d91b",
          "name": "default",
          "__ignoreParser": true,
          "condition": {
            "$op": "$and",
            "conditions": []
          },
          "to": [
            {
              "id": "2030e622-ec27-4c2a-ba31-771042a181bc",
              "pieceId": "c0cfa4c6-6c7b-406e-8212-8e0cffd7dbe7",
              "inputId": "73ccc81b-3e91-4cb5-984b-1959d673e006"
            }
          ]
        }
      ]
    }
  ]