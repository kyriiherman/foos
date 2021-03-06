define({ "api": [
  {
    "type": "post",
    "url": "/game",
    "title": "Start a new Random Game",
    "group": "Game",
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Game",
    "name": "PostGame"
  },
  {
    "type": "post",
    "url": "/game/finish",
    "title": "Finish the current Game",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>Winner team: &quot;team1&quot; or &quot;team2&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Game",
    "name": "PostGameFinish"
  },
  {
    "type": "post",
    "url": "/game/next",
    "title": "Start the next Game",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>Winner team: &quot;team1&quot; or &quot;team2&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Game",
    "name": "PostGameNext"
  },
  {
    "type": "get",
    "url": "/players",
    "title": "Get list of registered Players",
    "group": "Players",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": "<p>List of Players</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "players.id",
            "description": "<p>Player ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.name",
            "description": "<p>Player name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Players",
    "name": "GetPlayers"
  },
  {
    "type": "post",
    "url": "/players",
    "title": "Register a new Player",
    "group": "Players",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Player name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Players",
    "name": "PostPlayers"
  },
  {
    "type": "delete",
    "url": "/room/players/:id",
    "title": "Remove Player from Room",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Player ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Room",
    "name": "DeleteRoomPlayersId"
  },
  {
    "type": "get",
    "url": "/room",
    "title": "Get room status",
    "group": "Room",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Player[]",
            "optional": false,
            "field": "queue",
            "description": "<p>Players queue</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "queue.id",
            "description": "<p>Player ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "queue.name",
            "description": "<p>Player name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "game",
            "description": "<p>Game state</p>"
          },
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "game.team1",
            "description": "<p>First Team</p>"
          },
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "game.team2",
            "description": "<p>Second Team</p>"
          },
          {
            "group": "Success 200",
            "type": "Player",
            "optional": false,
            "field": "game.team1.goalkeeper",
            "description": "<p>Goalkeeper of the first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Player",
            "optional": false,
            "field": "game.team1.forward",
            "description": "<p>Forward of the first team</p>"
          },
          {
            "group": "Success 200",
            "type": "Player",
            "optional": false,
            "field": "game.team2.goalkeeper",
            "description": "<p>Goalkeeper of the second team</p>"
          },
          {
            "group": "Success 200",
            "type": "Player",
            "optional": false,
            "field": "game.team2.forward",
            "description": "<p>Forward of the second team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Room",
    "name": "GetRoom"
  },
  {
    "type": "post",
    "url": "/room/players",
    "title": "Add player to the room",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Room",
    "name": "PostRoomPlayers"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_yanzay_projects_foos_server_doc_main_js",
    "groupTitle": "_home_yanzay_projects_foos_server_doc_main_js",
    "name": ""
  }
] });
